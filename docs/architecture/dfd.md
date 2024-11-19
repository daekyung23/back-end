# 데이터 흐름도 (DFD)

## 1. 컨텍스트 다이어그램 (Level 0)
```mermaid
flowchart TD
    User[사용자] --> |요청/응답| System[프린터 관리 시스템]
    Admin[관리자] --> |관리/설정| System
    Device[프린터] --> |상태/로그| System
```

## 2. 주요 프로세스 (Level 1)
```mermaid
flowchart TD
    User[사용자] --> |1. 로그인| Auth[인증]
    Auth --> |2. 토큰| User
    User --> |3. API 요청| Process[프로세스]
    Process --> |4. 데이터 조회| DB[(데이터베이스)]
    DB --> |5. 결과| Process
    Process --> |6. 응답| User
```

## 3. 승인 프로세스 (Level 2)
```mermaid
flowchart LR
    Req[요청자] -->|1. 승인요청| Process[승인프로세스]
    Process -->|2. 알림| Approver[승인자]
    Approver -->|3a. 승인| Process
    Approver -->|3b. 거절| Process
    Process -->|4. 결과통보| Req
    Process -->|5. 기록| DB[(데이터베이스)]
```

## 4. 장비 관리 프로세스 (Level 2)
```mermaid
flowchart TD
    Device[프린터] -->|1. 상태보고| Monitor[모니터링]
    Monitor -->|2. 로그저장| DB[(데이터베이스)]
    Monitor -->|3. 문제감지| Alert[알림]
    Alert -->|4. 알림발송| Admin[관리자]
    Admin -->|5. 조치| Device
```
