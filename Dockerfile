FROM node:12-alpine3.12

WORKDIR /app
COPY public /app/public
COPY src /app/src
COPY package.json /app/package.json

RUN npm install
CMD npm start