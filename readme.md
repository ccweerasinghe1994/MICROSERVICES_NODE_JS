# Microservices with React and Node.js

A comprehensive microservices architecture learning project demonstrating modern web development practices with React, TypeScript, and Node.js.

## 📋 Project Overview

This project implements a mini microservices application that demonstrates:
- Microservices architecture patterns
- Inter-service communication via event bus
- React TypeScript frontend
- Node.js backend services
- Event-driven architecture

## 🏗️ Architecture

The application consists of:
- **Client** (Port 3000): React + TypeScript frontend application
- **Posts Service** (Port 4000): Microservice for managing blog posts
- **Comments Service** (Port 4001): Microservice for managing comments
- **Event Bus** (Port 4005): Central event coordination service

## 📚 Documentation

### Course Materials
[Notion Course Link](https://www.notion.so/Microservices-with-react-and-node-21430c6e8cbd80bba421cef36377564b?source=copy_link)

### Memory Bank
Comprehensive project documentation is maintained in the `memory-bank/` directory:
- `projectbrief.md` - Core project purpose and objectives
- `productContext.md` - User experience and business context
- `systemPatterns.md` - Architecture patterns and design decisions
- `techContext.md` - Technology stack and development setup
- `activeContext.md` - Current work focus and recent changes
- `progress.md` - Implementation status and next steps

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm package manager
- Windows environment with PowerShell

### Installation
1. Clone the repository:
```bash
git clone <repository-url>
cd MICROSERVICES_NODE_JS
```

2. Install client dependencies:
```bash
cd 02_A_Mini_Microservices_App/client
npm install
```

3. Install service dependencies:
```bash
# Posts service (implemented)
cd ../posts
npm install

# Comments service (✅ Functional)
cd ../comments
npm install
```

### Running the Application
Start each service in separate terminals:

```bash
# Terminal 1 - Client Application
cd 02_A_Mini_Microservices_App/client
npm run dev

# Terminal 2 - Posts Service (✅ Functional)
cd 02_A_Mini_Microservices_App/posts
npm run dev

# Terminal 3 - Comments Service (✅ Functional)
cd 02_A_Mini_Microservices_App/comments
npm run dev
npm start
```

## 📁 Project Structure

```
MICROSERVICES_NODE_JS/
├── memory-bank/                 # Project documentation and memory
├── 02_A_Mini_Microservices_App/
│   ├── client/                  # React TypeScript frontend (✅ Complete)
│   │   ├── src/components/      # React components (CreatePost, PostList, CommentList, etc.)
│   │   ├── src/api/             # API layer with TypeScript types
│   │   ├── package.json         # Dependencies including Tailwind CSS
│   │   └── vite.config.ts       # Vite configuration
│   ├── posts/                   # Posts microservice (✅ Complete)
│   │   ├── src/index.ts         # TypeScript Express server with CORS
│   │   ├── dist/                # Compiled JavaScript
│   │   ├── package.json         # Dependencies and scripts
│   │   └── posts.postman_collection.json  # API testing
│   ├── comments/                # Comments microservice (✅ Complete)
│   │   ├── src/index.ts         # TypeScript Express server with CORS
│   │   ├── src/index.d.ts       # TypeScript type definitions
│   │   └── package.json         # Dependencies and scripts
│   └── event-bus/               # Event bus service (⏳ Pending)
├── diagrams/                    # Architecture diagrams
└── readme.md                    # This file
```

## 🛠️ Technologies Used

### Frontend
- React 19.1.0 with TypeScript
- Vite 6.3.5 for fast development
- ESLint for code quality
- Modern CSS3 styling

### Backend
- Node.js with Express.js
- CommonJS modules for services
- CORS for cross-origin requests
- Axios for HTTP communication

### Development
- Windows PowerShell environment
- npm package management
- Hot reload development
- Memory bank documentation system

## 📖 Learning Objectives

This project demonstrates:
- **Service Decomposition**: Breaking monoliths into microservices
- **Event-Driven Communication**: Async service communication
- **API Design**: RESTful service interfaces
- **Frontend Integration**: React consuming multiple services
- **Modern Development**: TypeScript, Vite, and current best practices

## 🚧 Current Status

- ✅ **Project Structure**: Complete with memory bank documentation
- ✅ **React Client**: Fully functional microservices application with Tailwind CSS and real-time updates
- ✅ **Documentation System**: Comprehensive memory bank with all core files
- ✅ **Main README**: Complete project overview and setup instructions
- ✅ **Posts Service**: TypeScript Express.js server with CORS, GET/POST endpoints, and Postman testing
- ✅ **Comments Service**: TypeScript Express.js server with CORS and comment management functionality
- ⏳ **Event Bus**: Not yet created
- 🔄 **Inter-Service Communication**: Direct HTTP integration complete, event bus pending

## 📄 License

This project is for educational purposes as part of a microservices learning course.
