WITH recursive `client_tree` AS (
  SELECT
    `mydb`.`client`.`client_id` AS `client_id`,
    `mydb`.`client`.`client_name` AS `client_name`,
    `mydb`.`client`.`parent_client_id` AS `parent_client_id`,
    `mydb`.`client`.`client_id` AS `root_client_id`,
    `mydb`.`client`.`client_name` AS `root_client_name`,
    0 AS `depth`,
    cast(
      `mydb`.`client`.`client_id` AS char(200) CHARSET utf8mb4
    ) AS `path`
  FROM
    `mydb`.`client`
  WHERE
    (`mydb`.`client`.`parent_client_id` IS NULL)
  UNION
  ALL
  SELECT
    `c`.`client_id` AS `client_id`,
    `c`.`client_name` AS `client_name`,
    `c`.`parent_client_id` AS `parent_client_id`,
    `ct`.`root_client_id` AS `root_client_id`,
    `ct`.`root_client_name` AS `root_client_name`,
(`ct`.`depth` + 1) AS `ct.depth + 1`,
    concat(`ct`.`path`, ',', `c`.`client_id`) AS `path`
  FROM
    (
      `mydb`.`client` `c`
      JOIN `client_tree` `ct` ON((`c`.`parent_client_id` = `ct`.`client_id`))
    )
)
SELECT
  `client_tree`.`client_id` AS `client_id`,
  `client_tree`.`client_name` AS `client_name`,
  `client_tree`.`parent_client_id` AS `parent_client_id`,
  `client_tree`.`root_client_id` AS `root_client_id`,
  `client_tree`.`root_client_name` AS `root_client_name`,
  `client_tree`.`depth` AS `depth`,
  `client_tree`.`path` AS `path`
FROM
  `client_tree`