FROM node:10-alpine

WORKDIR /app 
COPY . . 

EXPOSE 3033

RUN npm install 

RUN npm install -g serve

RUN npm rebuild node-sass

RUN npm run build

CMD ["serve","-s", "build", "-l", "3033"] 