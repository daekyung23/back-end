SELECT
  `dll`.`device_location_log_id` AS `device_location_log_id`,
  `dll`.`device_id` AS `device_id`,
  `dll`.`location_date` AS `location_date`,
  `dll`.`location_id` AS `location_id`,
  `dll`.`location_detail` AS `location_detail`,
  `l`.`location_type` AS `location_type`,
  `w`.`warehouse_id` AS `warehouse_id`,
  `w`.`warehouse_name` AS `warehouse_name`,
  `cb`.`client_branch_id` AS `client_branch_id`,
  `cb`.`client_branch_name` AS `client_branch_name`,
  `mydb`.`v_ch`.`root_client_id` AS `root_client_id`,
  `mydb`.`v_ch`.`root_client_name` AS `root_client_name`,
  `mydb`.`v_ch`.`depth` AS `client_depth`
FROM
  (
    (
      (
        (
          `mydb`.`device_location_log` `dll`
          LEFT JOIN `mydb`.`location` `l` ON((`dll`.`location_id` = `l`.`location_id`))
        )
        LEFT JOIN `mydb`.`warehouse` `w` ON((`l`.`warehouse_id` = `w`.`warehouse_id`))
      )
      LEFT JOIN `mydb`.`client_branch` `cb` ON(
        (`l`.`client_branch_id` = `cb`.`client_branch_id`)
      )
    )
    LEFT JOIN `mydb`.`v_client_hierarchy` `v_ch` ON((`cb`.`client_id` = `mydb`.`v_ch`.`client_id`))
  )