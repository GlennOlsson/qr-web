FROM node:20-alpine

WORKDIR /app
COPY ./qr-site .

RUN echo $(pwd)
RUN ls

RUN npm install
RUN npm run build
