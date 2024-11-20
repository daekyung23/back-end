FROM node:20.13.1-alpine as builder

# 빌드
WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run raw:build

FROM node:20.13.1-alpine
WORKDIR /app

# 빌드 실행파일 복사
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY package*.json ./

# 스크립트 복사
COPY --from=builder /app/scripts ./scripts

# 백업용 프리즈마 스키마 복사
COPY --from=builder /app/prisma ./prisma

EXPOSE 3001

# 컨테이너 시작
CMD ["npm", "run", "raw:start"]
