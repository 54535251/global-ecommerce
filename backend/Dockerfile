# Use a lightweight Node.js environment
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package files first to leverage Docker's cache
# (This makes subsequent builds much faster)
COPY package*.json ./

# Install dependencies 
# We'll use 'npm install' for now; in production, you'd use 'npm ci'
RUN npm install

# Copy the rest of your application code
COPY . .

# The port our Express app will listen on
EXPOSE 3000

# Run the application
CMD [ "node", "server.js" ]