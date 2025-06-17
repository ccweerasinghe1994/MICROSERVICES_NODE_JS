# System Patterns

## Architecture Overview
The system follows a microservices architecture with the following key patterns:

### Service Decomposition
- **Posts Service** (Port 4000): Handles all post-related operations
- **Comments Service** (Port 4001): Manages comments with moderation
- **Event Bus Service** (Port 4005): Central event coordination
- **Client Application** (Port 3000): React TypeScript frontend

### Communication Patterns
1. **Event Bus Pattern**: Central hub for async communication between services
2. **HTTP REST API**: Direct client-to-service communication
3. **Event-Driven Architecture**: Services publish/subscribe to events

### Data Flow Patterns
```
Client → Posts Service → Event Bus → Comments Service
Client → Comments Service → Event Bus → Posts Service
```

## Key Design Decisions
1. **In-Memory Storage**: Simplified data persistence for learning purposes
2. **Express.js Framework**: Lightweight, familiar web framework
3. **CORS Enabled**: Allow cross-origin requests from React frontend
4. **Event-First Design**: All state changes trigger events

## Service Boundaries
- **Posts Service**: Owns post data and post lifecycle
- **Comments Service**: Owns comment data, handles moderation logic
- **Event Bus**: Stateless event routing and distribution
- **Client**: UI state management, API consumption

## Event Schema Patterns
```javascript
// Event structure
{
  type: 'PostCreated' | 'CommentCreated' | 'CommentModerated',
  data: { /* service-specific payload */ }
}
```

## Error Handling Patterns
- Service-level error boundaries
- Graceful degradation when services are unavailable
- Event replay capabilities for recovery

## Development Patterns
- **Service Independence**: Each service can be developed and deployed separately
- **API-First Design**: Well-defined interfaces between services
- **Event Logging**: All events are logged for debugging
- **Health Checks**: Each service exposes health endpoints

## Technology Patterns
- **CommonJS Modules**: For Node.js services (package.json type: "commonjs")
- **ES Modules**: For React frontend (package.json type: "module")
- **TypeScript**: Strong typing for frontend development
- **Hot Reload**: Development efficiency with Vite and nodemon

## Security Patterns (Simplified)
- CORS configuration for development
- Input validation at service boundaries
- Content moderation for user-generated content

## Scalability Patterns (Educational)
- Horizontal scaling ready (stateless services)
- Event-driven async processing
- Service isolation and independence
