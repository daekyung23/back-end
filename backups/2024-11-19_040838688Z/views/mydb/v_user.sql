SELECT
  `u`.`user_id` AS `user_id`,
  `u`.`user_name` AS `user_name`,
  `u`.`login_id` AS `login_id`,
  `u`.`mobile_num` AS `mobile_num`,
  `u`.`office_num` AS `office_num`,
  `u`.`email` AS `email`,
  `u`.`modified_at` AS `modified_at`,
  `u`.`created_at` AS `created_at`,
  `u`.`is_active` AS `is_active`,
  `u`.`permission` AS `permission`,
  `u`.`dept_id` AS `dept_id`,
  `u`.`approval_role_id` AS `approval_role_id`,
  `u`.`position_id` AS `position_id`,
  `d`.`dept_name` AS `dept_name`,
  `d`.`parent_dept_id` AS `parent_dept_id`
FROM
  (
    `mydb`.`user` `u`
    LEFT JOIN `mydb`.`dept` `d` ON((`u`.`dept_id` = `d`.`dept_id`))
  )