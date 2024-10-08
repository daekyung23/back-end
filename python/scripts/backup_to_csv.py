import mysql.connector
import subprocess
import os
import csv
import json
from datetime import datetime

def get_db_connection(host, user, password, database):
    return mysql.connector.connect(
        host=host,
        user=user,
        password=password,
        database=database,
        charset='utf8mb4'
    )

def backup_db_structure(db_config, dump_file):
    # mysqldump 절대 경로 설정 (C 또는 E 드라이브에 MySQL이 설치된 경로)
    mysql_dump_path_c = r'C:\Program Files\MySQL\MySQL Server 8.0\bin\mysqldump.exe'
    mysql_dump_path_e = r'E:\Program Files\MySQL\MySQL Server 8.0\bin\mysqldump.exe'
    
    # mysqldump 경로 확인
    if os.path.exists(mysql_dump_path_c):
        mysqldump = mysql_dump_path_c
    elif os.path.exists(mysql_dump_path_e):
        mysqldump = mysql_dump_path_e
    else:
        raise FileNotFoundError("mysqldump.exe not found on C or E drive.")

    # mysqldump 명령어 실행
    command = f'"{mysqldump}" --host={db_config["host"]} --user={db_config["user"]} --password={db_config["password"]} --routines --triggers --events --no-data {db_config["database"]} > "{dump_file}"'
    
    # 명령어 실행
    subprocess.run(command, shell=True, check=True)

def backup_table_to_csv(connection, table_name, backup_dir):
    cursor = connection.cursor()
    try:
        cursor.execute(f"SELECT * FROM `{table_name}`")
        rows = cursor.fetchall()
        field_names = [i[0] for i in cursor.description]

        csv_file_path = os.path.join(backup_dir, f"{table_name}.csv")
        with open(csv_file_path, 'w', encoding='utf-8-sig', newline='') as f:  # BOM 포함 저장
            writer = csv.writer(f)
            writer.writerow(field_names)  # 헤더 쓰기
            writer.writerows(rows)  # 데이터 행 쓰기
        print(f"Table {table_name} backed up to {csv_file_path}")
    except mysql.connector.Error as err:
        print(f"Error backing up table {table_name}: {err}")
    finally:
        cursor.close()

def backup_schema_to_json(connection, table_name, schema_dir):
    cursor = connection.cursor()
    try:
        cursor.execute(f"DESCRIBE `{table_name}`")
        schema_info = cursor.fetchall()

        schema_file_path = os.path.join(schema_dir, f"{table_name}_schema.json")
        schema_data = [{"Field": row[0], "Type": row[1], "Null": row[2], "Key": row[3], "Default": row[4], "Extra": row[5]} for row in schema_info]

        with open(schema_file_path, 'w', encoding='utf-8') as f:
            json.dump(schema_data, f, ensure_ascii=False, indent=4)
        print(f"Schema for {table_name} saved to {schema_file_path}")
    except mysql.connector.Error as err:
        print(f"Error backing up schema for table {table_name}: {err}")
    finally:
        cursor.close()

def main():
    # DB 연결 설정
    db_config = {
        'host': 'localhost',
        'user': 'root',
        'password': 'admin',
        'database': 'mydb'
    }

    # 백업 파일 이름에 타임스탬프 추가
    timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
    backup_dir = os.path.join(os.getcwd(), f'backup_data_csv/mydb_{timestamp}')
    
    # 백업 디렉토리 생성
    os.makedirs(backup_dir, exist_ok=True)

    # DB 연결
    connection = get_db_connection(db_config['host'], db_config['user'], db_config['password'], db_config['database'])

    # 데이터베이스 스키마 백업 (mysqldump 사용)
    dump_file = os.path.join(backup_dir, 'mydb_schema_dump.sql')
    backup_db_structure(db_config, dump_file)

    # 테이블 목록 가져오기 (시스템 테이블과 뷰는 제외)
    cursor = connection.cursor()
    cursor.execute("SHOW FULL TABLES WHERE Table_Type = 'BASE TABLE'")
    tables = cursor.fetchall()

    # 각 테이블의 데이터와 스키마 백업
    for (table_name, table_type) in tables:
        backup_table_to_csv(connection, table_name, backup_dir)
        backup_schema_to_json(connection, table_name, backup_dir)

    connection.close()
    print(f"Backup completed successfully in {backup_dir}.")

if __name__ == "__main__":
    main()
