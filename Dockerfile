FROM node:latest

# Create project directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

#COPY app bundle
COPY . .

EXPOSE 8080

CMD ["npm", "start"]