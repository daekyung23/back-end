FROM node:20.13.1-alpine

WORKDIR /app

RUN npm install -g tsx

COPY package*.json ./
RUN npm install

EXPOSE 3001

CMD ["npm", "run", "raw:dev:start"]
