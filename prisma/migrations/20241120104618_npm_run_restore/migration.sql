/*
  Warnings:

  - Made the column `approver_role_id` on table `device_approval` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `device_approval` DROP FOREIGN KEY `fk_approval_approver_group1`;

-- AlterTable
ALTER TABLE `device_approval` MODIFY `approver_role_id` INTEGER NOT NULL,
    MODIFY `approver_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `device_approval` ADD CONSTRAINT `fk_approval_approver_group1` FOREIGN KEY (`approver_role_id`) REFERENCES `approval_role`(`role_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
