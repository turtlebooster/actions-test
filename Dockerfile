FROM node:18.12.1

WORKDIR /app/frontend
COPY frontend/package.json /app/frontend
RUN npm cache clean --force
RUN rm -rf node_modles package-lock.json || true
RUN npm install 
COPY frontend /app/frontend

CMD ["npm", "run", "start"]