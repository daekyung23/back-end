-- AlterTable
SET FOREIGN_KEY_CHECKS=0;

-- DropForeignKey
ALTER TABLE `device_install_info` DROP FOREIGN KEY `fk_device_install_info_device1`;

-- ModifyTable
ALTER TABLE `device_install_info` MODIFY `device_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `device_install_info` ADD CONSTRAINT `fk_device_install_info_device1` 
FOREIGN KEY (`device_id`) REFERENCES `device`(`device_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

SET FOREIGN_KEY_CHECKS=1;n