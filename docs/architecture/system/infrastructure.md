# 인프라 구성

## 네트워크 구성도

"""mermaid
flowchart TD
    subgraph Private[프라이빗 존]
        Server[애플리케이션 서버]
        DB[(데이터베이스)]
    end
    
    Client([사용자]) -->|HTTPS :443| Server
    Server -->|TCP :3306| DB
"""

## 서버 사양
### 애플리케이션 서버
- **OS**: Ubuntu 20.04 LTS
<!-- - **CPU**: 4 cores
- **Memory**: 16GB
- **Disk**: 100GB SSD -->
- **Node.js**: 18.x

### 데이터베이스 서버
- **OS**: Ubuntu 20.04 LTS
<!-- - **CPU**: 4 cores
- **Memory**: 16GB
- **Disk**: 500GB SSD -->
- **MySQL**: 8.0

## 네트워크 구성
### 포트 설정
- **3000**: HTTPS (웹 서비스)
- **3001**: Server
- **3306**: MySQL
<!-- - **22**: SSH (관리용) -->

### 보안 설정
<!-- - SSH 키 기반 접속
- 방화벽 (UFW) 설정 -->
- HTTPS 인증서 적용

## 백업 정책
### 데이터베이스
<!-- - 일간 전체 백업
- 트랜잭션 로그 백업 (시간단위)
- 백업 보관 기간: 30일 -->

### 애플리케이션
- 소스코드: Git 저장소
- 환경설정: 별도 백업
<!-- - 로그: 일단위 로테이션 -->