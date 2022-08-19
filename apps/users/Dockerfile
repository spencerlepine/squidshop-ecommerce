FROM node:16

WORKDIR /app

ENV NODE_ENV=production

COPY package.json .
COPY yarn.lock .
RUN yarn global add pg
RUN yarn install --production=true

COPY . .
CMD ["yarn", "run", "start"]