# Docker 설치 가이드

## 📚 개요
세중E&C 프린터 관리 시스템의 Docker 설치 및 초기 설정 방법을 안내합니다.

## 🛠 설치 방법

### Windows
1. Docker Desktop 설치
   - [Docker Desktop for Windows](https://docs.docker.com/desktop/windows/install/) 다운로드
   - WSL2 설치 필요 (Windows 10/11)
   - 설치 후 재부팅

2. Docker Compose 설치
   - Docker Desktop에 기본 포함
   - 별도 설치 불필요

### Mac
1. Docker Desktop 설치
   - [Docker Desktop for Mac](https://docs.docker.com/desktop/mac/install/) 다운로드
   - Apple Silicon/Intel CPU 버전 선택
   - 설치 후 재시작

2. Docker Compose 설치
   - Docker Desktop에 기본 포함
   - 별도 설치 불필요

### Linux (Ubuntu)
"""
# Docker Engine 설치
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# 현재 사용자에게 권한 부여
sudo usermod -aG docker $USER

# Docker Compose 설치 (Linux 전용)
sudo curl -L "https://github.com/docker/compose/releases/download/v2.24.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
"""

## ✅ 설치 확인
"""
# Docker 버전 확인
docker --version
docker-compose --version

# 테스트 컨테이너 실행
docker run hello-world
"""

## 📋 시스템 요구사항
- Windows 10/11 Pro, Enterprise, Education (64-bit)
- macOS 12 이상
- Ubuntu 20.04/22.04 LTS
- 메모리 4GB 이상 권장
- CPU 가상화 지원 필요

## ⚠️ 주의사항
1. Windows Home 에디션은 WSL2 필수
2. Mac M1/M2는 ARM 버전 사용
3. Linux는 root 권한 필요

## 🔄 문서 업데이트
- 최근 업데이트: 2024-11-20
- 버전: 1.0.0