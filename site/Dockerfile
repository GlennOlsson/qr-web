FROM node:24-alpine

WORKDIR /app
COPY ./qr-site .

RUN echo $(pwd)
RUN ls

RUN npm install
RUN npm run build
