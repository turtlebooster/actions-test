FROM node:14.19.1

WORKDIR /app/frontend

ENV PATH /app/node_modules/.bin:$PATH

COPY frontend /app/frontend
RUN npm install 

CMD ["npm", "start"]