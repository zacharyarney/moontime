### BUILD ###
FROM node:20 AS builder
# Set the working directory in the container
WORKDIR /app
# Copy package.json and package-lock.json into working directory
COPY package*.json .
# Install packages from package.json
RUN npm install
# Copy source code
COPY . .
# Build the app
RUN npm run build

### PROD ###
FROM node:20-slim
# Install ffmpeg
RUN apt update && apt install -y ffmpeg

WORKDIR /app

COPY package*.json .
# Install non-dev dependencies
RUN npm install --production
# Copy build from builder stage
COPY --from=builder /app/dist ./dist
# Make port 3000 available to the outside
EXPOSE 3000
# Run the app
CMD ["npm", "run", "start"]
