# System Patterns

## Architecture Overview
The system follows a microservices architecture with the following key patterns:

### Service Decomposition
- **Posts Service** (Port 4000): Handles all post-related operations with PostCreated event emission
- **Comments Service** (Port 4001): Manages comments with comprehensive moderation and status tracking
- **Query Service** (Port 4002): CQRS data aggregation with event sourcing and replay capability
- **Moderation Service** (Port 4003): Automated content filtering with CommentModerated event emission
- **Event Bus Service** (Port 4005): Enterprise-level event coordination with storage and replay
- **Client Application** (Port 3000): React TypeScript frontend with real-time data consumption

### Communication Patterns
1. **Event Bus Pattern**: Enterprise-level central hub for async communication with event storage
2. **HTTP REST API**: Direct client-to-service communication for read/write operations
3. **Event-Driven Architecture**: Complete CQRS with event sourcing and replay capability
4. **Event Sourcing**: All events stored with replay functionality for state reconstruction

### Data Flow Patterns
```
Client → Posts Service → Event Bus → Query Service
Client → Comments Service → Event Bus → Moderation Service → Event Bus → Comments Service → Event Bus → Query Service
Event Bus → Query Service (Event Replay on Startup)
```

## Key Design Decisions
1. **In-Memory Storage**: Simplified data persistence for learning purposes with event sourcing overlay
2. **Express.js Framework**: Lightweight, familiar web framework across all services
3. **CORS Enabled**: Allow cross-origin requests from React frontend
4. **Event-First Design**: All state changes trigger events with comprehensive event storage
5. **Event Sourcing**: Complete event history maintained for state reconstruction
6. **CQRS Pattern**: Clear separation between command and query operations
7. **TypeScript Integration**: Comprehensive type safety across all event schemas

## Service Boundaries
- **Posts Service**: Owns post data, post lifecycle, and PostCreated event emission
- **Comments Service**: Owns comment data, status tracking, CommentCreated and CommentUpdated events
- **Query Service**: Aggregated read views, event replay, and CQRS query operations  
- **Moderation Service**: Content filtering logic and CommentModerated event emission
- **Event Bus**: Event storage, routing, replay capability, and inter-service coordination
- **Client**: UI state management, API consumption, and user interaction

## Event Schema Patterns
```javascript
// Event structure with comprehensive typing
{
  type: 'PostCreated' | 'CommentCreated' | 'CommentModerated' | 'CommentUpdated',
  data: { /* service-specific payload with TypeScript interfaces */ }
}

// Complete event lifecycle
PostCreated → CommentCreated → CommentModerated → CommentUpdated
```

## Error Handling Patterns
- Service-level error boundaries with comprehensive exception handling
- Graceful degradation when services are unavailable
- Event replay capabilities for recovery and state reconstruction
- Event bus error handling for failed service communications
- Retry mechanisms and dead letter queue foundations

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
