FROM node:12-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

CMD [ "npm", "run", "start" ]