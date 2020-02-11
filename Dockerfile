FROM node:lts-alpine3.10

RUN apk add --update bash

WORKDIR /app 
COPY . . 

EXPOSE 3033

RUN npm install

RUN npm install -g serve

RUN npm run build

CMD ["serve", "-s","out","-l", "3033"] 