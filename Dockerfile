FROM node:18

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Install Expo CLI globally
RUN npm install -g expo-cli

# Copy project files
COPY . .

# Expose ports
EXPOSE 8081 19000 19001 19002

# Start Expo
CMD ["npx", "expo", "start", "--tunnel"]