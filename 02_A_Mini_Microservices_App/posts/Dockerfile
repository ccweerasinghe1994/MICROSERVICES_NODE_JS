# Development Dockerfile for Posts Service
FROM node:24-alpine

# Install dumb-init and pnpm for proper signal handling and package management
RUN apk add --no-cache dumb-init && \
    npm install -g pnpm

# Set working directory inside the container
WORKDIR /app

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install all dependencies (including dev dependencies for development)
RUN pnpm install --frozen-lockfile

# Copy TypeScript source code and configuration
COPY src/ ./src/
COPY tsconfig.json ./

# Create a non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S posts -u 1001

# Change ownership of the app directory to the nodejs user
RUN chown -R posts:nodejs /app
USER posts

# Expose the port the app runs on
EXPOSE 4000

# Add health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:4000/posts || exit 1

# Use dumb-init to handle signals properly
ENTRYPOINT ["dumb-init", "--"]

# Define the command to run the application in development mode
CMD ["pnpm", "dev"]