SELECT
  concat(
    `doc`.`option_model_id`,
    '_',
    coalesce(`doc`.`device_model_id`, 0)
  ) AS `compatibility_id`,
  `om`.`option_model_id` AS `option_model_id`,
  `om`.`manufacturer` AS `option_model_manufacturer`,
  `om`.`option_model_name` AS `option_model_name`,
  `om`.`option_type` AS `option_type`,
  `dm`.`manufacturer` AS `device_model_manufacturer`,
  `dm`.`model_name` AS `device_model_name`,
  `dm`.`device_model_id` AS `device_model_id`
FROM
  (
    (
      `mydb`.`device_option_compatibility` `doc`
      LEFT JOIN `mydb`.`option_model` `om` ON(
        (`om`.`option_model_id` = `doc`.`option_model_id`)
      )
    )
    LEFT JOIN `mydb`.`device_model` `dm` ON(
      (`dm`.`device_model_id` = `doc`.`device_model_id`)
    )
  )