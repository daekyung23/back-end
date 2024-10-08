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
REM Set backup file path and current date/time (in non-Korean format)
for /f "skip=1 tokens=1" %%a in ('wmic os get localdatetime') do set datetime=%%a
set date=%datetime:~0,8%
set time=%datetime:~8,6%

REM Remove ":" from the time (not allowed in Windows file names)
set time=%time::=%

set backupDir=.\backup_data
set backupFile=%backupDir%\my_database_dump_%date%_%time%.sql

REM Create backup directory if it doesn't exist
if not exist %backupDir% (
    mkdir %backupDir%
    echo Backup directory created: %backupDir%
)

REM Execute MySQL dump command (include schema and data)
echo Performing backup...
%mysqlDumpPath% --host=%mysqlHost% --user=%mysqlUser% --password=%mysqlPassword% %databaseName% > %backupFile%

REM Check if the dump was successful
if %errorlevel% neq 0 (
    echo Backup failed. An error occurred.
) else (
    echo Backup completed successfully: %backupFile%
)

REM Keep the CMD window open for user input
pause
