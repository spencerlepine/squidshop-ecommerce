# stage1 - build react app first
FROM node:16-alpine as build
WORKDIR /app

ENV NODE_ENV=production
ENV PATH /app/node_modules/.bin:$PATH

COPY ./package.json /app/
COPY ./yarn.lock /app/
RUN yarn
COPY . /app
RUN yarn build && yarn cache clean

# stage 2 - build the final image and copy the react build files
FROM nginx:1.23.1
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]