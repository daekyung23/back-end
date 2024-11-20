# 설치 가이드

## 📚 개요
세중E&C 프린터 관리 시스템의 설치 과정을 안내합니다.

## 📋 사전 준비

### 개발 환경 설정
1. Docker Desktop 설치
   - [Windows/Mac 설치 가이드](https://docs.docker.com/desktop/)
   - Linux: 
   """bash
   curl -fsSL https://get.docker.com -o get-docker.sh
   sudo sh get-docker.sh
   sudo usermod -aG docker $USER  # 현재 사용자에게 권한 부여
   """

2. Git 설치
   - [Windows 설치 가이드](https://git-scm.com/download/win)
   - Linux: `sudo apt-get install git`
   - Mac: `brew install git`

### 운영 환경 설정
1. Docker Engine 설치 (Linux 서버)
"""bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
"""

2. Docker Compose 설치
"""bash
sudo curl -L "https://github.com/docker/compose/releases/download/v2.24.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
"""

## 🚀 프로젝트 설치
1. 저장소 복제
"""bash
git clone [repository-url]
cd [project-name]
"""

2. 환경 설정 파일 생성
"""bash
# 개발 환경
cp .env.example .env.development

# 운영 환경
cp .env.example .env.production
"""

## ✅ 설치 확인
"""bash
# Docker 버전 확인
docker --version
docker-compose --version

# 개발 환경 실행 테스트
docker-compose -f docker-compose.dev.yml up -d

# 운영 환경 실행 테스트
docker-compose -f docker-compose.prod.yml up -d
"""

## 🔄 문서 업데이트
- 최근 업데이트: 2024-11-20
- 버전: 1.0.0