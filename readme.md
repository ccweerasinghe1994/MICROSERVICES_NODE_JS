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

3. Install service dependencies (once implemented):
```bash
# Posts service
cd ../posts
npm install

# Comments service
cd ../comments
npm install
```

### Running the Application
Start each service in separate terminals:

```bash
# Terminal 1 - Client Application
cd 02_A_Mini_Microservices_App/client
npm run dev

# Terminal 2 - Posts Service (when implemented)
cd 02_A_Mini_Microservices_App/posts
npm start

# Terminal 3 - Comments Service (when implemented)
cd 02_A_Mini_Microservices_App/comments
npm start
```

## 📁 Project Structure

```
MICROSERVICES_NODE_JS/
├── memory-bank/                 # Project documentation and memory
├── 02_A_Mini_Microservices_App/
│   ├── client/                  # React TypeScript frontend (✅ Complete)
│   ├── posts/                   # Posts microservice (🔄 In Progress)
│   ├── comments/                # Comments microservice (🔄 In Progress)
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
- ✅ **React Client**: Fully scaffolded and ready for development
- ✅ **Documentation System**: Comprehensive memory bank with all core files
- ✅ **Main README**: Complete project overview and setup instructions
- 🔄 **Posts Service**: Package configured with dependencies, implementation pending
- 🔄 **Comments Service**: Package configured with dependencies, implementation pending
- ⏳ **Event Bus**: Not yet created
- ⏳ **Inter-Service Communication**: Pending service implementations

## 📄 License

This project is for educational purposes as part of a microservices learning course.
