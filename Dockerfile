# Stage 1: Build the application
FROM node:16.20.1 AS build

WORKDIR /app

# Copy package.json and package-lock.json separately for better caching
COPY package.json package-lock.json ./
RUN npm install --production  # Install only production dependencies

# Copy the rest of the application files
COPY . .

# Stage 2: Set up the runtime environment
FROM node:16.20.1

WORKDIR /app

# Copy only the built files from the build stage
COPY --from=build /app /app

# Set the environment variable for production
ENV NODE_ENV=production

EXPOSE 4000

# Use the correct script to start the application
CMD ["npm", "run", "start"]
