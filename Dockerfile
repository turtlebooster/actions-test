FROM node:14.19.1

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY frontend /app/frontend
RUN npm install 
RUN npm install react-scripts@3.0.1 -g

ENV HOST 0.0.0.0
EXPOSE 3000

CMD ["npm", "start"]