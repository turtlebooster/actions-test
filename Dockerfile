FROM node:14.19.1

WORKDIR /app
COPY frontend/package.json ./
RUN npm cache clean --force
RUN rm -rf node_modles package-lock.json || true
RUN npm install 
COPY frontend ./

CMD ["npm", "run", "start"]