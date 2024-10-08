@echo off
REM MySQL 접속 정보 설정
set mysqlHost=localhost
set mysqlUser=root
set mysqlPassword=admin
set databaseName=mydb

REM 백업 파일이 저장된 디렉토리 설정
set backupDir=.\backup_data

REM MySQL 설치 경로 (mysql.exe 파일의 전체 경로)
set mysqlPath="C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql.exe"

REM 최신 덤프 파일 찾기 (파일 이름에 날짜 및 시간이 포함된 형식)
set latestDumpFile=

for /f "tokens=*" %%i in ('dir /b /o-n %backupDir%\my_database_dump_*.sql 2^>nul') do (
    set latestDumpFile=%%i
    goto :found
)

:found
if "%latestDumpFile%"=="" (
    echo No backup file found.
    pause
    exit /b
)

set latestDumpFilePath=%backupDir%\%latestDumpFile%

echo Applying the most recent backup file to the database: %latestDumpFilePath%

REM 덤프 파일을 MySQL 데이터베이스에 적용
%mysqlPath% --host=%mysqlHost% --user=%mysqlUser% --password=%mysqlPassword% %databaseName% < "%latestDumpFilePath%"

REM 성공 여부 확인
if %errorlevel% neq 0 (
    echo Failed to apply the dump file. An error occurred.
) else (
    echo The dump file was successfully applied to the database: %latestDumpFilePath%
)

REM CMD 창을 유지하기 위해 사용자 입력 대기
pause
