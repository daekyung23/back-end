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

### Git 설정
1. Git Hooks 설정:
```bash
npx husky install
```

2. 커밋 메시지 템플릿:
```
feat: 새로운 기능
fix: 버그 수정
docs: 문서 수정
style: 코드 포맷팅
refactor: 코드 리팩토링
test: 테스트 코드
chore: 기타 변경사항
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
1. 스키마 생성:
```bash
npx prisma init
```

2. 모델 정의 후 마이그레이션:
```bash
npx prisma migrate dev --name init
```