FROM node:16

WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn global add pg
RUN yarn install --production=true

COPY . .
CMD ["yarn", "run", "start"]