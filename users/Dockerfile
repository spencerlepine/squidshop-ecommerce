FROM node:16

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .
RUN yarn install --production=true

COPY . .
CMD ["yarn", "run", "start"]