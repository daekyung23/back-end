@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

REM MySQL 서비스 이름 설정 (시스템의 서비스 이름에 따라 수정하세요)
set "mysqlServiceName=MySQL80"

REM MySQL 설정 파일 경로 찾기
set "mysqlIniPath="

REM 일반적인 경로에서 my.ini 파일 찾기
if exist "C:\ProgramData\MySQL\MySQL Server 8.0\my.ini" (
    set "mysqlIniPath=C:\ProgramData\MySQL\MySQL Server 8.0\my.ini"
) else if exist "C:\Program Files\MySQL\MySQL Server 8.0\my.ini" (
    set "mysqlIniPath=C:\Program Files\MySQL\MySQL Server 8.0\my.ini"
) else if exist "C:\MySQL\my.ini" (
    set "mysqlIniPath=C:\MySQL\my.ini"
) else (
    echo my.ini 파일을 찾을 수 없습니다.
    pause
    exit /b
)

echo MySQL 설정 파일 경로: "%mysqlIniPath%"

REM 설정 파일 백업
copy "%mysqlIniPath%" "%mysqlIniPath%.backup"
if errorlevel 1 (
    echo 설정 파일 백업에 실패했습니다.
    pause
    exit /b
) else (
    echo 설정 파일이 백업되었습니다: "%mysqlIniPath%.backup"
)

REM 설정 파일에서 local_infile 설정 수정 또는 제거
set "found_mysqld_section=0"
set "found_local_infile=0"

(
    for /f "usebackq delims=" %%a in ("%mysqlIniPath%") do (
        set "line=%%a"
        if "!line!"=="[mysqld]" (
            set "found_mysqld_section=1"
        )

        if "!found_mysqld_section!"=="1" (
            if "!line!"=="[mysqld]" (
                >>"%mysqlIniPath%.new" echo !line!
            ) else if /i "!line:~0,13!"=="local_infile=" (
                >>"%mysqlIniPath%.new" echo local_infile=0
                set "found_local_infile=1"
                echo local_infile 설정을 수정했습니다.
            ) else if "!line!"=="" (
                if "!found_local_infile!"=="0" (
                    >>"%mysqlIniPath%.new" echo local_infile=0
                    set "found_local_infile=1"
                    echo local_infile 설정을 추가했습니다.
                )
                >>"%mysqlIniPath%.new" echo !line!
                set "found_mysqld_section=0"
            ) else (
                >>"%mysqlIniPath%.new" echo !line!
            )
        ) else (
            >>"%mysqlIniPath%.new" echo !line!
        )
    )
) || (
    echo 설정 파일 수정 중 오류가 발생했습니다.
    pause
    exit /b
)

if "!found_local_infile!"=="0" (
    if "!found_mysqld_section!"=="1" (
        >>"%mysqlIniPath%.new" echo local_infile=0
        echo local_infile 설정을 추가했습니다.
    ) else (
        >>"%mysqlIniPath%.new" echo [mysqld]
        >>"%mysqlIniPath%.new" echo local_infile=0
        echo [mysqld] 섹션과 local_infile 설정을 추가했습니다.
    )
)

REM 기존 설정 파일 교체
move /y "%mysqlIniPath%.new" "%mysqlIniPath%"
if errorlevel 1 (
    echo 설정 파일 교체에 실패했습니다.
    pause
    exit /b
) else (
    echo 설정 파일이 성공적으로 수정되었습니다.
)

echo MySQL 서버를 재시작합니다.
net stop "%mysqlServiceName%"
if errorlevel 1 (
    echo MySQL 서비스를 중지하는 데 실패했습니다.
    pause
    exit /b
) else (
    echo MySQL 서비스가 중지되었습니다.
)

net start "%mysqlServiceName%"
if errorlevel 1 (
    echo MySQL 서비스를 시작하는 데 실패했습니다.
    pause
    exit /b
) else (
    echo MySQL 서비스가 시작되었습니다.
)

echo local_infile 옵션이 비활성화되었습니다.
pause
