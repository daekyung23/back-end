-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: mydb
-- ------------------------------------------------------
-- Server version	8.0.33

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
-- Table structure for table `consumable_model`
--

DROP TABLE IF EXISTS `consumable_model`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `consumable_model` (
  `consumable_model_id` int NOT NULL,
  `manufacturer` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `consumable_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `consumable_type` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`consumable_model_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

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
  PRIMARY KEY (`approval_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `device_approval_type`
--

DROP TABLE IF EXISTS `device_approval_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `device_approval_type` (
  `approval_type_id` int NOT NULL,
  `approval_type_name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`approval_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `device_driver`
--

DROP TABLE IF EXISTS `device_driver`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `device_driver` (
  `device_driver_id` int NOT NULL,
  `device_model_id` int NOT NULL,
  `manufacturer` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `printer_language` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `install_file_address` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`device_driver_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

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
-- Table structure for table `device_install_info`
--

DROP TABLE IF EXISTS `device_install_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `device_install_info` (
  `device_id` int NOT NULL,
  `installer_id` int NOT NULL,
  `mgmt_num` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `ip_address` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `subnet_mask` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gateway` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `dns1` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `dns2` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`device_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

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
-- Table structure for table `device_option`
--

DROP TABLE IF EXISTS `device_option`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `device_option` (
  `device_option_id` int NOT NULL,
  `option_model_id` int NOT NULL,
  `serial` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_active` tinyint NOT NULL,
  `location_type` enum('warehouse','device') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `location_warehouse_id` int DEFAULT NULL,
  `location_device_id` int DEFAULT NULL,
  PRIMARY KEY (`device_option_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

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
  PRIMARY KEY (`approval_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

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
-- Table structure for table `option_model`
--

DROP TABLE IF EXISTS `option_model`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `option_model` (
  `option_model_id` int NOT NULL,
  `option_model_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `option_type` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `manufacturer` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`option_model_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `permission`
--

DROP TABLE IF EXISTS `permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `permission` (
  `permission_id` int NOT NULL,
  `permission_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `permission_description` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`permission_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

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
  `approval_role_id` int DEFAULT NULL,
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
-- Dumping events for database 'mydb'
--

--
-- Dumping routines for database 'mydb'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-09  6:17:19
