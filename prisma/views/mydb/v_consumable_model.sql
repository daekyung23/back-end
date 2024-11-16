SELECT
  concat(
    `dcc`.`consumable_model_id`,
    '_',
    coalesce(`dcc`.`device_model_id`, 0)
  ) AS `compatibility_id`,
  `cm`.`consumable_model_id` AS `consumable_model_id`,
  `cm`.`manufacturer` AS `manufacturer`,
  `cm`.`consumable_name` AS `consumable_name`,
  `cm`.`consumable_type` AS `consumable_type`,
  `dm`.`manufacturer` AS `model_manufacturer`,
  `dm`.`model_name` AS `model_name`
FROM
  (
    (
      `mydb`.`device_consumable_compatibility` `dcc`
      LEFT JOIN `mydb`.`consumable_model` `cm` ON(
        (
          `cm`.`consumable_model_id` = `dcc`.`consumable_model_id`
        )
      )
    )
    LEFT JOIN `mydb`.`device_model` `dm` ON(
      (`dm`.`device_model_id` = `dcc`.`device_model_id`)
    )
  )