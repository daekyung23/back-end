SELECT
  `c`.`client_id` AS `client_id`,
  coalesce(`c`.`client_name`, '') AS `client_name`,
  `c`.`parent_client_id` AS `parent_client_id`,
  coalesce(`c`.`default_client_branch_rate_id`, 0) AS `default_client_branch_rate_id`,
  coalesce(`c`.`is_active`, 1) AS `is_active`,
  `p`.`client_name` AS `parent_client_name`,
  `cr`.`rate_type` AS `client_rate`,
  `cr`.`rate_detail` AS `rate_detail`,
  count(DISTINCT `cb`.`client_branch_id`) AS `branch_count`
FROM
  (
    (
      (
        `mydb`.`client` `c`
        LEFT JOIN `mydb`.`client` `p` ON((`c`.`parent_client_id` = `p`.`client_id`))
      )
      LEFT JOIN `mydb`.`client_rate` `cr` ON(
        (
          `c`.`default_client_branch_rate_id` = `cr`.`client_rate_id`
        )
      )
    )
    LEFT JOIN `mydb`.`client_branch` `cb` ON((`c`.`client_id` = `cb`.`client_id`))
  )
GROUP BY
  `c`.`client_id`