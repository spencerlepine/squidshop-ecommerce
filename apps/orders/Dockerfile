FROM node:16

WORKDIR /app

ENV NODE_ENV=production

COPY package.json .
COPY yarn.lock .
RUN yarn global add pg && yarn install --production=true && yarn cache clean

COPY . .
CMD ["yarn", "run", "start"]