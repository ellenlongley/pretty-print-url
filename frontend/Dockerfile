# syntax=docker/dockerfile:1
   
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Bundle app source
COPY . .
# Install app dependencies
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

CMD ["node", "src/index.js"]
EXPOSE 3000