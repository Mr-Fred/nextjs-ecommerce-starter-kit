FROM node:lts-alpine as build-stage
RUN mkdir /app
COPY package.json /app/
WORKDIR /app
COPY . ./

ENV NEXT_PUBLIC_APP_URL=127.0.0.1

RUN npm install
RUN npm run build
EXPOSE 4000
CMD ["npm", "run","start"]