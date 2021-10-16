FROM node:latest

# Create project directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm i -g nodemon

#COPY app bundle
COPY . .

EXPOSE 8080

CMD ["npm", "start"]