SELECT
  `d`.`device_id` AS `device_id`,
  `d`.`device_model_id` AS `device_model_id`,
  `d`.`owner_dept_id` AS `owner_dept_id`,
  `d`.`mgmt_dept_id` AS `mgmt_dept_id`,
  `d`.`serial` AS `serial`,
  `d`.`regi_date` AS `regi_date`,
  `d`.`mac` AS `mac`,
  `d`.`last_inspection_log_id` AS `last_inspection_log_id`,
  `d`.`last_location_log_id` AS `last_location_log_id`,
  `d`.`status_id` AS `status_id`,
  `dm`.`model_name` AS `model_name`,
  `dm`.`manufacturer` AS `manufacturer`,
  `od`.`dept_name` AS `owner_dept_name`,
  `md`.`dept_name` AS `mgmt_dept_name`,
  `l`.`location_id` AS `location_id`,
  `w`.`warehouse_id` AS `warehouse_id`,
  `w`.`warehouse_name` AS `warehouse_name`,
  `cb`.`client_branch_id` AS `client_branch_id`,
  `cb`.`client_branch_name` AS `client_branch_name`,
  `ds`.`status_name` AS `status_name`,
  max(
    (
      CASE
        WHEN (`om`.`option_type` = 'fax') THEN TRUE
        ELSE false
      END
    )
  ) AS `has_fax`,
  max(
    (
      CASE
        WHEN (`om`.`option_type` = 'desk') THEN TRUE
        ELSE false
      END
    )
  ) AS `has_desk`,
  max(
    (
      CASE
        WHEN (`om`.`option_type` = 'shelf') THEN TRUE
        ELSE false
      END
    )
  ) AS `has_shelf`
FROM
  (
    (
      (
        (
          (
            (
              (
                (
                  (
                    (
                      `mydb`.`device` `d`
                      LEFT JOIN `mydb`.`device_model` `dm` ON((`d`.`device_model_id` = `dm`.`device_model_id`))
                    )
                    LEFT JOIN `mydb`.`dept` `od` ON((`d`.`owner_dept_id` = `od`.`dept_id`))
                  )
                  LEFT JOIN `mydb`.`dept` `md` ON((`d`.`mgmt_dept_id` = `md`.`dept_id`))
                )
                LEFT JOIN `mydb`.`device_location_log` `dl` ON(
                  (
                    `d`.`last_location_log_id` = `dl`.`device_location_log_id`
                  )
                )
              )
              LEFT JOIN `mydb`.`location` `l` ON((`dl`.`location_id` = `l`.`location_id`))
            )
            LEFT JOIN `mydb`.`warehouse` `w` ON((`l`.`warehouse_id` = `w`.`warehouse_id`))
          )
          LEFT JOIN `mydb`.`client_branch` `cb` ON(
            (`l`.`client_branch_id` = `cb`.`client_branch_id`)
          )
        )
        LEFT JOIN `mydb`.`device_status` `ds` ON((`d`.`status_id` = `ds`.`status_id`))
      )
      LEFT JOIN `mydb`.`device_option` `do` ON((`d`.`device_id` = `do`.`location_device_id`))
    )
    LEFT JOIN `mydb`.`option_model` `om` ON(
      (`do`.`device_option_id` = `om`.`option_model_id`)
    )
  )
GROUP BY
  `d`.`device_id`,
  `d`.`device_model_id`,
  `d`.`owner_dept_id`,
  `d`.`mgmt_dept_id`,
  `d`.`serial`,
  `d`.`regi_date`,
  `d`.`mac`,
  `d`.`last_inspection_log_id`,
  `d`.`last_location_log_id`,
  `d`.`status_id`,
  `dm`.`model_name`,
  `dm`.`manufacturer`,
  `od`.`dept_name`,
  `md`.`dept_name`,
  `l`.`location_id`,
  `w`.`warehouse_id`,
  `w`.`warehouse_name`,
  `cb`.`client_branch_id`,
  `cb`.`client_branch_name`,
  `ds`.`status_name`