# Step 1: Build the React app
FROM node:14 AS build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . ./

# Build the React application
RUN npm run build

# Step 2: Use Apache to serve the React app
FROM httpd:alpine

# Copy the build folder from the previous stage to the Apache server's web root
COPY --from=build /app/build/ /usr/local/apache2/htdocs/

# Expose port 80 to access the app
EXPOSE 80

