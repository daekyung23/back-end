# 배포 구성

## 개발 환경 구성

```mermaid
flowchart LR
    Dev[개발자 PC] -->|Push| Git[Git Repository]
    Git -->|Pull| Test[테스트 서버]
    Test -->|배포| Prod[운영 서버]
```

## 환경별 설정

### 1. 개발 환경 (Development)
- **URL**: http://localhost:3000
- **서버**: 개발자 로컬 PC
- **DB**: 로컬 MySQL
- **.env.development** 사용

### 2. 테스트 환경 (Test)
<!-- - **URL**: http://test.example.com:3000
- **서버**: 테스트 서버
- **DB**: 테스트용 DB
- **.env.test** 사용 -->

### 3. 운영 환경 (Production)
<!-- - **URL**: http://example.com:3000
- **서버**: 운영 서버
- **DB**: 운영 DB -->
- **.env.production** 사용

## 배포 프로세스

### 1. 코드 배포
```bash
# 소스 업데이트
git pull origin main

# 의존성 설치
npm install

# 빌드
npm run build

# 서버 재시작
pm2 restart app
```

### 2. DB 마이그레이션
```bash
# 마이그레이션 실행
npm run migrate

# 데이터 백업
npm run backup
```

<!-- ## 모니터링

### 1. 애플리케이션 모니터링
- PM2 모니터링
- 에러 로그 확인
- API 응답 시간 체크

### 2. 서버 모니터링
- CPU 사용량
- 메모리 사용량
- 디스크 사용량

### 3. DB 모니터링
- 커넥션 수
- 쿼리 성능
- 디스크 사용량 -->