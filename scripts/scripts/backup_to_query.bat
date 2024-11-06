@echo off
REM MySQL backup information
set mysqlHost=localhost
set mysqlUser=root
set mysqlPassword=admin
set databaseName=mydb

REM MySQL installation path check for both C: and E:
if exist "C:\Program Files\MySQL\MySQL Server 8.0\bin\mysqldump.exe" (
    set mysqlDumpPath="C:\Program Files\MySQL\MySQL Server 8.0\bin\mysqldump.exe"
    echo MySQL found on C drive.
) else if exist "E:\Program Files\MySQL\MySQL Server 8.0\bin\mysqldump.exe" (
    set mysqlDumpPath="E:\Program Files\MySQL\MySQL Server 8.0\bin\mysqldump.exe"
    echo MySQL found on E drive.
) else (
    echo MySQL installation not found on C: or E: drive.
    pause
    exit /b
)

REM 현재 날짜 가져오기 (YYYYMMDD 형식)
for /f %%a in ('powershell -NoProfile -Command "Get-Date -Format yyyyMMdd"') do set "date=%%a"

REM 현재 시간 가져오기 (HHMMSS 형식)
for /f %%a in ('powershell -NoProfile -Command "Get-Date -Format HHmmss"') do set "time=%%a"

set "backupDir=%CD%\..\backup_data_query"
set "backupFile=%backupDir%\my_database_dump_%date%_%time%.sql"

REM Create backup directory if it doesn't exist
if not exist "%backupDir%" (
    mkdir "%backupDir%"
    echo Backup directory created: "%backupDir%"
)

REM Execute MySQL dump command (include schema and data)
echo Performing backup...
%mysqlDumpPath% --host=%mysqlHost% --user=%mysqlUser% --password=%mysqlPassword% %databaseName% > "%backupFile%"

REM Check if the dump was successful
if %errorlevel% neq 0 (
    echo Backup failed. An error occurred.
) else (
    echo Backup completed successfully: "%backupFile%"
)

REM Keep the CMD window open for user input
pause
