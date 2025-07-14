FROM node:20-alpine

# Create app directory
WORKDIR /app

# Copy application files (already built)
COPY . .

# Expose port Node is running on
EXPOSE 3000

# Start the Node server
CMD ["node", "server.js"]
