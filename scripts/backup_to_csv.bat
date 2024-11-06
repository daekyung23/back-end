@echo off
chcp 65001 >nul

REM 현재 디렉토리 확인 및 출력
echo Current Directory: %CD%

set "venv=%CD%\venv"

REM 가상환경 활성화
call "%venv%\Scripts\activate.bat"

REM UTF-8 모드 활성화 후 스크립트 실행
"%venv%\Scripts\python.exe" -X utf8 "%CD%\scripts\backup_to_csv.py"

REM 가상환경 비활성화
call "%venv%\Scripts\deactivate.bat"

REM 스크립트 완료 메시지
echo Python 스크립트가 완료되었습니다.
pause
