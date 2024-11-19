# 세중E&C 프린터 관리 시스템

## 📚 시스템 개요
세중E&C 프린터 및 콜 통합 관리 시스템입니다.

## 🚀 시작하기
- [설치 가이드](docs/getting-started.md)
- [환경 설정](docs/setup.md)

## 📂 시스템 구조
- [아키텍처](docs/architecture/README.md)
  - [데이터 흐름도](docs/architecture/dfd.md)
  - [ERD](docs/architecture/erd.md)

## 📌 주요 기능
- [사용자 관리](docs/features/user-management.md)
- [장비 관리](docs/features/device-management.md)
- [승인 프로세스](docs/features/approval-process.md)

## 🛠 개발 가이드
- [코딩 컨벤션](docs/dev/conventions.md)
- [API 문서](docs/api/README.md)
- [테스트 가이드](docs/dev/testing.md)

////////
# 프로젝트 설정 가이드

```

## 환경 설정
```bash
# 개발 환경 설정
npm install

# 환경변수 설정
cp .env.example .env
```

## 프로젝트 구조
```
.
├── src/
│   ├── config/         # 설정 파일
│   ├── controllers/    # 컨트롤러
│   ├── services/       # 비즈니스 로직
│   ├── entities/       # 엔티티 정의
│   ├── database/       # DB 관련 파일
│   │   ├── migrations/ # 마이그레이션 파일
│   │   └── views/      # View 정의
│   ├── middlewares/    # 미들웨어
│   └── utils/          # 유틸리티 함수
├── prisma/
│   ├── schema.prisma   # Prisma 스키마
│   └── migrations/     # 마이그레이션 파일들
├── docs/              # 문서
└── scripts/           # 유틸리티 스크립트
```


# 프론트 개발시 사용 명령어
```bash
# DB에 스키마 반영
npm run prisma:push

# DB백업 복구
npm run restore

# DB 시각화 도구 실행
npx prisma studio
```

# 백엔드 개발 전용 명령어
```bash
# Prisma 스키마 생성
npx prisma init

# Prisma 클라이언트 생성
npx prisma generate

# 마이그레이션 생성 (SQL 수동 추가용)
npx prisma migrate dev --create-only --name [마이그레이션_이름]

# 마이그레이션 실행
npx prisma migrate dev

# 프로덕션 마이그레이션 실행
npx prisma migrate deploy

# DB에서 스키마 가져오기
npx prisma db pull

# 디버그 모드로 DB 스키마 가져오기
DEBUG="prisma:*" npx prisma db pull

```

## NPM Scripts
```json
{
  "scripts": {
    "dev": "nodemon",
    "build": "tsc",
    "start": "node dist/index.js",
    "db:pull": "prisma db pull",
    "db:push": "prisma db push",
    "db:migrate": "prisma migrate dev",
    "db:deploy": "prisma migrate deploy",
    "db:studio": "prisma studio",
    "generate": "prisma generate"
  }
}
```

## Git Hooks (Husky)
```bash
# 커밋 전 린트 검사
npx husky add .husky/pre-commit "npm run lint"

# 푸시 전 테스트 실행
npx husky add .husky/pre-push "npm run test"
```

## 자주 사용하는 명령어
```bash
# 개발 서버 시작
npm run dev

# 프로덕션 빌드
npm run build

# DB 스키마 변경사항 적용
npm run db:migrate

# API 문서 생성 (만약 Swagger 사용시)
npm run docs:generate
```

## 환경변수 예시
```env
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