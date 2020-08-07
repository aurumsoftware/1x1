FROM node:12-alpine

RUN mkdir /home/node/app/ && chown -R node:node /home/node/app

WORKDIR /home/node/app
COPY package.json ./
USER node
RUN npm install --silent

COPY . ./

RUN npm run build:client
RUN npm run build:server

CMD ["npm", "run", "start"]