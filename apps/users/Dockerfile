FROM node:16-alpine

WORKDIR /app

ENV NODE_ENV=production

COPY package.json .
COPY yarn.lock .
RUN yarn install --production=true && yarn cache clean


COPY . .
CMD ["yarn", "run", "start"]