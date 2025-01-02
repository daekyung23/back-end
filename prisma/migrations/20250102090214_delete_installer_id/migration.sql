/*
  Warnings:

  - You are about to drop the column `installer_id` on the `device_install_info` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `device_install_info` DROP FOREIGN KEY `fk_device_install_info_user1`;

-- AlterTable
ALTER TABLE `device_install_info` DROP COLUMN `installer_id`;
