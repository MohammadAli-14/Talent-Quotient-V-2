# Talent Quotient Full Stack Coding Interview Platform

<div align="center">
  

**A collaborative coding platform with real-time video calls, pair programming, and multi-language code execution**

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Available-green?style=for-the-badge)](talent-quotient-frontend.vercel.app)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)

</div>

## 🎯 Overview

Talent Quotient V2 is a complete full-stack application for conducting technical interviews and coding assessments. This repository consolidates both the frontend and backend components into a unified project structure. It provides interviewers and candidates with a seamless environment featuring real-time code collaboration, video conferencing, problem-solving, and comprehensive session analytics.

## 📂 Repository Structure

This main repository (**Talent-Quotient-V-2**) contains both the frontend and backend code. For dedicated development, you can also access the individual repositories:

| Repository | Purpose | Technology Stack |
|------------|---------|------------------|
| **[Talent-Quotient-V-2](https://github.com/MohammadAli-14/Talent-Quotient-V-2)** | **Main Full-Stack Repository** | React + Node.js + Express + MongoDB |
| **[Talent-Quotient-Frontend](https://github.com/MohammadAli-14/Talent-Quotient-Frontend)** | Dedicated Frontend Application | React + Vite + Tailwind CSS |
| **[Talent-Qutotient-Backend](https://github.com/MohammadAli-14/Talent-Qutotient-Backend)** | Dedicated Backend API | Node.js + Express + MongoDB + Socket.io |

## ✨ Features

### **Frontend Features**
- **Interactive Code Editor**: Monaco Editor with syntax highlighting for 8+ languages (JavaScript, Python, Java, C++, etc.)
- **Real-time Video Calls**: Integrated WebRTC video conferencing with screen sharing
- **Problem Database**: Curated coding problems with descriptions, test cases, and difficulty levels
- **Live Code Execution**: Execute code in multiple languages using Piston API
- **Responsive Design**: Mobile-friendly interface with dark/light mode support
- **Session Management**: Create, join, and manage interview sessions
- **Real-time Collaboration**: Live code editing and chat functionality

### **Backend Features**
- **RESTful API**: Comprehensive endpoints for session management, user authentication, and data operations
- **WebSocket Support**: Real-time communication for chat and code collaboration
- **JWT Authentication**: Secure user authentication and authorization
- **MongoDB Integration**: Scalable database with Mongoose ODM
- **Background Job Processing**: Asynchronous tasks with Inngest
- **File Streaming**: Efficient handling of large responses and uploads

## 🏗️ Project Architecture

### **Frontend Structure**
```
├── public/                 # Static assets and images
├── src/
│   ├── api/               # API integration services
│   ├── components/        # Reusable React components
│   │   ├── ActiveSessions.jsx
│   │   ├── CodeEditorPanel.jsx
│   │   ├── CreateSessionModal.jsx
│   │   ├── Navbar.jsx
│   │   ├── OutputPanel.jsx
│   │   ├── ProblemDescription.jsx
│   │   ├── VideoCallUI.jsx
│   │   └── WelcomeSection.jsx
│   ├── data/              # Static data and problem sets
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility libraries
│   ├── pages/             # Page components
│   │   ├── DashboardPage.jsx
│   │   ├── HomePage.jsx
│   │   ├── ProblemPage.jsx
│   │   ├── ProblemsPage.jsx
│   │   └── SessionPage.jsx
│   ├── App.jsx            # Main application component
│   ├── main.jsx          # Application entry point
│   └── index.css         # Global styles
```

### **Backend Structure**
```
├── src/
│   ├── controllers/       # Request handlers
│   │   ├── chatController.js
│   │   └── sessionController.js
│   ├── lib/              # Core utilities
│   │   ├── db.js         # Database connection
│   │   ├── env.js        # Environment configuration
│   │   ├── inngest.js    # Background job client
│   │   └── stream.js     # Stream processing utilities
│   ├── middleware/       # Express middleware
│   │   └── protectRoute.js
│   ├── models/           # MongoDB models
│   │   ├── Session.js
│   │   └── User.js
│   ├── routes/           # API route definitions
│   │   ├── chatRoutes.js
│   │   └── sessionRoute.js
│   └── server.js         # Application entry point
```

## 🚀 Quick Start (Full-Stack Setup)

### **Prerequisites**
- Node.js (v16 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

### **1. Clone the Repository**
```bash
git clone https://github.com/MohammadAli-14/Talent-Quotient-V-2.git
cd Talent-Quotient-V-2
```

### **2. Backend Setup**
```bash
# Navigate to backend directory (if separated)
# Install dependencies
npm install

# Create .env file in backend root
cp .env.example .env

# Edit .env with your configuration
# Start development server
npm run dev
```

### **3. Frontend Setup**
```bash
# Navigate to frontend directory (if separated)
# Install dependencies
npm install

# Create .env file in frontend root
cp .env.example .env

# Edit .env with your configuration
# Start development server
npm run dev
```

## ⚙️ Environment Configuration

### **Backend Environment Variables (.env)**
```env
# Server Configuration
PORT=3000
NODE_ENV=development

# MongoDB
MONGODB_URI=mongodb://localhost:27017/talent-quotient

# JWT
JWT_SECRET=your_jwt_secret_key_here

# Inngest
INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key
INNGEST_BASE_URL=your_inngest_base_url

# CORS
CORS_ORIGIN=http://localhost:5173
```

### **Frontend Environment Variables (.env)**
```env
# API Configuration
VITE_API_URL=http://localhost:3000/api
VITE_WS_URL=ws://localhost:3000

# Piston API for Code Execution
VITE_PISTON_API_URL=https://emkc.org/api/v2/piston

# Feature Flags
VITE_ENABLE_VIDEO_CALL=true
VITE_ENABLE_CODE_EXECUTION=true

# Video Service (Optional)
VITE_VIDEO_SERVICE_URL=your_video_service_url
```

## 📦 Dependencies

### **Backend Dependencies**
- **express**: Web framework
- **mongoose**: MongoDB ODM
- **jsonwebtoken**: JWT authentication
- **socket.io**: Real-time communication
- **cors**: Cross-origin resource sharing
- **dotenv**: Environment variable management
- **inngest**: Background job processing
- **bcryptjs**: Password hashing

### **Frontend Dependencies**
- **React 18**: UI library
- **Vite**: Build tool and development server
- **React Router DOM**: Client-side routing
- **axios**: HTTP client for API requests
- **socket.io-client**: Real-time communication client
- **@monaco-editor/react**: Code editor component
- **Tailwind CSS**: Utility-first CSS framework
- **react-icons**: Icon library
- **date-fns**: Date manipulation library

## 🛠️ Available Scripts

### **Backend Scripts**
```bash
npm run dev        # Start development server with nodemon
npm start          # Start production server
npm test           # Run tests (if configured)
```

### **Frontend Scripts**
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
npm run format     # Format code with Prettier
```

## 🔌 API Endpoints

### **Session Management**
- `POST /api/sessions/create` - Create new interview session
- `GET /api/sessions/:id` - Get session details
- `PUT /api/sessions/:id` - Update session
- `GET /api/sessions/user/:userId` - Get user's sessions
- `DELETE /api/sessions/:id` - Delete session

### **Chat & Real-time**
- `POST /api/chat/new` - Start new chat session
- `GET /api/chat/:sessionId` - Get chat history
- `POST /api/chat/message` - Send message
- WebSocket events for real-time updates

### **Authentication**
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user
- `POST /api/auth/logout` - User logout

## 🎯 Usage Guide

### **Starting a Complete Interview Session**
1. **Interviewer creates session**: Navigate to Dashboard → "Create New Session"
2. **Configure session**: Select problem, language, and duration
3. **Invite candidate**: Share unique session link
4. **Start interview**: Begin video call and coding assessment
5. **Real-time collaboration**: Both parties can edit code and chat simultaneously
6. **Code execution**: Test solutions against predefined test cases
7. **Session review**: Save and review session performance metrics

### **For Candidates**
1. **Join session**: Use provided session link
2. **Understand problem**: Read problem description and constraints
3. **Write solution**: Use code editor to implement solution
4. **Test code**: Run code against sample test cases
5. **Submit solution**: Final submission for evaluation
6. **Receive feedback**: Get performance metrics and feedback

## 🚀 Deployment

### **Option 1: Deploy with Vercel (Frontend) + Render/Heroku (Backend)**
1. **Frontend to Vercel**:
   ```bash
   # Connect GitHub repository to Vercel
   # Configure environment variables
   # Deploy automatically on push
   ```

2. **Backend to Render**:
   ```bash
   # Create new Web Service on Render
   # Connect backend repository
   # Set environment variables
   # Specify start command: npm start
   ```

### **Option 2: Docker Deployment**
```dockerfile
# Backend Dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["npm", "start"]

# Frontend Dockerfile
FROM node:16-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### **Option 3: Manual Deployment**
1. **Backend Setup**:
   ```bash
   # Build and deploy backend
   npm install --production
   npm run build
   pm2 start server.js --name "talent-backend"
   ```

2. **Frontend Setup**:
   ```bash
   # Build and deploy frontend
   npm install
   npm run build
   # Deploy dist/ folder to web server (Nginx, Apache)
   ```

## 📱 Features in Detail

### **1. Real-time Code Collaboration**
- Multiple users can edit code simultaneously
- Cursor position visibility
- Change highlighting
- Language-specific syntax validation

### **2. Video Conferencing**
- WebRTC-based peer-to-peer connection
- Screen sharing capabilities
- Audio/video controls
- Participant management

### **3. Problem Management**
- Curated problem sets by difficulty
- Multiple test cases per problem
- Time and memory constraints
- Solution validation

### **4. Session Analytics**
- Code execution time tracking
- Number of attempts
- Test case pass/fail statistics
- Performance scoring

## 🧪 Testing

### **Backend Testing**
```bash
# Run backend tests
npm test

# Test coverage
npm run test:coverage
```

### **Frontend Testing**
```bash
# Run frontend tests
npm test

# Component testing
npm run test:components
```

## 🔒 Security Features

- **JWT-based authentication** with token refresh
- **CORS configuration** for cross-origin requests
- **Input validation** and sanitization
- **Rate limiting** on API endpoints
- **Secure password hashing** with bcrypt
- **HTTPS enforcement** in production
- **Environment-based configuration**

## 🤝 Contributing

We welcome contributions to Talent Quotient V2! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### **Development Guidelines**
- Follow existing code style and conventions
- Add comments for complex logic
- Update documentation as needed
- Write tests for new features
- Ensure backward compatibility

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Mohammad Ali** - *Full Stack Developer* - [MohammadAli-14](https://github.com/MohammadAli-14)

## 🙏 Acknowledgments

- **Vite Team** for the excellent build tool
- **Monaco Editor** for the powerful code editor
- **Socket.io** for real-time communication
- **Piston API** for code execution service
- **All Contributors** who have helped shape this project

## 📞 Support

For issues, questions, or feature requests:

1. **Check existing issues** on GitHub
2. **Open a new issue** with detailed description
3. **Provide reproduction steps** for bugs
4. **Suggest improvements** with use cases

## 🔗 Important Links

- **Main Repository**: [Talent-Quotient-V-2](https://github.com/MohammadAli-14/Talent-Quotient-V-2)
- **Frontend Repository**: [Talent-Quotient-Frontend](https://github.com/MohammadAli-14/Talent-Quotient-Frontend)
- **Backend Repository**: [Talent-Qutotient-Backend](https://github.com/MohammadAli-14/Talent-Qutotient-Backend)
- **Live Demo**: [Coming Soon - Check main repository for updates]
- **Issue Tracker**: [GitHub Issues](https://github.com/MohammadAli-14/Talent-Quotient-V-2/issues)

---
<div align="center">

**Built with ❤️ by [Mohammad Ali](https://github.com/MohammadAli-14)**

⭐ **Star this repo if you found it useful!** ⭐

[Report Bug](https://github.com/MohammadAli-14/Talent-Quotient-V-2/issues) · [Request Feature](https://github.com/MohammadAli-14/Talent-Quotient-V-2/issues)

</div>

**Note**: This is a full-stack application. For development, you need to run both the backend and frontend servers. Make sure MongoDB is running and all environment variables are properly configured. For production deployment, consider using a process manager like PM2 and setting up proper SSL certificates.
