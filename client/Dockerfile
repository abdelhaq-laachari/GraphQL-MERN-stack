FROM node:16.14.0-alpine AS client

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

# Path: server\Dockerfile

FROM nginx:1.21.3-alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=client /app/build .

ENTRYPOINT ["nginx", "-g", "daemon off;"]