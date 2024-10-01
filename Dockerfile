FROM node:22-alpine

WORKDIR /app

COPY . . 

RUN npm i

RUN npm run swagger

CMD [ "node", "src/index.js" ]

EXPOSE 3000
