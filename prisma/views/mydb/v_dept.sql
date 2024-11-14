SELECT
  `d`.`dept_id` AS `dept_id`,
  `d`.`dept_name` AS `dept_name`,
  `d`.`parent_dept_id` AS `parent_dept_id`,
  `p`.`dept_name` AS `parent_dept_name`
FROM
  (
    `mydb`.`dept` `d`
    LEFT JOIN `mydb`.`dept` `p` ON((`d`.`parent_dept_id` = `p`.`dept_id`))
  )