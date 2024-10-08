-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: mydb
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `approval_role`
--

DROP TABLE IF EXISTS `approval_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `approval_role` (
  `role_id` int NOT NULL,
  `role_name` varchar(45) NOT NULL,
  `upper_role_id` int DEFAULT NULL,
  PRIMARY KEY (`role_id`),
  KEY `fk_approval_role_approval_role1_idx` (`upper_role_id`),
  CONSTRAINT `fk_approval_role_approval_role1` FOREIGN KEY (`upper_role_id`) REFERENCES `approval_role` (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `approval_role`
--

LOCK TABLES `approval_role` WRITE;
/*!40000 ALTER TABLE `approval_role` DISABLE KEYS */;
/*!40000 ALTER TABLE `approval_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `call`
--

DROP TABLE IF EXISTS `call`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `call` (
  `call_id` int NOT NULL,
  `call_type_id` int NOT NULL,
  `client_branch_id` int NOT NULL,
  `requester_name` varchar(50) NOT NULL,
  `requester_num` varchar(20) NOT NULL,
  `requester_black_consumer` tinyint NOT NULL DEFAULT '0',
  `device_id` int DEFAULT NULL,
  `detail` varchar(200) NOT NULL,
  `state` varchar(45) NOT NULL,
  `received_at` timestamp NOT NULL,
  `receiver_id` int NOT NULL,
  `transferred_at` timestamp NULL DEFAULT NULL,
  `transferred_dept_id` int DEFAULT NULL,
  `assigner_id` int DEFAULT NULL,
  `completed_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`call_id`),
  KEY `fk_call_device1_idx` (`device_id`),
  KEY `fk_call_call_type1_idx` (`call_type_id`),
  KEY `fk_call_client_branch1_idx` (`client_branch_id`),
  KEY `fk_call_dept1_idx` (`transferred_dept_id`),
  KEY `fk_call_user1_idx` (`receiver_id`),
  KEY `fk_call_user2_idx` (`assigner_id`),
  CONSTRAINT `fk_call_call_type1` FOREIGN KEY (`call_type_id`) REFERENCES `call_type` (`call_type_id`),
  CONSTRAINT `fk_call_client_branch1` FOREIGN KEY (`client_branch_id`) REFERENCES `client_branch` (`client_branch_id`),
  CONSTRAINT `fk_call_dept1` FOREIGN KEY (`transferred_dept_id`) REFERENCES `dept` (`dept_id`),
  CONSTRAINT `fk_call_device1` FOREIGN KEY (`device_id`) REFERENCES `device` (`device_id`),
  CONSTRAINT `fk_call_user1` FOREIGN KEY (`receiver_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `fk_call_user2` FOREIGN KEY (`assigner_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `call`
--

LOCK TABLES `call` WRITE;
/*!40000 ALTER TABLE `call` DISABLE KEYS */;
/*!40000 ALTER TABLE `call` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `call_type`
--

DROP TABLE IF EXISTS `call_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `call_type` (
  `call_type_id` int NOT NULL,
  `call_type_name` varchar(50) NOT NULL,
  `parent_call_type_id` int DEFAULT NULL,
  PRIMARY KEY (`call_type_id`),
  KEY `fk_call_type_call_type1_idx` (`parent_call_type_id`),
  CONSTRAINT `fk_call_type_call_type1` FOREIGN KEY (`parent_call_type_id`) REFERENCES `call_type` (`call_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `call_type`
--

LOCK TABLES `call_type` WRITE;
/*!40000 ALTER TABLE `call_type` DISABLE KEYS */;
/*!40000 ALTER TABLE `call_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `client`
--

DROP TABLE IF EXISTS `client`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `client` (
  `client_id` int NOT NULL,
  `parent_client_id` int DEFAULT NULL,
  `default_client_branch_rate_id` int DEFAULT NULL,
  `client_name` varchar(45) NOT NULL,
  `remote_support` tinyint DEFAULT NULL,
  `push_alert` tinyint DEFAULT NULL,
  PRIMARY KEY (`client_id`),
  KEY `fk_client_client1_idx` (`parent_client_id`),
  KEY `fk_client_client_branch_rate1_idx` (`default_client_branch_rate_id`),
  CONSTRAINT `fk_client_client1` FOREIGN KEY (`parent_client_id`) REFERENCES `client` (`client_id`),
  CONSTRAINT `fk_client_client_branch_rate1` FOREIGN KEY (`default_client_branch_rate_id`) REFERENCES `client_rate` (`client_rate_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client`
--

LOCK TABLES `client` WRITE;
/*!40000 ALTER TABLE `client` DISABLE KEYS */;
/*!40000 ALTER TABLE `client` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `client_branch`
--

DROP TABLE IF EXISTS `client_branch`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `client_branch` (
  `client_branch_id` int NOT NULL,
  `sigungu_id` int NOT NULL,
  `mgmt_dept_id` int NOT NULL,
  `client_id` int NOT NULL,
  `client_branch_name` varchar(100) NOT NULL,
  `client_branch_rate_id` int NOT NULL,
  `branch_mgr_name` varchar(45) DEFAULT NULL,
  `branch_mgr_mobile_num` varchar(45) DEFAULT NULL,
  `branch_mgr_office_num` varchar(45) DEFAULT NULL,
  `branch_mgr_email` varchar(45) DEFAULT NULL,
  `is_active` tinyint NOT NULL DEFAULT '1',
  PRIMARY KEY (`client_branch_id`),
  KEY `fk_client_branch_dept1_idx` (`mgmt_dept_id`),
  KEY `fk_client_branch_client1_idx` (`client_id`),
  KEY `fk_client_branch_sigungu1_idx` (`sigungu_id`),
  KEY `fk_client_branch_client_branch_rate1_idx` (`client_branch_rate_id`),
  CONSTRAINT `fk_client_branch_client1` FOREIGN KEY (`client_id`) REFERENCES `client` (`client_id`),
  CONSTRAINT `fk_client_branch_client_branch_rate1` FOREIGN KEY (`client_branch_rate_id`) REFERENCES `client_rate` (`client_rate_id`),
  CONSTRAINT `fk_client_branch_dept1` FOREIGN KEY (`mgmt_dept_id`) REFERENCES `dept` (`dept_id`),
  CONSTRAINT `fk_client_branch_sigungu1` FOREIGN KEY (`sigungu_id`) REFERENCES `sigungu` (`sigungu_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client_branch`
--

LOCK TABLES `client_branch` WRITE;
/*!40000 ALTER TABLE `client_branch` DISABLE KEYS */;
/*!40000 ALTER TABLE `client_branch` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `client_rate`
--

DROP TABLE IF EXISTS `client_rate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `client_rate` (
  `client_rate_id` int NOT NULL,
  `rate_type` varchar(10) NOT NULL,
  `rate_detail` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`client_rate_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client_rate`
--

LOCK TABLES `client_rate` WRITE;
/*!40000 ALTER TABLE `client_rate` DISABLE KEYS */;
/*!40000 ALTER TABLE `client_rate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `consumable_model`
--

DROP TABLE IF EXISTS `consumable_model`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `consumable_model` (
  `consumable_model_id` int NOT NULL,
  `manufacturer` varchar(100) NOT NULL,
  `consumable_name` varchar(100) NOT NULL,
  `consumable_type` varchar(100) NOT NULL,
  PRIMARY KEY (`consumable_model_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consumable_model`
--

LOCK TABLES `consumable_model` WRITE;
/*!40000 ALTER TABLE `consumable_model` DISABLE KEYS */;
/*!40000 ALTER TABLE `consumable_model` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `deleteneeded`
--

DROP TABLE IF EXISTS `deleteneeded`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `deleteneeded` (
  `id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `deleteneeded`
--

LOCK TABLES `deleteneeded` WRITE;
/*!40000 ALTER TABLE `deleteneeded` DISABLE KEYS */;
/*!40000 ALTER TABLE `deleteneeded` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dept`
--

DROP TABLE IF EXISTS `dept`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dept` (
  `dept_id` int NOT NULL,
  `parent_dept_id` int DEFAULT NULL,
  `dept_name` varchar(100) NOT NULL,
  PRIMARY KEY (`dept_id`),
  KEY `fk_dept_dept1_idx` (`parent_dept_id`),
  CONSTRAINT `fk_dept_dept1` FOREIGN KEY (`parent_dept_id`) REFERENCES `dept` (`dept_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dept`
--

LOCK TABLES `dept` WRITE;
/*!40000 ALTER TABLE `dept` DISABLE KEYS */;
INSERT INTO `dept` VALUES (0,NULL,'개발용부서'),(1,0,'개발팀'),(10000004,NULL,'세중네트웍스'),(10000041,10000004,'영남팀'),(10000042,10000004,'강남팀'),(10000043,10000004,'강서팀'),(10000044,10000004,'강북팀'),(10000045,10000004,'2팀'),(10000046,10000004,'3팀'),(10000047,10000004,'4팀'),(10000048,10000004,'중부팀'),(10000049,10000004,'드라이버팀'),(10000050,10000004,'소모품팀'),(10000051,10000004,'드라이버'),(10000052,10000004,'TS추진팀');
/*!40000 ALTER TABLE `dept` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `device`
--

DROP TABLE IF EXISTS `device`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `device` (
  `device_id` int NOT NULL,
  `device_model_id` int NOT NULL,
  `owner_dept_id` int NOT NULL,
  `mgmt_dept_id` int NOT NULL,
  `serial` varchar(50) NOT NULL,
  `regi_date` date NOT NULL,
  `mac` varchar(50) NOT NULL,
  `last_inspection_log_id` int DEFAULT NULL,
  `last_location_log_id` int DEFAULT NULL,
  `status_id` int NOT NULL,
  PRIMARY KEY (`device_id`),
  KEY `fk_device_device_model1_idx` (`device_model_id`),
  KEY `fk_device_dept1_idx` (`owner_dept_id`),
  KEY `fk_device_dept2_idx` (`mgmt_dept_id`),
  KEY `fk_device_inspection_log1_idx` (`last_inspection_log_id`),
  KEY `fk_device_device_location_log1_idx` (`last_location_log_id`),
  KEY `fk_device_device_condition1_idx` (`status_id`),
  CONSTRAINT `fk_device_dept1` FOREIGN KEY (`owner_dept_id`) REFERENCES `dept` (`dept_id`),
  CONSTRAINT `fk_device_dept2` FOREIGN KEY (`mgmt_dept_id`) REFERENCES `dept` (`dept_id`),
  CONSTRAINT `fk_device_device_condition1` FOREIGN KEY (`status_id`) REFERENCES `device_status` (`status_id`),
  CONSTRAINT `fk_device_device_location_log1` FOREIGN KEY (`last_location_log_id`) REFERENCES `device_location_log` (`device_location_log_id`),
  CONSTRAINT `fk_device_device_log1` FOREIGN KEY (`last_inspection_log_id`) REFERENCES `device_inspection_log` (`device_inspection_log_id`),
  CONSTRAINT `fk_device_device_model1` FOREIGN KEY (`device_model_id`) REFERENCES `device_model` (`device_model_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `device`
--

LOCK TABLES `device` WRITE;
/*!40000 ALTER TABLE `device` DISABLE KEYS */;
/*!40000 ALTER TABLE `device` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `device_approval`
--

DROP TABLE IF EXISTS `device_approval`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `device_approval` (
  `approval_id` int NOT NULL,
  `approval_type_id` int NOT NULL,
  `sub_approval_id` int DEFAULT NULL,
  `requester_id` int NOT NULL,
  `request_at` timestamp NOT NULL,
  `approver_role_id` int NOT NULL,
  `origin_location_id` int DEFAULT NULL,
  `destination_location_id` int DEFAULT NULL,
  `approver_id` int DEFAULT NULL,
  `approve_at` timestamp NULL DEFAULT NULL,
  `is_approved` tinyint DEFAULT NULL,
  PRIMARY KEY (`approval_id`),
  KEY `fk_approval_approver_group1_idx` (`approver_role_id`),
  KEY `fk_device_approval_device_approval_type1_idx` (`approval_type_id`),
  KEY `fk_device_approval_location1_idx` (`origin_location_id`),
  KEY `fk_device_approval_location2_idx` (`destination_location_id`),
  KEY `fk_device_approval_user1_idx` (`requester_id`),
  KEY `fk_device_approval_user2_idx` (`approver_id`),
  KEY `fk_device_approval_device_approval1_idx` (`sub_approval_id`),
  CONSTRAINT `fk_approval_approver_group1` FOREIGN KEY (`approver_role_id`) REFERENCES `approval_role` (`role_id`),
  CONSTRAINT `fk_device_approval_device_approval1` FOREIGN KEY (`sub_approval_id`) REFERENCES `device_approval` (`approval_id`),
  CONSTRAINT `fk_device_approval_device_approval_type1` FOREIGN KEY (`approval_type_id`) REFERENCES `device_approval_type` (`approval_type_id`),
  CONSTRAINT `fk_device_approval_location1` FOREIGN KEY (`origin_location_id`) REFERENCES `location` (`location_id`),
  CONSTRAINT `fk_device_approval_location2` FOREIGN KEY (`destination_location_id`) REFERENCES `location` (`location_id`),
  CONSTRAINT `fk_device_approval_user1` FOREIGN KEY (`requester_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `fk_device_approval_user2` FOREIGN KEY (`approver_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `device_approval`
--

LOCK TABLES `device_approval` WRITE;
/*!40000 ALTER TABLE `device_approval` DISABLE KEYS */;
/*!40000 ALTER TABLE `device_approval` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `device_approval_type`
--

DROP TABLE IF EXISTS `device_approval_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `device_approval_type` (
  `approval_type_id` int NOT NULL,
  `approval_type_name` varchar(45) NOT NULL,
  PRIMARY KEY (`approval_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `device_approval_type`
--

LOCK TABLES `device_approval_type` WRITE;
/*!40000 ALTER TABLE `device_approval_type` DISABLE KEYS */;
/*!40000 ALTER TABLE `device_approval_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `device_consumable_compatibility`
--

DROP TABLE IF EXISTS `device_consumable_compatibility`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `device_consumable_compatibility` (
  `device_model_id` int NOT NULL,
  `consumable_model_id` int NOT NULL,
  PRIMARY KEY (`device_model_id`,`consumable_model_id`),
  KEY `fk_consumable_model_has_device_model_device_model1_idx` (`device_model_id`),
  KEY `fk_consumable_model_has_device_model_consumable_model1_idx` (`consumable_model_id`),
  CONSTRAINT `fk_consumable_model_has_device_model_consumable_model1` FOREIGN KEY (`consumable_model_id`) REFERENCES `consumable_model` (`consumable_model_id`),
  CONSTRAINT `fk_consumable_model_has_device_model_device_model1` FOREIGN KEY (`device_model_id`) REFERENCES `device_model` (`device_model_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `device_consumable_compatibility`
--

LOCK TABLES `device_consumable_compatibility` WRITE;
/*!40000 ALTER TABLE `device_consumable_compatibility` DISABLE KEYS */;
/*!40000 ALTER TABLE `device_consumable_compatibility` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `device_driver`
--

DROP TABLE IF EXISTS `device_driver`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `device_driver` (
  `device_driver_id` int NOT NULL,
  `device_model_id` int NOT NULL,
  `manufacturer` varchar(100) DEFAULT NULL,
  `printer_language` varchar(45) DEFAULT NULL,
  `install_file_address` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`device_driver_id`),
  KEY `fk_driver_device_model1_idx` (`device_model_id`),
  CONSTRAINT `fk_driver_device_model1` FOREIGN KEY (`device_model_id`) REFERENCES `device_model` (`device_model_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `device_driver`
--

LOCK TABLES `device_driver` WRITE;
/*!40000 ALTER TABLE `device_driver` DISABLE KEYS */;
/*!40000 ALTER TABLE `device_driver` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `device_inspection_log`
--

DROP TABLE IF EXISTS `device_inspection_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `device_inspection_log` (
  `device_inspection_log_id` int NOT NULL,
  `device_id` int NOT NULL,
  `inspector_id` int NOT NULL,
  `inspection_date` date NOT NULL,
  `visit_type` varchar(45) NOT NULL,
  `call_id` int DEFAULT NULL,
  `FL` int DEFAULT NULL,
  `FS` int DEFAULT NULL,
  `BL` int DEFAULT NULL,
  `BS` int DEFAULT NULL,
  `toner_count_YE` int DEFAULT NULL,
  `toner_count_MA` int DEFAULT NULL,
  `toner_count_CY` int DEFAULT NULL,
  `toner_count_BK` int DEFAULT NULL,
  `toner_stock_YE` int DEFAULT NULL,
  `toner_stock_MA` int DEFAULT NULL,
  `toner_stock_CY` int DEFAULT NULL,
  `toner_stock_BK` int DEFAULT NULL,
  `toner_deliver_YE` int DEFAULT NULL,
  `toner_deliver_CY` int DEFAULT NULL,
  `toner_deliver_MA` int DEFAULT NULL,
  `toner_deliver_BK` int DEFAULT NULL,
  `drum_count_YE` int DEFAULT NULL,
  `drum_count_MA` int DEFAULT NULL,
  `drum_count_CY` int DEFAULT NULL,
  `drum_count_BK` int DEFAULT NULL,
  `drum_replacement_detail` varchar(50) DEFAULT NULL,
  `status` enum('normal','pending') DEFAULT NULL,
  PRIMARY KEY (`device_inspection_log_id`),
  KEY `fk_device_history_device_idx` (`device_id`),
  KEY `fk_device_log_call1_idx` (`call_id`),
  KEY `fk_device_inspection_log_user1_idx` (`inspector_id`),
  CONSTRAINT `fk_device_history_device` FOREIGN KEY (`device_id`) REFERENCES `device` (`device_id`),
  CONSTRAINT `fk_device_inspection_log_user1` FOREIGN KEY (`inspector_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `fk_device_log_call1` FOREIGN KEY (`call_id`) REFERENCES `call` (`call_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `device_inspection_log`
--

LOCK TABLES `device_inspection_log` WRITE;
/*!40000 ALTER TABLE `device_inspection_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `device_inspection_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `device_install_info`
--

DROP TABLE IF EXISTS `device_install_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `device_install_info` (
  `device_id` int NOT NULL,
  `installer_id` int NOT NULL,
  `mgmt_num` varchar(50) NOT NULL,
  `ip_address` varchar(50) DEFAULT NULL,
  `subnet_mask` varchar(50) DEFAULT NULL,
  `gateway` varchar(50) DEFAULT NULL,
  `dns1` varchar(50) DEFAULT NULL,
  `dns2` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`device_id`),
  KEY `fk_device_install_info_device1_idx` (`device_id`),
  KEY `fk_device_install_info_user1_idx` (`installer_id`),
  CONSTRAINT `fk_device_install_info_device1` FOREIGN KEY (`device_id`) REFERENCES `device` (`device_id`),
  CONSTRAINT `fk_device_install_info_user1` FOREIGN KEY (`installer_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `device_install_info`
--

LOCK TABLES `device_install_info` WRITE;
/*!40000 ALTER TABLE `device_install_info` DISABLE KEYS */;
/*!40000 ALTER TABLE `device_install_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `device_location_log`
--

DROP TABLE IF EXISTS `device_location_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `device_location_log` (
  `device_location_log_id` int NOT NULL,
  `device_id` int NOT NULL,
  `location_date` date NOT NULL,
  `location_id` int NOT NULL,
  `location_detail` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`device_location_log_id`),
  KEY `fk_device_location_log_device1_idx` (`device_id`),
  KEY `fk_device_location_log_location1_idx` (`location_id`),
  CONSTRAINT `fk_device_location_log_device1` FOREIGN KEY (`device_id`) REFERENCES `device` (`device_id`),
  CONSTRAINT `fk_device_location_log_location1` FOREIGN KEY (`location_id`) REFERENCES `location` (`location_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `device_location_log`
--

LOCK TABLES `device_location_log` WRITE;
/*!40000 ALTER TABLE `device_location_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `device_location_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `device_model`
--

DROP TABLE IF EXISTS `device_model`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `device_model` (
  `device_model_id` int NOT NULL,
  `model_name` varchar(100) NOT NULL,
  `manufacturer` varchar(100) NOT NULL,
  `color_support` tinyint NOT NULL,
  PRIMARY KEY (`device_model_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `device_model`
--

LOCK TABLES `device_model` WRITE;
/*!40000 ALTER TABLE `device_model` DISABLE KEYS */;
INSERT INTO `device_model` VALUES (0,'캐논','IR ADV 4245',0),(1,'캐논','IR ADV C5550',1),(2,'캐논','IR ADV C3330',1),(3,'캐논','IR ADV C5535',1),(4,'캐논','IR ADV C2025',1),(5,'캐논','IR ADV C5045',1),(6,'삼성','CLP-775N',1),(7,'삼성','ML-4510ND',0),(8,'삼성','SL-M4530ND',0),(9,'오키','B431',0),(10,'오키','C843',1),(11,'오키','ES8441',1),(12,'오키','C9650',1),(13,'삼성','SL-K4350LX',0),(14,'삼성','SL-X4220RX',1),(15,'삼성','SL-X4300LX',1),(16,'삼성','SL-X7500P',1),(17,'삼성','SL-X7500LX',1),(18,'삼성','SL-M4350ND',0),(19,'캐논','GM4090',0);
/*!40000 ALTER TABLE `device_model` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `device_option`
--

DROP TABLE IF EXISTS `device_option`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `device_option` (
  `device_option_id` int NOT NULL,
  `option_model_id` int NOT NULL,
  `serial` varchar(50) DEFAULT NULL,
  `is_active` tinyint NOT NULL DEFAULT '1',
  `location_type` enum('warehouse','device') NOT NULL,
  `location_warehouse_id` int DEFAULT NULL,
  `location_device_id` int DEFAULT NULL,
  PRIMARY KEY (`device_option_id`),
  KEY `fk_device_option_device_option_model1_idx` (`option_model_id`),
  KEY `fk_device_option_device1_idx` (`location_device_id`),
  KEY `fk_device_option_warehouse1_idx` (`location_warehouse_id`),
  CONSTRAINT `fk_device_option_device1` FOREIGN KEY (`location_device_id`) REFERENCES `device` (`device_id`),
  CONSTRAINT `fk_device_option_device_option_model1` FOREIGN KEY (`option_model_id`) REFERENCES `option_model` (`option_model_id`),
  CONSTRAINT `fk_device_option_warehouse1` FOREIGN KEY (`location_warehouse_id`) REFERENCES `warehouse` (`warehouse_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `device_option`
--

LOCK TABLES `device_option` WRITE;
/*!40000 ALTER TABLE `device_option` DISABLE KEYS */;
/*!40000 ALTER TABLE `device_option` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `device_option_compatibility`
--

DROP TABLE IF EXISTS `device_option_compatibility`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `device_option_compatibility` (
  `device_model_id` int NOT NULL,
  `option_model_id` int NOT NULL,
  PRIMARY KEY (`device_model_id`,`option_model_id`),
  KEY `fk_device_option_model_has_device_model_device_model1_idx` (`device_model_id`),
  KEY `fk_device_option_model_has_device_model_device_option_model_idx` (`option_model_id`),
  CONSTRAINT `fk_device_option_model_has_device_model_device_model1` FOREIGN KEY (`device_model_id`) REFERENCES `device_model` (`device_model_id`),
  CONSTRAINT `fk_device_option_model_has_device_model_device_option_model1` FOREIGN KEY (`option_model_id`) REFERENCES `option_model` (`option_model_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `device_option_compatibility`
--

LOCK TABLES `device_option_compatibility` WRITE;
/*!40000 ALTER TABLE `device_option_compatibility` DISABLE KEYS */;
/*!40000 ALTER TABLE `device_option_compatibility` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `device_status`
--

DROP TABLE IF EXISTS `device_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `device_status` (
  `status_id` int NOT NULL,
  `status_name` varchar(45) NOT NULL,
  PRIMARY KEY (`status_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `device_status`
--

LOCK TABLES `device_status` WRITE;
/*!40000 ALTER TABLE `device_status` DISABLE KEYS */;
/*!40000 ALTER TABLE `device_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inspection_approval`
--

DROP TABLE IF EXISTS `inspection_approval`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inspection_approval` (
  `approval_id` int NOT NULL,
  `requester_id` int NOT NULL,
  `request_at` timestamp NOT NULL,
  `approver_role_id` int NOT NULL,
  `device_inspection_log_id` int NOT NULL,
  `approver_id` int DEFAULT NULL,
  `approved_at` timestamp NULL DEFAULT NULL,
  `is_approved` tinyint DEFAULT NULL,
  PRIMARY KEY (`approval_id`),
  KEY `fk_inspection_approval_approval_role1_idx` (`approver_role_id`),
  KEY `fk_inspection_approval_device_inspection_log1_idx` (`device_inspection_log_id`),
  KEY `fk_inspection_approval_user1_idx` (`approver_id`),
  KEY `fk_inspection_approval_user2_idx` (`requester_id`),
  CONSTRAINT `fk_inspection_approval_approval_role1` FOREIGN KEY (`approver_role_id`) REFERENCES `approval_role` (`role_id`),
  CONSTRAINT `fk_inspection_approval_device_inspection_log1` FOREIGN KEY (`device_inspection_log_id`) REFERENCES `device_inspection_log` (`device_inspection_log_id`),
  CONSTRAINT `fk_inspection_approval_user1` FOREIGN KEY (`approver_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `fk_inspection_approval_user2` FOREIGN KEY (`requester_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inspection_approval`
--

LOCK TABLES `inspection_approval` WRITE;
/*!40000 ALTER TABLE `inspection_approval` DISABLE KEYS */;
/*!40000 ALTER TABLE `inspection_approval` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `location`
--

DROP TABLE IF EXISTS `location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `location` (
  `location_id` int NOT NULL,
  `location_type` enum('warehouse','client_branch') NOT NULL,
  `warehouse_id` int DEFAULT NULL,
  `client_branch_id` int DEFAULT NULL,
  PRIMARY KEY (`location_id`),
  KEY `fk_location_warehouse1_idx` (`warehouse_id`),
  KEY `fk_location_client_branch1_idx` (`client_branch_id`),
  CONSTRAINT `fk_location_client_branch1` FOREIGN KEY (`client_branch_id`) REFERENCES `client_branch` (`client_branch_id`),
  CONSTRAINT `fk_location_warehouse1` FOREIGN KEY (`warehouse_id`) REFERENCES `warehouse` (`warehouse_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `location`
--

LOCK TABLES `location` WRITE;
/*!40000 ALTER TABLE `location` DISABLE KEYS */;
/*!40000 ALTER TABLE `location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `option_model`
--

DROP TABLE IF EXISTS `option_model`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `option_model` (
  `option_model_id` int NOT NULL,
  `option_model_name` varchar(100) NOT NULL,
  `option_type` varchar(45) NOT NULL,
  `manufacturer` varchar(100) NOT NULL,
  PRIMARY KEY (`option_model_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `option_model`
--

LOCK TABLES `option_model` WRITE;
/*!40000 ALTER TABLE `option_model` DISABLE KEYS */;
/*!40000 ALTER TABLE `option_model` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permission`
--

DROP TABLE IF EXISTS `permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `permission` (
  `permission_id` int NOT NULL,
  `permission_name` varchar(100) NOT NULL,
  `permission_description` varchar(100) NOT NULL,
  PRIMARY KEY (`permission_id`),
  UNIQUE KEY `permission_name_UNIQUE` (`permission_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permission`
--

LOCK TABLES `permission` WRITE;
/*!40000 ALTER TABLE `permission` DISABLE KEYS */;
/*!40000 ALTER TABLE `permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sido`
--

DROP TABLE IF EXISTS `sido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sido` (
  `sido_id` int NOT NULL,
  `sido_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`sido_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sido`
--

LOCK TABLES `sido` WRITE;
/*!40000 ALTER TABLE `sido` DISABLE KEYS */;
/*!40000 ALTER TABLE `sido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sigungu`
--

DROP TABLE IF EXISTS `sigungu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sigungu` (
  `sigungu_id` int NOT NULL,
  `sigungu_name` varchar(45) NOT NULL,
  `sido_id` int NOT NULL,
  PRIMARY KEY (`sigungu_id`),
  KEY `fk_sigungu_sido1_idx` (`sido_id`),
  CONSTRAINT `fk_sigungu_sido1` FOREIGN KEY (`sido_id`) REFERENCES `sido` (`sido_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sigungu`
--

LOCK TABLES `sigungu` WRITE;
/*!40000 ALTER TABLE `sigungu` DISABLE KEYS */;
/*!40000 ALTER TABLE `sigungu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` int NOT NULL,
  `user_name` varchar(45) NOT NULL,
  `login_id` varchar(45) NOT NULL,
  `password` varchar(50) NOT NULL,
  `mobile_num` varchar(20) DEFAULT NULL,
  `office_num` varchar(20) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `modified_at` timestamp NULL DEFAULT NULL,
  `dept_id` int NOT NULL,
  `approval_role_id` int NOT NULL,
  `position_id` int NOT NULL,
  `created_at` timestamp NOT NULL,
  `is_active` tinyint NOT NULL DEFAULT '1',
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `login_id_UNIQUE` (`login_id`),
  KEY `fk_user_dept1_idx` (`dept_id`),
  KEY `fk_user_user_position1_idx` (`position_id`),
  KEY `fk_user_approval_role1_idx` (`approval_role_id`),
  CONSTRAINT `fk_user_approval_role1` FOREIGN KEY (`approval_role_id`) REFERENCES `approval_role` (`role_id`),
  CONSTRAINT `fk_user_dept1` FOREIGN KEY (`dept_id`) REFERENCES `dept` (`dept_id`),
  CONSTRAINT `fk_user_user_position1` FOREIGN KEY (`position_id`) REFERENCES `user_position` (`user_position_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_permission`
--

DROP TABLE IF EXISTS `user_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_permission` (
  `user_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`user_id`,`permission_id`),
  KEY `fk_user_has_permission_permission1_idx` (`permission_id`),
  KEY `fk_user_has_permission_user1_idx` (`user_id`),
  CONSTRAINT `fk_user_has_permission_permission1` FOREIGN KEY (`permission_id`) REFERENCES `permission` (`permission_id`),
  CONSTRAINT `fk_user_has_permission_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_permission`
--

LOCK TABLES `user_permission` WRITE;
/*!40000 ALTER TABLE `user_permission` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_position`
--

DROP TABLE IF EXISTS `user_position`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_position` (
  `user_position_id` int NOT NULL,
  `position_name` varchar(45) NOT NULL,
  PRIMARY KEY (`user_position_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_position`
--

LOCK TABLES `user_position` WRITE;
/*!40000 ALTER TABLE `user_position` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_position` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_role_assignment`
--

DROP TABLE IF EXISTS `user_role_assignment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_role_assignment` (
  `role_id` int NOT NULL,
  `approver_id` int NOT NULL,
  PRIMARY KEY (`role_id`,`approver_id`),
  KEY `fk_approver_group_has_user_user1_idx` (`approver_id`),
  KEY `fk_approver_group_has_user_approver_group1_idx` (`role_id`),
  CONSTRAINT `fk_approver_group_has_user_approver_group1` FOREIGN KEY (`role_id`) REFERENCES `approval_role` (`role_id`),
  CONSTRAINT `fk_approver_group_has_user_user1` FOREIGN KEY (`approver_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_role_assignment`
--

LOCK TABLES `user_role_assignment` WRITE;
/*!40000 ALTER TABLE `user_role_assignment` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_role_assignment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `warehouse`
--

DROP TABLE IF EXISTS `warehouse`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `warehouse` (
  `warehouse_id` int NOT NULL,
  `warehouse_name` varchar(100) NOT NULL,
  `mgmt_dept_id` int NOT NULL,
  PRIMARY KEY (`warehouse_id`),
  KEY `fk_warehouse_dept1_idx` (`mgmt_dept_id`),
  CONSTRAINT `fk_warehouse_dept1` FOREIGN KEY (`mgmt_dept_id`) REFERENCES `dept` (`dept_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `warehouse`
--

LOCK TABLES `warehouse` WRITE;
/*!40000 ALTER TABLE `warehouse` DISABLE KEYS */;
INSERT INTO `warehouse` VALUES (0,'강북창고',10000044),(1,'강남창고',10000042),(2,'가산창고',10000043);
/*!40000 ALTER TABLE `warehouse` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-08 22:14:21
