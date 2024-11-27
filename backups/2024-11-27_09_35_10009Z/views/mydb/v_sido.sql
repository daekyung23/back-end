SELECT
  `sd`.`sido_id` AS `sido_id`,
  `sd`.`sido_name` AS `sido_name`,
  `sgg`.`sigungu_id` AS `sigungu_id`,
  `sgg`.`sigungu_name` AS `sigungu_name`
FROM
  (
    `mydb`.`sido` `sd`
    LEFT JOIN `mydb`.`sigungu` `sgg` ON((`sd`.`sido_id` = `sgg`.`sido_id`))
  )