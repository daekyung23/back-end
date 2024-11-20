# 아키텍처 문서

## 📚 개요
세중E&C 프린터 관리 시스템의 아키텍처 설계 문서입니다.

## 🏗 시스템 구조
1. [시스템 개요](overview.md)
2. [데이터베이스 설계](database/)
   - [스키마 설계](database/schema.md)
   - [뷰 설계](database/views.md)
3. [컴포넌트 구조](components/)

## 📊 주요 구성요소
- Frontend: React.js
- Backend: Node.js + Express
- Database: MySQL
- ORM: Prisma
- Container: Docker

## 🔀 데이터 흐름
- HTTP/REST API
- WebSocket (실시간 알림)
- 데이터베이스 트랜잭션

## 🔄 문서 업데이트
- 최근 업데이트: 2024-11-20
- 버전: 1.0.0 