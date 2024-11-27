SELECT
  `cb`.`client_branch_id` AS `client_branch_id`,
  `cb`.`client_branch_name` AS `client_branch_name`,
  `cb`.`client_id` AS `client_id`,
  `cb`.`sigungu_id` AS `sigungu_id`,
  `cb`.`mgmt_dept_id` AS `mgmt_dept_id`,
  `cb`.`client_branch_rate_id` AS `client_branch_rate_id`,
  `cb`.`branch_mgr_name` AS `branch_mgr_name`,
  `cb`.`branch_mgr_mobile_num` AS `branch_mgr_mobile_num`,
  `cb`.`branch_mgr_office_num` AS `branch_mgr_office_num`,
  `cb`.`branch_mgr_email` AS `branch_mgr_email`,
  `cb`.`is_active` AS `is_active`,
  `cb`.`remote_support` AS `remote_support`,
  `cb`.`push_alert` AS `push_alert`,
  `c`.`client_name` AS `client_name`,
  `sgg`.`sigungu_name` AS `sigungu_name`,
  `sd`.`sido_name` AS `sido_name`
FROM
  (
    (
      (
        `mydb`.`client_branch` `cb`
        LEFT JOIN `mydb`.`client` `c` ON((`cb`.`client_id` = `c`.`client_id`))
      )
      LEFT JOIN `mydb`.`sigungu` `sgg` ON((`cb`.`sigungu_id` = `sgg`.`sigungu_id`))
    )
    LEFT JOIN `mydb`.`sido` `sd` ON((`sgg`.`sido_id` = `sd`.`sido_id`))
  )