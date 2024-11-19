# 설치 가이드

## 사전 요구사항
- Node.js 18.0.0 이상
- MySQL 8.0 이상
- npm 또는 yarn

## 설치 단계

### 1. 저장소 복제
```bash
git clone https://github.com/daekyung23/back-end.git
cd back-end
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 환경 변수 설정
`.env` 파일을 생성하고 다음 내용을 추가합니다:
```bash
# .env
# LOGGING
ENABLE_LOGGING=true
ENABLE_REQUEST_LOGGING=true
ENABLE_REQUEST_BODY_LOGGING=true
ENABLE_RESPONSE_LOGGING=true
ENABLE_RESPONSE_BODY_LOGGING=true

# DB development
DB_HOST_DEV=localhost
DB_PORT_DEV=3306
DB_USER_DEV=root
DB_PASSWORD_DEV=admin
DB_NAME_DEV=mydb

# DB production
DB_HOST_PROD=localhost
DB_PORT_PROD=3306
DB_USER_PROD=root
DB_PASSWORD_PROD=admin
DB_NAME_PROD=mydb

# PRISMA
DATABASE_URL=mysql://${DB_USER_DEV}:${DB_PASSWORD_DEV}@${DB_HOST_DEV}:${DB_PORT_DEV}/${DB_NAME_DEV}
```

### 4. 데이터베이스 마이그레이션
```bash
npx prisma migrate dev
```

### 5. 서버 실행
```bash
npm run dev
```