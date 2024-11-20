SELECT
  `dd`.`device_driver_id` AS `device_driver_id`,
  `dd`.`device_model_id` AS `device_model_id`,
  `dd`.`manufacturer` AS `driver_manufacturer`,
  `dd`.`printer_language` AS `printer_language`,
  `dd`.`install_file_address` AS `install_file_address`,
  `dm`.`manufacturer` AS `model_manufacturer`,
  `dm`.`model_name` AS `model_name`,
  `dm`.`color_support` AS `color_support`
FROM
  (
    `mydb`.`device_driver` `dd`
    LEFT JOIN `mydb`.`device_model` `dm` ON(
      (`dd`.`device_model_id` = `dm`.`device_model_id`)
    )
  )