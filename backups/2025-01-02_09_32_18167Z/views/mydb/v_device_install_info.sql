SELECT
  dii.*,
  v_d.serial,
  v_d.mac,
  v_d.device_model_id,
  v_d.model_name,
  v_d.manufacturer,
  v_d.location_type,
  v_d.warehouse_id,
  v_d.warehouse_name,
  v_d.client_branch_id,
  v_d.client_branch_name,
  v_d.client_id,
  v_d.client_name,
  v_d.root_client_id,
  v_d.root_client_name,
  v_d.client_depth
FROM
  device_install_info dii
  LEFT JOIN mydb.v_device v_d ON dii.device_id = v_d.device_id;