# Stage 1: Install dependencies
FROM node:14 as dependencies

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Stage 2: Runtime
FROM node:14-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy only necessary files from the first stage
COPY --from=dependencies /usr/src/app/node_modules ./node_modules
COPY . .

# Expose the port
EXPOSE 3500

# Start the application
CMD ["node", "index.js"]

