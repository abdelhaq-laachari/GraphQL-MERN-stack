FROM node:16.14.0-alpine 

WORKDIR /server

COPY package.json .

RUN npm install

COPY . .

EXPOSE 6000

CMD ["npm", "run", "start"]