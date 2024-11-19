# 데이터 흐름도 (DFD)


## Level 0: 컨텍스트 다이어그램

```mermaid
# 데이터 흐름도 (DFD)

## Level 0: 컨텍스트 다이어그램

```mermaid
flowchart TD
    User((👤 일반사용자))
    Client((🏢 고객사))
    Receiver((📞 접수자))
    Admin((👨‍💼 관리자))
    Engineer((🔧 엔지니어))
    System[통합 관리 시스템]
    
    Client -->|장애신고| Receiver
    Receiver -->|콜등록/분배| System
    User -->|장비조회/승인요청| System
    Admin -->|시스템관리/승인| System
    Engineer -->|점검/설치/수리 정보입력| System
    
    System -->|알림/결과| User
    System -->|처리현황| Client
    System -->|콜현황/이력| Receiver
    System -->|현황/통계| Admin
    System -->|작업지시/이력| Engineer
```

## 2. 주요 프로세스 (Level 1)

```mermaid
flowchart TD
    User((사용자))
    Auth[인증 서비스]
    Process[비즈니스 로직]
    DB[(데이터베이스)]
    
    User --> |1.로그인| Auth
    Auth --> |2.토큰| User
    User --> |3.API요청| Process
    Process --> |4.조회| DB
    DB --> |5.결과| Process
    Process --> |6.응답| User
```

## 3. 승인 프로세스 (Level 2)

```mermaid
flowchart LR
    Req((요청자))
    Process[승인처리]
    Approver((승인자))
    DB[(데이터베이스)]
    
    Req -->|1.승인요청| Process
    Process -->|2.권한확인| DB
    DB -->|3.역할정보| Process
    Process -->|4.알림| Approver
    Approver -->|5a.승인| Process
    Approver -->|5b.거절| Process
    Process -->|6.상태저장| DB
    Process -->|7.결과통보| Req
    DB -->|8.이력조회| Process
```

## 4. 장비 관리 프로세스 (Level 2)

```mermaid
flowchart TD
    Device((프린터))
    Monitor[모니터링]
    DB[(데이터베이스)]
    Alert[알림서비스]
    Admin((관리자))
    
    Device -->|1.상태보고| Monitor
    Monitor -->|2.로그저장| DB
    Monitor -->|3.문제감지| Alert
    Alert -->|4.알림발송| Admin
    Admin -->|5.조치| Device
```