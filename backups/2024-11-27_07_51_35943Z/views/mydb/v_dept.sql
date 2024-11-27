WITH recursive `dept_path` AS (
  SELECT
    `d`.`dept_id` AS `dept_id`,
    cast(`d`.`dept_id` AS char(20) CHARSET utf8mb4) AS `path_id`,
    cast(`d`.`dept_name` AS char(100) CHARSET utf8mb4) AS `path_name`,
    1 AS `level`
  FROM
    `mydb`.`dept` `d`
  WHERE
    (`d`.`parent_dept_id` IS NULL)
  UNION
  ALL
  SELECT
    `d`.`dept_id` AS `dept_id`,
    concat(
      `dp`.`path_id`,
      ',',
      cast(`d`.`dept_id` AS char(20) CHARSET utf8mb4)
    ) AS `CONCAT(dp.path_id, ',', CAST(d.dept_id AS CHAR(20)))`,
    concat(
      `dp`.`path_name`,
      ',',
      CONVERT(`d`.`dept_name` USING utf8mb4)
    ) AS `CONCAT(dp.path_name, ',', d.dept_name)`,
(`dp`.`level` + 1) AS `dp.level + 1`
  FROM
    (
      `mydb`.`dept` `d`
      JOIN `dept_path` `dp` ON((`d`.`parent_dept_id` = `dp`.`dept_id`))
    )
  WHERE
    (`dp`.`level` < 3)
)
SELECT
  coalesce(`d`.`dept_id`, 0) AS `dept_id`,
  coalesce(
    cast(
      substring_index(`d`.`path_id`, ',', 1) AS char(20) CHARSET utf8mb4
    ),
    ''
  ) AS `dept_1_id`,
  coalesce(substring_index(`d`.`path_name`, ',', 1), '') AS `dept_1`,
  cast(
    (
      CASE
        WHEN (`d`.`level` = 2) THEN `d`.`dept_id`
        WHEN (`d`.`level` = 3) THEN substring_index(substring_index(`d`.`path_id`, ',', 2), ',', -(1))
        ELSE NULL
      END
    ) AS char(20) CHARSET utf8mb4
  ) AS `dept_2_id`,
(
    CASE
      WHEN (`d`.`level` = 2) THEN substring_index(`d`.`path_name`, ',', -(1))
      WHEN (`d`.`level` = 3) THEN substring_index(substring_index(`d`.`path_name`, ',', 2), ',', -(1))
      ELSE NULL
    END
  ) AS `dept_2`,
  cast(
    (
      CASE
        WHEN (`d`.`level` = 3) THEN `d`.`dept_id`
        ELSE NULL
      END
    ) AS char(20) CHARSET utf8mb4
  ) AS `dept_3_id`,
(
    CASE
      WHEN (`d`.`level` = 3) THEN substring_index(`d`.`path_name`, ',', -(1))
      ELSE NULL
    END
  ) AS `dept_3`
FROM
  `dept_path` `d`