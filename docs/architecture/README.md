# 시스템 아키텍처 문서

## 개요
이 문서는 프린터 통합 관리 시스템의 전체 아키텍처를 설명합니다.

## 문서 구조
아키텍처 문서는 다음 세 가지 관점에서 시스템을 설명합니다:

### 1. [시스템 구조](system/README.md)
- 물리적인 시스템 구성을 설명
- [인프라 구성](system/infrastructure.md)
  - 서버/네트워크 구성
  - 보안 구성
- [배포 구성](system/deployment.md)
  - 개발/운영 환경
  - 배포 프로세스

### 2. [서버 아키텍처](server/README.md)
- 소프트웨어 내부 구조를 설명
- [계층 구조](server/layers.md)
  - API Layer
  - Service Layer
  - Repository Layer
- [모듈 구성](server/modules.md)
  - 주요 모듈 설명
  - 의존성 관계
- [데이터베이스](server/database.md)
  - DB 스키마
  - 테이블 관계

### 3. [데이터 흐름](dfd/README.md)
- 비즈니스 프로세스와 데이터 흐름을 설명
- [시스템 컨텍스트](dfd/level-0/README.md)
- [주요 프로세스](dfd/level-1/README.md)
- [상세 프로세스](dfd/level-2/README.md)

## 기술 스택
- Frontend: React, JavaScript
- Backend: Node.js, Express, TypeScript
- Database: MySQL

## 시스템 요구사항
- 웹 브라우저 지원: Chrome
- 서버 환경: Node.js 18 이상
- 데이터베이스: MySQL 8.0 이상

## 보안 요구사항
- HTTPS 통신
- JWT 기반 인증