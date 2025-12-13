// src/server.js
import express from "express";
import path from "path";
// import cors from "cors";   <-- removed (we'll use manual CORS)
import { serve } from "inngest/express";
import { clerkMiddleware } from "@clerk/express";

import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import { inngest, functions } from "./lib/inngest.js";

import chatRoutes from "./routes/chatRoutes.js";
import sessionRoute from "./routes/sessionRoute.js";

const app = express();
const __dirname = path.resolve();

// If behind a reverse proxy (Render, Vercel, etc) enable trust proxy so req.protocol is accurate
app.set("trust proxy", true);

// Simple request logging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

app.use(express.json());

// --- Build allowed origins from ENV.CLIENT_URLS or ENV.CLIENT_URL ---
const raw = (ENV.CLIENT_URLS || ENV.CLIENT_URL || "").toString().trim();
let allowedOrigins = [];

if (raw) {
  try {
    allowedOrigins = raw.startsWith("[")
      ? JSON.parse(raw)
      : raw.split(",").map(s => s.trim()).filter(Boolean);
  } catch (err) {
    allowedOrigins = raw.split(",").map(s => s.trim()).filter(Boolean);
  }
}

// Always include localhost dev origin if not present
const defaultLocal = "http://localhost:5173";
if (!allowedOrigins.includes(defaultLocal)) allowedOrigins.push(defaultLocal);

// Normalize entries (remove trailing slashes) for reliable comparisons
allowedOrigins = allowedOrigins.map(o => o.replace(/\/+$/, ""));

// Log allowed origins for debugging
console.log("Allowed origins:", allowedOrigins);

// --- Manual CORS middleware (robust and allows same-host requests) ---
app.use((req, res, next) => {
  const origin = req.headers.origin;

  // If there's no origin header (curl/postman/same-origin non-browser), allow by default
  if (!origin) return next();

  const normalizedOrigin = origin.replace(/\/+$/, "");
  // Derive server origin from request (works behind proxies when trust proxy=true)
  const serverOrigin = `${req.protocol}://${req.get("host")}`.replace(/\/+$/, "");

  // Allow if in allowlist OR if origin equals the server's own origin
  if (allowedOrigins.includes(normalizedOrigin) || normalizedOrigin === serverOrigin) {
    res.setHeader("Access-Control-Allow-Origin", normalizedOrigin);
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    if (req.method === "OPTIONS") return res.sendStatus(204);
    return next();
  }

  // Otherwise block and log
  console.warn(`CORS blocked origin ${origin}`);
  return res.status(403).send("CORS policy: origin not allowed");
});

// Clerk middleware and routes
app.use(clerkMiddleware());

// API Routes
app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/chat", chatRoutes);
app.use("/api/sessions", sessionRoute);

// Health & test endpoints
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    timestamp: new Date().toISOString(),
    environment: ENV.NODE_ENV,
    routes: ["/api/chat", "/api/sessions", "/api/inngest"]
  });
});

app.get("/api/test", (req, res) => {
  res.status(200).json({ message: "API is working without auth" });
});

app.get("/api/test-protected", (req, res) => {
  console.log("Auth header:", req.headers.authorization);
  res.status(200).json({ message: "Protected route is working" });
});

// Serve frontend in production without path-to-regexp '*' issues
if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  // Catch-all for client-side routing: serve index.html for GETs not under /api/
  app.use((req, res, next) => {
    if (req.method === "GET" && !req.path.startsWith("/api/")) {
      return res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    }
    next();
  });
}

// Start server
const startServer = async () => {
  try {
    await connectDB();
    const port = ENV.PORT || 3000;
    app.listen(port, () => console.log("Server is running on port:", port));
  } catch (error) {
    console.error("💥 Error starting the server", error);
    process.exit(1);
  }
};

startServer();
