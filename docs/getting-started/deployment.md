# 배포 가이드

## PM2 배포
```bash
npm run build
npm run start
```

# DATABASE_URL을 로컬용으로 덮어쓰기
DATABASE_URL="mysql://root:admin@localhost:3306/mydb" npx dotenv -e .env.development -- npx prisma migrate dev --create-only --name add_auto_increment