FROM node:24-alpine

WORKDIR /app
COPY ./qr-site .

RUN npm install
RUN npm run build
