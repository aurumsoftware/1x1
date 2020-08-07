FROM node:12-alpine

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin

RUN mkdir /home/node/app/ && chown -R node:node /home/node/app

WORKDIR /home/node/app
COPY package.json ./
USER node
RUN npm install --silent
RUN npm install serve -g

COPY . ./

RUN npm run build:client
RUN npm run build:server

CMD ["npm", "run", "start"]