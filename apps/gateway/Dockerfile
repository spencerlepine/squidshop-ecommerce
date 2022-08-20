FROM node:16

WORKDIR /usr/src/app

ENV NODE_ENV=production

COPY package.json .
COPY yarn.lock .
RUN yarn install --production=true && yarn cache clean

COPY . .
EXPOSE 5000
CMD ["yarn", "run", "start"]