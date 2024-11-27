SELECT
  `w`.`warehouse_id` AS `warehouse_id`,
  `w`.`warehouse_name` AS `warehouse_name`,
  `w`.`mgmt_dept_id` AS `mgmt_dept_id`,
  `d`.`dept_name` AS `mgmt_dept_name`,
  `d`.`parent_dept_id` AS `mgmt_parent_dept_id`
FROM
  (
    `mydb`.`warehouse` `w`
    LEFT JOIN `mydb`.`dept` `d` ON((`w`.`mgmt_dept_id` = `d`.`dept_id`))
  )