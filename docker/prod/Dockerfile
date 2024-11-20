FROM node:20.13.1-alpine as builder

# 빌드
WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM node:20.13.1-alpine
WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY package*.json ./

EXPOSE 3001

# 컨테이너 시작
CMD ["npm", "run", "serve:prod"]
