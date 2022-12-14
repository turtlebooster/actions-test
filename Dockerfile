FROM node:14.19.1

WORKDIR /app
COPY frontend/package.json ./
RUN npm install 
COPY frontend ./

CMD ["npm", "run", "start"]