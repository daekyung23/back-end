# 프로젝트 설정 가이드

## 환경 설정
```bash
# 개발 환경 설정
npm install

# 환경변수 설정
cp .env.example .env
```

## Path Aliases
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@config/*": ["src/config/*"],
      "@entities/*": ["src/entities/*"],
      "@services/*": ["src/services/*"],
      "@controllers/*": ["src/controllers/*"],
      "@middlewares/*": ["src/middlewares/*"],
      "@utils/*": ["src/utils/*"],
      "@database/*": ["src/database/*"]
    }
  }
}
```

## Database 관련 명령어
```bash
# Prisma 스키마 생성
npx prisma init

# DB에서 스키마 가져오기
npx prisma db pull

# Prisma 클라이언트 생성
npx prisma generate

# 마이그레이션 생성 (SQL 수동 추가용)
npx prisma migrate dev --create-only --name [마이그레이션_이름]

# 마이그레이션 실행
npx prisma migrate dev

# 프로덕션 마이그레이션 실행
npx prisma migrate deploy

# DB 시각화 도구 실행
npx prisma studio
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
# Database
DATABASE_URL="mysql://user:password@localhost:3306/mydb"

# Server
PORT=3000
NODE_ENV=development

# JWT
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=24h
```