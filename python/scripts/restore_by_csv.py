import mysql.connector
import os
import json
import csv
import subprocess

def get_db_connection(host, user, password, database=None):
    return mysql.connector.connect(
        host=host,
        user=user,
        password=password,
        database=database,
        charset='utf8mb4'
    )

def create_database_if_not_exists(connection, database_name):
    cursor = connection.cursor()
    try:
        cursor.execute(f"CREATE DATABASE IF NOT EXISTS `{database_name}` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;")
        print(f"Database '{database_name}' checked/created successfully.")
    except mysql.connector.Error as err:
        print(f"Error creating database '{database_name}': {err}")
    finally:
        cursor.close()

def recreate_table_from_schema(connection, table_name, schema_file):
    cursor = connection.cursor()
    try:
        with open(schema_file, 'r', encoding='utf-8-sig') as f:
            schema = json.load(f)

        cursor.execute(f"DROP TABLE IF EXISTS `{table_name}`")
        create_table_sql = f"CREATE TABLE `{table_name}` ("

        column_definitions = []
        for column in schema:
            column_definition = f"`{column['Field']}` {column['Type']}"
            if column['Null'] == 'NO':
                column_definition += " NOT NULL"
            if column['Key'] == 'PRI':
                column_definition += " PRIMARY KEY"
            if column['Extra']:
                column_definition += f" {column['Extra']}"
            column_definitions.append(column_definition)
        
        create_table_sql += ", ".join(column_definitions) + ")"
        cursor.execute(create_table_sql)
        print(f"Table '{table_name}' recreated successfully.")
    except mysql.connector.Error as err:
        print(f"Error recreating table '{table_name}': {err}")
    finally:
        cursor.close()

def import_csv_to_db(connection, table_name, csv_file):
    cursor = connection.cursor()
    try:
        with open(csv_file, 'r', encoding='utf-8-sig') as f:
            reader = csv.reader(f)
            columns = next(reader)  # 첫 번째 행은 열 이름

            for row in reader:
                # 빈 값이 있는 경우 NULL로 변환
                row = [None if col == '' or col == '\\N' else col for col in row]
                
                placeholders = ', '.join(['%s'] * len(row))
                sql = f"INSERT INTO `{table_name}` ({', '.join(columns)}) VALUES ({placeholders})"
                cursor.execute(sql, row)
        
        connection.commit()
        print(f"Data for '{table_name}' imported successfully from {csv_file}.")
    except mysql.connector.Error as err:
        print(f"Error importing data for table '{table_name}': {err}")
    finally:
        cursor.close()


def restore_db_structure(db_config, dump_file):
    mysql_path = r"C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql.exe"  # mysql의 경로를 지정
    command = f'"{mysql_path}" --host={db_config["host"]} --user={db_config["user"]} --password={db_config["password"]} {db_config["database"]} < "{dump_file}"'
    print(f"Executing: {command}")
    subprocess.run(command, shell=True, check=True)
    print("Database structure restored successfully.")

def main():
    db_config = {
        'host': 'localhost',
        'user': 'root',
        'password': 'admin',
        'database': 'mydb'
    }

    # 백업 데이터가 저장된 폴더 경로
    backup_base_dir = os.path.join(os.getcwd(), 'backup_data_csv')
    latest_backup_dir = max([os.path.join(backup_base_dir, d) for d in os.listdir(backup_base_dir) if os.path.isdir(os.path.join(backup_base_dir, d))], key=os.path.getmtime)
    
    print(f"Restoring from backup directory: {latest_backup_dir}")

    # DB 연결 (데이터베이스 없이 먼저 연결하여 DB 생성)
    connection = get_db_connection(db_config['host'], db_config['user'], db_config['password'])
    create_database_if_not_exists(connection, db_config['database'])

    # DB 연결 (데이터베이스 포함)
    connection = get_db_connection(db_config['host'], db_config['user'], db_config['password'], db_config['database'])

    # DB 구조 복원 (덤프 파일)
    dump_file = os.path.join(latest_backup_dir, 'mydb_schema_dump.sql')
    restore_db_structure(db_config, dump_file)

    # 각 테이블의 스키마와 데이터를 복구
    for file_name in os.listdir(latest_backup_dir):
        if file_name.endswith('_schema.json'):
            table_name = file_name.replace('_schema.json', '')
            schema_file = os.path.join(latest_backup_dir, file_name)
            csv_file = os.path.join(latest_backup_dir, f"{table_name}.csv")

            # 테이블 재생성
            recreate_table_from_schema(connection, table_name, schema_file)
            
            # CSV 데이터를 데이터베이스에 삽입
            if os.path.exists(csv_file):
                import_csv_to_db(connection, table_name, csv_file)
            else:
                print(f"CSV file not found for table '{table_name}'")

    connection.close()
    print("Database restoration completed.")

if __name__ == "__main__":
    main()
