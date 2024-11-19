# 환경 설정 가이드

## 개발 환경 설정

### IDE 설정
VS Code를 사용하는 경우 다음 확장 프로그램을 설치하는 것을 권장합니다:
- Prisma (prisma.prisma)
- ESLint
- Prettier

### 코드 포매팅 설정
1. `.prettierrc` 설정:
```json
{
  "semi": true,
  "trailingComma": "all",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2
}
```
## 데이터베이스 설정

### MySQL 설정
1. 데이터베이스 생성:
```sql
CREATE DATABASE mydb;
```

2. 사용자 생성 및 권한 부여:
```sql
CREATE USER 'user'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON mydb.* TO 'user'@'localhost';
FLUSH PRIVILEGES;
```

### Prisma 설정
1. 스키마 적용:
```bash
# DB 동기화
npm run prisma:push

# Prisma 클라이언트 생성
npm run prisma:generate
```

### Backup Data 적용
```bash
npm run restore
```