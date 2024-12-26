SELECT
  `do`.`device_option_id` AS `device_option_id`,
  `om`.`option_model_name` AS `option_model_name`,
  `om`.`manufacturer` AS `manufacturer`,
  `om`.`option_type` AS `option_type`,
  `do`.`serial` AS `serial`,
  `do`.`is_active` AS `is_active`,
  `do`.`location_type` AS `location_type`,
  `w`.`warehouse_id` AS `warehouse_id`,
  `w`.`warehouse_name` AS `location_warehouse`,
  `d`.`device_id` AS `device_id`,
  `d`.`serial` AS `location_device`
FROM
  (
    (
      (
        `mydb`.`device_option` `do`
        LEFT JOIN `mydb`.`option_model` `om` ON(
          (`do`.`option_model_id` = `om`.`option_model_id`)
        )
      )
      LEFT JOIN `mydb`.`device` `d` ON((`do`.`location_device_id` = `d`.`device_id`))
    )
    LEFT JOIN `mydb`.`warehouse` `w` ON(
      (
        `do`.`location_warehouse_id` = `w`.`warehouse_id`
      )
    )
  )
GROUP BY
  `do`.`device_option_id`,
  `om`.`option_model_name`,
  `om`.`manufacturer`,
  `om`.`option_type`,
  `do`.`serial`,
  `do`.`is_active`,
  `do`.`location_type`,
  `w`.`warehouse_id`,
  `w`.`warehouse_name`,
  `d`.`device_id`,
  `d`.`serial`