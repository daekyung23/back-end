-- CreateTable
CREATE TABLE `approval_role` (
    `role_id` INTEGER NOT NULL AUTO_INCREMENT,
    `role_name` VARCHAR(45) NOT NULL,
    `upper_role_id` INTEGER NULL,

    INDEX `fk_approval_role_approval_role1_idx`(`upper_role_id`),
    PRIMARY KEY (`role_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `call` (
    `call_id` INTEGER NOT NULL AUTO_INCREMENT,
    `call_type_id` INTEGER NOT NULL,
    `client_branch_id` INTEGER NOT NULL,
    `requester_name` VARCHAR(50) NOT NULL,
    `requester_num` VARCHAR(20) NOT NULL,
    `requester_black_consumer` TINYINT NOT NULL DEFAULT 0,
    `device_id` INTEGER NULL,
    `detail` VARCHAR(200) NOT NULL,
    `state` VARCHAR(45) NOT NULL,
    `received_at` TIMESTAMP(0) NOT NULL,
    `receiver_id` INTEGER NOT NULL,
    `transferred_at` TIMESTAMP(0) NULL,
    `transferred_dept_id` INTEGER NULL,
    `assigner_id` INTEGER NULL,
    `completed_at` TIMESTAMP(0) NULL,

    INDEX `fk_call_call_type1_idx`(`call_type_id`),
    INDEX `fk_call_client_branch1_idx`(`client_branch_id`),
    INDEX `fk_call_dept1_idx`(`transferred_dept_id`),
    INDEX `fk_call_device1_idx`(`device_id`),
    INDEX `fk_call_user1_idx`(`receiver_id`),
    INDEX `fk_call_user2_idx`(`assigner_id`),
    PRIMARY KEY (`call_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `call_type` (
    `call_type_id` INTEGER NOT NULL AUTO_INCREMENT,
    `call_type_name` VARCHAR(50) NOT NULL,
    `parent_call_type_id` INTEGER NULL,

    INDEX `fk_call_type_call_type1_idx`(`parent_call_type_id`),
    PRIMARY KEY (`call_type_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `client` (
    `client_id` INTEGER NOT NULL AUTO_INCREMENT,
    `parent_client_id` INTEGER NULL,
    `default_client_branch_rate_id` INTEGER NULL,
    `client_name` VARCHAR(45) NOT NULL,
    `remote_support` TINYINT NULL,
    `push_alert` TINYINT NULL,
    `is_active` TINYINT NOT NULL DEFAULT 1,

    INDEX `fk_client_client1_idx`(`parent_client_id`),
    INDEX `fk_client_client_branch_rate1_idx`(`default_client_branch_rate_id`),
    PRIMARY KEY (`client_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `client_branch` (
    `client_branch_id` INTEGER NOT NULL AUTO_INCREMENT,
    `sigungu_id` INTEGER NOT NULL,
    `mgmt_dept_id` INTEGER NOT NULL,
    `client_id` INTEGER NOT NULL,
    `client_branch_name` VARCHAR(100) NOT NULL,
    `client_branch_rate_id` INTEGER NOT NULL,
    `branch_mgr_name` VARCHAR(45) NULL,
    `branch_mgr_mobile_num` VARCHAR(45) NULL,
    `branch_mgr_office_num` VARCHAR(45) NULL,
    `branch_mgr_email` VARCHAR(45) NULL,
    `is_active` TINYINT NOT NULL DEFAULT 1,
    `remote_support` TINYINT NOT NULL DEFAULT 0,
    `push_alert` TINYINT NOT NULL DEFAULT 0,

    INDEX `fk_client_branch_client1_idx`(`client_id`),
    INDEX `fk_client_branch_client_branch_rate1_idx`(`client_branch_rate_id`),
    INDEX `fk_client_branch_dept1_idx`(`mgmt_dept_id`),
    INDEX `fk_client_branch_sigungu1_idx`(`sigungu_id`),
    PRIMARY KEY (`client_branch_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `client_rate` (
    `client_rate_id` INTEGER NOT NULL AUTO_INCREMENT,
    `rate_type` VARCHAR(10) NOT NULL,
    `rate_detail` VARCHAR(45) NULL,

    PRIMARY KEY (`client_rate_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `consumable_model` (
    `consumable_model_id` INTEGER NOT NULL AUTO_INCREMENT,
    `manufacturer` VARCHAR(100) NOT NULL,
    `consumable_name` VARCHAR(100) NOT NULL,
    `consumable_type` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`consumable_model_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `dept` (
    `dept_id` INTEGER NOT NULL AUTO_INCREMENT,
    `parent_dept_id` INTEGER NULL,
    `dept_name` VARCHAR(100) NOT NULL,

    INDEX `fk_dept_dept1_idx`(`parent_dept_id`),
    PRIMARY KEY (`dept_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `device` (
    `device_id` INTEGER NOT NULL AUTO_INCREMENT,
    `device_model_id` INTEGER NOT NULL,
    `owner_dept_id` INTEGER NOT NULL,
    `mgmt_dept_id` INTEGER NOT NULL,
    `serial` VARCHAR(50) NOT NULL,
    `regi_date` DATE NOT NULL,
    `mac` VARCHAR(50) NOT NULL,
    `last_inspection_log_id` INTEGER NULL,
    `last_location_log_id` INTEGER NULL,
    `status_id` INTEGER NOT NULL,

    INDEX `fk_device_dept1_idx`(`owner_dept_id`),
    INDEX `fk_device_dept2_idx`(`mgmt_dept_id`),
    INDEX `fk_device_device_condition1_idx`(`status_id`),
    INDEX `fk_device_device_location_log1_idx`(`last_location_log_id`),
    INDEX `fk_device_device_model1_idx`(`device_model_id`),
    INDEX `fk_device_inspection_log1_idx`(`last_inspection_log_id`),
    PRIMARY KEY (`device_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `device_approval` (
    `approval_id` INTEGER NOT NULL AUTO_INCREMENT,
    `approval_type_id` INTEGER NOT NULL,
    `sub_approval_id` INTEGER NULL,
    `requester_id` INTEGER NOT NULL,
    `request_at` TIMESTAMP(0) NOT NULL,
    `approver_role_id` INTEGER NULL,
    `origin_location_id` INTEGER NULL,
    `destination_location_id` INTEGER NULL,
    `approver_id` INTEGER NOT NULL,
    `approve_at` TIMESTAMP(0) NULL,
    `is_approved` TINYINT NULL,

    INDEX `fk_approval_approver_group1_idx`(`approver_role_id`),
    INDEX `fk_device_approval_device_approval1_idx`(`sub_approval_id`),
    INDEX `fk_device_approval_device_approval_type1_idx`(`approval_type_id`),
    INDEX `fk_device_approval_location1_idx`(`origin_location_id`),
    INDEX `fk_device_approval_location2_idx`(`destination_location_id`),
    INDEX `fk_device_approval_user1_idx`(`requester_id`),
    INDEX `fk_device_approval_user2_idx`(`approver_id`),
    PRIMARY KEY (`approval_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `device_approval_type` (
    `approval_type_id` INTEGER NOT NULL AUTO_INCREMENT,
    `approval_type_name` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`approval_type_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `device_consumable_compatibility` (
    `device_model_id` INTEGER NOT NULL,
    `consumable_model_id` INTEGER NOT NULL,

    INDEX `fk_consumable_model_has_device_model_consumable_model1_idx`(`consumable_model_id`),
    INDEX `fk_consumable_model_has_device_model_device_model1_idx`(`device_model_id`),
    PRIMARY KEY (`device_model_id`, `consumable_model_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `device_driver` (
    `device_driver_id` INTEGER NOT NULL AUTO_INCREMENT,
    `device_model_id` INTEGER NOT NULL,
    `manufacturer` VARCHAR(100) NULL,
    `printer_language` VARCHAR(45) NULL,
    `install_file_address` VARCHAR(200) NULL,

    INDEX `fk_driver_device_model1_idx`(`device_model_id`),
    PRIMARY KEY (`device_driver_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `device_inspection_log` (
    `device_inspection_log_id` INTEGER NOT NULL AUTO_INCREMENT,
    `device_id` INTEGER NOT NULL,
    `inspector_id` INTEGER NOT NULL,
    `inspection_date` DATE NOT NULL,
    `visit_type` VARCHAR(45) NOT NULL,
    `call_id` INTEGER NULL,
    `FL` INTEGER NULL,
    `FS` INTEGER NULL,
    `BL` INTEGER NULL,
    `BS` INTEGER NULL,
    `toner_count_YE` INTEGER NULL,
    `toner_count_MA` INTEGER NULL,
    `toner_count_CY` INTEGER NULL,
    `toner_count_BK` INTEGER NULL,
    `toner_stock_YE` INTEGER NULL,
    `toner_stock_MA` INTEGER NULL,
    `toner_stock_CY` INTEGER NULL,
    `toner_stock_BK` INTEGER NULL,
    `toner_deliver_YE` INTEGER NULL,
    `toner_deliver_CY` INTEGER NULL,
    `toner_deliver_MA` INTEGER NULL,
    `toner_deliver_BK` INTEGER NULL,
    `drum_count_YE` INTEGER NULL,
    `drum_count_MA` INTEGER NULL,
    `drum_count_CY` INTEGER NULL,
    `drum_count_BK` INTEGER NULL,
    `drum_replacement_detail` VARCHAR(50) NULL,
    `status` ENUM('normal', 'pending') NULL,

    INDEX `fk_device_history_device_idx`(`device_id`),
    INDEX `fk_device_inspection_log_user1_idx`(`inspector_id`),
    INDEX `fk_device_log_call1_idx`(`call_id`),
    PRIMARY KEY (`device_inspection_log_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `device_install_info` (
    `device_id` INTEGER NOT NULL AUTO_INCREMENT,
    `installer_id` INTEGER NOT NULL,
    `mgmt_num` VARCHAR(50) NOT NULL,
    `ip_address` VARCHAR(50) NULL,
    `subnet_mask` VARCHAR(50) NULL,
    `gateway` VARCHAR(50) NULL,
    `dns1` VARCHAR(50) NULL,
    `dns2` VARCHAR(50) NULL,

    INDEX `fk_device_install_info_device1_idx`(`device_id`),
    INDEX `fk_device_install_info_user1_idx`(`installer_id`),
    PRIMARY KEY (`device_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `device_location_log` (
    `device_location_log_id` INTEGER NOT NULL AUTO_INCREMENT,
    `device_id` INTEGER NOT NULL,
    `location_date` DATE NOT NULL,
    `location_id` INTEGER NOT NULL,
    `location_detail` VARCHAR(200) NULL,

    INDEX `fk_device_location_log_device1_idx`(`device_id`),
    INDEX `fk_device_location_log_location1_idx`(`location_id`),
    PRIMARY KEY (`device_location_log_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `device_model` (
    `device_model_id` INTEGER NOT NULL AUTO_INCREMENT,
    `model_name` VARCHAR(100) NOT NULL,
    `manufacturer` VARCHAR(100) NOT NULL,
    `color_support` TINYINT NOT NULL,

    PRIMARY KEY (`device_model_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `device_option` (
    `device_option_id` INTEGER NOT NULL AUTO_INCREMENT,
    `option_model_id` INTEGER NOT NULL,
    `serial` VARCHAR(50) NULL,
    `is_active` TINYINT NOT NULL DEFAULT 1,
    `location_type` ENUM('warehouse', 'device') NOT NULL,
    `location_warehouse_id` INTEGER NULL,
    `location_device_id` INTEGER NULL,

    INDEX `fk_device_option_device1_idx`(`location_device_id`),
    INDEX `fk_device_option_device_option_model1_idx`(`option_model_id`),
    INDEX `fk_device_option_warehouse1_idx`(`location_warehouse_id`),
    PRIMARY KEY (`device_option_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `device_option_compatibility` (
    `device_model_id` INTEGER NOT NULL,
    `option_model_id` INTEGER NOT NULL,

    INDEX `fk_device_option_model_has_device_model_device_model1_idx`(`device_model_id`),
    INDEX `fk_device_option_model_has_device_model_device_option_model_idx`(`option_model_id`),
    PRIMARY KEY (`device_model_id`, `option_model_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `device_status` (
    `status_id` INTEGER NOT NULL AUTO_INCREMENT,
    `status_name` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`status_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `inspection_approval` (
    `approval_id` INTEGER NOT NULL AUTO_INCREMENT,
    `requester_id` INTEGER NOT NULL,
    `request_at` TIMESTAMP(0) NOT NULL,
    `approver_role_id` INTEGER NULL,
    `device_inspection_log_id` INTEGER NOT NULL,
    `approver_id` INTEGER NULL,
    `approved_at` TIMESTAMP(0) NULL,
    `is_approved` TINYINT NULL,

    INDEX `fk_inspection_approval_approval_role1_idx`(`approver_role_id`),
    INDEX `fk_inspection_approval_device_inspection_log1_idx`(`device_inspection_log_id`),
    INDEX `fk_inspection_approval_user1_idx`(`approver_id`),
    INDEX `fk_inspection_approval_user2_idx`(`requester_id`),
    PRIMARY KEY (`approval_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `location` (
    `location_id` INTEGER NOT NULL AUTO_INCREMENT,
    `location_type` ENUM('warehouse', 'client_branch') NOT NULL,
    `warehouse_id` INTEGER NULL,
    `client_branch_id` INTEGER NULL,

    INDEX `fk_location_client_branch1_idx`(`client_branch_id`),
    INDEX `fk_location_warehouse1_idx`(`warehouse_id`),
    PRIMARY KEY (`location_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `option_model` (
    `option_model_id` INTEGER NOT NULL AUTO_INCREMENT,
    `option_model_name` VARCHAR(100) NOT NULL,
    `option_type` VARCHAR(45) NOT NULL,
    `manufacturer` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`option_model_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sido` (
    `sido_id` INTEGER NOT NULL,
    `sido_name` VARCHAR(45) NULL,

    PRIMARY KEY (`sido_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sigungu` (
    `sigungu_id` INTEGER NOT NULL,
    `sigungu_name` VARCHAR(45) NOT NULL,
    `sido_id` INTEGER NOT NULL,

    INDEX `fk_sigungu_sido1_idx`(`sido_id`),
    PRIMARY KEY (`sigungu_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_name` VARCHAR(45) NOT NULL,
    `login_id` VARCHAR(45) NOT NULL,
    `password` VARCHAR(50) NOT NULL,
    `mobile_num` VARCHAR(20) NULL,
    `office_num` VARCHAR(20) NULL,
    `email` VARCHAR(100) NULL,
    `modified_at` TIMESTAMP(0) NULL,
    `dept_id` INTEGER NOT NULL,
    `approval_role_id` INTEGER NULL,
    `position_id` INTEGER NOT NULL,
    `created_at` TIMESTAMP(0) NOT NULL,
    `is_active` TINYINT NOT NULL DEFAULT 1,
    `permission` ENUM('user', 'manager', 'admin') NOT NULL DEFAULT 'user',

    UNIQUE INDEX `login_id_UNIQUE`(`login_id`),
    INDEX `fk_user_approval_role1_idx`(`approval_role_id`),
    INDEX `fk_user_dept1_idx`(`dept_id`),
    INDEX `fk_user_user_position1_idx`(`position_id`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_position` (
    `user_position_id` INTEGER NOT NULL AUTO_INCREMENT,
    `position_name` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`user_position_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_role_assignment` (
    `role_id` INTEGER NOT NULL,
    `approver_id` INTEGER NOT NULL,

    INDEX `fk_approver_group_has_user_approver_group1_idx`(`role_id`),
    INDEX `fk_approver_group_has_user_user1_idx`(`approver_id`),
    PRIMARY KEY (`role_id`, `approver_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `warehouse` (
    `warehouse_id` INTEGER NOT NULL AUTO_INCREMENT,
    `warehouse_name` VARCHAR(100) NOT NULL,
    `mgmt_dept_id` INTEGER NOT NULL,

    INDEX `fk_warehouse_dept1_idx`(`mgmt_dept_id`),
    PRIMARY KEY (`warehouse_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `approval_role` ADD CONSTRAINT `fk_approval_role_approval_role1` FOREIGN KEY (`upper_role_id`) REFERENCES `approval_role`(`role_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `call` ADD CONSTRAINT `fk_call_call_type1` FOREIGN KEY (`call_type_id`) REFERENCES `call_type`(`call_type_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `call` ADD CONSTRAINT `fk_call_client_branch1` FOREIGN KEY (`client_branch_id`) REFERENCES `client_branch`(`client_branch_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `call` ADD CONSTRAINT `fk_call_dept1` FOREIGN KEY (`transferred_dept_id`) REFERENCES `dept`(`dept_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `call` ADD CONSTRAINT `fk_call_device1` FOREIGN KEY (`device_id`) REFERENCES `device`(`device_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `call` ADD CONSTRAINT `fk_call_user1` FOREIGN KEY (`receiver_id`) REFERENCES `user`(`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `call` ADD CONSTRAINT `fk_call_user2` FOREIGN KEY (`assigner_id`) REFERENCES `user`(`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `call_type` ADD CONSTRAINT `fk_call_type_call_type1` FOREIGN KEY (`parent_call_type_id`) REFERENCES `call_type`(`call_type_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `client` ADD CONSTRAINT `fk_client_client1` FOREIGN KEY (`parent_client_id`) REFERENCES `client`(`client_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `client` ADD CONSTRAINT `fk_client_client_branch_rate1` FOREIGN KEY (`default_client_branch_rate_id`) REFERENCES `client_rate`(`client_rate_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `client_branch` ADD CONSTRAINT `fk_client_branch_client1` FOREIGN KEY (`client_id`) REFERENCES `client`(`client_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `client_branch` ADD CONSTRAINT `fk_client_branch_client_branch_rate1` FOREIGN KEY (`client_branch_rate_id`) REFERENCES `client_rate`(`client_rate_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `client_branch` ADD CONSTRAINT `fk_client_branch_dept1` FOREIGN KEY (`mgmt_dept_id`) REFERENCES `dept`(`dept_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `client_branch` ADD CONSTRAINT `fk_client_branch_sigungu1` FOREIGN KEY (`sigungu_id`) REFERENCES `sigungu`(`sigungu_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `dept` ADD CONSTRAINT `fk_dept_dept1` FOREIGN KEY (`parent_dept_id`) REFERENCES `dept`(`dept_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `device` ADD CONSTRAINT `fk_device_dept1` FOREIGN KEY (`owner_dept_id`) REFERENCES `dept`(`dept_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `device` ADD CONSTRAINT `fk_device_dept2` FOREIGN KEY (`mgmt_dept_id`) REFERENCES `dept`(`dept_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `device` ADD CONSTRAINT `fk_device_device_condition1` FOREIGN KEY (`status_id`) REFERENCES `device_status`(`status_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `device` ADD CONSTRAINT `fk_device_device_location_log1` FOREIGN KEY (`last_location_log_id`) REFERENCES `device_location_log`(`device_location_log_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `device` ADD CONSTRAINT `fk_device_device_log1` FOREIGN KEY (`last_inspection_log_id`) REFERENCES `device_inspection_log`(`device_inspection_log_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `device` ADD CONSTRAINT `fk_device_device_model1` FOREIGN KEY (`device_model_id`) REFERENCES `device_model`(`device_model_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `device_approval` ADD CONSTRAINT `fk_approval_approver_group1` FOREIGN KEY (`approver_role_id`) REFERENCES `approval_role`(`role_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `device_approval` ADD CONSTRAINT `fk_device_approval_device_approval1` FOREIGN KEY (`sub_approval_id`) REFERENCES `device_approval`(`approval_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `device_approval` ADD CONSTRAINT `fk_device_approval_device_approval_type1` FOREIGN KEY (`approval_type_id`) REFERENCES `device_approval_type`(`approval_type_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `device_approval` ADD CONSTRAINT `fk_device_approval_location1` FOREIGN KEY (`origin_location_id`) REFERENCES `location`(`location_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `device_approval` ADD CONSTRAINT `fk_device_approval_location2` FOREIGN KEY (`destination_location_id`) REFERENCES `location`(`location_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `device_approval` ADD CONSTRAINT `fk_device_approval_user1` FOREIGN KEY (`requester_id`) REFERENCES `user`(`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `device_approval` ADD CONSTRAINT `fk_device_approval_user2` FOREIGN KEY (`approver_id`) REFERENCES `user`(`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `device_consumable_compatibility` ADD CONSTRAINT `fk_consumable_model_has_device_model_consumable_model1` FOREIGN KEY (`consumable_model_id`) REFERENCES `consumable_model`(`consumable_model_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `device_consumable_compatibility` ADD CONSTRAINT `fk_consumable_model_has_device_model_device_model1` FOREIGN KEY (`device_model_id`) REFERENCES `device_model`(`device_model_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `device_driver` ADD CONSTRAINT `fk_driver_device_model1` FOREIGN KEY (`device_model_id`) REFERENCES `device_model`(`device_model_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `device_inspection_log` ADD CONSTRAINT `fk_device_history_device` FOREIGN KEY (`device_id`) REFERENCES `device`(`device_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `device_inspection_log` ADD CONSTRAINT `fk_device_inspection_log_user1` FOREIGN KEY (`inspector_id`) REFERENCES `user`(`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `device_inspection_log` ADD CONSTRAINT `fk_device_log_call1` FOREIGN KEY (`call_id`) REFERENCES `call`(`call_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `device_install_info` ADD CONSTRAINT `fk_device_install_info_device1` FOREIGN KEY (`device_id`) REFERENCES `device`(`device_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `device_install_info` ADD CONSTRAINT `fk_device_install_info_user1` FOREIGN KEY (`installer_id`) REFERENCES `user`(`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `device_location_log` ADD CONSTRAINT `fk_device_location_log_device1` FOREIGN KEY (`device_id`) REFERENCES `device`(`device_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `device_location_log` ADD CONSTRAINT `fk_device_location_log_location1` FOREIGN KEY (`location_id`) REFERENCES `location`(`location_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `device_option` ADD CONSTRAINT `fk_device_option_device1` FOREIGN KEY (`location_device_id`) REFERENCES `device`(`device_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `device_option` ADD CONSTRAINT `fk_device_option_device_option_model1` FOREIGN KEY (`option_model_id`) REFERENCES `option_model`(`option_model_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `device_option` ADD CONSTRAINT `fk_device_option_warehouse1` FOREIGN KEY (`location_warehouse_id`) REFERENCES `warehouse`(`warehouse_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `device_option_compatibility` ADD CONSTRAINT `fk_device_option_model_has_device_model_device_model1` FOREIGN KEY (`device_model_id`) REFERENCES `device_model`(`device_model_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `device_option_compatibility` ADD CONSTRAINT `fk_device_option_model_has_device_model_device_option_model1` FOREIGN KEY (`option_model_id`) REFERENCES `option_model`(`option_model_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `inspection_approval` ADD CONSTRAINT `fk_inspection_approval_approval_role1` FOREIGN KEY (`approver_role_id`) REFERENCES `approval_role`(`role_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `inspection_approval` ADD CONSTRAINT `fk_inspection_approval_device_inspection_log1` FOREIGN KEY (`device_inspection_log_id`) REFERENCES `device_inspection_log`(`device_inspection_log_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `inspection_approval` ADD CONSTRAINT `fk_inspection_approval_user1` FOREIGN KEY (`approver_id`) REFERENCES `user`(`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `inspection_approval` ADD CONSTRAINT `fk_inspection_approval_user2` FOREIGN KEY (`requester_id`) REFERENCES `user`(`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `location` ADD CONSTRAINT `fk_location_client_branch1` FOREIGN KEY (`client_branch_id`) REFERENCES `client_branch`(`client_branch_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `location` ADD CONSTRAINT `fk_location_warehouse1` FOREIGN KEY (`warehouse_id`) REFERENCES `warehouse`(`warehouse_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `sigungu` ADD CONSTRAINT `fk_sigungu_sido1` FOREIGN KEY (`sido_id`) REFERENCES `sido`(`sido_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `fk_user_approval_role1` FOREIGN KEY (`approval_role_id`) REFERENCES `approval_role`(`role_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `fk_user_dept1` FOREIGN KEY (`dept_id`) REFERENCES `dept`(`dept_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `fk_user_user_position1` FOREIGN KEY (`position_id`) REFERENCES `user_position`(`user_position_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user_role_assignment` ADD CONSTRAINT `fk_approver_group_has_user_approver_group1` FOREIGN KEY (`role_id`) REFERENCES `approval_role`(`role_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user_role_assignment` ADD CONSTRAINT `fk_approver_group_has_user_user1` FOREIGN KEY (`approver_id`) REFERENCES `user`(`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `warehouse` ADD CONSTRAINT `fk_warehouse_dept1` FOREIGN KEY (`mgmt_dept_id`) REFERENCES `dept`(`dept_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
