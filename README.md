# Talent Quotient - Full Stack Coding Interview Platform

<div align="center">

**A collaborative coding platform with real-time video calls, pair programming, and multi-language code execution**

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Available-green?style=for-the-badge)](https://talent-quotient-frontend.vercel.app/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)

</div>

## 🎯 Overview

Talent Quotient is a complete full-stack platform for conducting realistic, collaborative technical interviews. It provides interviewers and candidates with a seamless environment that combines real-time code collaboration, video conferencing, a curated problem database, and live code execution.

The platform is designed to reflect real-world pair programming scenarios, allowing interviewers to observe not just the final code, but the candidate's thought process, problem-solving approach, and ability to communicate while coding.

## ✨ Key Features

### **Core Platform Capabilities**
- **Interactive Code Editor**: Monaco Editor with syntax highlighting for 5+ languages (JavaScript, Python, Java, C++, etc.)
- **Real-time Video Calls**: Integrated WebRTC video conferencing with screen sharing
- **Live Code Execution**: Execute code in multiple languages using Piston API
- **Real-time Collaboration**: Multiple users can edit code simultaneously with cursor visibility
- **Problem Database**: Curated coding problems with descriptions, test cases, and difficulty levels
- **Session Management**: Create, join, and manage interview sessions
- **Responsive Design**: Mobile-friendly interface with dark/light mode support

### **Interview-Specific Features**
- **Shared Editing**: Both interviewer and candidate can type and see changes in real-time, enabling true pair programming
- **Live Test Runner**: Execute code against test cases during the interview to instantly validate solutions
- **Multiple Language Support**: Candidates can choose their preferred programming language for the assessment
- **Interview Recordings**: Session playback for post-interview review and team calibration

## 📂 Repository Structure

This project is organized across three main repositories:

| Repository | Purpose | Technology Stack |
|------------|---------|------------------|
| **[Talent-Quotient-V-2](https://github.com/MohammadAli-14/Talent-Quotient-V-2)** | **Main Full-Stack Repository** | React + Node.js + Express + MongoDB |
| **[Talent-Quotient-Frontend](https://github.com/MohammadAli-14/Talent-Quotient-Frontend)** | Dedicated Frontend Application | React + Vite + Tailwind CSS |
| **[Talent-Qutotient-Backend](https://github.com/MohammadAli-14/Talent-Qutotient-Backend)** | Dedicated Backend API | Node.js + Express + MongoDB  |

## 🚀 Quick Start (Full-Stack Setup)

### **Prerequisites**
- Node.js (v16 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

### **1. Clone the Main Repository**
```bash
git clone https://github.com/MohammadAli-14/Talent-Quotient-V-2.git
cd Talent-Quotient-V-2
```

### **2. Backend Setup**
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env with your configuration
# Start development server
npm run dev
```

### **3. Frontend Setup**
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Create .env file
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
```

## 🛠️ Available Scripts

### **Backend Scripts**
```bash
npm run dev        # Start development server with nodemon
npm start          # Start production server
npm test           # Run tests
```

### **Frontend Scripts**
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

## 🔌 API Endpoints

### **Session Management**
- `POST /api/sessions/create` - Create new interview session
- `GET /api/sessions/:id` - Get session details
- `PUT /api/sessions/:id` - Update session
- `GET /api/sessions/user/:userId` - Get user's sessions
- `DELETE /api/sessions/:id` - Delete session

### **Real-time Communication**
- `POST /api/chat/new` - Start new chat session
- `GET /api/chat/:sessionId` - Get chat history
- WebSocket events for real-time code collaboration and chat

### **Authentication**
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user

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
1. **Join session**: Use provided session link or visit [Live Demo](https://talent-quotient-frontend.vercel.app/)
2. **Understand problem**: Read problem description and constraints
3. **Write solution**: Use code editor to implement solution
4. **Test code**: Run code against sample test cases
5. **Submit solution**: Final submission for evaluation

## 🚀 Deployment

### **Option 1: Deploy with Vercel (Frontend) + Render (Backend)**
1. **Frontend to Vercel**:
   - Connect your GitHub repository to Vercel
   - Configure environment variables
   - Deploy automatically on push

2. **Backend to Render**:
   - Create new Web Service on Render
   - Connect backend repository
   - Set environment variables (especially `MONGODB_URI`)
   - Specify start command: `npm start`

### **Option 2: Docker Deployment**
```dockerfile
# Backend Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["npm", "start"]

# Frontend Dockerfile
FROM node:18-alpine as build
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

## 📱 Features in Detail

### **1. Real-time Code Collaboration**
- Multiple users can edit code simultaneously with cursor position visibility
- Change highlighting and language-specific syntax validation
- Designed to facilitate natural pair programming conversations

### **2. Video Conferencing**
- WebRTC-based peer-to-peer connection for low latency
- Screen sharing capabilities for system design interviews
- Audio/video controls and participant management

### **3. Problem Management**
- Curated problem sets categorized by difficulty (Easy, Medium, Hard)
- Multiple test cases per problem with time and memory constraints
- Solution validation and auto-grading system

### **4. Code Execution Environment**
- Support for multiple programming languages via Piston API
- Safe code execution in isolated sandboxes
- Real-time output streaming and error reporting

## 🏗️ Project Architecture

### **Frontend Structure**
```
├── public/                 # Static assets
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
│   ├── data/              # Problem sets and static data
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility libraries
│   ├── pages/             # Page components
│   │   ├── DashboardPage.jsx
│   │   ├── HomePage.jsx
│   │   ├── ProblemPage.jsx
│   │   ├── ProblemsPage.jsx
│   │   └── SessionPage.jsx
│   ├── App.jsx            # Main application
│   ├── main.jsx          # Application entry
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
│   │   ├── env.js        # Environment config
│   │   ├── stream.js     # Stream utilities
│   ├── middleware/       # Express middleware
│   │   └── protectRoute.js
│   ├── models/           # MongoDB models
│   │   ├── Session.js
│   │   └── User.js
│   ├── routes/           # API routes
│   │   ├── chatRoutes.js
│   │   └── sessionRoute.js
│   └── server.js         # Application entry
```

## 📦 Dependencies

### **Backend Dependencies**
- **express**: Web framework
- **mongoose**: MongoDB ODM
- **jsonwebtoken**: JWT authentication
- **socket.io**: Real-time communication
- **cors**: Cross-origin resource sharing
- **dotenv**: Environment variable management
- **bcryptjs**: Password hashing

### **Frontend Dependencies**
- **React 18**: UI library
- **Vite**: Build tool and development server
- **React Router DOM**: Client-side routing
- **axios**: HTTP client for API requests
- **vs code-editor/react**: Code editor component
- **Tailwind CSS**: Utility-first CSS framework
- **react-icons**: Icon library

## 🤝 Contributing

We welcome contributions to Talent Quotient! Please follow these steps:

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

## 🔗 Important Links

- **Live Demo**: [https://talent-quotient-frontend.vercel.app/](https://talent-quotient-frontend.vercel.app/)
- **Main Repository**: [Talent-Quotient-V-2](https://github.com/MohammadAli-14/Talent-Quotient-V-2)
- **Frontend Repository**: [Talent-Quotient-Frontend](https://github.com/MohammadAli-14/Talent-Quotient-Frontend)
- **Backend Repository**: [Talent-Qutotient-Backend](https://github.com/MohammadAli-14/Talent-Qutotient-Backend)

---
<div align="center">

**Built with ❤️ by [Mohammad Ali](https://github.com/MohammadAli-14)**

⭐ **Star this repo if you found it useful!** ⭐

</div>

**Note**: This is a full-stack application. For development, you need to run both the backend and frontend servers. Make sure MongoDB is running and all environment variables are properly configured. For production deployment, consider using a process manager like PM2 and setting up proper SSL certificates.
