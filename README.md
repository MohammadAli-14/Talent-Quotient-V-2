# Talent Quotient V2

<div align="center">
  

**A collaborative coding platform with real-time video calls, pair programming, and multi-language code execution**

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Available-green?style=for-the-badge)](https://your-deployment-link.com)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)

</div>

## 🚀 Features

### 💻 Real-time Collaboration
- **Live Code Editor** - Multi-user code editing with syntax highlighting
- **Video Conferencing** - Built-in video/audio calls with screen sharing
- **Text Chat** - Real-time messaging during sessions
- **Code Execution** - Run code in 8+ programming languages instantly

### 📚 Learning Resources
- **Problem Bank** - Curated coding challenges with varying difficulty
- **Multiple Languages** - Support for JavaScript, Python, Java, C++, C, PHP, and more
- **Session History** - Track your coding sessions and progress

### 🔧 Developer Experience
- **Monorepo Structure** - Unified development setup
- **Modern Stack** - React 18, Vite, Tailwind CSS, Express, MongoDB
- **Responsive Design** - Works on desktop and tablet
- **Real-time Updates** - WebSocket-based synchronization

## 🏗️ Architecture

```
Talent-Quotient-V-2/
├── 📁 backend/                    # Node.js Express API Server
│   ├── src/
│   │   ├── controllers/          # Business logic handlers
│   │   ├── models/               # MongoDB schemas (User, Session)
│   │   ├── routes/               # API endpoints
│   │   ├── middleware/           # Auth & validation
│   │   └── lib/                  # Database & service configs
│   └── package.json
├── 📁 frontend/                  # React Vite Application
│   ├── src/
│   │   ├── components/           # Reusable UI components
│   │   ├── pages/                # Route pages
│   │   ├── hooks/                # Custom React hooks
│   │   ├── lib/                  # API clients & utilities
│   │   └── data/                 # Static problem data
│   └── vite.config.js
└── 📁 package.json               # Root monorepo configuration
```

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Frontend** | React 18, Vite, Tailwind CSS, Axios, React Router |
| **Backend** | Node.js, Express.js, MongoDB, Mongoose, JWT |
| **Real-time** | Socket.IO, Stream Video SDK, WebRTC |
| **Code Execution** | Piston API (Supports 8+ languages) |
| **Deployment** | Docker, Nginx (optional) |

## 📦 Prerequisites

- **Node.js** (v18 or higher)
- **MongoDB** (Local or Atlas)
- **npm** or **yarn**
- **Stream.io Account** (for video calls)

## ⚡ Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/MohammadAli-14/Talent-Quotient-V-2.git
cd Talent-Quotient-V-2
```

### 2. Install Dependencies
```bash
# Install root dependencies (concurrently for monorepo)
npm install

# Or install separately
cd backend && npm install
cd ../frontend && npm install
```

### 3. Environment Setup

**Backend Environment** (`backend/.env`):
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/talent-quotient
JWT_SECRET=your-super-secret-jwt-key-change-this
STREAM_API_KEY=your-stream-api-key
STREAM_API_SECRET=your-stream-api-secret
CLIENT_URL=http://localhost:5173
NODE_ENV=development
```

**Frontend Environment** (`frontend/.env`):
```env
VITE_API_URL=http://localhost:5000
VITE_STREAM_API_KEY=your-stream-api-key
VITE_APP_NAME=Talent Quotient V2
```

### 4. Get Stream.io Credentials
1. Sign up at [Stream.io](https://getstream.io/)
2. Create a new application
3. Copy your API Key and Secret
4. Add them to both `.env` files

### 5. Start MongoDB
```bash
# If using MongoDB locally
mongod

# Or using Docker
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

### 6. Run the Application

**Option A: Using Monorepo Script (Recommended)**
```bash
# From root directory
npm run dev
```

**Option B: Run Separately**
```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

### 7. Access the Application
- 🌐 **Frontend**: [http://localhost:5173](http://localhost:5173)
- ⚙️ **Backend API**: [http://localhost:5000](http://localhost:5000)
- 📚 **API Docs**: [http://localhost:5000/api-docs](http://localhost:5000/api-docs)

## 🐳 Docker Deployment

### Using Docker Compose

```yaml
# docker-compose.yml
version: '3.8'
services:
  mongodb:
    image: mongo:latest
    ports:
      - "27017:27017"
    volumes:
      - mongodb_data:/data/db

  backend:
    build: ./backend
    ports:
      - "5000:5000"
    environment:
      - MONGODB_URI=mongodb://mongodb:27017/talent-quotient
      - JWT_SECRET=${JWT_SECRET}
      - STREAM_API_KEY=${STREAM_API_KEY}
      - STREAM_API_SECRET=${STREAM_API_SECRET}
    depends_on:
      - mongodb

  frontend:
    build: ./frontend
    ports:
      - "3000:80"
    environment:
      - VITE_API_URL=http://localhost:5000
      - VITE_STREAM_API_KEY=${STREAM_API_KEY}
    depends_on:
      - backend

volumes:
  mongodb_data:
```

```bash
# Start with Docker Compose
docker-compose up -d

# View logs
docker-compose logs -f
```

## 📚 API Documentation

### Authentication Endpoints
```http
POST /api/auth/register
POST /api/auth/login
GET  /api/auth/me
```

### Session Endpoints
```http
POST   /api/sessions/create
GET    /api/sessions
GET    /api/sessions/:id
PUT    /api/sessions/:id
DELETE /api/sessions/:id
POST   /api/sessions/:id/join
```

### Chat Endpoints
```http
POST   /api/chat/message
GET    /api/chat/:sessionId
DELETE /api/chat/:messageId
```

## 🎯 Usage Guide

### Creating a Session
1. Register/Login to your account
2. Click "Create New Session"
3. Select programming language and difficulty
4. Choose or create a coding problem
5. Share the session link with collaborators

### Joining a Session
1. Click on an active session from dashboard
2. Accept camera/microphone permissions
3. Start coding collaboratively
4. Use video call for communication
5. Run code using the execute button

### Supported Languages
| Language | Version | File Extension |
|----------|---------|----------------|
| JavaScript | Node 18 | `.js` |
| Python | 3.10 | `.py` |
| Java | 15 | `.java` |
| C++ | 10 | `.cpp` |
| C | 10 | `.c` |
| PHP | 8.0 | `.php` |

## 🤝 Contributing

We love contributions! Here's how to help:

### Development Workflow
1. Fork the repository
2. Create a feature branch
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. Commit your changes
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. Push to the branch
   ```bash
   git push origin feature/amazing-feature
   ```
5. Open a Pull Request

### Coding Standards
- Follow existing code style
- Add comments for complex logic
- Update documentation accordingly
- Write meaningful commit messages

### Testing
```bash
# Run backend tests
cd backend
npm test

# Run frontend tests
cd frontend
npm test
```

## 🐛 Troubleshooting

### Common Issues

**1. MongoDB Connection Failed**
```bash
# Check if MongoDB is running
sudo systemctl status mongod
# or
mongod --version

# Test connection
mongo --eval "db.adminCommand('ping')"
```

**2. Stream Video Not Working**
- Verify API keys in both `.env` files
- Check browser console for errors
- Ensure camera/microphone permissions are granted

**3. Code Execution Fails**
- Check Piston API status
- Verify language and syntax
- Look at server logs for errors

### Logs
```bash
# Backend logs
cd backend && npm run dev

# Frontend logs
cd frontend && npm run dev
# Check browser console (F12)
```

## 📊 Performance Metrics

- **Initial Load**: < 2s
- **Code Sync Latency**: < 100ms
- **Video Call Latency**: < 200ms
- **Code Execution**: < 3s
- **Concurrent Users**: 50+ per session

## 🔒 Security

### Implemented Measures
- JWT-based authentication
- HTTPS enforcement (in production)
- Input validation and sanitization
- Rate limiting on API endpoints
- Secure WebSocket connections
- Environment variable protection

### Security Headers
- Content Security Policy (CSP)
- XSS Protection
- HSTS (HTTP Strict Transport Security)
- CORS configuration

## 📈 Monitoring

### Health Check Endpoints
```http
GET /api/health          # API health
GET /api/health/db       # Database health
GET /api/health/stream   # Stream service health
```

### Logging
```javascript
// Backend logging with Winston
logger.info('User joined session', { userId, sessionId });
logger.error('Database connection failed', { error });
```

## 🌐 Deployment

### Vercel (Frontend)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy frontend
cd frontend
vercel --prod
```

### Railway/Render (Backend)
```bash
# Connect your GitHub repository
# Add environment variables
# Deploy automatically on push
```

### Environment Variables for Production
```env
# Production .env example
MONGODB_URI=your-mongodb-atlas-uri
JWT_SECRET=strong-random-secret-here
CLIENT_URL=https://your-frontend-domain.com
NODE_ENV=production
```

## 📱 Mobile Responsiveness

The platform is optimized for:
- **Desktop**: Full feature set
- **Tablet**: Most features available
- **Mobile**: Limited features (viewing, basic editing)

## 🔗 Related Projects

- [Piston API](https://github.com/engineer-man/piston) - Code execution engine
- [Stream Video SDK](https://getstream.io/video/) - Video calling service
- [Monaco Editor](https://microsoft.github.io/monaco-editor/) - Code editor component

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Stream.io** for video calling infrastructure
- **Piston API** for code execution capabilities
- **Vite** for exceptional frontend tooling
- **React Community** for amazing libraries and tools

## 📞 Support

### Documentation
- [API Documentation](docs/api.md)
- [Frontend Guide](docs/frontend.md)
- [Deployment Guide](docs/deployment.md)

### Community
- [GitHub Issues](https://github.com/MohammadAli-14/Talent-Quotient-V-2/issues)
- [Discord Community](#)
- [Twitter Updates](#)

### Contributors
<a href="https://github.com/MohammadAli-14/Talent-Quotient-V-2/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=MohammadAli-14/Talent-Quotient-V-2" />
</a>

---

<div align="center">

**Built with ❤️ by [Mohammad Ali](https://github.com/MohammadAli-14)**

⭐ **Star this repo if you found it useful!** ⭐

[Report Bug](https://github.com/MohammadAli-14/Talent-Quotient-V-2/issues) · [Request Feature](https://github.com/MohammadAli-14/Talent-Quotient-V-2/issues)

</div>
