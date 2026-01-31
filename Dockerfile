# Use Node.js 20 (Debian Bullseye)
FROM node:20-bullseye

# Set working directory
WORKDIR /app

# Copy package.json & package-lock.json first
COPY package.json package-lock.json ./

# **Ensure a clean install**
RUN rm -rf node_modules ~/.npm && npm cache clean --force

# Install dependencies inside the container
RUN npm ci

# Copy the rest of the application
COPY . .

# Build Next.js app
RUN npm run build

# Expose the port
EXPOSE 3000

# Start the server
CMD ["npm", "start"]
