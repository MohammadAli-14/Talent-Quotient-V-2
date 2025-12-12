# Talent Quotient V2 - Collaborative Coding Platform

Talent Quotient V2 is a feature-rich collaborative coding platform that enables real-time pair programming, video conferencing, and problem-solving sessions with built-in code execution capabilities.

## 🌟 Features

### 🚀 Core Functionality
- **Real-time Collaborative Code Editor** - Multiple users can code together simultaneously
- **Live Video Conferencing** - Integrated video calls for seamless communication
- **Multi-language Code Execution** - Run code in 8+ programming languages
- **Problem Bank** - Curated coding challenges with difficulty levels
- **Session Management** - Create, join, and manage coding sessions
- **User Authentication** - Secure user accounts and session management

### 💻 Supported Languages
- JavaScript
- Python
- Java
- C++
- C
- PHP
- ...and more via Piston API

## 🏗️ Project Structure

```
Talent-Quotient-V-2/
├── backend/                 # Node.js/Express backend
│   ├── src/
│   │   ├── controllers/    # Request handlers
│   │   ├── models/         # MongoDB schemas
│   │   ├── routes/         # API routes
│   │   ├── middleware/     # Auth middleware
│   │   └── lib/           # Database and service configs
├── frontend/               # React/Vite frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # API clients and utilities
│   │   └── data/          # Static data
└── package.json           # Root package.json for monorepo setup
```

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **Socket.IO** - Real-time communication
- **Stream API** - Video calling service
- **Piston API** - Code execution engine

### Frontend
- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Axios** - HTTP client
- **React Router** - Navigation
- **Stream Video SDK** - Video calling

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/MohammadAli-14/Talent-Quotient-V-2.git
cd Talent-Quotient-V-2
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create `.env` files in both `backend/` and `frontend/` directories:

**Backend (.env)**
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret
CLIENT_URL=http://localhost:5173
```

**Frontend (.env)**
```env
VITE_API_URL=http://localhost:5000
VITE_STREAM_API_KEY=your_stream_api_key
```

4. **Run the application**

**Option A: Run both together (from root)**
```bash
npm run dev
```

**Option B: Run separately**
```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

5. **Access the application**
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## 📦 Available Scripts

### Root (Monorepo)
```bash
npm run dev          # Start both frontend and backend
npm run build        # Build both projects
npm run test         # Run tests (if configured)
```

### Backend
```bash
cd backend
npm run dev          # Start development server
npm start           # Start production server
npm run build       # Build project
```

### Frontend
```bash
cd frontend
npm run dev         # Start development server
npm run build       # Build for production
npm run preview     # Preview production build
```

## 🔧 Configuration

### Video Calling Setup
1. Create an account on [GetStream.io](https://getstream.io/)
2. Create a new application in the dashboard
3. Copy your API Key and Secret
4. Add them to your environment variables

### Database Setup
1. Set up a MongoDB instance (local or Atlas)
2. Update the connection string in backend `.env`

## 🚢 Deployment

### Backend Deployment
```bash
cd backend
npm run build
# Deploy the built files to your server
```

### Frontend Deployment
```bash
cd frontend
npm run build
# Deploy the dist/ folder to your static hosting
```

## 📁 Project Structure Details

### Backend Architecture
- **Controllers**: Handle business logic for sessions, chat, and authentication
- **Models**: Define MongoDB schemas for Users and Sessions
- **Routes**: Define API endpoints and route handlers
- **Middleware**: Authentication and request validation
- **Lib**: Configuration files for databases and third-party services

### Frontend Architecture
- **Components**: Reusable UI components (Editor, VideoCall, ProblemDescription, etc.)
- **Pages**: Main page components for different routes
- **Hooks**: Custom React hooks for data fetching and WebRTC
- **Lib**: API clients and utility functions
- **Data**: Static problem data and configurations

## 🔐 Authentication Flow
1. User signs up/login
2. JWT token issued and stored
3. Protected routes validate token via middleware
4. Stream tokens generated for video calls
5. Session-based authorization for coding rooms

## 🔄 Real-time Features
- **Code Synchronization**: Live code updates across all participants
- **Video/Audio Calls**: WebRTC-based video conferencing
- **Chat Messaging**: Real-time text chat during sessions
- **Output Streaming**: Live code execution results

## 🤝 Contributing
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors
- **Mohammad Ali** - [@MohammadAli-14](https://github.com/MohammadAli-14)

## 🙏 Acknowledgments
- [GetStream.io](https://getstream.io/) for video calling SDK
- [Piston API](https://github.com/engineer-man/piston) for code execution
- [Vite](https://vitejs.dev/) for frontend tooling
- [React](https://reactjs.org/) for UI framework

## 📞 Support
For support, please open an issue in the GitHub repository or contact the maintainers.

---

**Note**: This is a simplified README based on the provided project structure. For complete setup instructions, please refer to the individual README files in the `backend/` and `frontend/` directories.
