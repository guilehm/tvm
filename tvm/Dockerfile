FROM node:18.12-alpine

WORKDIR /usr/app

COPY ./package*.json ./
RUN yarn install

COPY . .

