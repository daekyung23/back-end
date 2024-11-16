import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const Approval_roleScalarFieldEnumSchema = z.enum(['role_id','role_name','upper_role_id']);

export const CallScalarFieldEnumSchema = z.enum(['call_id','call_type_id','client_branch_id','requester_name','requester_num','requester_black_consumer','device_id','detail','state','received_at','receiver_id','transferred_at','transferred_dept_id','assigner_id','completed_at']);

export const Call_typeScalarFieldEnumSchema = z.enum(['call_type_id','call_type_name','parent_call_type_id']);

export const ClientScalarFieldEnumSchema = z.enum(['client_id','parent_client_id','default_client_branch_rate_id','client_name','is_active']);

export const Client_branchScalarFieldEnumSchema = z.enum(['client_branch_id','sigungu_id','mgmt_dept_id','client_id','client_branch_name','client_branch_rate_id','branch_mgr_name','branch_mgr_mobile_num','branch_mgr_office_num','branch_mgr_email','is_active','remote_support','push_alert']);

export const Client_rateScalarFieldEnumSchema = z.enum(['client_rate_id','rate_type','rate_detail']);

export const Consumable_modelScalarFieldEnumSchema = z.enum(['consumable_model_id','manufacturer','consumable_name','consumable_type']);

export const DeptScalarFieldEnumSchema = z.enum(['dept_id','parent_dept_id','dept_name']);

export const DeviceScalarFieldEnumSchema = z.enum(['device_id','device_model_id','owner_dept_id','mgmt_dept_id','serial','regi_date','mac','last_inspection_log_id','last_location_log_id','status_id']);

export const Device_approvalScalarFieldEnumSchema = z.enum(['approval_id','approval_type_id','sub_approval_id','requester_id','request_at','approver_role_id','origin_location_id','destination_location_id','approver_id','approve_at','is_approved']);

export const Device_approval_typeScalarFieldEnumSchema = z.enum(['approval_type_id','approval_type_name']);

export const Device_consumable_compatibilityScalarFieldEnumSchema = z.enum(['device_model_id','consumable_model_id']);

export const Device_driverScalarFieldEnumSchema = z.enum(['device_driver_id','device_model_id','manufacturer','printer_language','install_file_address']);

export const Device_inspection_logScalarFieldEnumSchema = z.enum(['device_inspection_log_id','device_id','inspector_id','inspection_date','visit_type','call_id','FL','FS','BL','BS','toner_count_YE','toner_count_MA','toner_count_CY','toner_count_BK','toner_stock_YE','toner_stock_MA','toner_stock_CY','toner_stock_BK','toner_deliver_YE','toner_deliver_CY','toner_deliver_MA','toner_deliver_BK','drum_count_YE','drum_count_MA','drum_count_CY','drum_count_BK','drum_replacement_detail','status']);

export const Device_install_infoScalarFieldEnumSchema = z.enum(['device_id','installer_id','mgmt_num','ip_address','subnet_mask','gateway','dns1','dns2']);

export const Device_location_logScalarFieldEnumSchema = z.enum(['device_location_log_id','device_id','location_date','location_id','location_detail']);

export const Device_modelScalarFieldEnumSchema = z.enum(['device_model_id','model_name','manufacturer','color_support']);

export const Device_optionScalarFieldEnumSchema = z.enum(['device_option_id','option_model_id','serial','is_active','location_type','location_warehouse_id','location_device_id']);

export const Device_option_compatibilityScalarFieldEnumSchema = z.enum(['device_model_id','option_model_id']);

export const Device_statusScalarFieldEnumSchema = z.enum(['status_id','status_name']);

export const Inspection_approvalScalarFieldEnumSchema = z.enum(['approval_id','requester_id','request_at','approver_role_id','device_inspection_log_id','approver_id','approved_at','is_approved']);

export const LocationScalarFieldEnumSchema = z.enum(['location_id','location_type','warehouse_id','client_branch_id']);

export const Option_modelScalarFieldEnumSchema = z.enum(['option_model_id','option_model_name','option_type','manufacturer']);

export const SidoScalarFieldEnumSchema = z.enum(['sido_id','sido_name']);

export const SigunguScalarFieldEnumSchema = z.enum(['sigungu_id','sigungu_name','sido_id']);

export const UserScalarFieldEnumSchema = z.enum(['user_id','user_name','login_id','password','mobile_num','office_num','email','modified_at','dept_id','approval_role_id','position_id','created_at','is_active','permission']);

export const User_positionScalarFieldEnumSchema = z.enum(['user_position_id','position_name']);

export const User_role_assignmentScalarFieldEnumSchema = z.enum(['role_id','approver_id']);

export const WarehouseScalarFieldEnumSchema = z.enum(['warehouse_id','warehouse_name','mgmt_dept_id']);

export const V_clientScalarFieldEnumSchema = z.enum(['client_id','client_name','parent_client_id','default_client_branch_rate_id','is_active','parent_client_name','client_rate','rate_detail','branch_count']);

export const V_client_branchScalarFieldEnumSchema = z.enum(['client_branch_id','client_branch_name','client_id','sigungu_id','mgmt_dept_id','client_branch_rate_id','branch_mgr_name','branch_mgr_mobile_num','branch_mgr_office_num','branch_mgr_email','is_active','remote_support','push_alert','client_name','sigungu_name','sido_name']);

export const V_consumable_modelScalarFieldEnumSchema = z.enum(['compatibility_id','consumable_model_id','manufacturer','consumable_name','consumable_type','model_manufacturer']);

export const V_deptScalarFieldEnumSchema = z.enum(['dept_id','dept_1_id','dept_1','dept_2_id','dept_2','dept_3_id','dept_3']);

export const V_device_driverScalarFieldEnumSchema = z.enum(['device_driver_id','device_model_id','driver_manufacturer','printer_language','install_file_address','model_manufacturer','model_name','color_support']);

export const V_userScalarFieldEnumSchema = z.enum(['user_id','user_name','login_id','mobile_num','office_num','email','modified_at','created_at','is_active','permission','dept_id','approval_role_id','position_id','dept_name','parent_dept_id']);

export const V_warehouseScalarFieldEnumSchema = z.enum(['warehouse_id','warehouse_name','mgmt_dept_id','mgmt_dept_name','mgmt_parent_dept_id']);

export const V_deviceScalarFieldEnumSchema = z.enum(['device_id','device_model_id','owner_dept_id','mgmt_dept_id','serial','regi_date','mac','last_inspection_log_id','last_location_log_id','status_id','model_name','manufacturer','owner_dept_name','mgmt_dept_name','location_id','warehouse_id','warehouse_name','client_branch_id','client_branch_name','status_name','has_fax','has_desk','has_shelf']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const NullsOrderSchema = z.enum(['first','last']);

export const location_location_typeSchema = z.enum(['warehouse','client_branch']);

export type location_location_typeType = `${z.infer<typeof location_location_typeSchema>}`

export const device_option_location_typeSchema = z.enum(['warehouse','device']);

export type device_option_location_typeType = `${z.infer<typeof device_option_location_typeSchema>}`

export const user_permissionSchema = z.enum(['user','manager','admin']);

export type user_permissionType = `${z.infer<typeof user_permissionSchema>}`

export const device_inspection_log_statusSchema = z.enum(['normal','pending']);

export type device_inspection_log_statusType = `${z.infer<typeof device_inspection_log_statusSchema>}`

export const v_user_permissionSchema = z.enum(['user','manager','admin']);

export type v_user_permissionType = `${z.infer<typeof v_user_permissionSchema>}`

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// APPROVAL ROLE SCHEMA
/////////////////////////////////////////

export const approval_roleSchema = z.object({
  role_id: z.number().int(),
  role_name: z.string(),
  upper_role_id: z.number().int().nullable(),
})

export type approval_role = z.infer<typeof approval_roleSchema>

/////////////////////////////////////////
// CALL SCHEMA
/////////////////////////////////////////

export const callSchema = z.object({
  call_id: z.number().int(),
  call_type_id: z.number().int(),
  client_branch_id: z.number().int(),
  requester_name: z.string(),
  requester_num: z.string(),
  requester_black_consumer: z.number().int(),
  device_id: z.number().int().nullable(),
  detail: z.string(),
  state: z.string(),
  received_at: z.coerce.date(),
  receiver_id: z.number().int(),
  transferred_at: z.coerce.date().nullable(),
  transferred_dept_id: z.number().int().nullable(),
  assigner_id: z.number().int().nullable(),
  completed_at: z.coerce.date().nullable(),
})

export type call = z.infer<typeof callSchema>

/////////////////////////////////////////
// CALL TYPE SCHEMA
/////////////////////////////////////////

export const call_typeSchema = z.object({
  call_type_id: z.number().int(),
  call_type_name: z.string(),
  parent_call_type_id: z.number().int().nullable(),
})

export type call_type = z.infer<typeof call_typeSchema>

/////////////////////////////////////////
// CLIENT SCHEMA
/////////////////////////////////////////

export const clientSchema = z.object({
  client_id: z.number().int(),
  parent_client_id: z.number().int().nullable(),
  default_client_branch_rate_id: z.number().int(),
  client_name: z.string(),
  is_active: z.number().int(),
})

export type client = z.infer<typeof clientSchema>

/////////////////////////////////////////
// CLIENT BRANCH SCHEMA
/////////////////////////////////////////

export const client_branchSchema = z.object({
  client_branch_id: z.number().int(),
  sigungu_id: z.number().int(),
  mgmt_dept_id: z.number().int(),
  client_id: z.number().int(),
  client_branch_name: z.string(),
  client_branch_rate_id: z.number().int(),
  branch_mgr_name: z.string().nullable(),
  branch_mgr_mobile_num: z.string().nullable(),
  branch_mgr_office_num: z.string().nullable(),
  branch_mgr_email: z.string().nullable(),
  is_active: z.number().int(),
  remote_support: z.number().int(),
  push_alert: z.number().int(),
})

export type client_branch = z.infer<typeof client_branchSchema>

/////////////////////////////////////////
// CLIENT RATE SCHEMA
/////////////////////////////////////////

export const client_rateSchema = z.object({
  client_rate_id: z.number().int(),
  rate_type: z.string(),
  rate_detail: z.string().nullable(),
})

export type client_rate = z.infer<typeof client_rateSchema>

/////////////////////////////////////////
// CONSUMABLE MODEL SCHEMA
/////////////////////////////////////////

export const consumable_modelSchema = z.object({
  consumable_model_id: z.number().int(),
  manufacturer: z.string(),
  consumable_name: z.string(),
  consumable_type: z.string(),
})

export type consumable_model = z.infer<typeof consumable_modelSchema>

/////////////////////////////////////////
// DEPT SCHEMA
/////////////////////////////////////////

export const deptSchema = z.object({
  dept_id: z.number().int(),
  parent_dept_id: z.number().int().nullable(),
  dept_name: z.string(),
})

export type dept = z.infer<typeof deptSchema>

/////////////////////////////////////////
// DEVICE SCHEMA
/////////////////////////////////////////

export const deviceSchema = z.object({
  device_id: z.number().int(),
  device_model_id: z.number().int(),
  owner_dept_id: z.number().int(),
  mgmt_dept_id: z.number().int(),
  serial: z.string(),
  regi_date: z.coerce.date(),
  mac: z.string(),
  last_inspection_log_id: z.number().int().nullable(),
  last_location_log_id: z.number().int().nullable(),
  status_id: z.number().int(),
})

export type device = z.infer<typeof deviceSchema>

/////////////////////////////////////////
// DEVICE APPROVAL SCHEMA
/////////////////////////////////////////

export const device_approvalSchema = z.object({
  approval_id: z.number().int(),
  approval_type_id: z.number().int(),
  sub_approval_id: z.number().int().nullable(),
  requester_id: z.number().int(),
  request_at: z.coerce.date(),
  approver_role_id: z.number().int(),
  origin_location_id: z.number().int().nullable(),
  destination_location_id: z.number().int().nullable(),
  approver_id: z.number().int().nullable(),
  approve_at: z.coerce.date().nullable(),
  is_approved: z.number().int().nullable(),
})

export type device_approval = z.infer<typeof device_approvalSchema>

/////////////////////////////////////////
// DEVICE APPROVAL TYPE SCHEMA
/////////////////////////////////////////

export const device_approval_typeSchema = z.object({
  approval_type_id: z.number().int(),
  approval_type_name: z.string(),
})

export type device_approval_type = z.infer<typeof device_approval_typeSchema>

/////////////////////////////////////////
// DEVICE CONSUMABLE COMPATIBILITY SCHEMA
/////////////////////////////////////////

export const device_consumable_compatibilitySchema = z.object({
  device_model_id: z.number().int(),
  consumable_model_id: z.number().int(),
})

export type device_consumable_compatibility = z.infer<typeof device_consumable_compatibilitySchema>

/////////////////////////////////////////
// DEVICE DRIVER SCHEMA
/////////////////////////////////////////

export const device_driverSchema = z.object({
  device_driver_id: z.number().int(),
  device_model_id: z.number().int(),
  manufacturer: z.string().nullable(),
  printer_language: z.string().nullable(),
  install_file_address: z.string().nullable(),
})

export type device_driver = z.infer<typeof device_driverSchema>

/////////////////////////////////////////
// DEVICE INSPECTION LOG SCHEMA
/////////////////////////////////////////

export const device_inspection_logSchema = z.object({
  status: device_inspection_log_statusSchema.nullable(),
  device_inspection_log_id: z.number().int(),
  device_id: z.number().int(),
  inspector_id: z.number().int(),
  inspection_date: z.coerce.date(),
  visit_type: z.string(),
  call_id: z.number().int().nullable(),
  FL: z.number().int().nullable(),
  FS: z.number().int().nullable(),
  BL: z.number().int().nullable(),
  BS: z.number().int().nullable(),
  toner_count_YE: z.number().int().nullable(),
  toner_count_MA: z.number().int().nullable(),
  toner_count_CY: z.number().int().nullable(),
  toner_count_BK: z.number().int().nullable(),
  toner_stock_YE: z.number().int().nullable(),
  toner_stock_MA: z.number().int().nullable(),
  toner_stock_CY: z.number().int().nullable(),
  toner_stock_BK: z.number().int().nullable(),
  toner_deliver_YE: z.number().int().nullable(),
  toner_deliver_CY: z.number().int().nullable(),
  toner_deliver_MA: z.number().int().nullable(),
  toner_deliver_BK: z.number().int().nullable(),
  drum_count_YE: z.number().int().nullable(),
  drum_count_MA: z.number().int().nullable(),
  drum_count_CY: z.number().int().nullable(),
  drum_count_BK: z.number().int().nullable(),
  drum_replacement_detail: z.string().nullable(),
})

export type device_inspection_log = z.infer<typeof device_inspection_logSchema>

/////////////////////////////////////////
// DEVICE INSTALL INFO SCHEMA
/////////////////////////////////////////

export const device_install_infoSchema = z.object({
  device_id: z.number().int(),
  installer_id: z.number().int(),
  mgmt_num: z.string(),
  ip_address: z.string().nullable(),
  subnet_mask: z.string().nullable(),
  gateway: z.string().nullable(),
  dns1: z.string().nullable(),
  dns2: z.string().nullable(),
})

export type device_install_info = z.infer<typeof device_install_infoSchema>

/////////////////////////////////////////
// DEVICE LOCATION LOG SCHEMA
/////////////////////////////////////////

export const device_location_logSchema = z.object({
  device_location_log_id: z.number().int(),
  device_id: z.number().int(),
  location_date: z.coerce.date(),
  location_id: z.number().int(),
  location_detail: z.string().nullable(),
})

export type device_location_log = z.infer<typeof device_location_logSchema>

/////////////////////////////////////////
// DEVICE MODEL SCHEMA
/////////////////////////////////////////

export const device_modelSchema = z.object({
  device_model_id: z.number().int(),
  model_name: z.string(),
  manufacturer: z.string(),
  color_support: z.number().int(),
})

export type device_model = z.infer<typeof device_modelSchema>

/////////////////////////////////////////
// DEVICE OPTION SCHEMA
/////////////////////////////////////////

export const device_optionSchema = z.object({
  location_type: device_option_location_typeSchema,
  device_option_id: z.number().int(),
  option_model_id: z.number().int(),
  serial: z.string().nullable(),
  is_active: z.number().int(),
  location_warehouse_id: z.number().int().nullable(),
  location_device_id: z.number().int().nullable(),
})

export type device_option = z.infer<typeof device_optionSchema>

/////////////////////////////////////////
// DEVICE OPTION COMPATIBILITY SCHEMA
/////////////////////////////////////////

export const device_option_compatibilitySchema = z.object({
  device_model_id: z.number().int(),
  option_model_id: z.number().int(),
})

export type device_option_compatibility = z.infer<typeof device_option_compatibilitySchema>

/////////////////////////////////////////
// DEVICE STATUS SCHEMA
/////////////////////////////////////////

export const device_statusSchema = z.object({
  status_id: z.number().int(),
  status_name: z.string(),
})

export type device_status = z.infer<typeof device_statusSchema>

/////////////////////////////////////////
// INSPECTION APPROVAL SCHEMA
/////////////////////////////////////////

export const inspection_approvalSchema = z.object({
  approval_id: z.number().int(),
  requester_id: z.number().int(),
  request_at: z.coerce.date(),
  approver_role_id: z.number().int().nullable(),
  device_inspection_log_id: z.number().int(),
  approver_id: z.number().int().nullable(),
  approved_at: z.coerce.date().nullable(),
  is_approved: z.number().int().nullable(),
})

export type inspection_approval = z.infer<typeof inspection_approvalSchema>

/////////////////////////////////////////
// LOCATION SCHEMA
/////////////////////////////////////////

export const locationSchema = z.object({
  location_type: location_location_typeSchema,
  location_id: z.number().int(),
  warehouse_id: z.number().int().nullable(),
  client_branch_id: z.number().int().nullable(),
})

export type location = z.infer<typeof locationSchema>

/////////////////////////////////////////
// OPTION MODEL SCHEMA
/////////////////////////////////////////

export const option_modelSchema = z.object({
  option_model_id: z.number().int(),
  option_model_name: z.string(),
  option_type: z.string(),
  manufacturer: z.string(),
})

export type option_model = z.infer<typeof option_modelSchema>

/////////////////////////////////////////
// SIDO SCHEMA
/////////////////////////////////////////

export const sidoSchema = z.object({
  sido_id: z.number().int(),
  sido_name: z.string().nullable(),
})

export type sido = z.infer<typeof sidoSchema>

/////////////////////////////////////////
// SIGUNGU SCHEMA
/////////////////////////////////////////

export const sigunguSchema = z.object({
  sigungu_id: z.number().int(),
  sigungu_name: z.string(),
  sido_id: z.number().int(),
})

export type sigungu = z.infer<typeof sigunguSchema>

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const userSchema = z.object({
  permission: user_permissionSchema,
  user_id: z.number().int(),
  user_name: z.string(),
  login_id: z.string(),
  password: z.string(),
  mobile_num: z.string().nullable(),
  office_num: z.string().nullable(),
  email: z.string().nullable(),
  modified_at: z.coerce.date().nullable(),
  dept_id: z.number().int(),
  approval_role_id: z.number().int().nullable(),
  position_id: z.number().int(),
  created_at: z.coerce.date(),
  is_active: z.number().int(),
})

export type user = z.infer<typeof userSchema>

/////////////////////////////////////////
// USER POSITION SCHEMA
/////////////////////////////////////////

export const user_positionSchema = z.object({
  user_position_id: z.number().int(),
  position_name: z.string(),
})

export type user_position = z.infer<typeof user_positionSchema>

/////////////////////////////////////////
// USER ROLE ASSIGNMENT SCHEMA
/////////////////////////////////////////

export const user_role_assignmentSchema = z.object({
  role_id: z.number().int(),
  approver_id: z.number().int(),
})

export type user_role_assignment = z.infer<typeof user_role_assignmentSchema>

/////////////////////////////////////////
// WAREHOUSE SCHEMA
/////////////////////////////////////////

export const warehouseSchema = z.object({
  warehouse_id: z.number().int(),
  warehouse_name: z.string(),
  mgmt_dept_id: z.number().int(),
})

export type warehouse = z.infer<typeof warehouseSchema>

/////////////////////////////////////////
// V CLIENT SCHEMA
/////////////////////////////////////////

/**
 * The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export const v_clientSchema = z.object({
  client_id: z.number().int(),
  client_name: z.string(),
  parent_client_id: z.number().int().nullable(),
  default_client_branch_rate_id: z.bigint(),
  is_active: z.number().int(),
  parent_client_name: z.string().nullable(),
  client_rate: z.string().nullable(),
  rate_detail: z.string().nullable(),
  branch_count: z.bigint(),
})

export type v_client = z.infer<typeof v_clientSchema>

/////////////////////////////////////////
// V CLIENT BRANCH SCHEMA
/////////////////////////////////////////

/**
 * The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export const v_client_branchSchema = z.object({
  client_branch_id: z.number().int(),
  client_branch_name: z.string(),
  client_id: z.number().int(),
  sigungu_id: z.number().int(),
  mgmt_dept_id: z.number().int(),
  client_branch_rate_id: z.number().int(),
  branch_mgr_name: z.string().nullable(),
  branch_mgr_mobile_num: z.string().nullable(),
  branch_mgr_office_num: z.string().nullable(),
  branch_mgr_email: z.string().nullable(),
  is_active: z.number().int(),
  remote_support: z.number().int(),
  push_alert: z.number().int(),
  client_name: z.string().nullable(),
  sigungu_name: z.string().nullable(),
  sido_name: z.string().nullable(),
})

export type v_client_branch = z.infer<typeof v_client_branchSchema>

/////////////////////////////////////////
// V CONSUMABLE MODEL SCHEMA
/////////////////////////////////////////

/**
 * The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export const v_consumable_modelSchema = z.object({
  compatibility_id: z.string(),
  consumable_model_id: z.number().int().nullable(),
  manufacturer: z.string().nullable(),
  consumable_name: z.string().nullable(),
  consumable_type: z.string().nullable(),
  model_manufacturer: z.string().nullable(),
})

export type v_consumable_model = z.infer<typeof v_consumable_modelSchema>

/////////////////////////////////////////
// V DEPT SCHEMA
/////////////////////////////////////////

/**
 * The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export const v_deptSchema = z.object({
  dept_id: z.bigint(),
  dept_1_id: z.string(),
  dept_1: z.string(),
  dept_2_id: z.string().nullable(),
  dept_2: z.string().nullable(),
  dept_3_id: z.string().nullable(),
  dept_3: z.string().nullable(),
})

export type v_dept = z.infer<typeof v_deptSchema>

/////////////////////////////////////////
// V DEVICE DRIVER SCHEMA
/////////////////////////////////////////

/**
 * The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export const v_device_driverSchema = z.object({
  device_driver_id: z.number().int(),
  device_model_id: z.number().int(),
  driver_manufacturer: z.string().nullable(),
  printer_language: z.string().nullable(),
  install_file_address: z.string().nullable(),
  model_manufacturer: z.string().nullable(),
  model_name: z.string().nullable(),
  color_support: z.number().int().nullable(),
})

export type v_device_driver = z.infer<typeof v_device_driverSchema>

/////////////////////////////////////////
// V USER SCHEMA
/////////////////////////////////////////

/**
 * The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export const v_userSchema = z.object({
  permission: v_user_permissionSchema,
  user_id: z.number().int(),
  user_name: z.string(),
  login_id: z.string(),
  mobile_num: z.string().nullable(),
  office_num: z.string().nullable(),
  email: z.string().nullable(),
  modified_at: z.coerce.date().nullable(),
  created_at: z.coerce.date(),
  is_active: z.number().int(),
  dept_id: z.number().int(),
  approval_role_id: z.number().int().nullable(),
  position_id: z.number().int(),
  dept_name: z.string().nullable(),
  parent_dept_id: z.number().int().nullable(),
})

export type v_user = z.infer<typeof v_userSchema>

/////////////////////////////////////////
// V WAREHOUSE SCHEMA
/////////////////////////////////////////

/**
 * The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export const v_warehouseSchema = z.object({
  warehouse_id: z.number().int(),
  warehouse_name: z.string(),
  mgmt_dept_id: z.number().int(),
  mgmt_dept_name: z.string().nullable(),
  mgmt_parent_dept_id: z.number().int().nullable(),
})

export type v_warehouse = z.infer<typeof v_warehouseSchema>

/////////////////////////////////////////
// V DEVICE SCHEMA
/////////////////////////////////////////

/**
 * The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export const v_deviceSchema = z.object({
  device_id: z.number().int(),
  device_model_id: z.number().int(),
  owner_dept_id: z.number().int(),
  mgmt_dept_id: z.number().int(),
  serial: z.string(),
  regi_date: z.coerce.date(),
  mac: z.string(),
  last_inspection_log_id: z.number().int().nullable(),
  last_location_log_id: z.number().int().nullable(),
  status_id: z.number().int(),
  model_name: z.string().nullable(),
  manufacturer: z.string().nullable(),
  owner_dept_name: z.string().nullable(),
  mgmt_dept_name: z.string().nullable(),
  location_id: z.number().int().nullable(),
  warehouse_id: z.number().int().nullable(),
  warehouse_name: z.string().nullable(),
  client_branch_id: z.number().int().nullable(),
  client_branch_name: z.string().nullable(),
  status_name: z.string().nullable(),
  has_fax: z.bigint().nullable(),
  has_desk: z.bigint().nullable(),
  has_shelf: z.bigint().nullable(),
})

export type v_device = z.infer<typeof v_deviceSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// APPROVAL ROLE
//------------------------------------------------------

export const approval_roleSelectSchema: z.ZodType<Prisma.approval_roleSelect> = z.object({
  role_id: z.boolean().optional(),
  role_name: z.boolean().optional(),
  upper_role_id: z.boolean().optional(),
}).strict()

// CALL
//------------------------------------------------------

export const callSelectSchema: z.ZodType<Prisma.callSelect> = z.object({
  call_id: z.boolean().optional(),
  call_type_id: z.boolean().optional(),
  client_branch_id: z.boolean().optional(),
  requester_name: z.boolean().optional(),
  requester_num: z.boolean().optional(),
  requester_black_consumer: z.boolean().optional(),
  device_id: z.boolean().optional(),
  detail: z.boolean().optional(),
  state: z.boolean().optional(),
  received_at: z.boolean().optional(),
  receiver_id: z.boolean().optional(),
  transferred_at: z.boolean().optional(),
  transferred_dept_id: z.boolean().optional(),
  assigner_id: z.boolean().optional(),
  completed_at: z.boolean().optional(),
}).strict()

// CALL TYPE
//------------------------------------------------------

export const call_typeSelectSchema: z.ZodType<Prisma.call_typeSelect> = z.object({
  call_type_id: z.boolean().optional(),
  call_type_name: z.boolean().optional(),
  parent_call_type_id: z.boolean().optional(),
}).strict()

// CLIENT
//------------------------------------------------------

export const clientSelectSchema: z.ZodType<Prisma.clientSelect> = z.object({
  client_id: z.boolean().optional(),
  parent_client_id: z.boolean().optional(),
  default_client_branch_rate_id: z.boolean().optional(),
  client_name: z.boolean().optional(),
  is_active: z.boolean().optional(),
}).strict()

// CLIENT BRANCH
//------------------------------------------------------

export const client_branchSelectSchema: z.ZodType<Prisma.client_branchSelect> = z.object({
  client_branch_id: z.boolean().optional(),
  sigungu_id: z.boolean().optional(),
  mgmt_dept_id: z.boolean().optional(),
  client_id: z.boolean().optional(),
  client_branch_name: z.boolean().optional(),
  client_branch_rate_id: z.boolean().optional(),
  branch_mgr_name: z.boolean().optional(),
  branch_mgr_mobile_num: z.boolean().optional(),
  branch_mgr_office_num: z.boolean().optional(),
  branch_mgr_email: z.boolean().optional(),
  is_active: z.boolean().optional(),
  remote_support: z.boolean().optional(),
  push_alert: z.boolean().optional(),
}).strict()

// CLIENT RATE
//------------------------------------------------------

export const client_rateSelectSchema: z.ZodType<Prisma.client_rateSelect> = z.object({
  client_rate_id: z.boolean().optional(),
  rate_type: z.boolean().optional(),
  rate_detail: z.boolean().optional(),
}).strict()

// CONSUMABLE MODEL
//------------------------------------------------------

export const consumable_modelSelectSchema: z.ZodType<Prisma.consumable_modelSelect> = z.object({
  consumable_model_id: z.boolean().optional(),
  manufacturer: z.boolean().optional(),
  consumable_name: z.boolean().optional(),
  consumable_type: z.boolean().optional(),
}).strict()

// DEPT
//------------------------------------------------------

export const deptSelectSchema: z.ZodType<Prisma.deptSelect> = z.object({
  dept_id: z.boolean().optional(),
  parent_dept_id: z.boolean().optional(),
  dept_name: z.boolean().optional(),
}).strict()

// DEVICE
//------------------------------------------------------

export const deviceSelectSchema: z.ZodType<Prisma.deviceSelect> = z.object({
  device_id: z.boolean().optional(),
  device_model_id: z.boolean().optional(),
  owner_dept_id: z.boolean().optional(),
  mgmt_dept_id: z.boolean().optional(),
  serial: z.boolean().optional(),
  regi_date: z.boolean().optional(),
  mac: z.boolean().optional(),
  last_inspection_log_id: z.boolean().optional(),
  last_location_log_id: z.boolean().optional(),
  status_id: z.boolean().optional(),
}).strict()

// DEVICE APPROVAL
//------------------------------------------------------

export const device_approvalSelectSchema: z.ZodType<Prisma.device_approvalSelect> = z.object({
  approval_id: z.boolean().optional(),
  approval_type_id: z.boolean().optional(),
  sub_approval_id: z.boolean().optional(),
  requester_id: z.boolean().optional(),
  request_at: z.boolean().optional(),
  approver_role_id: z.boolean().optional(),
  origin_location_id: z.boolean().optional(),
  destination_location_id: z.boolean().optional(),
  approver_id: z.boolean().optional(),
  approve_at: z.boolean().optional(),
  is_approved: z.boolean().optional(),
}).strict()

// DEVICE APPROVAL TYPE
//------------------------------------------------------

export const device_approval_typeSelectSchema: z.ZodType<Prisma.device_approval_typeSelect> = z.object({
  approval_type_id: z.boolean().optional(),
  approval_type_name: z.boolean().optional(),
}).strict()

// DEVICE CONSUMABLE COMPATIBILITY
//------------------------------------------------------

export const device_consumable_compatibilitySelectSchema: z.ZodType<Prisma.device_consumable_compatibilitySelect> = z.object({
  device_model_id: z.boolean().optional(),
  consumable_model_id: z.boolean().optional(),
}).strict()

// DEVICE DRIVER
//------------------------------------------------------

export const device_driverSelectSchema: z.ZodType<Prisma.device_driverSelect> = z.object({
  device_driver_id: z.boolean().optional(),
  device_model_id: z.boolean().optional(),
  manufacturer: z.boolean().optional(),
  printer_language: z.boolean().optional(),
  install_file_address: z.boolean().optional(),
}).strict()

// DEVICE INSPECTION LOG
//------------------------------------------------------

export const device_inspection_logSelectSchema: z.ZodType<Prisma.device_inspection_logSelect> = z.object({
  device_inspection_log_id: z.boolean().optional(),
  device_id: z.boolean().optional(),
  inspector_id: z.boolean().optional(),
  inspection_date: z.boolean().optional(),
  visit_type: z.boolean().optional(),
  call_id: z.boolean().optional(),
  FL: z.boolean().optional(),
  FS: z.boolean().optional(),
  BL: z.boolean().optional(),
  BS: z.boolean().optional(),
  toner_count_YE: z.boolean().optional(),
  toner_count_MA: z.boolean().optional(),
  toner_count_CY: z.boolean().optional(),
  toner_count_BK: z.boolean().optional(),
  toner_stock_YE: z.boolean().optional(),
  toner_stock_MA: z.boolean().optional(),
  toner_stock_CY: z.boolean().optional(),
  toner_stock_BK: z.boolean().optional(),
  toner_deliver_YE: z.boolean().optional(),
  toner_deliver_CY: z.boolean().optional(),
  toner_deliver_MA: z.boolean().optional(),
  toner_deliver_BK: z.boolean().optional(),
  drum_count_YE: z.boolean().optional(),
  drum_count_MA: z.boolean().optional(),
  drum_count_CY: z.boolean().optional(),
  drum_count_BK: z.boolean().optional(),
  drum_replacement_detail: z.boolean().optional(),
  status: z.boolean().optional(),
}).strict()

// DEVICE INSTALL INFO
//------------------------------------------------------

export const device_install_infoSelectSchema: z.ZodType<Prisma.device_install_infoSelect> = z.object({
  device_id: z.boolean().optional(),
  installer_id: z.boolean().optional(),
  mgmt_num: z.boolean().optional(),
  ip_address: z.boolean().optional(),
  subnet_mask: z.boolean().optional(),
  gateway: z.boolean().optional(),
  dns1: z.boolean().optional(),
  dns2: z.boolean().optional(),
}).strict()

// DEVICE LOCATION LOG
//------------------------------------------------------

export const device_location_logSelectSchema: z.ZodType<Prisma.device_location_logSelect> = z.object({
  device_location_log_id: z.boolean().optional(),
  device_id: z.boolean().optional(),
  location_date: z.boolean().optional(),
  location_id: z.boolean().optional(),
  location_detail: z.boolean().optional(),
}).strict()

// DEVICE MODEL
//------------------------------------------------------

export const device_modelSelectSchema: z.ZodType<Prisma.device_modelSelect> = z.object({
  device_model_id: z.boolean().optional(),
  model_name: z.boolean().optional(),
  manufacturer: z.boolean().optional(),
  color_support: z.boolean().optional(),
}).strict()

// DEVICE OPTION
//------------------------------------------------------

export const device_optionSelectSchema: z.ZodType<Prisma.device_optionSelect> = z.object({
  device_option_id: z.boolean().optional(),
  option_model_id: z.boolean().optional(),
  serial: z.boolean().optional(),
  is_active: z.boolean().optional(),
  location_type: z.boolean().optional(),
  location_warehouse_id: z.boolean().optional(),
  location_device_id: z.boolean().optional(),
}).strict()

// DEVICE OPTION COMPATIBILITY
//------------------------------------------------------

export const device_option_compatibilitySelectSchema: z.ZodType<Prisma.device_option_compatibilitySelect> = z.object({
  device_model_id: z.boolean().optional(),
  option_model_id: z.boolean().optional(),
}).strict()

// DEVICE STATUS
//------------------------------------------------------

export const device_statusSelectSchema: z.ZodType<Prisma.device_statusSelect> = z.object({
  status_id: z.boolean().optional(),
  status_name: z.boolean().optional(),
}).strict()

// INSPECTION APPROVAL
//------------------------------------------------------

export const inspection_approvalSelectSchema: z.ZodType<Prisma.inspection_approvalSelect> = z.object({
  approval_id: z.boolean().optional(),
  requester_id: z.boolean().optional(),
  request_at: z.boolean().optional(),
  approver_role_id: z.boolean().optional(),
  device_inspection_log_id: z.boolean().optional(),
  approver_id: z.boolean().optional(),
  approved_at: z.boolean().optional(),
  is_approved: z.boolean().optional(),
}).strict()

// LOCATION
//------------------------------------------------------

export const locationSelectSchema: z.ZodType<Prisma.locationSelect> = z.object({
  location_id: z.boolean().optional(),
  location_type: z.boolean().optional(),
  warehouse_id: z.boolean().optional(),
  client_branch_id: z.boolean().optional(),
}).strict()

// OPTION MODEL
//------------------------------------------------------

export const option_modelSelectSchema: z.ZodType<Prisma.option_modelSelect> = z.object({
  option_model_id: z.boolean().optional(),
  option_model_name: z.boolean().optional(),
  option_type: z.boolean().optional(),
  manufacturer: z.boolean().optional(),
}).strict()

// SIDO
//------------------------------------------------------

export const sidoSelectSchema: z.ZodType<Prisma.sidoSelect> = z.object({
  sido_id: z.boolean().optional(),
  sido_name: z.boolean().optional(),
}).strict()

// SIGUNGU
//------------------------------------------------------

export const sigunguSelectSchema: z.ZodType<Prisma.sigunguSelect> = z.object({
  sigungu_id: z.boolean().optional(),
  sigungu_name: z.boolean().optional(),
  sido_id: z.boolean().optional(),
}).strict()

// USER
//------------------------------------------------------

export const userSelectSchema: z.ZodType<Prisma.userSelect> = z.object({
  user_id: z.boolean().optional(),
  user_name: z.boolean().optional(),
  login_id: z.boolean().optional(),
  password: z.boolean().optional(),
  mobile_num: z.boolean().optional(),
  office_num: z.boolean().optional(),
  email: z.boolean().optional(),
  modified_at: z.boolean().optional(),
  dept_id: z.boolean().optional(),
  approval_role_id: z.boolean().optional(),
  position_id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  is_active: z.boolean().optional(),
  permission: z.boolean().optional(),
}).strict()

// USER POSITION
//------------------------------------------------------

export const user_positionSelectSchema: z.ZodType<Prisma.user_positionSelect> = z.object({
  user_position_id: z.boolean().optional(),
  position_name: z.boolean().optional(),
}).strict()

// USER ROLE ASSIGNMENT
//------------------------------------------------------

export const user_role_assignmentSelectSchema: z.ZodType<Prisma.user_role_assignmentSelect> = z.object({
  role_id: z.boolean().optional(),
  approver_id: z.boolean().optional(),
}).strict()

// WAREHOUSE
//------------------------------------------------------

export const warehouseSelectSchema: z.ZodType<Prisma.warehouseSelect> = z.object({
  warehouse_id: z.boolean().optional(),
  warehouse_name: z.boolean().optional(),
  mgmt_dept_id: z.boolean().optional(),
}).strict()

// V CLIENT
//------------------------------------------------------

export const v_clientSelectSchema: z.ZodType<Prisma.v_clientSelect> = z.object({
  client_id: z.boolean().optional(),
  client_name: z.boolean().optional(),
  parent_client_id: z.boolean().optional(),
  default_client_branch_rate_id: z.boolean().optional(),
  is_active: z.boolean().optional(),
  parent_client_name: z.boolean().optional(),
  client_rate: z.boolean().optional(),
  rate_detail: z.boolean().optional(),
  branch_count: z.boolean().optional(),
}).strict()

// V CLIENT BRANCH
//------------------------------------------------------

export const v_client_branchSelectSchema: z.ZodType<Prisma.v_client_branchSelect> = z.object({
  client_branch_id: z.boolean().optional(),
  client_branch_name: z.boolean().optional(),
  client_id: z.boolean().optional(),
  sigungu_id: z.boolean().optional(),
  mgmt_dept_id: z.boolean().optional(),
  client_branch_rate_id: z.boolean().optional(),
  branch_mgr_name: z.boolean().optional(),
  branch_mgr_mobile_num: z.boolean().optional(),
  branch_mgr_office_num: z.boolean().optional(),
  branch_mgr_email: z.boolean().optional(),
  is_active: z.boolean().optional(),
  remote_support: z.boolean().optional(),
  push_alert: z.boolean().optional(),
  client_name: z.boolean().optional(),
  sigungu_name: z.boolean().optional(),
  sido_name: z.boolean().optional(),
}).strict()

// V CONSUMABLE MODEL
//------------------------------------------------------

export const v_consumable_modelSelectSchema: z.ZodType<Prisma.v_consumable_modelSelect> = z.object({
  compatibility_id: z.boolean().optional(),
  consumable_model_id: z.boolean().optional(),
  manufacturer: z.boolean().optional(),
  consumable_name: z.boolean().optional(),
  consumable_type: z.boolean().optional(),
  model_manufacturer: z.boolean().optional(),
}).strict()

// V DEPT
//------------------------------------------------------

export const v_deptSelectSchema: z.ZodType<Prisma.v_deptSelect> = z.object({
  dept_id: z.boolean().optional(),
  dept_1_id: z.boolean().optional(),
  dept_1: z.boolean().optional(),
  dept_2_id: z.boolean().optional(),
  dept_2: z.boolean().optional(),
  dept_3_id: z.boolean().optional(),
  dept_3: z.boolean().optional(),
}).strict()

// V DEVICE DRIVER
//------------------------------------------------------

export const v_device_driverSelectSchema: z.ZodType<Prisma.v_device_driverSelect> = z.object({
  device_driver_id: z.boolean().optional(),
  device_model_id: z.boolean().optional(),
  driver_manufacturer: z.boolean().optional(),
  printer_language: z.boolean().optional(),
  install_file_address: z.boolean().optional(),
  model_manufacturer: z.boolean().optional(),
  model_name: z.boolean().optional(),
  color_support: z.boolean().optional(),
}).strict()

// V USER
//------------------------------------------------------

export const v_userSelectSchema: z.ZodType<Prisma.v_userSelect> = z.object({
  user_id: z.boolean().optional(),
  user_name: z.boolean().optional(),
  login_id: z.boolean().optional(),
  mobile_num: z.boolean().optional(),
  office_num: z.boolean().optional(),
  email: z.boolean().optional(),
  modified_at: z.boolean().optional(),
  created_at: z.boolean().optional(),
  is_active: z.boolean().optional(),
  permission: z.boolean().optional(),
  dept_id: z.boolean().optional(),
  approval_role_id: z.boolean().optional(),
  position_id: z.boolean().optional(),
  dept_name: z.boolean().optional(),
  parent_dept_id: z.boolean().optional(),
}).strict()

// V WAREHOUSE
//------------------------------------------------------

export const v_warehouseSelectSchema: z.ZodType<Prisma.v_warehouseSelect> = z.object({
  warehouse_id: z.boolean().optional(),
  warehouse_name: z.boolean().optional(),
  mgmt_dept_id: z.boolean().optional(),
  mgmt_dept_name: z.boolean().optional(),
  mgmt_parent_dept_id: z.boolean().optional(),
}).strict()

// V DEVICE
//------------------------------------------------------

export const v_deviceSelectSchema: z.ZodType<Prisma.v_deviceSelect> = z.object({
  device_id: z.boolean().optional(),
  device_model_id: z.boolean().optional(),
  owner_dept_id: z.boolean().optional(),
  mgmt_dept_id: z.boolean().optional(),
  serial: z.boolean().optional(),
  regi_date: z.boolean().optional(),
  mac: z.boolean().optional(),
  last_inspection_log_id: z.boolean().optional(),
  last_location_log_id: z.boolean().optional(),
  status_id: z.boolean().optional(),
  model_name: z.boolean().optional(),
  manufacturer: z.boolean().optional(),
  owner_dept_name: z.boolean().optional(),
  mgmt_dept_name: z.boolean().optional(),
  location_id: z.boolean().optional(),
  warehouse_id: z.boolean().optional(),
  warehouse_name: z.boolean().optional(),
  client_branch_id: z.boolean().optional(),
  client_branch_name: z.boolean().optional(),
  status_name: z.boolean().optional(),
  has_fax: z.boolean().optional(),
  has_desk: z.boolean().optional(),
  has_shelf: z.boolean().optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const approval_roleWhereInputSchema: z.ZodType<Prisma.approval_roleWhereInput> = z.object({
  AND: z.union([ z.lazy(() => approval_roleWhereInputSchema),z.lazy(() => approval_roleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => approval_roleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => approval_roleWhereInputSchema),z.lazy(() => approval_roleWhereInputSchema).array() ]).optional(),
  role_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  role_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  upper_role_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export const approval_roleOrderByWithRelationInputSchema: z.ZodType<Prisma.approval_roleOrderByWithRelationInput> = z.object({
  role_id: z.lazy(() => SortOrderSchema).optional(),
  role_name: z.lazy(() => SortOrderSchema).optional(),
  upper_role_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
}).strict();

export const approval_roleWhereUniqueInputSchema: z.ZodType<Prisma.approval_roleWhereUniqueInput> = z.object({
  role_id: z.number().int()
})
.and(z.object({
  role_id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => approval_roleWhereInputSchema),z.lazy(() => approval_roleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => approval_roleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => approval_roleWhereInputSchema),z.lazy(() => approval_roleWhereInputSchema).array() ]).optional(),
  role_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  upper_role_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
}).strict());

export const approval_roleOrderByWithAggregationInputSchema: z.ZodType<Prisma.approval_roleOrderByWithAggregationInput> = z.object({
  role_id: z.lazy(() => SortOrderSchema).optional(),
  role_name: z.lazy(() => SortOrderSchema).optional(),
  upper_role_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => approval_roleCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => approval_roleAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => approval_roleMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => approval_roleMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => approval_roleSumOrderByAggregateInputSchema).optional()
}).strict();

export const approval_roleScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.approval_roleScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => approval_roleScalarWhereWithAggregatesInputSchema),z.lazy(() => approval_roleScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => approval_roleScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => approval_roleScalarWhereWithAggregatesInputSchema),z.lazy(() => approval_roleScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  role_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  role_name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  upper_role_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export const callWhereInputSchema: z.ZodType<Prisma.callWhereInput> = z.object({
  AND: z.union([ z.lazy(() => callWhereInputSchema),z.lazy(() => callWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => callWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => callWhereInputSchema),z.lazy(() => callWhereInputSchema).array() ]).optional(),
  call_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  call_type_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  client_branch_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  requester_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  requester_num: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  requester_black_consumer: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  device_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  detail: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  state: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  received_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  receiver_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  transferred_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  transferred_dept_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  assigner_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  completed_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export const callOrderByWithRelationInputSchema: z.ZodType<Prisma.callOrderByWithRelationInput> = z.object({
  call_id: z.lazy(() => SortOrderSchema).optional(),
  call_type_id: z.lazy(() => SortOrderSchema).optional(),
  client_branch_id: z.lazy(() => SortOrderSchema).optional(),
  requester_name: z.lazy(() => SortOrderSchema).optional(),
  requester_num: z.lazy(() => SortOrderSchema).optional(),
  requester_black_consumer: z.lazy(() => SortOrderSchema).optional(),
  device_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  detail: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  received_at: z.lazy(() => SortOrderSchema).optional(),
  receiver_id: z.lazy(() => SortOrderSchema).optional(),
  transferred_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  transferred_dept_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  assigner_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  completed_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
}).strict();

export const callWhereUniqueInputSchema: z.ZodType<Prisma.callWhereUniqueInput> = z.object({
  call_id: z.number().int()
})
.and(z.object({
  call_id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => callWhereInputSchema),z.lazy(() => callWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => callWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => callWhereInputSchema),z.lazy(() => callWhereInputSchema).array() ]).optional(),
  call_type_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  client_branch_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  requester_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  requester_num: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  requester_black_consumer: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  device_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  detail: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  state: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  received_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  receiver_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  transferred_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  transferred_dept_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  assigner_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  completed_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict());

export const callOrderByWithAggregationInputSchema: z.ZodType<Prisma.callOrderByWithAggregationInput> = z.object({
  call_id: z.lazy(() => SortOrderSchema).optional(),
  call_type_id: z.lazy(() => SortOrderSchema).optional(),
  client_branch_id: z.lazy(() => SortOrderSchema).optional(),
  requester_name: z.lazy(() => SortOrderSchema).optional(),
  requester_num: z.lazy(() => SortOrderSchema).optional(),
  requester_black_consumer: z.lazy(() => SortOrderSchema).optional(),
  device_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  detail: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  received_at: z.lazy(() => SortOrderSchema).optional(),
  receiver_id: z.lazy(() => SortOrderSchema).optional(),
  transferred_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  transferred_dept_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  assigner_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  completed_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => callCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => callAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => callMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => callMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => callSumOrderByAggregateInputSchema).optional()
}).strict();

export const callScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.callScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => callScalarWhereWithAggregatesInputSchema),z.lazy(() => callScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => callScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => callScalarWhereWithAggregatesInputSchema),z.lazy(() => callScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  call_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  call_type_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  client_branch_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  requester_name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  requester_num: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  requester_black_consumer: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  device_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  detail: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  state: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  received_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  receiver_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  transferred_at: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  transferred_dept_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  assigner_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  completed_at: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export const call_typeWhereInputSchema: z.ZodType<Prisma.call_typeWhereInput> = z.object({
  AND: z.union([ z.lazy(() => call_typeWhereInputSchema),z.lazy(() => call_typeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => call_typeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => call_typeWhereInputSchema),z.lazy(() => call_typeWhereInputSchema).array() ]).optional(),
  call_type_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  call_type_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  parent_call_type_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export const call_typeOrderByWithRelationInputSchema: z.ZodType<Prisma.call_typeOrderByWithRelationInput> = z.object({
  call_type_id: z.lazy(() => SortOrderSchema).optional(),
  call_type_name: z.lazy(() => SortOrderSchema).optional(),
  parent_call_type_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
}).strict();

export const call_typeWhereUniqueInputSchema: z.ZodType<Prisma.call_typeWhereUniqueInput> = z.object({
  call_type_id: z.number().int()
})
.and(z.object({
  call_type_id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => call_typeWhereInputSchema),z.lazy(() => call_typeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => call_typeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => call_typeWhereInputSchema),z.lazy(() => call_typeWhereInputSchema).array() ]).optional(),
  call_type_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  parent_call_type_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
}).strict());

export const call_typeOrderByWithAggregationInputSchema: z.ZodType<Prisma.call_typeOrderByWithAggregationInput> = z.object({
  call_type_id: z.lazy(() => SortOrderSchema).optional(),
  call_type_name: z.lazy(() => SortOrderSchema).optional(),
  parent_call_type_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => call_typeCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => call_typeAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => call_typeMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => call_typeMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => call_typeSumOrderByAggregateInputSchema).optional()
}).strict();

export const call_typeScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.call_typeScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => call_typeScalarWhereWithAggregatesInputSchema),z.lazy(() => call_typeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => call_typeScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => call_typeScalarWhereWithAggregatesInputSchema),z.lazy(() => call_typeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  call_type_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  call_type_name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  parent_call_type_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export const clientWhereInputSchema: z.ZodType<Prisma.clientWhereInput> = z.object({
  AND: z.union([ z.lazy(() => clientWhereInputSchema),z.lazy(() => clientWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => clientWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => clientWhereInputSchema),z.lazy(() => clientWhereInputSchema).array() ]).optional(),
  client_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  parent_client_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  default_client_branch_rate_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  client_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  is_active: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const clientOrderByWithRelationInputSchema: z.ZodType<Prisma.clientOrderByWithRelationInput> = z.object({
  client_id: z.lazy(() => SortOrderSchema).optional(),
  parent_client_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  default_client_branch_rate_id: z.lazy(() => SortOrderSchema).optional(),
  client_name: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const clientWhereUniqueInputSchema: z.ZodType<Prisma.clientWhereUniqueInput> = z.object({
  client_id: z.number().int()
})
.and(z.object({
  client_id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => clientWhereInputSchema),z.lazy(() => clientWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => clientWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => clientWhereInputSchema),z.lazy(() => clientWhereInputSchema).array() ]).optional(),
  parent_client_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  default_client_branch_rate_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  client_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  is_active: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
}).strict());

export const clientOrderByWithAggregationInputSchema: z.ZodType<Prisma.clientOrderByWithAggregationInput> = z.object({
  client_id: z.lazy(() => SortOrderSchema).optional(),
  parent_client_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  default_client_branch_rate_id: z.lazy(() => SortOrderSchema).optional(),
  client_name: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => clientCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => clientAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => clientMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => clientMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => clientSumOrderByAggregateInputSchema).optional()
}).strict();

export const clientScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.clientScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => clientScalarWhereWithAggregatesInputSchema),z.lazy(() => clientScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => clientScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => clientScalarWhereWithAggregatesInputSchema),z.lazy(() => clientScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  client_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  parent_client_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  default_client_branch_rate_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  client_name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  is_active: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const client_branchWhereInputSchema: z.ZodType<Prisma.client_branchWhereInput> = z.object({
  AND: z.union([ z.lazy(() => client_branchWhereInputSchema),z.lazy(() => client_branchWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => client_branchWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => client_branchWhereInputSchema),z.lazy(() => client_branchWhereInputSchema).array() ]).optional(),
  client_branch_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  sigungu_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  mgmt_dept_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  client_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  client_branch_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  client_branch_rate_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  branch_mgr_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  branch_mgr_mobile_num: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  branch_mgr_office_num: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  branch_mgr_email: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  is_active: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  remote_support: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  push_alert: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const client_branchOrderByWithRelationInputSchema: z.ZodType<Prisma.client_branchOrderByWithRelationInput> = z.object({
  client_branch_id: z.lazy(() => SortOrderSchema).optional(),
  sigungu_id: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_id: z.lazy(() => SortOrderSchema).optional(),
  client_id: z.lazy(() => SortOrderSchema).optional(),
  client_branch_name: z.lazy(() => SortOrderSchema).optional(),
  client_branch_rate_id: z.lazy(() => SortOrderSchema).optional(),
  branch_mgr_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  branch_mgr_mobile_num: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  branch_mgr_office_num: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  branch_mgr_email: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  remote_support: z.lazy(() => SortOrderSchema).optional(),
  push_alert: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const client_branchWhereUniqueInputSchema: z.ZodType<Prisma.client_branchWhereUniqueInput> = z.object({
  client_branch_id: z.number().int()
})
.and(z.object({
  client_branch_id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => client_branchWhereInputSchema),z.lazy(() => client_branchWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => client_branchWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => client_branchWhereInputSchema),z.lazy(() => client_branchWhereInputSchema).array() ]).optional(),
  sigungu_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  mgmt_dept_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  client_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  client_branch_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  client_branch_rate_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  branch_mgr_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  branch_mgr_mobile_num: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  branch_mgr_office_num: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  branch_mgr_email: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  is_active: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  remote_support: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  push_alert: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
}).strict());

export const client_branchOrderByWithAggregationInputSchema: z.ZodType<Prisma.client_branchOrderByWithAggregationInput> = z.object({
  client_branch_id: z.lazy(() => SortOrderSchema).optional(),
  sigungu_id: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_id: z.lazy(() => SortOrderSchema).optional(),
  client_id: z.lazy(() => SortOrderSchema).optional(),
  client_branch_name: z.lazy(() => SortOrderSchema).optional(),
  client_branch_rate_id: z.lazy(() => SortOrderSchema).optional(),
  branch_mgr_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  branch_mgr_mobile_num: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  branch_mgr_office_num: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  branch_mgr_email: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  remote_support: z.lazy(() => SortOrderSchema).optional(),
  push_alert: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => client_branchCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => client_branchAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => client_branchMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => client_branchMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => client_branchSumOrderByAggregateInputSchema).optional()
}).strict();

export const client_branchScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.client_branchScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => client_branchScalarWhereWithAggregatesInputSchema),z.lazy(() => client_branchScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => client_branchScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => client_branchScalarWhereWithAggregatesInputSchema),z.lazy(() => client_branchScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  client_branch_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  sigungu_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  mgmt_dept_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  client_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  client_branch_name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  client_branch_rate_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  branch_mgr_name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  branch_mgr_mobile_num: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  branch_mgr_office_num: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  branch_mgr_email: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  is_active: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  remote_support: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  push_alert: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const client_rateWhereInputSchema: z.ZodType<Prisma.client_rateWhereInput> = z.object({
  AND: z.union([ z.lazy(() => client_rateWhereInputSchema),z.lazy(() => client_rateWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => client_rateWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => client_rateWhereInputSchema),z.lazy(() => client_rateWhereInputSchema).array() ]).optional(),
  client_rate_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  rate_type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  rate_detail: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const client_rateOrderByWithRelationInputSchema: z.ZodType<Prisma.client_rateOrderByWithRelationInput> = z.object({
  client_rate_id: z.lazy(() => SortOrderSchema).optional(),
  rate_type: z.lazy(() => SortOrderSchema).optional(),
  rate_detail: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
}).strict();

export const client_rateWhereUniqueInputSchema: z.ZodType<Prisma.client_rateWhereUniqueInput> = z.object({
  client_rate_id: z.number().int()
})
.and(z.object({
  client_rate_id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => client_rateWhereInputSchema),z.lazy(() => client_rateWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => client_rateWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => client_rateWhereInputSchema),z.lazy(() => client_rateWhereInputSchema).array() ]).optional(),
  rate_type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  rate_detail: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict());

export const client_rateOrderByWithAggregationInputSchema: z.ZodType<Prisma.client_rateOrderByWithAggregationInput> = z.object({
  client_rate_id: z.lazy(() => SortOrderSchema).optional(),
  rate_type: z.lazy(() => SortOrderSchema).optional(),
  rate_detail: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => client_rateCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => client_rateAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => client_rateMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => client_rateMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => client_rateSumOrderByAggregateInputSchema).optional()
}).strict();

export const client_rateScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.client_rateScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => client_rateScalarWhereWithAggregatesInputSchema),z.lazy(() => client_rateScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => client_rateScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => client_rateScalarWhereWithAggregatesInputSchema),z.lazy(() => client_rateScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  client_rate_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  rate_type: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  rate_detail: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const consumable_modelWhereInputSchema: z.ZodType<Prisma.consumable_modelWhereInput> = z.object({
  AND: z.union([ z.lazy(() => consumable_modelWhereInputSchema),z.lazy(() => consumable_modelWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => consumable_modelWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => consumable_modelWhereInputSchema),z.lazy(() => consumable_modelWhereInputSchema).array() ]).optional(),
  consumable_model_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  manufacturer: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  consumable_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  consumable_type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const consumable_modelOrderByWithRelationInputSchema: z.ZodType<Prisma.consumable_modelOrderByWithRelationInput> = z.object({
  consumable_model_id: z.lazy(() => SortOrderSchema).optional(),
  manufacturer: z.lazy(() => SortOrderSchema).optional(),
  consumable_name: z.lazy(() => SortOrderSchema).optional(),
  consumable_type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const consumable_modelWhereUniqueInputSchema: z.ZodType<Prisma.consumable_modelWhereUniqueInput> = z.object({
  consumable_model_id: z.number().int()
})
.and(z.object({
  consumable_model_id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => consumable_modelWhereInputSchema),z.lazy(() => consumable_modelWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => consumable_modelWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => consumable_modelWhereInputSchema),z.lazy(() => consumable_modelWhereInputSchema).array() ]).optional(),
  manufacturer: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  consumable_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  consumable_type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict());

export const consumable_modelOrderByWithAggregationInputSchema: z.ZodType<Prisma.consumable_modelOrderByWithAggregationInput> = z.object({
  consumable_model_id: z.lazy(() => SortOrderSchema).optional(),
  manufacturer: z.lazy(() => SortOrderSchema).optional(),
  consumable_name: z.lazy(() => SortOrderSchema).optional(),
  consumable_type: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => consumable_modelCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => consumable_modelAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => consumable_modelMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => consumable_modelMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => consumable_modelSumOrderByAggregateInputSchema).optional()
}).strict();

export const consumable_modelScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.consumable_modelScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => consumable_modelScalarWhereWithAggregatesInputSchema),z.lazy(() => consumable_modelScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => consumable_modelScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => consumable_modelScalarWhereWithAggregatesInputSchema),z.lazy(() => consumable_modelScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  consumable_model_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  manufacturer: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  consumable_name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  consumable_type: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const deptWhereInputSchema: z.ZodType<Prisma.deptWhereInput> = z.object({
  AND: z.union([ z.lazy(() => deptWhereInputSchema),z.lazy(() => deptWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => deptWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => deptWhereInputSchema),z.lazy(() => deptWhereInputSchema).array() ]).optional(),
  dept_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  parent_dept_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  dept_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const deptOrderByWithRelationInputSchema: z.ZodType<Prisma.deptOrderByWithRelationInput> = z.object({
  dept_id: z.lazy(() => SortOrderSchema).optional(),
  parent_dept_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  dept_name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const deptWhereUniqueInputSchema: z.ZodType<Prisma.deptWhereUniqueInput> = z.object({
  dept_id: z.number().int()
})
.and(z.object({
  dept_id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => deptWhereInputSchema),z.lazy(() => deptWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => deptWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => deptWhereInputSchema),z.lazy(() => deptWhereInputSchema).array() ]).optional(),
  parent_dept_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  dept_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict());

export const deptOrderByWithAggregationInputSchema: z.ZodType<Prisma.deptOrderByWithAggregationInput> = z.object({
  dept_id: z.lazy(() => SortOrderSchema).optional(),
  parent_dept_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  dept_name: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => deptCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => deptAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => deptMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => deptMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => deptSumOrderByAggregateInputSchema).optional()
}).strict();

export const deptScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.deptScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => deptScalarWhereWithAggregatesInputSchema),z.lazy(() => deptScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => deptScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => deptScalarWhereWithAggregatesInputSchema),z.lazy(() => deptScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  dept_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  parent_dept_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  dept_name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const deviceWhereInputSchema: z.ZodType<Prisma.deviceWhereInput> = z.object({
  AND: z.union([ z.lazy(() => deviceWhereInputSchema),z.lazy(() => deviceWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => deviceWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => deviceWhereInputSchema),z.lazy(() => deviceWhereInputSchema).array() ]).optional(),
  device_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  device_model_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  owner_dept_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  mgmt_dept_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  serial: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  regi_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  mac: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  last_inspection_log_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  last_location_log_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  status_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const deviceOrderByWithRelationInputSchema: z.ZodType<Prisma.deviceOrderByWithRelationInput> = z.object({
  device_id: z.lazy(() => SortOrderSchema).optional(),
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  owner_dept_id: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_id: z.lazy(() => SortOrderSchema).optional(),
  serial: z.lazy(() => SortOrderSchema).optional(),
  regi_date: z.lazy(() => SortOrderSchema).optional(),
  mac: z.lazy(() => SortOrderSchema).optional(),
  last_inspection_log_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  last_location_log_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  status_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const deviceWhereUniqueInputSchema: z.ZodType<Prisma.deviceWhereUniqueInput> = z.object({
  device_id: z.number().int()
})
.and(z.object({
  device_id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => deviceWhereInputSchema),z.lazy(() => deviceWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => deviceWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => deviceWhereInputSchema),z.lazy(() => deviceWhereInputSchema).array() ]).optional(),
  device_model_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  owner_dept_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  mgmt_dept_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  serial: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  regi_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  mac: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  last_inspection_log_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  last_location_log_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  status_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
}).strict());

export const deviceOrderByWithAggregationInputSchema: z.ZodType<Prisma.deviceOrderByWithAggregationInput> = z.object({
  device_id: z.lazy(() => SortOrderSchema).optional(),
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  owner_dept_id: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_id: z.lazy(() => SortOrderSchema).optional(),
  serial: z.lazy(() => SortOrderSchema).optional(),
  regi_date: z.lazy(() => SortOrderSchema).optional(),
  mac: z.lazy(() => SortOrderSchema).optional(),
  last_inspection_log_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  last_location_log_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  status_id: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => deviceCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => deviceAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => deviceMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => deviceMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => deviceSumOrderByAggregateInputSchema).optional()
}).strict();

export const deviceScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.deviceScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => deviceScalarWhereWithAggregatesInputSchema),z.lazy(() => deviceScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => deviceScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => deviceScalarWhereWithAggregatesInputSchema),z.lazy(() => deviceScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  device_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  device_model_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  owner_dept_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  mgmt_dept_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  serial: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  regi_date: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  mac: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  last_inspection_log_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  last_location_log_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  status_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const device_approvalWhereInputSchema: z.ZodType<Prisma.device_approvalWhereInput> = z.object({
  AND: z.union([ z.lazy(() => device_approvalWhereInputSchema),z.lazy(() => device_approvalWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_approvalWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_approvalWhereInputSchema),z.lazy(() => device_approvalWhereInputSchema).array() ]).optional(),
  approval_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  approval_type_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  sub_approval_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  requester_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  request_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  approver_role_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  origin_location_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  destination_location_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  approver_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  approve_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  is_approved: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export const device_approvalOrderByWithRelationInputSchema: z.ZodType<Prisma.device_approvalOrderByWithRelationInput> = z.object({
  approval_id: z.lazy(() => SortOrderSchema).optional(),
  approval_type_id: z.lazy(() => SortOrderSchema).optional(),
  sub_approval_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  requester_id: z.lazy(() => SortOrderSchema).optional(),
  request_at: z.lazy(() => SortOrderSchema).optional(),
  approver_role_id: z.lazy(() => SortOrderSchema).optional(),
  origin_location_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  destination_location_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  approver_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  approve_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  is_approved: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
}).strict();

export const device_approvalWhereUniqueInputSchema: z.ZodType<Prisma.device_approvalWhereUniqueInput> = z.object({
  approval_id: z.number().int()
})
.and(z.object({
  approval_id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => device_approvalWhereInputSchema),z.lazy(() => device_approvalWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_approvalWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_approvalWhereInputSchema),z.lazy(() => device_approvalWhereInputSchema).array() ]).optional(),
  approval_type_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  sub_approval_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  requester_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  request_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  approver_role_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  origin_location_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  destination_location_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  approver_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  approve_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  is_approved: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
}).strict());

export const device_approvalOrderByWithAggregationInputSchema: z.ZodType<Prisma.device_approvalOrderByWithAggregationInput> = z.object({
  approval_id: z.lazy(() => SortOrderSchema).optional(),
  approval_type_id: z.lazy(() => SortOrderSchema).optional(),
  sub_approval_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  requester_id: z.lazy(() => SortOrderSchema).optional(),
  request_at: z.lazy(() => SortOrderSchema).optional(),
  approver_role_id: z.lazy(() => SortOrderSchema).optional(),
  origin_location_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  destination_location_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  approver_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  approve_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  is_approved: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => device_approvalCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => device_approvalAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => device_approvalMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => device_approvalMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => device_approvalSumOrderByAggregateInputSchema).optional()
}).strict();

export const device_approvalScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.device_approvalScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => device_approvalScalarWhereWithAggregatesInputSchema),z.lazy(() => device_approvalScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_approvalScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_approvalScalarWhereWithAggregatesInputSchema),z.lazy(() => device_approvalScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  approval_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  approval_type_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  sub_approval_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  requester_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  request_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  approver_role_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  origin_location_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  destination_location_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  approver_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  approve_at: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  is_approved: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export const device_approval_typeWhereInputSchema: z.ZodType<Prisma.device_approval_typeWhereInput> = z.object({
  AND: z.union([ z.lazy(() => device_approval_typeWhereInputSchema),z.lazy(() => device_approval_typeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_approval_typeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_approval_typeWhereInputSchema),z.lazy(() => device_approval_typeWhereInputSchema).array() ]).optional(),
  approval_type_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  approval_type_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const device_approval_typeOrderByWithRelationInputSchema: z.ZodType<Prisma.device_approval_typeOrderByWithRelationInput> = z.object({
  approval_type_id: z.lazy(() => SortOrderSchema).optional(),
  approval_type_name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const device_approval_typeWhereUniqueInputSchema: z.ZodType<Prisma.device_approval_typeWhereUniqueInput> = z.object({
  approval_type_id: z.number().int()
})
.and(z.object({
  approval_type_id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => device_approval_typeWhereInputSchema),z.lazy(() => device_approval_typeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_approval_typeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_approval_typeWhereInputSchema),z.lazy(() => device_approval_typeWhereInputSchema).array() ]).optional(),
  approval_type_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict());

export const device_approval_typeOrderByWithAggregationInputSchema: z.ZodType<Prisma.device_approval_typeOrderByWithAggregationInput> = z.object({
  approval_type_id: z.lazy(() => SortOrderSchema).optional(),
  approval_type_name: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => device_approval_typeCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => device_approval_typeAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => device_approval_typeMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => device_approval_typeMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => device_approval_typeSumOrderByAggregateInputSchema).optional()
}).strict();

export const device_approval_typeScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.device_approval_typeScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => device_approval_typeScalarWhereWithAggregatesInputSchema),z.lazy(() => device_approval_typeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_approval_typeScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_approval_typeScalarWhereWithAggregatesInputSchema),z.lazy(() => device_approval_typeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  approval_type_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  approval_type_name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const device_consumable_compatibilityWhereInputSchema: z.ZodType<Prisma.device_consumable_compatibilityWhereInput> = z.object({
  AND: z.union([ z.lazy(() => device_consumable_compatibilityWhereInputSchema),z.lazy(() => device_consumable_compatibilityWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_consumable_compatibilityWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_consumable_compatibilityWhereInputSchema),z.lazy(() => device_consumable_compatibilityWhereInputSchema).array() ]).optional(),
  device_model_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  consumable_model_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const device_consumable_compatibilityOrderByWithRelationInputSchema: z.ZodType<Prisma.device_consumable_compatibilityOrderByWithRelationInput> = z.object({
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  consumable_model_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const device_consumable_compatibilityWhereUniqueInputSchema: z.ZodType<Prisma.device_consumable_compatibilityWhereUniqueInput> = z.object({
  device_model_id_consumable_model_id: z.lazy(() => device_consumable_compatibilityDevice_model_idConsumable_model_idCompoundUniqueInputSchema)
})
.and(z.object({
  device_model_id_consumable_model_id: z.lazy(() => device_consumable_compatibilityDevice_model_idConsumable_model_idCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => device_consumable_compatibilityWhereInputSchema),z.lazy(() => device_consumable_compatibilityWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_consumable_compatibilityWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_consumable_compatibilityWhereInputSchema),z.lazy(() => device_consumable_compatibilityWhereInputSchema).array() ]).optional(),
  device_model_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  consumable_model_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
}).strict());

export const device_consumable_compatibilityOrderByWithAggregationInputSchema: z.ZodType<Prisma.device_consumable_compatibilityOrderByWithAggregationInput> = z.object({
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  consumable_model_id: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => device_consumable_compatibilityCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => device_consumable_compatibilityAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => device_consumable_compatibilityMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => device_consumable_compatibilityMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => device_consumable_compatibilitySumOrderByAggregateInputSchema).optional()
}).strict();

export const device_consumable_compatibilityScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.device_consumable_compatibilityScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => device_consumable_compatibilityScalarWhereWithAggregatesInputSchema),z.lazy(() => device_consumable_compatibilityScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_consumable_compatibilityScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_consumable_compatibilityScalarWhereWithAggregatesInputSchema),z.lazy(() => device_consumable_compatibilityScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  device_model_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  consumable_model_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const device_driverWhereInputSchema: z.ZodType<Prisma.device_driverWhereInput> = z.object({
  AND: z.union([ z.lazy(() => device_driverWhereInputSchema),z.lazy(() => device_driverWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_driverWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_driverWhereInputSchema),z.lazy(() => device_driverWhereInputSchema).array() ]).optional(),
  device_driver_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  device_model_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  manufacturer: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  printer_language: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  install_file_address: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const device_driverOrderByWithRelationInputSchema: z.ZodType<Prisma.device_driverOrderByWithRelationInput> = z.object({
  device_driver_id: z.lazy(() => SortOrderSchema).optional(),
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  manufacturer: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  printer_language: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  install_file_address: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
}).strict();

export const device_driverWhereUniqueInputSchema: z.ZodType<Prisma.device_driverWhereUniqueInput> = z.object({
  device_driver_id: z.number().int()
})
.and(z.object({
  device_driver_id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => device_driverWhereInputSchema),z.lazy(() => device_driverWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_driverWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_driverWhereInputSchema),z.lazy(() => device_driverWhereInputSchema).array() ]).optional(),
  device_model_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  manufacturer: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  printer_language: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  install_file_address: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict());

export const device_driverOrderByWithAggregationInputSchema: z.ZodType<Prisma.device_driverOrderByWithAggregationInput> = z.object({
  device_driver_id: z.lazy(() => SortOrderSchema).optional(),
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  manufacturer: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  printer_language: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  install_file_address: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => device_driverCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => device_driverAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => device_driverMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => device_driverMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => device_driverSumOrderByAggregateInputSchema).optional()
}).strict();

export const device_driverScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.device_driverScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => device_driverScalarWhereWithAggregatesInputSchema),z.lazy(() => device_driverScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_driverScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_driverScalarWhereWithAggregatesInputSchema),z.lazy(() => device_driverScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  device_driver_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  device_model_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  manufacturer: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  printer_language: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  install_file_address: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const device_inspection_logWhereInputSchema: z.ZodType<Prisma.device_inspection_logWhereInput> = z.object({
  AND: z.union([ z.lazy(() => device_inspection_logWhereInputSchema),z.lazy(() => device_inspection_logWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_inspection_logWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_inspection_logWhereInputSchema),z.lazy(() => device_inspection_logWhereInputSchema).array() ]).optional(),
  device_inspection_log_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  device_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  inspector_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  inspection_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  visit_type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  call_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  FL: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  FS: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  BL: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  BS: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  toner_count_YE: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  toner_count_MA: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  toner_count_CY: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  toner_count_BK: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  toner_stock_YE: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  toner_stock_MA: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  toner_stock_CY: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  toner_stock_BK: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  toner_deliver_YE: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  toner_deliver_CY: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  toner_deliver_MA: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  toner_deliver_BK: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  drum_count_YE: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  drum_count_MA: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  drum_count_CY: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  drum_count_BK: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  drum_replacement_detail: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => Enumdevice_inspection_log_statusNullableFilterSchema),z.lazy(() => device_inspection_log_statusSchema) ]).optional().nullable(),
}).strict();

export const device_inspection_logOrderByWithRelationInputSchema: z.ZodType<Prisma.device_inspection_logOrderByWithRelationInput> = z.object({
  device_inspection_log_id: z.lazy(() => SortOrderSchema).optional(),
  device_id: z.lazy(() => SortOrderSchema).optional(),
  inspector_id: z.lazy(() => SortOrderSchema).optional(),
  inspection_date: z.lazy(() => SortOrderSchema).optional(),
  visit_type: z.lazy(() => SortOrderSchema).optional(),
  call_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  FL: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  FS: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  BL: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  BS: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  toner_count_YE: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  toner_count_MA: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  toner_count_CY: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  toner_count_BK: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  toner_stock_YE: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  toner_stock_MA: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  toner_stock_CY: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  toner_stock_BK: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  toner_deliver_YE: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  toner_deliver_CY: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  toner_deliver_MA: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  toner_deliver_BK: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  drum_count_YE: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  drum_count_MA: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  drum_count_CY: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  drum_count_BK: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  drum_replacement_detail: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
}).strict();

export const device_inspection_logWhereUniqueInputSchema: z.ZodType<Prisma.device_inspection_logWhereUniqueInput> = z.object({
  device_inspection_log_id: z.number().int()
})
.and(z.object({
  device_inspection_log_id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => device_inspection_logWhereInputSchema),z.lazy(() => device_inspection_logWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_inspection_logWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_inspection_logWhereInputSchema),z.lazy(() => device_inspection_logWhereInputSchema).array() ]).optional(),
  device_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  inspector_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  inspection_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  visit_type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  call_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  FL: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  FS: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  BL: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  BS: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  toner_count_YE: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  toner_count_MA: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  toner_count_CY: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  toner_count_BK: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  toner_stock_YE: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  toner_stock_MA: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  toner_stock_CY: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  toner_stock_BK: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  toner_deliver_YE: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  toner_deliver_CY: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  toner_deliver_MA: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  toner_deliver_BK: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  drum_count_YE: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  drum_count_MA: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  drum_count_CY: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  drum_count_BK: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  drum_replacement_detail: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => Enumdevice_inspection_log_statusNullableFilterSchema),z.lazy(() => device_inspection_log_statusSchema) ]).optional().nullable(),
}).strict());

export const device_inspection_logOrderByWithAggregationInputSchema: z.ZodType<Prisma.device_inspection_logOrderByWithAggregationInput> = z.object({
  device_inspection_log_id: z.lazy(() => SortOrderSchema).optional(),
  device_id: z.lazy(() => SortOrderSchema).optional(),
  inspector_id: z.lazy(() => SortOrderSchema).optional(),
  inspection_date: z.lazy(() => SortOrderSchema).optional(),
  visit_type: z.lazy(() => SortOrderSchema).optional(),
  call_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  FL: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  FS: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  BL: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  BS: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  toner_count_YE: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  toner_count_MA: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  toner_count_CY: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  toner_count_BK: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  toner_stock_YE: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  toner_stock_MA: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  toner_stock_CY: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  toner_stock_BK: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  toner_deliver_YE: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  toner_deliver_CY: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  toner_deliver_MA: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  toner_deliver_BK: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  drum_count_YE: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  drum_count_MA: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  drum_count_CY: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  drum_count_BK: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  drum_replacement_detail: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => device_inspection_logCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => device_inspection_logAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => device_inspection_logMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => device_inspection_logMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => device_inspection_logSumOrderByAggregateInputSchema).optional()
}).strict();

export const device_inspection_logScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.device_inspection_logScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => device_inspection_logScalarWhereWithAggregatesInputSchema),z.lazy(() => device_inspection_logScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_inspection_logScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_inspection_logScalarWhereWithAggregatesInputSchema),z.lazy(() => device_inspection_logScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  device_inspection_log_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  device_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  inspector_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  inspection_date: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  visit_type: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  call_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  FL: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  FS: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  BL: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  BS: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  toner_count_YE: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  toner_count_MA: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  toner_count_CY: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  toner_count_BK: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  toner_stock_YE: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  toner_stock_MA: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  toner_stock_CY: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  toner_stock_BK: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  toner_deliver_YE: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  toner_deliver_CY: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  toner_deliver_MA: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  toner_deliver_BK: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  drum_count_YE: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  drum_count_MA: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  drum_count_CY: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  drum_count_BK: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  drum_replacement_detail: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => Enumdevice_inspection_log_statusNullableWithAggregatesFilterSchema),z.lazy(() => device_inspection_log_statusSchema) ]).optional().nullable(),
}).strict();

export const device_install_infoWhereInputSchema: z.ZodType<Prisma.device_install_infoWhereInput> = z.object({
  AND: z.union([ z.lazy(() => device_install_infoWhereInputSchema),z.lazy(() => device_install_infoWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_install_infoWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_install_infoWhereInputSchema),z.lazy(() => device_install_infoWhereInputSchema).array() ]).optional(),
  device_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  installer_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  mgmt_num: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  ip_address: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  subnet_mask: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  gateway: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  dns1: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  dns2: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const device_install_infoOrderByWithRelationInputSchema: z.ZodType<Prisma.device_install_infoOrderByWithRelationInput> = z.object({
  device_id: z.lazy(() => SortOrderSchema).optional(),
  installer_id: z.lazy(() => SortOrderSchema).optional(),
  mgmt_num: z.lazy(() => SortOrderSchema).optional(),
  ip_address: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  subnet_mask: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  gateway: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  dns1: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  dns2: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
}).strict();

export const device_install_infoWhereUniqueInputSchema: z.ZodType<Prisma.device_install_infoWhereUniqueInput> = z.object({
  device_id: z.number().int()
})
.and(z.object({
  device_id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => device_install_infoWhereInputSchema),z.lazy(() => device_install_infoWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_install_infoWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_install_infoWhereInputSchema),z.lazy(() => device_install_infoWhereInputSchema).array() ]).optional(),
  installer_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  mgmt_num: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  ip_address: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  subnet_mask: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  gateway: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  dns1: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  dns2: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict());

export const device_install_infoOrderByWithAggregationInputSchema: z.ZodType<Prisma.device_install_infoOrderByWithAggregationInput> = z.object({
  device_id: z.lazy(() => SortOrderSchema).optional(),
  installer_id: z.lazy(() => SortOrderSchema).optional(),
  mgmt_num: z.lazy(() => SortOrderSchema).optional(),
  ip_address: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  subnet_mask: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  gateway: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  dns1: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  dns2: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => device_install_infoCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => device_install_infoAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => device_install_infoMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => device_install_infoMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => device_install_infoSumOrderByAggregateInputSchema).optional()
}).strict();

export const device_install_infoScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.device_install_infoScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => device_install_infoScalarWhereWithAggregatesInputSchema),z.lazy(() => device_install_infoScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_install_infoScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_install_infoScalarWhereWithAggregatesInputSchema),z.lazy(() => device_install_infoScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  device_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  installer_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  mgmt_num: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  ip_address: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  subnet_mask: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  gateway: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  dns1: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  dns2: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const device_location_logWhereInputSchema: z.ZodType<Prisma.device_location_logWhereInput> = z.object({
  AND: z.union([ z.lazy(() => device_location_logWhereInputSchema),z.lazy(() => device_location_logWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_location_logWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_location_logWhereInputSchema),z.lazy(() => device_location_logWhereInputSchema).array() ]).optional(),
  device_location_log_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  device_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  location_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  location_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  location_detail: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const device_location_logOrderByWithRelationInputSchema: z.ZodType<Prisma.device_location_logOrderByWithRelationInput> = z.object({
  device_location_log_id: z.lazy(() => SortOrderSchema).optional(),
  device_id: z.lazy(() => SortOrderSchema).optional(),
  location_date: z.lazy(() => SortOrderSchema).optional(),
  location_id: z.lazy(() => SortOrderSchema).optional(),
  location_detail: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
}).strict();

export const device_location_logWhereUniqueInputSchema: z.ZodType<Prisma.device_location_logWhereUniqueInput> = z.object({
  device_location_log_id: z.number().int()
})
.and(z.object({
  device_location_log_id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => device_location_logWhereInputSchema),z.lazy(() => device_location_logWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_location_logWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_location_logWhereInputSchema),z.lazy(() => device_location_logWhereInputSchema).array() ]).optional(),
  device_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  location_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  location_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  location_detail: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict());

export const device_location_logOrderByWithAggregationInputSchema: z.ZodType<Prisma.device_location_logOrderByWithAggregationInput> = z.object({
  device_location_log_id: z.lazy(() => SortOrderSchema).optional(),
  device_id: z.lazy(() => SortOrderSchema).optional(),
  location_date: z.lazy(() => SortOrderSchema).optional(),
  location_id: z.lazy(() => SortOrderSchema).optional(),
  location_detail: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => device_location_logCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => device_location_logAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => device_location_logMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => device_location_logMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => device_location_logSumOrderByAggregateInputSchema).optional()
}).strict();

export const device_location_logScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.device_location_logScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => device_location_logScalarWhereWithAggregatesInputSchema),z.lazy(() => device_location_logScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_location_logScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_location_logScalarWhereWithAggregatesInputSchema),z.lazy(() => device_location_logScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  device_location_log_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  device_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  location_date: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  location_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  location_detail: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const device_modelWhereInputSchema: z.ZodType<Prisma.device_modelWhereInput> = z.object({
  AND: z.union([ z.lazy(() => device_modelWhereInputSchema),z.lazy(() => device_modelWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_modelWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_modelWhereInputSchema),z.lazy(() => device_modelWhereInputSchema).array() ]).optional(),
  device_model_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  model_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  manufacturer: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  color_support: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const device_modelOrderByWithRelationInputSchema: z.ZodType<Prisma.device_modelOrderByWithRelationInput> = z.object({
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  model_name: z.lazy(() => SortOrderSchema).optional(),
  manufacturer: z.lazy(() => SortOrderSchema).optional(),
  color_support: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const device_modelWhereUniqueInputSchema: z.ZodType<Prisma.device_modelWhereUniqueInput> = z.object({
  device_model_id: z.number().int()
})
.and(z.object({
  device_model_id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => device_modelWhereInputSchema),z.lazy(() => device_modelWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_modelWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_modelWhereInputSchema),z.lazy(() => device_modelWhereInputSchema).array() ]).optional(),
  model_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  manufacturer: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  color_support: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
}).strict());

export const device_modelOrderByWithAggregationInputSchema: z.ZodType<Prisma.device_modelOrderByWithAggregationInput> = z.object({
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  model_name: z.lazy(() => SortOrderSchema).optional(),
  manufacturer: z.lazy(() => SortOrderSchema).optional(),
  color_support: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => device_modelCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => device_modelAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => device_modelMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => device_modelMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => device_modelSumOrderByAggregateInputSchema).optional()
}).strict();

export const device_modelScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.device_modelScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => device_modelScalarWhereWithAggregatesInputSchema),z.lazy(() => device_modelScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_modelScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_modelScalarWhereWithAggregatesInputSchema),z.lazy(() => device_modelScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  device_model_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  model_name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  manufacturer: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  color_support: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const device_optionWhereInputSchema: z.ZodType<Prisma.device_optionWhereInput> = z.object({
  AND: z.union([ z.lazy(() => device_optionWhereInputSchema),z.lazy(() => device_optionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_optionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_optionWhereInputSchema),z.lazy(() => device_optionWhereInputSchema).array() ]).optional(),
  device_option_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  option_model_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  serial: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  is_active: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  location_type: z.union([ z.lazy(() => Enumdevice_option_location_typeFilterSchema),z.lazy(() => device_option_location_typeSchema) ]).optional(),
  location_warehouse_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  location_device_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export const device_optionOrderByWithRelationInputSchema: z.ZodType<Prisma.device_optionOrderByWithRelationInput> = z.object({
  device_option_id: z.lazy(() => SortOrderSchema).optional(),
  option_model_id: z.lazy(() => SortOrderSchema).optional(),
  serial: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  location_type: z.lazy(() => SortOrderSchema).optional(),
  location_warehouse_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  location_device_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
}).strict();

export const device_optionWhereUniqueInputSchema: z.ZodType<Prisma.device_optionWhereUniqueInput> = z.object({
  device_option_id: z.number().int()
})
.and(z.object({
  device_option_id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => device_optionWhereInputSchema),z.lazy(() => device_optionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_optionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_optionWhereInputSchema),z.lazy(() => device_optionWhereInputSchema).array() ]).optional(),
  option_model_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  serial: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  is_active: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  location_type: z.union([ z.lazy(() => Enumdevice_option_location_typeFilterSchema),z.lazy(() => device_option_location_typeSchema) ]).optional(),
  location_warehouse_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  location_device_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
}).strict());

export const device_optionOrderByWithAggregationInputSchema: z.ZodType<Prisma.device_optionOrderByWithAggregationInput> = z.object({
  device_option_id: z.lazy(() => SortOrderSchema).optional(),
  option_model_id: z.lazy(() => SortOrderSchema).optional(),
  serial: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  location_type: z.lazy(() => SortOrderSchema).optional(),
  location_warehouse_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  location_device_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => device_optionCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => device_optionAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => device_optionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => device_optionMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => device_optionSumOrderByAggregateInputSchema).optional()
}).strict();

export const device_optionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.device_optionScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => device_optionScalarWhereWithAggregatesInputSchema),z.lazy(() => device_optionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_optionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_optionScalarWhereWithAggregatesInputSchema),z.lazy(() => device_optionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  device_option_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  option_model_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  serial: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  is_active: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  location_type: z.union([ z.lazy(() => Enumdevice_option_location_typeWithAggregatesFilterSchema),z.lazy(() => device_option_location_typeSchema) ]).optional(),
  location_warehouse_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  location_device_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export const device_option_compatibilityWhereInputSchema: z.ZodType<Prisma.device_option_compatibilityWhereInput> = z.object({
  AND: z.union([ z.lazy(() => device_option_compatibilityWhereInputSchema),z.lazy(() => device_option_compatibilityWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_option_compatibilityWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_option_compatibilityWhereInputSchema),z.lazy(() => device_option_compatibilityWhereInputSchema).array() ]).optional(),
  device_model_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  option_model_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const device_option_compatibilityOrderByWithRelationInputSchema: z.ZodType<Prisma.device_option_compatibilityOrderByWithRelationInput> = z.object({
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  option_model_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const device_option_compatibilityWhereUniqueInputSchema: z.ZodType<Prisma.device_option_compatibilityWhereUniqueInput> = z.object({
  device_model_id_option_model_id: z.lazy(() => device_option_compatibilityDevice_model_idOption_model_idCompoundUniqueInputSchema)
})
.and(z.object({
  device_model_id_option_model_id: z.lazy(() => device_option_compatibilityDevice_model_idOption_model_idCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => device_option_compatibilityWhereInputSchema),z.lazy(() => device_option_compatibilityWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_option_compatibilityWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_option_compatibilityWhereInputSchema),z.lazy(() => device_option_compatibilityWhereInputSchema).array() ]).optional(),
  device_model_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  option_model_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
}).strict());

export const device_option_compatibilityOrderByWithAggregationInputSchema: z.ZodType<Prisma.device_option_compatibilityOrderByWithAggregationInput> = z.object({
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  option_model_id: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => device_option_compatibilityCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => device_option_compatibilityAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => device_option_compatibilityMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => device_option_compatibilityMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => device_option_compatibilitySumOrderByAggregateInputSchema).optional()
}).strict();

export const device_option_compatibilityScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.device_option_compatibilityScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => device_option_compatibilityScalarWhereWithAggregatesInputSchema),z.lazy(() => device_option_compatibilityScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_option_compatibilityScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_option_compatibilityScalarWhereWithAggregatesInputSchema),z.lazy(() => device_option_compatibilityScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  device_model_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  option_model_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const device_statusWhereInputSchema: z.ZodType<Prisma.device_statusWhereInput> = z.object({
  AND: z.union([ z.lazy(() => device_statusWhereInputSchema),z.lazy(() => device_statusWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_statusWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_statusWhereInputSchema),z.lazy(() => device_statusWhereInputSchema).array() ]).optional(),
  status_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  status_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const device_statusOrderByWithRelationInputSchema: z.ZodType<Prisma.device_statusOrderByWithRelationInput> = z.object({
  status_id: z.lazy(() => SortOrderSchema).optional(),
  status_name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const device_statusWhereUniqueInputSchema: z.ZodType<Prisma.device_statusWhereUniqueInput> = z.object({
  status_id: z.number().int()
})
.and(z.object({
  status_id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => device_statusWhereInputSchema),z.lazy(() => device_statusWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_statusWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_statusWhereInputSchema),z.lazy(() => device_statusWhereInputSchema).array() ]).optional(),
  status_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict());

export const device_statusOrderByWithAggregationInputSchema: z.ZodType<Prisma.device_statusOrderByWithAggregationInput> = z.object({
  status_id: z.lazy(() => SortOrderSchema).optional(),
  status_name: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => device_statusCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => device_statusAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => device_statusMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => device_statusMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => device_statusSumOrderByAggregateInputSchema).optional()
}).strict();

export const device_statusScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.device_statusScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => device_statusScalarWhereWithAggregatesInputSchema),z.lazy(() => device_statusScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_statusScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_statusScalarWhereWithAggregatesInputSchema),z.lazy(() => device_statusScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  status_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  status_name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const inspection_approvalWhereInputSchema: z.ZodType<Prisma.inspection_approvalWhereInput> = z.object({
  AND: z.union([ z.lazy(() => inspection_approvalWhereInputSchema),z.lazy(() => inspection_approvalWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => inspection_approvalWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => inspection_approvalWhereInputSchema),z.lazy(() => inspection_approvalWhereInputSchema).array() ]).optional(),
  approval_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  requester_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  request_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  approver_role_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  device_inspection_log_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  approver_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  approved_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  is_approved: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export const inspection_approvalOrderByWithRelationInputSchema: z.ZodType<Prisma.inspection_approvalOrderByWithRelationInput> = z.object({
  approval_id: z.lazy(() => SortOrderSchema).optional(),
  requester_id: z.lazy(() => SortOrderSchema).optional(),
  request_at: z.lazy(() => SortOrderSchema).optional(),
  approver_role_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  device_inspection_log_id: z.lazy(() => SortOrderSchema).optional(),
  approver_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  approved_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  is_approved: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
}).strict();

export const inspection_approvalWhereUniqueInputSchema: z.ZodType<Prisma.inspection_approvalWhereUniqueInput> = z.object({
  approval_id: z.number().int()
})
.and(z.object({
  approval_id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => inspection_approvalWhereInputSchema),z.lazy(() => inspection_approvalWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => inspection_approvalWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => inspection_approvalWhereInputSchema),z.lazy(() => inspection_approvalWhereInputSchema).array() ]).optional(),
  requester_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  request_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  approver_role_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  device_inspection_log_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  approver_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  approved_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  is_approved: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
}).strict());

export const inspection_approvalOrderByWithAggregationInputSchema: z.ZodType<Prisma.inspection_approvalOrderByWithAggregationInput> = z.object({
  approval_id: z.lazy(() => SortOrderSchema).optional(),
  requester_id: z.lazy(() => SortOrderSchema).optional(),
  request_at: z.lazy(() => SortOrderSchema).optional(),
  approver_role_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  device_inspection_log_id: z.lazy(() => SortOrderSchema).optional(),
  approver_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  approved_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  is_approved: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => inspection_approvalCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => inspection_approvalAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => inspection_approvalMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => inspection_approvalMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => inspection_approvalSumOrderByAggregateInputSchema).optional()
}).strict();

export const inspection_approvalScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.inspection_approvalScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => inspection_approvalScalarWhereWithAggregatesInputSchema),z.lazy(() => inspection_approvalScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => inspection_approvalScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => inspection_approvalScalarWhereWithAggregatesInputSchema),z.lazy(() => inspection_approvalScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  approval_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  requester_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  request_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  approver_role_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  device_inspection_log_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  approver_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  approved_at: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  is_approved: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export const locationWhereInputSchema: z.ZodType<Prisma.locationWhereInput> = z.object({
  AND: z.union([ z.lazy(() => locationWhereInputSchema),z.lazy(() => locationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => locationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => locationWhereInputSchema),z.lazy(() => locationWhereInputSchema).array() ]).optional(),
  location_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  location_type: z.union([ z.lazy(() => Enumlocation_location_typeFilterSchema),z.lazy(() => location_location_typeSchema) ]).optional(),
  warehouse_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  client_branch_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export const locationOrderByWithRelationInputSchema: z.ZodType<Prisma.locationOrderByWithRelationInput> = z.object({
  location_id: z.lazy(() => SortOrderSchema).optional(),
  location_type: z.lazy(() => SortOrderSchema).optional(),
  warehouse_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  client_branch_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
}).strict();

export const locationWhereUniqueInputSchema: z.ZodType<Prisma.locationWhereUniqueInput> = z.object({
  location_id: z.number().int()
})
.and(z.object({
  location_id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => locationWhereInputSchema),z.lazy(() => locationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => locationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => locationWhereInputSchema),z.lazy(() => locationWhereInputSchema).array() ]).optional(),
  location_type: z.union([ z.lazy(() => Enumlocation_location_typeFilterSchema),z.lazy(() => location_location_typeSchema) ]).optional(),
  warehouse_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  client_branch_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
}).strict());

export const locationOrderByWithAggregationInputSchema: z.ZodType<Prisma.locationOrderByWithAggregationInput> = z.object({
  location_id: z.lazy(() => SortOrderSchema).optional(),
  location_type: z.lazy(() => SortOrderSchema).optional(),
  warehouse_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  client_branch_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => locationCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => locationAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => locationMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => locationMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => locationSumOrderByAggregateInputSchema).optional()
}).strict();

export const locationScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.locationScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => locationScalarWhereWithAggregatesInputSchema),z.lazy(() => locationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => locationScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => locationScalarWhereWithAggregatesInputSchema),z.lazy(() => locationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  location_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  location_type: z.union([ z.lazy(() => Enumlocation_location_typeWithAggregatesFilterSchema),z.lazy(() => location_location_typeSchema) ]).optional(),
  warehouse_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  client_branch_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export const option_modelWhereInputSchema: z.ZodType<Prisma.option_modelWhereInput> = z.object({
  AND: z.union([ z.lazy(() => option_modelWhereInputSchema),z.lazy(() => option_modelWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => option_modelWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => option_modelWhereInputSchema),z.lazy(() => option_modelWhereInputSchema).array() ]).optional(),
  option_model_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  option_model_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  option_type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  manufacturer: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const option_modelOrderByWithRelationInputSchema: z.ZodType<Prisma.option_modelOrderByWithRelationInput> = z.object({
  option_model_id: z.lazy(() => SortOrderSchema).optional(),
  option_model_name: z.lazy(() => SortOrderSchema).optional(),
  option_type: z.lazy(() => SortOrderSchema).optional(),
  manufacturer: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const option_modelWhereUniqueInputSchema: z.ZodType<Prisma.option_modelWhereUniqueInput> = z.object({
  option_model_id: z.number().int()
})
.and(z.object({
  option_model_id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => option_modelWhereInputSchema),z.lazy(() => option_modelWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => option_modelWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => option_modelWhereInputSchema),z.lazy(() => option_modelWhereInputSchema).array() ]).optional(),
  option_model_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  option_type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  manufacturer: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict());

export const option_modelOrderByWithAggregationInputSchema: z.ZodType<Prisma.option_modelOrderByWithAggregationInput> = z.object({
  option_model_id: z.lazy(() => SortOrderSchema).optional(),
  option_model_name: z.lazy(() => SortOrderSchema).optional(),
  option_type: z.lazy(() => SortOrderSchema).optional(),
  manufacturer: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => option_modelCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => option_modelAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => option_modelMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => option_modelMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => option_modelSumOrderByAggregateInputSchema).optional()
}).strict();

export const option_modelScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.option_modelScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => option_modelScalarWhereWithAggregatesInputSchema),z.lazy(() => option_modelScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => option_modelScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => option_modelScalarWhereWithAggregatesInputSchema),z.lazy(() => option_modelScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  option_model_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  option_model_name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  option_type: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  manufacturer: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const sidoWhereInputSchema: z.ZodType<Prisma.sidoWhereInput> = z.object({
  AND: z.union([ z.lazy(() => sidoWhereInputSchema),z.lazy(() => sidoWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => sidoWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => sidoWhereInputSchema),z.lazy(() => sidoWhereInputSchema).array() ]).optional(),
  sido_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  sido_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const sidoOrderByWithRelationInputSchema: z.ZodType<Prisma.sidoOrderByWithRelationInput> = z.object({
  sido_id: z.lazy(() => SortOrderSchema).optional(),
  sido_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
}).strict();

export const sidoWhereUniqueInputSchema: z.ZodType<Prisma.sidoWhereUniqueInput> = z.object({
  sido_id: z.number().int()
})
.and(z.object({
  sido_id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => sidoWhereInputSchema),z.lazy(() => sidoWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => sidoWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => sidoWhereInputSchema),z.lazy(() => sidoWhereInputSchema).array() ]).optional(),
  sido_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict());

export const sidoOrderByWithAggregationInputSchema: z.ZodType<Prisma.sidoOrderByWithAggregationInput> = z.object({
  sido_id: z.lazy(() => SortOrderSchema).optional(),
  sido_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => sidoCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => sidoAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => sidoMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => sidoMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => sidoSumOrderByAggregateInputSchema).optional()
}).strict();

export const sidoScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.sidoScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => sidoScalarWhereWithAggregatesInputSchema),z.lazy(() => sidoScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => sidoScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => sidoScalarWhereWithAggregatesInputSchema),z.lazy(() => sidoScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  sido_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  sido_name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const sigunguWhereInputSchema: z.ZodType<Prisma.sigunguWhereInput> = z.object({
  AND: z.union([ z.lazy(() => sigunguWhereInputSchema),z.lazy(() => sigunguWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => sigunguWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => sigunguWhereInputSchema),z.lazy(() => sigunguWhereInputSchema).array() ]).optional(),
  sigungu_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  sigungu_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  sido_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const sigunguOrderByWithRelationInputSchema: z.ZodType<Prisma.sigunguOrderByWithRelationInput> = z.object({
  sigungu_id: z.lazy(() => SortOrderSchema).optional(),
  sigungu_name: z.lazy(() => SortOrderSchema).optional(),
  sido_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const sigunguWhereUniqueInputSchema: z.ZodType<Prisma.sigunguWhereUniqueInput> = z.object({
  sigungu_id: z.number().int()
})
.and(z.object({
  sigungu_id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => sigunguWhereInputSchema),z.lazy(() => sigunguWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => sigunguWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => sigunguWhereInputSchema),z.lazy(() => sigunguWhereInputSchema).array() ]).optional(),
  sigungu_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  sido_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
}).strict());

export const sigunguOrderByWithAggregationInputSchema: z.ZodType<Prisma.sigunguOrderByWithAggregationInput> = z.object({
  sigungu_id: z.lazy(() => SortOrderSchema).optional(),
  sigungu_name: z.lazy(() => SortOrderSchema).optional(),
  sido_id: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => sigunguCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => sigunguAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => sigunguMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => sigunguMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => sigunguSumOrderByAggregateInputSchema).optional()
}).strict();

export const sigunguScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.sigunguScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => sigunguScalarWhereWithAggregatesInputSchema),z.lazy(() => sigunguScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => sigunguScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => sigunguScalarWhereWithAggregatesInputSchema),z.lazy(() => sigunguScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  sigungu_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  sigungu_name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  sido_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const userWhereInputSchema: z.ZodType<Prisma.userWhereInput> = z.object({
  AND: z.union([ z.lazy(() => userWhereInputSchema),z.lazy(() => userWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => userWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => userWhereInputSchema),z.lazy(() => userWhereInputSchema).array() ]).optional(),
  user_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  user_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  login_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  mobile_num: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  office_num: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  modified_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  dept_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  approval_role_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  position_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  is_active: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  permission: z.union([ z.lazy(() => Enumuser_permissionFilterSchema),z.lazy(() => user_permissionSchema) ]).optional(),
}).strict();

export const userOrderByWithRelationInputSchema: z.ZodType<Prisma.userOrderByWithRelationInput> = z.object({
  user_id: z.lazy(() => SortOrderSchema).optional(),
  user_name: z.lazy(() => SortOrderSchema).optional(),
  login_id: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  mobile_num: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  office_num: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  email: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  modified_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  dept_id: z.lazy(() => SortOrderSchema).optional(),
  approval_role_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  position_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  permission: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const userWhereUniqueInputSchema: z.ZodType<Prisma.userWhereUniqueInput> = z.union([
  z.object({
    user_id: z.number().int(),
    login_id: z.string()
  }),
  z.object({
    user_id: z.number().int(),
  }),
  z.object({
    login_id: z.string(),
  }),
])
.and(z.object({
  user_id: z.number().int().optional(),
  login_id: z.string().optional(),
  AND: z.union([ z.lazy(() => userWhereInputSchema),z.lazy(() => userWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => userWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => userWhereInputSchema),z.lazy(() => userWhereInputSchema).array() ]).optional(),
  user_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  mobile_num: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  office_num: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  modified_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  dept_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  approval_role_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  position_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  is_active: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  permission: z.union([ z.lazy(() => Enumuser_permissionFilterSchema),z.lazy(() => user_permissionSchema) ]).optional(),
}).strict());

export const userOrderByWithAggregationInputSchema: z.ZodType<Prisma.userOrderByWithAggregationInput> = z.object({
  user_id: z.lazy(() => SortOrderSchema).optional(),
  user_name: z.lazy(() => SortOrderSchema).optional(),
  login_id: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  mobile_num: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  office_num: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  email: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  modified_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  dept_id: z.lazy(() => SortOrderSchema).optional(),
  approval_role_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  position_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  permission: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => userCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => userAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => userMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => userMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => userSumOrderByAggregateInputSchema).optional()
}).strict();

export const userScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.userScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => userScalarWhereWithAggregatesInputSchema),z.lazy(() => userScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => userScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => userScalarWhereWithAggregatesInputSchema),z.lazy(() => userScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  user_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  user_name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  login_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  mobile_num: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  office_num: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  modified_at: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  dept_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  approval_role_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  position_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  is_active: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  permission: z.union([ z.lazy(() => Enumuser_permissionWithAggregatesFilterSchema),z.lazy(() => user_permissionSchema) ]).optional(),
}).strict();

export const user_positionWhereInputSchema: z.ZodType<Prisma.user_positionWhereInput> = z.object({
  AND: z.union([ z.lazy(() => user_positionWhereInputSchema),z.lazy(() => user_positionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => user_positionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => user_positionWhereInputSchema),z.lazy(() => user_positionWhereInputSchema).array() ]).optional(),
  user_position_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  position_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const user_positionOrderByWithRelationInputSchema: z.ZodType<Prisma.user_positionOrderByWithRelationInput> = z.object({
  user_position_id: z.lazy(() => SortOrderSchema).optional(),
  position_name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const user_positionWhereUniqueInputSchema: z.ZodType<Prisma.user_positionWhereUniqueInput> = z.object({
  user_position_id: z.number().int()
})
.and(z.object({
  user_position_id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => user_positionWhereInputSchema),z.lazy(() => user_positionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => user_positionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => user_positionWhereInputSchema),z.lazy(() => user_positionWhereInputSchema).array() ]).optional(),
  position_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict());

export const user_positionOrderByWithAggregationInputSchema: z.ZodType<Prisma.user_positionOrderByWithAggregationInput> = z.object({
  user_position_id: z.lazy(() => SortOrderSchema).optional(),
  position_name: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => user_positionCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => user_positionAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => user_positionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => user_positionMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => user_positionSumOrderByAggregateInputSchema).optional()
}).strict();

export const user_positionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.user_positionScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => user_positionScalarWhereWithAggregatesInputSchema),z.lazy(() => user_positionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => user_positionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => user_positionScalarWhereWithAggregatesInputSchema),z.lazy(() => user_positionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  user_position_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  position_name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const user_role_assignmentWhereInputSchema: z.ZodType<Prisma.user_role_assignmentWhereInput> = z.object({
  AND: z.union([ z.lazy(() => user_role_assignmentWhereInputSchema),z.lazy(() => user_role_assignmentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => user_role_assignmentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => user_role_assignmentWhereInputSchema),z.lazy(() => user_role_assignmentWhereInputSchema).array() ]).optional(),
  role_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  approver_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const user_role_assignmentOrderByWithRelationInputSchema: z.ZodType<Prisma.user_role_assignmentOrderByWithRelationInput> = z.object({
  role_id: z.lazy(() => SortOrderSchema).optional(),
  approver_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const user_role_assignmentWhereUniqueInputSchema: z.ZodType<Prisma.user_role_assignmentWhereUniqueInput> = z.object({
  role_id_approver_id: z.lazy(() => user_role_assignmentRole_idApprover_idCompoundUniqueInputSchema)
})
.and(z.object({
  role_id_approver_id: z.lazy(() => user_role_assignmentRole_idApprover_idCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => user_role_assignmentWhereInputSchema),z.lazy(() => user_role_assignmentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => user_role_assignmentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => user_role_assignmentWhereInputSchema),z.lazy(() => user_role_assignmentWhereInputSchema).array() ]).optional(),
  role_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  approver_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
}).strict());

export const user_role_assignmentOrderByWithAggregationInputSchema: z.ZodType<Prisma.user_role_assignmentOrderByWithAggregationInput> = z.object({
  role_id: z.lazy(() => SortOrderSchema).optional(),
  approver_id: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => user_role_assignmentCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => user_role_assignmentAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => user_role_assignmentMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => user_role_assignmentMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => user_role_assignmentSumOrderByAggregateInputSchema).optional()
}).strict();

export const user_role_assignmentScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.user_role_assignmentScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => user_role_assignmentScalarWhereWithAggregatesInputSchema),z.lazy(() => user_role_assignmentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => user_role_assignmentScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => user_role_assignmentScalarWhereWithAggregatesInputSchema),z.lazy(() => user_role_assignmentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  role_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  approver_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const warehouseWhereInputSchema: z.ZodType<Prisma.warehouseWhereInput> = z.object({
  AND: z.union([ z.lazy(() => warehouseWhereInputSchema),z.lazy(() => warehouseWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => warehouseWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => warehouseWhereInputSchema),z.lazy(() => warehouseWhereInputSchema).array() ]).optional(),
  warehouse_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  warehouse_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  mgmt_dept_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const warehouseOrderByWithRelationInputSchema: z.ZodType<Prisma.warehouseOrderByWithRelationInput> = z.object({
  warehouse_id: z.lazy(() => SortOrderSchema).optional(),
  warehouse_name: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const warehouseWhereUniqueInputSchema: z.ZodType<Prisma.warehouseWhereUniqueInput> = z.object({
  warehouse_id: z.number().int()
})
.and(z.object({
  warehouse_id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => warehouseWhereInputSchema),z.lazy(() => warehouseWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => warehouseWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => warehouseWhereInputSchema),z.lazy(() => warehouseWhereInputSchema).array() ]).optional(),
  warehouse_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  mgmt_dept_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
}).strict());

export const warehouseOrderByWithAggregationInputSchema: z.ZodType<Prisma.warehouseOrderByWithAggregationInput> = z.object({
  warehouse_id: z.lazy(() => SortOrderSchema).optional(),
  warehouse_name: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_id: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => warehouseCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => warehouseAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => warehouseMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => warehouseMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => warehouseSumOrderByAggregateInputSchema).optional()
}).strict();

export const warehouseScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.warehouseScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => warehouseScalarWhereWithAggregatesInputSchema),z.lazy(() => warehouseScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => warehouseScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => warehouseScalarWhereWithAggregatesInputSchema),z.lazy(() => warehouseScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  warehouse_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  warehouse_name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  mgmt_dept_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const v_clientWhereInputSchema: z.ZodType<Prisma.v_clientWhereInput> = z.object({
  AND: z.union([ z.lazy(() => v_clientWhereInputSchema),z.lazy(() => v_clientWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => v_clientWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => v_clientWhereInputSchema),z.lazy(() => v_clientWhereInputSchema).array() ]).optional(),
  client_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  client_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  parent_client_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  default_client_branch_rate_id: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  is_active: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  parent_client_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  client_rate: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  rate_detail: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  branch_count: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
}).strict();

export const v_clientOrderByWithRelationInputSchema: z.ZodType<Prisma.v_clientOrderByWithRelationInput> = z.object({
  client_id: z.lazy(() => SortOrderSchema).optional(),
  client_name: z.lazy(() => SortOrderSchema).optional(),
  parent_client_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  default_client_branch_rate_id: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  parent_client_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  client_rate: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  rate_detail: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  branch_count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const v_clientWhereUniqueInputSchema: z.ZodType<Prisma.v_clientWhereUniqueInput> = z.object({
  client_id: z.number().int()
})
.and(z.object({
  client_id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => v_clientWhereInputSchema),z.lazy(() => v_clientWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => v_clientWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => v_clientWhereInputSchema),z.lazy(() => v_clientWhereInputSchema).array() ]).optional(),
  client_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  parent_client_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  default_client_branch_rate_id: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  is_active: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  parent_client_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  client_rate: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  rate_detail: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  branch_count: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
}).strict());

export const v_clientOrderByWithAggregationInputSchema: z.ZodType<Prisma.v_clientOrderByWithAggregationInput> = z.object({
  client_id: z.lazy(() => SortOrderSchema).optional(),
  client_name: z.lazy(() => SortOrderSchema).optional(),
  parent_client_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  default_client_branch_rate_id: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  parent_client_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  client_rate: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  rate_detail: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  branch_count: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => v_clientCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => v_clientAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => v_clientMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => v_clientMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => v_clientSumOrderByAggregateInputSchema).optional()
}).strict();

export const v_clientScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.v_clientScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => v_clientScalarWhereWithAggregatesInputSchema),z.lazy(() => v_clientScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => v_clientScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => v_clientScalarWhereWithAggregatesInputSchema),z.lazy(() => v_clientScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  client_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  client_name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  parent_client_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  default_client_branch_rate_id: z.union([ z.lazy(() => BigIntWithAggregatesFilterSchema),z.bigint() ]).optional(),
  is_active: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  parent_client_name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  client_rate: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  rate_detail: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  branch_count: z.union([ z.lazy(() => BigIntWithAggregatesFilterSchema),z.bigint() ]).optional(),
}).strict();

export const v_client_branchWhereInputSchema: z.ZodType<Prisma.v_client_branchWhereInput> = z.object({
  AND: z.union([ z.lazy(() => v_client_branchWhereInputSchema),z.lazy(() => v_client_branchWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => v_client_branchWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => v_client_branchWhereInputSchema),z.lazy(() => v_client_branchWhereInputSchema).array() ]).optional(),
  client_branch_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  client_branch_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  client_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  sigungu_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  mgmt_dept_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  client_branch_rate_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  branch_mgr_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  branch_mgr_mobile_num: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  branch_mgr_office_num: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  branch_mgr_email: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  is_active: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  remote_support: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  push_alert: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  client_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  sigungu_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  sido_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const v_client_branchOrderByWithRelationInputSchema: z.ZodType<Prisma.v_client_branchOrderByWithRelationInput> = z.object({
  client_branch_id: z.lazy(() => SortOrderSchema).optional(),
  client_branch_name: z.lazy(() => SortOrderSchema).optional(),
  client_id: z.lazy(() => SortOrderSchema).optional(),
  sigungu_id: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_id: z.lazy(() => SortOrderSchema).optional(),
  client_branch_rate_id: z.lazy(() => SortOrderSchema).optional(),
  branch_mgr_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  branch_mgr_mobile_num: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  branch_mgr_office_num: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  branch_mgr_email: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  remote_support: z.lazy(() => SortOrderSchema).optional(),
  push_alert: z.lazy(() => SortOrderSchema).optional(),
  client_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  sigungu_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  sido_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
}).strict();

export const v_client_branchWhereUniqueInputSchema: z.ZodType<Prisma.v_client_branchWhereUniqueInput> = z.object({
  client_branch_id: z.number().int()
})
.and(z.object({
  client_branch_id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => v_client_branchWhereInputSchema),z.lazy(() => v_client_branchWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => v_client_branchWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => v_client_branchWhereInputSchema),z.lazy(() => v_client_branchWhereInputSchema).array() ]).optional(),
  client_branch_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  client_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  sigungu_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  mgmt_dept_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  client_branch_rate_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  branch_mgr_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  branch_mgr_mobile_num: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  branch_mgr_office_num: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  branch_mgr_email: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  is_active: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  remote_support: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  push_alert: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  client_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  sigungu_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  sido_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict());

export const v_client_branchOrderByWithAggregationInputSchema: z.ZodType<Prisma.v_client_branchOrderByWithAggregationInput> = z.object({
  client_branch_id: z.lazy(() => SortOrderSchema).optional(),
  client_branch_name: z.lazy(() => SortOrderSchema).optional(),
  client_id: z.lazy(() => SortOrderSchema).optional(),
  sigungu_id: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_id: z.lazy(() => SortOrderSchema).optional(),
  client_branch_rate_id: z.lazy(() => SortOrderSchema).optional(),
  branch_mgr_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  branch_mgr_mobile_num: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  branch_mgr_office_num: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  branch_mgr_email: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  remote_support: z.lazy(() => SortOrderSchema).optional(),
  push_alert: z.lazy(() => SortOrderSchema).optional(),
  client_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  sigungu_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  sido_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => v_client_branchCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => v_client_branchAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => v_client_branchMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => v_client_branchMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => v_client_branchSumOrderByAggregateInputSchema).optional()
}).strict();

export const v_client_branchScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.v_client_branchScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => v_client_branchScalarWhereWithAggregatesInputSchema),z.lazy(() => v_client_branchScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => v_client_branchScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => v_client_branchScalarWhereWithAggregatesInputSchema),z.lazy(() => v_client_branchScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  client_branch_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  client_branch_name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  client_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  sigungu_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  mgmt_dept_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  client_branch_rate_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  branch_mgr_name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  branch_mgr_mobile_num: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  branch_mgr_office_num: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  branch_mgr_email: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  is_active: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  remote_support: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  push_alert: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  client_name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  sigungu_name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  sido_name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const v_consumable_modelWhereInputSchema: z.ZodType<Prisma.v_consumable_modelWhereInput> = z.object({
  AND: z.union([ z.lazy(() => v_consumable_modelWhereInputSchema),z.lazy(() => v_consumable_modelWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => v_consumable_modelWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => v_consumable_modelWhereInputSchema),z.lazy(() => v_consumable_modelWhereInputSchema).array() ]).optional(),
  compatibility_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  consumable_model_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  manufacturer: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  consumable_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  consumable_type: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  model_manufacturer: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const v_consumable_modelOrderByWithRelationInputSchema: z.ZodType<Prisma.v_consumable_modelOrderByWithRelationInput> = z.object({
  compatibility_id: z.lazy(() => SortOrderSchema).optional(),
  consumable_model_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  manufacturer: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  consumable_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  consumable_type: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  model_manufacturer: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
}).strict();

export const v_consumable_modelWhereUniqueInputSchema: z.ZodType<Prisma.v_consumable_modelWhereUniqueInput> = z.object({
  compatibility_id: z.string()
})
.and(z.object({
  compatibility_id: z.string().optional(),
  AND: z.union([ z.lazy(() => v_consumable_modelWhereInputSchema),z.lazy(() => v_consumable_modelWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => v_consumable_modelWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => v_consumable_modelWhereInputSchema),z.lazy(() => v_consumable_modelWhereInputSchema).array() ]).optional(),
  consumable_model_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  manufacturer: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  consumable_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  consumable_type: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  model_manufacturer: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict());

export const v_consumable_modelOrderByWithAggregationInputSchema: z.ZodType<Prisma.v_consumable_modelOrderByWithAggregationInput> = z.object({
  compatibility_id: z.lazy(() => SortOrderSchema).optional(),
  consumable_model_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  manufacturer: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  consumable_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  consumable_type: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  model_manufacturer: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => v_consumable_modelCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => v_consumable_modelAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => v_consumable_modelMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => v_consumable_modelMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => v_consumable_modelSumOrderByAggregateInputSchema).optional()
}).strict();

export const v_consumable_modelScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.v_consumable_modelScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => v_consumable_modelScalarWhereWithAggregatesInputSchema),z.lazy(() => v_consumable_modelScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => v_consumable_modelScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => v_consumable_modelScalarWhereWithAggregatesInputSchema),z.lazy(() => v_consumable_modelScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  compatibility_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  consumable_model_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  manufacturer: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  consumable_name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  consumable_type: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  model_manufacturer: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const v_deptWhereInputSchema: z.ZodType<Prisma.v_deptWhereInput> = z.object({
  AND: z.union([ z.lazy(() => v_deptWhereInputSchema),z.lazy(() => v_deptWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => v_deptWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => v_deptWhereInputSchema),z.lazy(() => v_deptWhereInputSchema).array() ]).optional(),
  dept_id: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  dept_1_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  dept_1: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  dept_2_id: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  dept_2: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  dept_3_id: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  dept_3: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const v_deptOrderByWithRelationInputSchema: z.ZodType<Prisma.v_deptOrderByWithRelationInput> = z.object({
  dept_id: z.lazy(() => SortOrderSchema).optional(),
  dept_1_id: z.lazy(() => SortOrderSchema).optional(),
  dept_1: z.lazy(() => SortOrderSchema).optional(),
  dept_2_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  dept_2: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  dept_3_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  dept_3: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
}).strict();

export const v_deptWhereUniqueInputSchema: z.ZodType<Prisma.v_deptWhereUniqueInput> = z.object({
  dept_id: z.bigint()
})
.and(z.object({
  dept_id: z.bigint().optional(),
  AND: z.union([ z.lazy(() => v_deptWhereInputSchema),z.lazy(() => v_deptWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => v_deptWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => v_deptWhereInputSchema),z.lazy(() => v_deptWhereInputSchema).array() ]).optional(),
  dept_1_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  dept_1: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  dept_2_id: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  dept_2: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  dept_3_id: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  dept_3: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict());

export const v_deptOrderByWithAggregationInputSchema: z.ZodType<Prisma.v_deptOrderByWithAggregationInput> = z.object({
  dept_id: z.lazy(() => SortOrderSchema).optional(),
  dept_1_id: z.lazy(() => SortOrderSchema).optional(),
  dept_1: z.lazy(() => SortOrderSchema).optional(),
  dept_2_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  dept_2: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  dept_3_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  dept_3: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => v_deptCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => v_deptAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => v_deptMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => v_deptMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => v_deptSumOrderByAggregateInputSchema).optional()
}).strict();

export const v_deptScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.v_deptScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => v_deptScalarWhereWithAggregatesInputSchema),z.lazy(() => v_deptScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => v_deptScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => v_deptScalarWhereWithAggregatesInputSchema),z.lazy(() => v_deptScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  dept_id: z.union([ z.lazy(() => BigIntWithAggregatesFilterSchema),z.bigint() ]).optional(),
  dept_1_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  dept_1: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  dept_2_id: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  dept_2: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  dept_3_id: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  dept_3: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const v_device_driverWhereInputSchema: z.ZodType<Prisma.v_device_driverWhereInput> = z.object({
  AND: z.union([ z.lazy(() => v_device_driverWhereInputSchema),z.lazy(() => v_device_driverWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => v_device_driverWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => v_device_driverWhereInputSchema),z.lazy(() => v_device_driverWhereInputSchema).array() ]).optional(),
  device_driver_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  device_model_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  driver_manufacturer: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  printer_language: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  install_file_address: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  model_manufacturer: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  model_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  color_support: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export const v_device_driverOrderByWithRelationInputSchema: z.ZodType<Prisma.v_device_driverOrderByWithRelationInput> = z.object({
  device_driver_id: z.lazy(() => SortOrderSchema).optional(),
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  driver_manufacturer: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  printer_language: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  install_file_address: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  model_manufacturer: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  model_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  color_support: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
}).strict();

export const v_device_driverWhereUniqueInputSchema: z.ZodType<Prisma.v_device_driverWhereUniqueInput> = z.object({
  device_driver_id: z.number().int()
})
.and(z.object({
  device_driver_id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => v_device_driverWhereInputSchema),z.lazy(() => v_device_driverWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => v_device_driverWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => v_device_driverWhereInputSchema),z.lazy(() => v_device_driverWhereInputSchema).array() ]).optional(),
  device_model_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  driver_manufacturer: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  printer_language: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  install_file_address: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  model_manufacturer: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  model_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  color_support: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
}).strict());

export const v_device_driverOrderByWithAggregationInputSchema: z.ZodType<Prisma.v_device_driverOrderByWithAggregationInput> = z.object({
  device_driver_id: z.lazy(() => SortOrderSchema).optional(),
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  driver_manufacturer: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  printer_language: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  install_file_address: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  model_manufacturer: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  model_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  color_support: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => v_device_driverCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => v_device_driverAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => v_device_driverMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => v_device_driverMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => v_device_driverSumOrderByAggregateInputSchema).optional()
}).strict();

export const v_device_driverScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.v_device_driverScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => v_device_driverScalarWhereWithAggregatesInputSchema),z.lazy(() => v_device_driverScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => v_device_driverScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => v_device_driverScalarWhereWithAggregatesInputSchema),z.lazy(() => v_device_driverScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  device_driver_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  device_model_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  driver_manufacturer: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  printer_language: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  install_file_address: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  model_manufacturer: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  model_name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  color_support: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export const v_userWhereInputSchema: z.ZodType<Prisma.v_userWhereInput> = z.object({
  AND: z.union([ z.lazy(() => v_userWhereInputSchema),z.lazy(() => v_userWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => v_userWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => v_userWhereInputSchema),z.lazy(() => v_userWhereInputSchema).array() ]).optional(),
  user_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  user_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  login_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  mobile_num: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  office_num: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  modified_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  is_active: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  permission: z.union([ z.lazy(() => Enumv_user_permissionFilterSchema),z.lazy(() => v_user_permissionSchema) ]).optional(),
  dept_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  approval_role_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  position_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  dept_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  parent_dept_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export const v_userOrderByWithRelationInputSchema: z.ZodType<Prisma.v_userOrderByWithRelationInput> = z.object({
  user_id: z.lazy(() => SortOrderSchema).optional(),
  user_name: z.lazy(() => SortOrderSchema).optional(),
  login_id: z.lazy(() => SortOrderSchema).optional(),
  mobile_num: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  office_num: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  email: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  modified_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  permission: z.lazy(() => SortOrderSchema).optional(),
  dept_id: z.lazy(() => SortOrderSchema).optional(),
  approval_role_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  position_id: z.lazy(() => SortOrderSchema).optional(),
  dept_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  parent_dept_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
}).strict();

export const v_userWhereUniqueInputSchema: z.ZodType<Prisma.v_userWhereUniqueInput> = z.object({
  user_id: z.number().int()
})
.and(z.object({
  user_id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => v_userWhereInputSchema),z.lazy(() => v_userWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => v_userWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => v_userWhereInputSchema),z.lazy(() => v_userWhereInputSchema).array() ]).optional(),
  user_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  login_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  mobile_num: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  office_num: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  modified_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  is_active: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  permission: z.union([ z.lazy(() => Enumv_user_permissionFilterSchema),z.lazy(() => v_user_permissionSchema) ]).optional(),
  dept_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  approval_role_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  position_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  dept_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  parent_dept_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
}).strict());

export const v_userOrderByWithAggregationInputSchema: z.ZodType<Prisma.v_userOrderByWithAggregationInput> = z.object({
  user_id: z.lazy(() => SortOrderSchema).optional(),
  user_name: z.lazy(() => SortOrderSchema).optional(),
  login_id: z.lazy(() => SortOrderSchema).optional(),
  mobile_num: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  office_num: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  email: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  modified_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  permission: z.lazy(() => SortOrderSchema).optional(),
  dept_id: z.lazy(() => SortOrderSchema).optional(),
  approval_role_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  position_id: z.lazy(() => SortOrderSchema).optional(),
  dept_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  parent_dept_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => v_userCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => v_userAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => v_userMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => v_userMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => v_userSumOrderByAggregateInputSchema).optional()
}).strict();

export const v_userScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.v_userScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => v_userScalarWhereWithAggregatesInputSchema),z.lazy(() => v_userScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => v_userScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => v_userScalarWhereWithAggregatesInputSchema),z.lazy(() => v_userScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  user_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  user_name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  login_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  mobile_num: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  office_num: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  modified_at: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  is_active: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  permission: z.union([ z.lazy(() => Enumv_user_permissionWithAggregatesFilterSchema),z.lazy(() => v_user_permissionSchema) ]).optional(),
  dept_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  approval_role_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  position_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  dept_name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  parent_dept_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export const v_warehouseWhereInputSchema: z.ZodType<Prisma.v_warehouseWhereInput> = z.object({
  AND: z.union([ z.lazy(() => v_warehouseWhereInputSchema),z.lazy(() => v_warehouseWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => v_warehouseWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => v_warehouseWhereInputSchema),z.lazy(() => v_warehouseWhereInputSchema).array() ]).optional(),
  warehouse_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  warehouse_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  mgmt_dept_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  mgmt_dept_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  mgmt_parent_dept_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export const v_warehouseOrderByWithRelationInputSchema: z.ZodType<Prisma.v_warehouseOrderByWithRelationInput> = z.object({
  warehouse_id: z.lazy(() => SortOrderSchema).optional(),
  warehouse_name: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_id: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  mgmt_parent_dept_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
}).strict();

export const v_warehouseWhereUniqueInputSchema: z.ZodType<Prisma.v_warehouseWhereUniqueInput> = z.object({
  warehouse_id: z.number().int()
})
.and(z.object({
  warehouse_id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => v_warehouseWhereInputSchema),z.lazy(() => v_warehouseWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => v_warehouseWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => v_warehouseWhereInputSchema),z.lazy(() => v_warehouseWhereInputSchema).array() ]).optional(),
  warehouse_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  mgmt_dept_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  mgmt_dept_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  mgmt_parent_dept_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
}).strict());

export const v_warehouseOrderByWithAggregationInputSchema: z.ZodType<Prisma.v_warehouseOrderByWithAggregationInput> = z.object({
  warehouse_id: z.lazy(() => SortOrderSchema).optional(),
  warehouse_name: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_id: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  mgmt_parent_dept_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => v_warehouseCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => v_warehouseAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => v_warehouseMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => v_warehouseMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => v_warehouseSumOrderByAggregateInputSchema).optional()
}).strict();

export const v_warehouseScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.v_warehouseScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => v_warehouseScalarWhereWithAggregatesInputSchema),z.lazy(() => v_warehouseScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => v_warehouseScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => v_warehouseScalarWhereWithAggregatesInputSchema),z.lazy(() => v_warehouseScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  warehouse_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  warehouse_name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  mgmt_dept_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  mgmt_dept_name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  mgmt_parent_dept_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export const v_deviceWhereInputSchema: z.ZodType<Prisma.v_deviceWhereInput> = z.object({
  AND: z.union([ z.lazy(() => v_deviceWhereInputSchema),z.lazy(() => v_deviceWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => v_deviceWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => v_deviceWhereInputSchema),z.lazy(() => v_deviceWhereInputSchema).array() ]).optional(),
  device_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  device_model_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  owner_dept_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  mgmt_dept_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  serial: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  regi_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  mac: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  last_inspection_log_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  last_location_log_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  status_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  model_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  manufacturer: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  owner_dept_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  mgmt_dept_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  location_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  warehouse_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  warehouse_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  client_branch_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  client_branch_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  status_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  has_fax: z.union([ z.lazy(() => BigIntNullableFilterSchema),z.bigint() ]).optional().nullable(),
  has_desk: z.union([ z.lazy(() => BigIntNullableFilterSchema),z.bigint() ]).optional().nullable(),
  has_shelf: z.union([ z.lazy(() => BigIntNullableFilterSchema),z.bigint() ]).optional().nullable(),
}).strict();

export const v_deviceOrderByWithRelationInputSchema: z.ZodType<Prisma.v_deviceOrderByWithRelationInput> = z.object({
  device_id: z.lazy(() => SortOrderSchema).optional(),
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  owner_dept_id: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_id: z.lazy(() => SortOrderSchema).optional(),
  serial: z.lazy(() => SortOrderSchema).optional(),
  regi_date: z.lazy(() => SortOrderSchema).optional(),
  mac: z.lazy(() => SortOrderSchema).optional(),
  last_inspection_log_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  last_location_log_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  status_id: z.lazy(() => SortOrderSchema).optional(),
  model_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  manufacturer: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  owner_dept_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  mgmt_dept_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  location_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  warehouse_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  warehouse_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  client_branch_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  client_branch_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  status_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  has_fax: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  has_desk: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  has_shelf: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
}).strict();

export const v_deviceWhereUniqueInputSchema: z.ZodType<Prisma.v_deviceWhereUniqueInput> = z.object({
  device_id: z.number().int()
})
.and(z.object({
  device_id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => v_deviceWhereInputSchema),z.lazy(() => v_deviceWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => v_deviceWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => v_deviceWhereInputSchema),z.lazy(() => v_deviceWhereInputSchema).array() ]).optional(),
  device_model_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  owner_dept_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  mgmt_dept_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  serial: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  regi_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  mac: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  last_inspection_log_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  last_location_log_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  status_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  model_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  manufacturer: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  owner_dept_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  mgmt_dept_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  location_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  warehouse_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  warehouse_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  client_branch_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  client_branch_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  status_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  has_fax: z.union([ z.lazy(() => BigIntNullableFilterSchema),z.bigint() ]).optional().nullable(),
  has_desk: z.union([ z.lazy(() => BigIntNullableFilterSchema),z.bigint() ]).optional().nullable(),
  has_shelf: z.union([ z.lazy(() => BigIntNullableFilterSchema),z.bigint() ]).optional().nullable(),
}).strict());

export const v_deviceOrderByWithAggregationInputSchema: z.ZodType<Prisma.v_deviceOrderByWithAggregationInput> = z.object({
  device_id: z.lazy(() => SortOrderSchema).optional(),
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  owner_dept_id: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_id: z.lazy(() => SortOrderSchema).optional(),
  serial: z.lazy(() => SortOrderSchema).optional(),
  regi_date: z.lazy(() => SortOrderSchema).optional(),
  mac: z.lazy(() => SortOrderSchema).optional(),
  last_inspection_log_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  last_location_log_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  status_id: z.lazy(() => SortOrderSchema).optional(),
  model_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  manufacturer: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  owner_dept_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  mgmt_dept_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  location_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  warehouse_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  warehouse_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  client_branch_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  client_branch_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  status_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  has_fax: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  has_desk: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  has_shelf: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => v_deviceCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => v_deviceAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => v_deviceMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => v_deviceMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => v_deviceSumOrderByAggregateInputSchema).optional()
}).strict();

export const v_deviceScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.v_deviceScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => v_deviceScalarWhereWithAggregatesInputSchema),z.lazy(() => v_deviceScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => v_deviceScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => v_deviceScalarWhereWithAggregatesInputSchema),z.lazy(() => v_deviceScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  device_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  device_model_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  owner_dept_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  mgmt_dept_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  serial: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  regi_date: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  mac: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  last_inspection_log_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  last_location_log_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  status_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  model_name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  manufacturer: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  owner_dept_name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  mgmt_dept_name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  location_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  warehouse_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  warehouse_name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  client_branch_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  client_branch_name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  status_name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  has_fax: z.union([ z.lazy(() => BigIntNullableWithAggregatesFilterSchema),z.bigint() ]).optional().nullable(),
  has_desk: z.union([ z.lazy(() => BigIntNullableWithAggregatesFilterSchema),z.bigint() ]).optional().nullable(),
  has_shelf: z.union([ z.lazy(() => BigIntNullableWithAggregatesFilterSchema),z.bigint() ]).optional().nullable(),
}).strict();

export const approval_roleCreateInputSchema: z.ZodType<Prisma.approval_roleCreateInput> = z.object({
  role_name: z.string(),
  upper_role_id: z.number().int().optional().nullable()
}).strict();

export const approval_roleUncheckedCreateInputSchema: z.ZodType<Prisma.approval_roleUncheckedCreateInput> = z.object({
  role_id: z.number().int().optional(),
  role_name: z.string(),
  upper_role_id: z.number().int().optional().nullable()
}).strict();

export const approval_roleUpdateInputSchema: z.ZodType<Prisma.approval_roleUpdateInput> = z.object({
  role_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  upper_role_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const approval_roleUncheckedUpdateInputSchema: z.ZodType<Prisma.approval_roleUncheckedUpdateInput> = z.object({
  role_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  role_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  upper_role_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const approval_roleCreateManyInputSchema: z.ZodType<Prisma.approval_roleCreateManyInput> = z.object({
  role_id: z.number().int().optional(),
  role_name: z.string(),
  upper_role_id: z.number().int().optional().nullable()
}).strict();

export const approval_roleUpdateManyMutationInputSchema: z.ZodType<Prisma.approval_roleUpdateManyMutationInput> = z.object({
  role_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  upper_role_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const approval_roleUncheckedUpdateManyInputSchema: z.ZodType<Prisma.approval_roleUncheckedUpdateManyInput> = z.object({
  role_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  role_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  upper_role_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const callCreateInputSchema: z.ZodType<Prisma.callCreateInput> = z.object({
  call_type_id: z.number().int(),
  client_branch_id: z.number().int(),
  requester_name: z.string(),
  requester_num: z.string(),
  requester_black_consumer: z.number().int().optional(),
  device_id: z.number().int().optional().nullable(),
  detail: z.string(),
  state: z.string(),
  received_at: z.coerce.date(),
  receiver_id: z.number().int(),
  transferred_at: z.coerce.date().optional().nullable(),
  transferred_dept_id: z.number().int().optional().nullable(),
  assigner_id: z.number().int().optional().nullable(),
  completed_at: z.coerce.date().optional().nullable()
}).strict();

export const callUncheckedCreateInputSchema: z.ZodType<Prisma.callUncheckedCreateInput> = z.object({
  call_id: z.number().int().optional(),
  call_type_id: z.number().int(),
  client_branch_id: z.number().int(),
  requester_name: z.string(),
  requester_num: z.string(),
  requester_black_consumer: z.number().int().optional(),
  device_id: z.number().int().optional().nullable(),
  detail: z.string(),
  state: z.string(),
  received_at: z.coerce.date(),
  receiver_id: z.number().int(),
  transferred_at: z.coerce.date().optional().nullable(),
  transferred_dept_id: z.number().int().optional().nullable(),
  assigner_id: z.number().int().optional().nullable(),
  completed_at: z.coerce.date().optional().nullable()
}).strict();

export const callUpdateInputSchema: z.ZodType<Prisma.callUpdateInput> = z.object({
  call_type_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  client_branch_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  requester_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  requester_num: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  requester_black_consumer: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  device_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  detail: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  received_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  receiver_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  transferred_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  transferred_dept_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  assigner_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  completed_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const callUncheckedUpdateInputSchema: z.ZodType<Prisma.callUncheckedUpdateInput> = z.object({
  call_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  call_type_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  client_branch_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  requester_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  requester_num: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  requester_black_consumer: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  device_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  detail: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  received_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  receiver_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  transferred_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  transferred_dept_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  assigner_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  completed_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const callCreateManyInputSchema: z.ZodType<Prisma.callCreateManyInput> = z.object({
  call_id: z.number().int().optional(),
  call_type_id: z.number().int(),
  client_branch_id: z.number().int(),
  requester_name: z.string(),
  requester_num: z.string(),
  requester_black_consumer: z.number().int().optional(),
  device_id: z.number().int().optional().nullable(),
  detail: z.string(),
  state: z.string(),
  received_at: z.coerce.date(),
  receiver_id: z.number().int(),
  transferred_at: z.coerce.date().optional().nullable(),
  transferred_dept_id: z.number().int().optional().nullable(),
  assigner_id: z.number().int().optional().nullable(),
  completed_at: z.coerce.date().optional().nullable()
}).strict();

export const callUpdateManyMutationInputSchema: z.ZodType<Prisma.callUpdateManyMutationInput> = z.object({
  call_type_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  client_branch_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  requester_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  requester_num: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  requester_black_consumer: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  device_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  detail: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  received_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  receiver_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  transferred_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  transferred_dept_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  assigner_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  completed_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const callUncheckedUpdateManyInputSchema: z.ZodType<Prisma.callUncheckedUpdateManyInput> = z.object({
  call_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  call_type_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  client_branch_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  requester_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  requester_num: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  requester_black_consumer: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  device_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  detail: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  received_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  receiver_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  transferred_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  transferred_dept_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  assigner_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  completed_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const call_typeCreateInputSchema: z.ZodType<Prisma.call_typeCreateInput> = z.object({
  call_type_name: z.string(),
  parent_call_type_id: z.number().int().optional().nullable()
}).strict();

export const call_typeUncheckedCreateInputSchema: z.ZodType<Prisma.call_typeUncheckedCreateInput> = z.object({
  call_type_id: z.number().int().optional(),
  call_type_name: z.string(),
  parent_call_type_id: z.number().int().optional().nullable()
}).strict();

export const call_typeUpdateInputSchema: z.ZodType<Prisma.call_typeUpdateInput> = z.object({
  call_type_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  parent_call_type_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const call_typeUncheckedUpdateInputSchema: z.ZodType<Prisma.call_typeUncheckedUpdateInput> = z.object({
  call_type_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  call_type_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  parent_call_type_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const call_typeCreateManyInputSchema: z.ZodType<Prisma.call_typeCreateManyInput> = z.object({
  call_type_id: z.number().int().optional(),
  call_type_name: z.string(),
  parent_call_type_id: z.number().int().optional().nullable()
}).strict();

export const call_typeUpdateManyMutationInputSchema: z.ZodType<Prisma.call_typeUpdateManyMutationInput> = z.object({
  call_type_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  parent_call_type_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const call_typeUncheckedUpdateManyInputSchema: z.ZodType<Prisma.call_typeUncheckedUpdateManyInput> = z.object({
  call_type_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  call_type_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  parent_call_type_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const clientCreateInputSchema: z.ZodType<Prisma.clientCreateInput> = z.object({
  parent_client_id: z.number().int().optional().nullable(),
  default_client_branch_rate_id: z.number().int(),
  client_name: z.string(),
  is_active: z.number().int().optional()
}).strict();

export const clientUncheckedCreateInputSchema: z.ZodType<Prisma.clientUncheckedCreateInput> = z.object({
  client_id: z.number().int().optional(),
  parent_client_id: z.number().int().optional().nullable(),
  default_client_branch_rate_id: z.number().int(),
  client_name: z.string(),
  is_active: z.number().int().optional()
}).strict();

export const clientUpdateInputSchema: z.ZodType<Prisma.clientUpdateInput> = z.object({
  parent_client_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  default_client_branch_rate_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  client_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  is_active: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const clientUncheckedUpdateInputSchema: z.ZodType<Prisma.clientUncheckedUpdateInput> = z.object({
  client_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  parent_client_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  default_client_branch_rate_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  client_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  is_active: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const clientCreateManyInputSchema: z.ZodType<Prisma.clientCreateManyInput> = z.object({
  client_id: z.number().int().optional(),
  parent_client_id: z.number().int().optional().nullable(),
  default_client_branch_rate_id: z.number().int(),
  client_name: z.string(),
  is_active: z.number().int().optional()
}).strict();

export const clientUpdateManyMutationInputSchema: z.ZodType<Prisma.clientUpdateManyMutationInput> = z.object({
  parent_client_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  default_client_branch_rate_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  client_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  is_active: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const clientUncheckedUpdateManyInputSchema: z.ZodType<Prisma.clientUncheckedUpdateManyInput> = z.object({
  client_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  parent_client_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  default_client_branch_rate_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  client_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  is_active: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const client_branchCreateInputSchema: z.ZodType<Prisma.client_branchCreateInput> = z.object({
  sigungu_id: z.number().int(),
  mgmt_dept_id: z.number().int(),
  client_id: z.number().int(),
  client_branch_name: z.string(),
  client_branch_rate_id: z.number().int(),
  branch_mgr_name: z.string().optional().nullable(),
  branch_mgr_mobile_num: z.string().optional().nullable(),
  branch_mgr_office_num: z.string().optional().nullable(),
  branch_mgr_email: z.string().optional().nullable(),
  is_active: z.number().int().optional(),
  remote_support: z.number().int().optional(),
  push_alert: z.number().int().optional()
}).strict();

export const client_branchUncheckedCreateInputSchema: z.ZodType<Prisma.client_branchUncheckedCreateInput> = z.object({
  client_branch_id: z.number().int().optional(),
  sigungu_id: z.number().int(),
  mgmt_dept_id: z.number().int(),
  client_id: z.number().int(),
  client_branch_name: z.string(),
  client_branch_rate_id: z.number().int(),
  branch_mgr_name: z.string().optional().nullable(),
  branch_mgr_mobile_num: z.string().optional().nullable(),
  branch_mgr_office_num: z.string().optional().nullable(),
  branch_mgr_email: z.string().optional().nullable(),
  is_active: z.number().int().optional(),
  remote_support: z.number().int().optional(),
  push_alert: z.number().int().optional()
}).strict();

export const client_branchUpdateInputSchema: z.ZodType<Prisma.client_branchUpdateInput> = z.object({
  sigungu_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mgmt_dept_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  client_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  client_branch_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  client_branch_rate_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  branch_mgr_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  branch_mgr_mobile_num: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  branch_mgr_office_num: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  branch_mgr_email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_active: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  remote_support: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  push_alert: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const client_branchUncheckedUpdateInputSchema: z.ZodType<Prisma.client_branchUncheckedUpdateInput> = z.object({
  client_branch_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  sigungu_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mgmt_dept_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  client_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  client_branch_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  client_branch_rate_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  branch_mgr_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  branch_mgr_mobile_num: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  branch_mgr_office_num: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  branch_mgr_email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_active: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  remote_support: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  push_alert: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const client_branchCreateManyInputSchema: z.ZodType<Prisma.client_branchCreateManyInput> = z.object({
  client_branch_id: z.number().int().optional(),
  sigungu_id: z.number().int(),
  mgmt_dept_id: z.number().int(),
  client_id: z.number().int(),
  client_branch_name: z.string(),
  client_branch_rate_id: z.number().int(),
  branch_mgr_name: z.string().optional().nullable(),
  branch_mgr_mobile_num: z.string().optional().nullable(),
  branch_mgr_office_num: z.string().optional().nullable(),
  branch_mgr_email: z.string().optional().nullable(),
  is_active: z.number().int().optional(),
  remote_support: z.number().int().optional(),
  push_alert: z.number().int().optional()
}).strict();

export const client_branchUpdateManyMutationInputSchema: z.ZodType<Prisma.client_branchUpdateManyMutationInput> = z.object({
  sigungu_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mgmt_dept_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  client_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  client_branch_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  client_branch_rate_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  branch_mgr_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  branch_mgr_mobile_num: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  branch_mgr_office_num: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  branch_mgr_email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_active: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  remote_support: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  push_alert: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const client_branchUncheckedUpdateManyInputSchema: z.ZodType<Prisma.client_branchUncheckedUpdateManyInput> = z.object({
  client_branch_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  sigungu_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mgmt_dept_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  client_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  client_branch_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  client_branch_rate_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  branch_mgr_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  branch_mgr_mobile_num: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  branch_mgr_office_num: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  branch_mgr_email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_active: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  remote_support: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  push_alert: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const client_rateCreateInputSchema: z.ZodType<Prisma.client_rateCreateInput> = z.object({
  rate_type: z.string(),
  rate_detail: z.string().optional().nullable()
}).strict();

export const client_rateUncheckedCreateInputSchema: z.ZodType<Prisma.client_rateUncheckedCreateInput> = z.object({
  client_rate_id: z.number().int().optional(),
  rate_type: z.string(),
  rate_detail: z.string().optional().nullable()
}).strict();

export const client_rateUpdateInputSchema: z.ZodType<Prisma.client_rateUpdateInput> = z.object({
  rate_type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rate_detail: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const client_rateUncheckedUpdateInputSchema: z.ZodType<Prisma.client_rateUncheckedUpdateInput> = z.object({
  client_rate_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  rate_type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rate_detail: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const client_rateCreateManyInputSchema: z.ZodType<Prisma.client_rateCreateManyInput> = z.object({
  client_rate_id: z.number().int().optional(),
  rate_type: z.string(),
  rate_detail: z.string().optional().nullable()
}).strict();

export const client_rateUpdateManyMutationInputSchema: z.ZodType<Prisma.client_rateUpdateManyMutationInput> = z.object({
  rate_type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rate_detail: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const client_rateUncheckedUpdateManyInputSchema: z.ZodType<Prisma.client_rateUncheckedUpdateManyInput> = z.object({
  client_rate_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  rate_type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rate_detail: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const consumable_modelCreateInputSchema: z.ZodType<Prisma.consumable_modelCreateInput> = z.object({
  manufacturer: z.string(),
  consumable_name: z.string(),
  consumable_type: z.string()
}).strict();

export const consumable_modelUncheckedCreateInputSchema: z.ZodType<Prisma.consumable_modelUncheckedCreateInput> = z.object({
  consumable_model_id: z.number().int().optional(),
  manufacturer: z.string(),
  consumable_name: z.string(),
  consumable_type: z.string()
}).strict();

export const consumable_modelUpdateInputSchema: z.ZodType<Prisma.consumable_modelUpdateInput> = z.object({
  manufacturer: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  consumable_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  consumable_type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const consumable_modelUncheckedUpdateInputSchema: z.ZodType<Prisma.consumable_modelUncheckedUpdateInput> = z.object({
  consumable_model_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  manufacturer: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  consumable_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  consumable_type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const consumable_modelCreateManyInputSchema: z.ZodType<Prisma.consumable_modelCreateManyInput> = z.object({
  consumable_model_id: z.number().int().optional(),
  manufacturer: z.string(),
  consumable_name: z.string(),
  consumable_type: z.string()
}).strict();

export const consumable_modelUpdateManyMutationInputSchema: z.ZodType<Prisma.consumable_modelUpdateManyMutationInput> = z.object({
  manufacturer: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  consumable_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  consumable_type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const consumable_modelUncheckedUpdateManyInputSchema: z.ZodType<Prisma.consumable_modelUncheckedUpdateManyInput> = z.object({
  consumable_model_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  manufacturer: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  consumable_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  consumable_type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const deptCreateInputSchema: z.ZodType<Prisma.deptCreateInput> = z.object({
  parent_dept_id: z.number().int().optional().nullable(),
  dept_name: z.string()
}).strict();

export const deptUncheckedCreateInputSchema: z.ZodType<Prisma.deptUncheckedCreateInput> = z.object({
  dept_id: z.number().int().optional(),
  parent_dept_id: z.number().int().optional().nullable(),
  dept_name: z.string()
}).strict();

export const deptUpdateInputSchema: z.ZodType<Prisma.deptUpdateInput> = z.object({
  parent_dept_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dept_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const deptUncheckedUpdateInputSchema: z.ZodType<Prisma.deptUncheckedUpdateInput> = z.object({
  dept_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  parent_dept_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dept_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const deptCreateManyInputSchema: z.ZodType<Prisma.deptCreateManyInput> = z.object({
  dept_id: z.number().int().optional(),
  parent_dept_id: z.number().int().optional().nullable(),
  dept_name: z.string()
}).strict();

export const deptUpdateManyMutationInputSchema: z.ZodType<Prisma.deptUpdateManyMutationInput> = z.object({
  parent_dept_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dept_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const deptUncheckedUpdateManyInputSchema: z.ZodType<Prisma.deptUncheckedUpdateManyInput> = z.object({
  dept_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  parent_dept_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dept_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const deviceCreateInputSchema: z.ZodType<Prisma.deviceCreateInput> = z.object({
  device_model_id: z.number().int(),
  owner_dept_id: z.number().int(),
  mgmt_dept_id: z.number().int(),
  serial: z.string(),
  regi_date: z.coerce.date(),
  mac: z.string(),
  last_inspection_log_id: z.number().int().optional().nullable(),
  last_location_log_id: z.number().int().optional().nullable(),
  status_id: z.number().int().optional()
}).strict();

export const deviceUncheckedCreateInputSchema: z.ZodType<Prisma.deviceUncheckedCreateInput> = z.object({
  device_id: z.number().int().optional(),
  device_model_id: z.number().int(),
  owner_dept_id: z.number().int(),
  mgmt_dept_id: z.number().int(),
  serial: z.string(),
  regi_date: z.coerce.date(),
  mac: z.string(),
  last_inspection_log_id: z.number().int().optional().nullable(),
  last_location_log_id: z.number().int().optional().nullable(),
  status_id: z.number().int().optional()
}).strict();

export const deviceUpdateInputSchema: z.ZodType<Prisma.deviceUpdateInput> = z.object({
  device_model_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  owner_dept_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mgmt_dept_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  serial: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  regi_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mac: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  last_inspection_log_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  last_location_log_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const deviceUncheckedUpdateInputSchema: z.ZodType<Prisma.deviceUncheckedUpdateInput> = z.object({
  device_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  device_model_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  owner_dept_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mgmt_dept_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  serial: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  regi_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mac: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  last_inspection_log_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  last_location_log_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const deviceCreateManyInputSchema: z.ZodType<Prisma.deviceCreateManyInput> = z.object({
  device_id: z.number().int().optional(),
  device_model_id: z.number().int(),
  owner_dept_id: z.number().int(),
  mgmt_dept_id: z.number().int(),
  serial: z.string(),
  regi_date: z.coerce.date(),
  mac: z.string(),
  last_inspection_log_id: z.number().int().optional().nullable(),
  last_location_log_id: z.number().int().optional().nullable(),
  status_id: z.number().int().optional()
}).strict();

export const deviceUpdateManyMutationInputSchema: z.ZodType<Prisma.deviceUpdateManyMutationInput> = z.object({
  device_model_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  owner_dept_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mgmt_dept_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  serial: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  regi_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mac: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  last_inspection_log_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  last_location_log_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const deviceUncheckedUpdateManyInputSchema: z.ZodType<Prisma.deviceUncheckedUpdateManyInput> = z.object({
  device_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  device_model_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  owner_dept_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mgmt_dept_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  serial: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  regi_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mac: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  last_inspection_log_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  last_location_log_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const device_approvalCreateInputSchema: z.ZodType<Prisma.device_approvalCreateInput> = z.object({
  approval_type_id: z.number().int(),
  sub_approval_id: z.number().int().optional().nullable(),
  requester_id: z.number().int(),
  request_at: z.coerce.date(),
  approver_role_id: z.number().int(),
  origin_location_id: z.number().int().optional().nullable(),
  destination_location_id: z.number().int().optional().nullable(),
  approver_id: z.number().int().optional().nullable(),
  approve_at: z.coerce.date().optional().nullable(),
  is_approved: z.number().int().optional().nullable()
}).strict();

export const device_approvalUncheckedCreateInputSchema: z.ZodType<Prisma.device_approvalUncheckedCreateInput> = z.object({
  approval_id: z.number().int().optional(),
  approval_type_id: z.number().int(),
  sub_approval_id: z.number().int().optional().nullable(),
  requester_id: z.number().int(),
  request_at: z.coerce.date(),
  approver_role_id: z.number().int(),
  origin_location_id: z.number().int().optional().nullable(),
  destination_location_id: z.number().int().optional().nullable(),
  approver_id: z.number().int().optional().nullable(),
  approve_at: z.coerce.date().optional().nullable(),
  is_approved: z.number().int().optional().nullable()
}).strict();

export const device_approvalUpdateInputSchema: z.ZodType<Prisma.device_approvalUpdateInput> = z.object({
  approval_type_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  sub_approval_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  requester_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  request_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  approver_role_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  origin_location_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  destination_location_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  approver_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  approve_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_approved: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const device_approvalUncheckedUpdateInputSchema: z.ZodType<Prisma.device_approvalUncheckedUpdateInput> = z.object({
  approval_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  approval_type_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  sub_approval_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  requester_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  request_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  approver_role_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  origin_location_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  destination_location_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  approver_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  approve_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_approved: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const device_approvalCreateManyInputSchema: z.ZodType<Prisma.device_approvalCreateManyInput> = z.object({
  approval_id: z.number().int().optional(),
  approval_type_id: z.number().int(),
  sub_approval_id: z.number().int().optional().nullable(),
  requester_id: z.number().int(),
  request_at: z.coerce.date(),
  approver_role_id: z.number().int(),
  origin_location_id: z.number().int().optional().nullable(),
  destination_location_id: z.number().int().optional().nullable(),
  approver_id: z.number().int().optional().nullable(),
  approve_at: z.coerce.date().optional().nullable(),
  is_approved: z.number().int().optional().nullable()
}).strict();

export const device_approvalUpdateManyMutationInputSchema: z.ZodType<Prisma.device_approvalUpdateManyMutationInput> = z.object({
  approval_type_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  sub_approval_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  requester_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  request_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  approver_role_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  origin_location_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  destination_location_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  approver_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  approve_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_approved: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const device_approvalUncheckedUpdateManyInputSchema: z.ZodType<Prisma.device_approvalUncheckedUpdateManyInput> = z.object({
  approval_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  approval_type_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  sub_approval_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  requester_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  request_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  approver_role_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  origin_location_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  destination_location_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  approver_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  approve_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_approved: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const device_approval_typeCreateInputSchema: z.ZodType<Prisma.device_approval_typeCreateInput> = z.object({
  approval_type_name: z.string()
}).strict();

export const device_approval_typeUncheckedCreateInputSchema: z.ZodType<Prisma.device_approval_typeUncheckedCreateInput> = z.object({
  approval_type_id: z.number().int().optional(),
  approval_type_name: z.string()
}).strict();

export const device_approval_typeUpdateInputSchema: z.ZodType<Prisma.device_approval_typeUpdateInput> = z.object({
  approval_type_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const device_approval_typeUncheckedUpdateInputSchema: z.ZodType<Prisma.device_approval_typeUncheckedUpdateInput> = z.object({
  approval_type_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  approval_type_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const device_approval_typeCreateManyInputSchema: z.ZodType<Prisma.device_approval_typeCreateManyInput> = z.object({
  approval_type_id: z.number().int().optional(),
  approval_type_name: z.string()
}).strict();

export const device_approval_typeUpdateManyMutationInputSchema: z.ZodType<Prisma.device_approval_typeUpdateManyMutationInput> = z.object({
  approval_type_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const device_approval_typeUncheckedUpdateManyInputSchema: z.ZodType<Prisma.device_approval_typeUncheckedUpdateManyInput> = z.object({
  approval_type_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  approval_type_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const device_consumable_compatibilityCreateInputSchema: z.ZodType<Prisma.device_consumable_compatibilityCreateInput> = z.object({
  device_model_id: z.number().int(),
  consumable_model_id: z.number().int()
}).strict();

export const device_consumable_compatibilityUncheckedCreateInputSchema: z.ZodType<Prisma.device_consumable_compatibilityUncheckedCreateInput> = z.object({
  device_model_id: z.number().int(),
  consumable_model_id: z.number().int()
}).strict();

export const device_consumable_compatibilityUpdateInputSchema: z.ZodType<Prisma.device_consumable_compatibilityUpdateInput> = z.object({
  device_model_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  consumable_model_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const device_consumable_compatibilityUncheckedUpdateInputSchema: z.ZodType<Prisma.device_consumable_compatibilityUncheckedUpdateInput> = z.object({
  device_model_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  consumable_model_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const device_consumable_compatibilityCreateManyInputSchema: z.ZodType<Prisma.device_consumable_compatibilityCreateManyInput> = z.object({
  device_model_id: z.number().int(),
  consumable_model_id: z.number().int()
}).strict();

export const device_consumable_compatibilityUpdateManyMutationInputSchema: z.ZodType<Prisma.device_consumable_compatibilityUpdateManyMutationInput> = z.object({
  device_model_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  consumable_model_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const device_consumable_compatibilityUncheckedUpdateManyInputSchema: z.ZodType<Prisma.device_consumable_compatibilityUncheckedUpdateManyInput> = z.object({
  device_model_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  consumable_model_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const device_driverCreateInputSchema: z.ZodType<Prisma.device_driverCreateInput> = z.object({
  device_model_id: z.number().int(),
  manufacturer: z.string().optional().nullable(),
  printer_language: z.string().optional().nullable(),
  install_file_address: z.string().optional().nullable()
}).strict();

export const device_driverUncheckedCreateInputSchema: z.ZodType<Prisma.device_driverUncheckedCreateInput> = z.object({
  device_driver_id: z.number().int().optional(),
  device_model_id: z.number().int(),
  manufacturer: z.string().optional().nullable(),
  printer_language: z.string().optional().nullable(),
  install_file_address: z.string().optional().nullable()
}).strict();

export const device_driverUpdateInputSchema: z.ZodType<Prisma.device_driverUpdateInput> = z.object({
  device_model_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  manufacturer: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  printer_language: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  install_file_address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const device_driverUncheckedUpdateInputSchema: z.ZodType<Prisma.device_driverUncheckedUpdateInput> = z.object({
  device_driver_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  device_model_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  manufacturer: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  printer_language: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  install_file_address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const device_driverCreateManyInputSchema: z.ZodType<Prisma.device_driverCreateManyInput> = z.object({
  device_driver_id: z.number().int().optional(),
  device_model_id: z.number().int(),
  manufacturer: z.string().optional().nullable(),
  printer_language: z.string().optional().nullable(),
  install_file_address: z.string().optional().nullable()
}).strict();

export const device_driverUpdateManyMutationInputSchema: z.ZodType<Prisma.device_driverUpdateManyMutationInput> = z.object({
  device_model_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  manufacturer: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  printer_language: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  install_file_address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const device_driverUncheckedUpdateManyInputSchema: z.ZodType<Prisma.device_driverUncheckedUpdateManyInput> = z.object({
  device_driver_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  device_model_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  manufacturer: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  printer_language: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  install_file_address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const device_inspection_logCreateInputSchema: z.ZodType<Prisma.device_inspection_logCreateInput> = z.object({
  device_id: z.number().int(),
  inspector_id: z.number().int(),
  inspection_date: z.coerce.date(),
  visit_type: z.string(),
  call_id: z.number().int().optional().nullable(),
  FL: z.number().int().optional().nullable(),
  FS: z.number().int().optional().nullable(),
  BL: z.number().int().optional().nullable(),
  BS: z.number().int().optional().nullable(),
  toner_count_YE: z.number().int().optional().nullable(),
  toner_count_MA: z.number().int().optional().nullable(),
  toner_count_CY: z.number().int().optional().nullable(),
  toner_count_BK: z.number().int().optional().nullable(),
  toner_stock_YE: z.number().int().optional().nullable(),
  toner_stock_MA: z.number().int().optional().nullable(),
  toner_stock_CY: z.number().int().optional().nullable(),
  toner_stock_BK: z.number().int().optional().nullable(),
  toner_deliver_YE: z.number().int().optional().nullable(),
  toner_deliver_CY: z.number().int().optional().nullable(),
  toner_deliver_MA: z.number().int().optional().nullable(),
  toner_deliver_BK: z.number().int().optional().nullable(),
  drum_count_YE: z.number().int().optional().nullable(),
  drum_count_MA: z.number().int().optional().nullable(),
  drum_count_CY: z.number().int().optional().nullable(),
  drum_count_BK: z.number().int().optional().nullable(),
  drum_replacement_detail: z.string().optional().nullable(),
  status: z.lazy(() => device_inspection_log_statusSchema).optional().nullable()
}).strict();

export const device_inspection_logUncheckedCreateInputSchema: z.ZodType<Prisma.device_inspection_logUncheckedCreateInput> = z.object({
  device_inspection_log_id: z.number().int().optional(),
  device_id: z.number().int(),
  inspector_id: z.number().int(),
  inspection_date: z.coerce.date(),
  visit_type: z.string(),
  call_id: z.number().int().optional().nullable(),
  FL: z.number().int().optional().nullable(),
  FS: z.number().int().optional().nullable(),
  BL: z.number().int().optional().nullable(),
  BS: z.number().int().optional().nullable(),
  toner_count_YE: z.number().int().optional().nullable(),
  toner_count_MA: z.number().int().optional().nullable(),
  toner_count_CY: z.number().int().optional().nullable(),
  toner_count_BK: z.number().int().optional().nullable(),
  toner_stock_YE: z.number().int().optional().nullable(),
  toner_stock_MA: z.number().int().optional().nullable(),
  toner_stock_CY: z.number().int().optional().nullable(),
  toner_stock_BK: z.number().int().optional().nullable(),
  toner_deliver_YE: z.number().int().optional().nullable(),
  toner_deliver_CY: z.number().int().optional().nullable(),
  toner_deliver_MA: z.number().int().optional().nullable(),
  toner_deliver_BK: z.number().int().optional().nullable(),
  drum_count_YE: z.number().int().optional().nullable(),
  drum_count_MA: z.number().int().optional().nullable(),
  drum_count_CY: z.number().int().optional().nullable(),
  drum_count_BK: z.number().int().optional().nullable(),
  drum_replacement_detail: z.string().optional().nullable(),
  status: z.lazy(() => device_inspection_log_statusSchema).optional().nullable()
}).strict();

export const device_inspection_logUpdateInputSchema: z.ZodType<Prisma.device_inspection_logUpdateInput> = z.object({
  device_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inspector_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inspection_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  visit_type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  call_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  FL: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  FS: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  BL: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  BS: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  toner_count_YE: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  toner_count_MA: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  toner_count_CY: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  toner_count_BK: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  toner_stock_YE: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  toner_stock_MA: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  toner_stock_CY: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  toner_stock_BK: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  toner_deliver_YE: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  toner_deliver_CY: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  toner_deliver_MA: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  toner_deliver_BK: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  drum_count_YE: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  drum_count_MA: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  drum_count_CY: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  drum_count_BK: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  drum_replacement_detail: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.lazy(() => device_inspection_log_statusSchema),z.lazy(() => NullableEnumdevice_inspection_log_statusFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const device_inspection_logUncheckedUpdateInputSchema: z.ZodType<Prisma.device_inspection_logUncheckedUpdateInput> = z.object({
  device_inspection_log_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  device_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inspector_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inspection_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  visit_type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  call_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  FL: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  FS: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  BL: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  BS: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  toner_count_YE: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  toner_count_MA: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  toner_count_CY: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  toner_count_BK: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  toner_stock_YE: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  toner_stock_MA: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  toner_stock_CY: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  toner_stock_BK: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  toner_deliver_YE: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  toner_deliver_CY: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  toner_deliver_MA: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  toner_deliver_BK: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  drum_count_YE: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  drum_count_MA: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  drum_count_CY: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  drum_count_BK: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  drum_replacement_detail: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.lazy(() => device_inspection_log_statusSchema),z.lazy(() => NullableEnumdevice_inspection_log_statusFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const device_inspection_logCreateManyInputSchema: z.ZodType<Prisma.device_inspection_logCreateManyInput> = z.object({
  device_inspection_log_id: z.number().int().optional(),
  device_id: z.number().int(),
  inspector_id: z.number().int(),
  inspection_date: z.coerce.date(),
  visit_type: z.string(),
  call_id: z.number().int().optional().nullable(),
  FL: z.number().int().optional().nullable(),
  FS: z.number().int().optional().nullable(),
  BL: z.number().int().optional().nullable(),
  BS: z.number().int().optional().nullable(),
  toner_count_YE: z.number().int().optional().nullable(),
  toner_count_MA: z.number().int().optional().nullable(),
  toner_count_CY: z.number().int().optional().nullable(),
  toner_count_BK: z.number().int().optional().nullable(),
  toner_stock_YE: z.number().int().optional().nullable(),
  toner_stock_MA: z.number().int().optional().nullable(),
  toner_stock_CY: z.number().int().optional().nullable(),
  toner_stock_BK: z.number().int().optional().nullable(),
  toner_deliver_YE: z.number().int().optional().nullable(),
  toner_deliver_CY: z.number().int().optional().nullable(),
  toner_deliver_MA: z.number().int().optional().nullable(),
  toner_deliver_BK: z.number().int().optional().nullable(),
  drum_count_YE: z.number().int().optional().nullable(),
  drum_count_MA: z.number().int().optional().nullable(),
  drum_count_CY: z.number().int().optional().nullable(),
  drum_count_BK: z.number().int().optional().nullable(),
  drum_replacement_detail: z.string().optional().nullable(),
  status: z.lazy(() => device_inspection_log_statusSchema).optional().nullable()
}).strict();

export const device_inspection_logUpdateManyMutationInputSchema: z.ZodType<Prisma.device_inspection_logUpdateManyMutationInput> = z.object({
  device_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inspector_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inspection_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  visit_type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  call_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  FL: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  FS: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  BL: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  BS: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  toner_count_YE: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  toner_count_MA: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  toner_count_CY: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  toner_count_BK: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  toner_stock_YE: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  toner_stock_MA: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  toner_stock_CY: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  toner_stock_BK: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  toner_deliver_YE: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  toner_deliver_CY: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  toner_deliver_MA: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  toner_deliver_BK: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  drum_count_YE: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  drum_count_MA: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  drum_count_CY: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  drum_count_BK: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  drum_replacement_detail: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.lazy(() => device_inspection_log_statusSchema),z.lazy(() => NullableEnumdevice_inspection_log_statusFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const device_inspection_logUncheckedUpdateManyInputSchema: z.ZodType<Prisma.device_inspection_logUncheckedUpdateManyInput> = z.object({
  device_inspection_log_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  device_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inspector_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inspection_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  visit_type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  call_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  FL: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  FS: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  BL: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  BS: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  toner_count_YE: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  toner_count_MA: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  toner_count_CY: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  toner_count_BK: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  toner_stock_YE: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  toner_stock_MA: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  toner_stock_CY: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  toner_stock_BK: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  toner_deliver_YE: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  toner_deliver_CY: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  toner_deliver_MA: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  toner_deliver_BK: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  drum_count_YE: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  drum_count_MA: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  drum_count_CY: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  drum_count_BK: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  drum_replacement_detail: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.lazy(() => device_inspection_log_statusSchema),z.lazy(() => NullableEnumdevice_inspection_log_statusFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const device_install_infoCreateInputSchema: z.ZodType<Prisma.device_install_infoCreateInput> = z.object({
  device_id: z.number().int(),
  installer_id: z.number().int(),
  mgmt_num: z.string(),
  ip_address: z.string().optional().nullable(),
  subnet_mask: z.string().optional().nullable(),
  gateway: z.string().optional().nullable(),
  dns1: z.string().optional().nullable(),
  dns2: z.string().optional().nullable()
}).strict();

export const device_install_infoUncheckedCreateInputSchema: z.ZodType<Prisma.device_install_infoUncheckedCreateInput> = z.object({
  device_id: z.number().int(),
  installer_id: z.number().int(),
  mgmt_num: z.string(),
  ip_address: z.string().optional().nullable(),
  subnet_mask: z.string().optional().nullable(),
  gateway: z.string().optional().nullable(),
  dns1: z.string().optional().nullable(),
  dns2: z.string().optional().nullable()
}).strict();

export const device_install_infoUpdateInputSchema: z.ZodType<Prisma.device_install_infoUpdateInput> = z.object({
  device_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  installer_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mgmt_num: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ip_address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  subnet_mask: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  gateway: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dns1: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dns2: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const device_install_infoUncheckedUpdateInputSchema: z.ZodType<Prisma.device_install_infoUncheckedUpdateInput> = z.object({
  device_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  installer_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mgmt_num: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ip_address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  subnet_mask: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  gateway: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dns1: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dns2: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const device_install_infoCreateManyInputSchema: z.ZodType<Prisma.device_install_infoCreateManyInput> = z.object({
  device_id: z.number().int(),
  installer_id: z.number().int(),
  mgmt_num: z.string(),
  ip_address: z.string().optional().nullable(),
  subnet_mask: z.string().optional().nullable(),
  gateway: z.string().optional().nullable(),
  dns1: z.string().optional().nullable(),
  dns2: z.string().optional().nullable()
}).strict();

export const device_install_infoUpdateManyMutationInputSchema: z.ZodType<Prisma.device_install_infoUpdateManyMutationInput> = z.object({
  device_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  installer_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mgmt_num: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ip_address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  subnet_mask: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  gateway: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dns1: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dns2: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const device_install_infoUncheckedUpdateManyInputSchema: z.ZodType<Prisma.device_install_infoUncheckedUpdateManyInput> = z.object({
  device_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  installer_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mgmt_num: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ip_address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  subnet_mask: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  gateway: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dns1: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dns2: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const device_location_logCreateInputSchema: z.ZodType<Prisma.device_location_logCreateInput> = z.object({
  device_id: z.number().int(),
  location_date: z.coerce.date(),
  location_id: z.number().int(),
  location_detail: z.string().optional().nullable()
}).strict();

export const device_location_logUncheckedCreateInputSchema: z.ZodType<Prisma.device_location_logUncheckedCreateInput> = z.object({
  device_location_log_id: z.number().int().optional(),
  device_id: z.number().int(),
  location_date: z.coerce.date(),
  location_id: z.number().int(),
  location_detail: z.string().optional().nullable()
}).strict();

export const device_location_logUpdateInputSchema: z.ZodType<Prisma.device_location_logUpdateInput> = z.object({
  device_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  location_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  location_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  location_detail: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const device_location_logUncheckedUpdateInputSchema: z.ZodType<Prisma.device_location_logUncheckedUpdateInput> = z.object({
  device_location_log_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  device_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  location_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  location_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  location_detail: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const device_location_logCreateManyInputSchema: z.ZodType<Prisma.device_location_logCreateManyInput> = z.object({
  device_location_log_id: z.number().int().optional(),
  device_id: z.number().int(),
  location_date: z.coerce.date(),
  location_id: z.number().int(),
  location_detail: z.string().optional().nullable()
}).strict();

export const device_location_logUpdateManyMutationInputSchema: z.ZodType<Prisma.device_location_logUpdateManyMutationInput> = z.object({
  device_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  location_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  location_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  location_detail: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const device_location_logUncheckedUpdateManyInputSchema: z.ZodType<Prisma.device_location_logUncheckedUpdateManyInput> = z.object({
  device_location_log_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  device_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  location_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  location_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  location_detail: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const device_modelCreateInputSchema: z.ZodType<Prisma.device_modelCreateInput> = z.object({
  model_name: z.string(),
  manufacturer: z.string(),
  color_support: z.number().int()
}).strict();

export const device_modelUncheckedCreateInputSchema: z.ZodType<Prisma.device_modelUncheckedCreateInput> = z.object({
  device_model_id: z.number().int().optional(),
  model_name: z.string(),
  manufacturer: z.string(),
  color_support: z.number().int()
}).strict();

export const device_modelUpdateInputSchema: z.ZodType<Prisma.device_modelUpdateInput> = z.object({
  model_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  manufacturer: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  color_support: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const device_modelUncheckedUpdateInputSchema: z.ZodType<Prisma.device_modelUncheckedUpdateInput> = z.object({
  device_model_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  model_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  manufacturer: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  color_support: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const device_modelCreateManyInputSchema: z.ZodType<Prisma.device_modelCreateManyInput> = z.object({
  device_model_id: z.number().int().optional(),
  model_name: z.string(),
  manufacturer: z.string(),
  color_support: z.number().int()
}).strict();

export const device_modelUpdateManyMutationInputSchema: z.ZodType<Prisma.device_modelUpdateManyMutationInput> = z.object({
  model_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  manufacturer: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  color_support: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const device_modelUncheckedUpdateManyInputSchema: z.ZodType<Prisma.device_modelUncheckedUpdateManyInput> = z.object({
  device_model_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  model_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  manufacturer: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  color_support: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const device_optionCreateInputSchema: z.ZodType<Prisma.device_optionCreateInput> = z.object({
  option_model_id: z.number().int(),
  serial: z.string().optional().nullable(),
  is_active: z.number().int().optional(),
  location_type: z.lazy(() => device_option_location_typeSchema),
  location_warehouse_id: z.number().int().optional().nullable(),
  location_device_id: z.number().int().optional().nullable()
}).strict();

export const device_optionUncheckedCreateInputSchema: z.ZodType<Prisma.device_optionUncheckedCreateInput> = z.object({
  device_option_id: z.number().int().optional(),
  option_model_id: z.number().int(),
  serial: z.string().optional().nullable(),
  is_active: z.number().int().optional(),
  location_type: z.lazy(() => device_option_location_typeSchema),
  location_warehouse_id: z.number().int().optional().nullable(),
  location_device_id: z.number().int().optional().nullable()
}).strict();

export const device_optionUpdateInputSchema: z.ZodType<Prisma.device_optionUpdateInput> = z.object({
  option_model_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  serial: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_active: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  location_type: z.union([ z.lazy(() => device_option_location_typeSchema),z.lazy(() => Enumdevice_option_location_typeFieldUpdateOperationsInputSchema) ]).optional(),
  location_warehouse_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location_device_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const device_optionUncheckedUpdateInputSchema: z.ZodType<Prisma.device_optionUncheckedUpdateInput> = z.object({
  device_option_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  option_model_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  serial: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_active: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  location_type: z.union([ z.lazy(() => device_option_location_typeSchema),z.lazy(() => Enumdevice_option_location_typeFieldUpdateOperationsInputSchema) ]).optional(),
  location_warehouse_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location_device_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const device_optionCreateManyInputSchema: z.ZodType<Prisma.device_optionCreateManyInput> = z.object({
  device_option_id: z.number().int().optional(),
  option_model_id: z.number().int(),
  serial: z.string().optional().nullable(),
  is_active: z.number().int().optional(),
  location_type: z.lazy(() => device_option_location_typeSchema),
  location_warehouse_id: z.number().int().optional().nullable(),
  location_device_id: z.number().int().optional().nullable()
}).strict();

export const device_optionUpdateManyMutationInputSchema: z.ZodType<Prisma.device_optionUpdateManyMutationInput> = z.object({
  option_model_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  serial: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_active: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  location_type: z.union([ z.lazy(() => device_option_location_typeSchema),z.lazy(() => Enumdevice_option_location_typeFieldUpdateOperationsInputSchema) ]).optional(),
  location_warehouse_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location_device_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const device_optionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.device_optionUncheckedUpdateManyInput> = z.object({
  device_option_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  option_model_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  serial: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_active: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  location_type: z.union([ z.lazy(() => device_option_location_typeSchema),z.lazy(() => Enumdevice_option_location_typeFieldUpdateOperationsInputSchema) ]).optional(),
  location_warehouse_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location_device_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const device_option_compatibilityCreateInputSchema: z.ZodType<Prisma.device_option_compatibilityCreateInput> = z.object({
  device_model_id: z.number().int(),
  option_model_id: z.number().int()
}).strict();

export const device_option_compatibilityUncheckedCreateInputSchema: z.ZodType<Prisma.device_option_compatibilityUncheckedCreateInput> = z.object({
  device_model_id: z.number().int(),
  option_model_id: z.number().int()
}).strict();

export const device_option_compatibilityUpdateInputSchema: z.ZodType<Prisma.device_option_compatibilityUpdateInput> = z.object({
  device_model_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  option_model_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const device_option_compatibilityUncheckedUpdateInputSchema: z.ZodType<Prisma.device_option_compatibilityUncheckedUpdateInput> = z.object({
  device_model_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  option_model_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const device_option_compatibilityCreateManyInputSchema: z.ZodType<Prisma.device_option_compatibilityCreateManyInput> = z.object({
  device_model_id: z.number().int(),
  option_model_id: z.number().int()
}).strict();

export const device_option_compatibilityUpdateManyMutationInputSchema: z.ZodType<Prisma.device_option_compatibilityUpdateManyMutationInput> = z.object({
  device_model_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  option_model_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const device_option_compatibilityUncheckedUpdateManyInputSchema: z.ZodType<Prisma.device_option_compatibilityUncheckedUpdateManyInput> = z.object({
  device_model_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  option_model_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const device_statusCreateInputSchema: z.ZodType<Prisma.device_statusCreateInput> = z.object({
  status_name: z.string()
}).strict();

export const device_statusUncheckedCreateInputSchema: z.ZodType<Prisma.device_statusUncheckedCreateInput> = z.object({
  status_id: z.number().int().optional(),
  status_name: z.string()
}).strict();

export const device_statusUpdateInputSchema: z.ZodType<Prisma.device_statusUpdateInput> = z.object({
  status_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const device_statusUncheckedUpdateInputSchema: z.ZodType<Prisma.device_statusUncheckedUpdateInput> = z.object({
  status_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  status_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const device_statusCreateManyInputSchema: z.ZodType<Prisma.device_statusCreateManyInput> = z.object({
  status_id: z.number().int().optional(),
  status_name: z.string()
}).strict();

export const device_statusUpdateManyMutationInputSchema: z.ZodType<Prisma.device_statusUpdateManyMutationInput> = z.object({
  status_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const device_statusUncheckedUpdateManyInputSchema: z.ZodType<Prisma.device_statusUncheckedUpdateManyInput> = z.object({
  status_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  status_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const inspection_approvalCreateInputSchema: z.ZodType<Prisma.inspection_approvalCreateInput> = z.object({
  requester_id: z.number().int(),
  request_at: z.coerce.date(),
  approver_role_id: z.number().int().optional().nullable(),
  device_inspection_log_id: z.number().int(),
  approver_id: z.number().int().optional().nullable(),
  approved_at: z.coerce.date().optional().nullable(),
  is_approved: z.number().int().optional().nullable()
}).strict();

export const inspection_approvalUncheckedCreateInputSchema: z.ZodType<Prisma.inspection_approvalUncheckedCreateInput> = z.object({
  approval_id: z.number().int().optional(),
  requester_id: z.number().int(),
  request_at: z.coerce.date(),
  approver_role_id: z.number().int().optional().nullable(),
  device_inspection_log_id: z.number().int(),
  approver_id: z.number().int().optional().nullable(),
  approved_at: z.coerce.date().optional().nullable(),
  is_approved: z.number().int().optional().nullable()
}).strict();

export const inspection_approvalUpdateInputSchema: z.ZodType<Prisma.inspection_approvalUpdateInput> = z.object({
  requester_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  request_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  approver_role_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  device_inspection_log_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  approver_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  approved_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_approved: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const inspection_approvalUncheckedUpdateInputSchema: z.ZodType<Prisma.inspection_approvalUncheckedUpdateInput> = z.object({
  approval_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  requester_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  request_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  approver_role_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  device_inspection_log_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  approver_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  approved_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_approved: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const inspection_approvalCreateManyInputSchema: z.ZodType<Prisma.inspection_approvalCreateManyInput> = z.object({
  approval_id: z.number().int().optional(),
  requester_id: z.number().int(),
  request_at: z.coerce.date(),
  approver_role_id: z.number().int().optional().nullable(),
  device_inspection_log_id: z.number().int(),
  approver_id: z.number().int().optional().nullable(),
  approved_at: z.coerce.date().optional().nullable(),
  is_approved: z.number().int().optional().nullable()
}).strict();

export const inspection_approvalUpdateManyMutationInputSchema: z.ZodType<Prisma.inspection_approvalUpdateManyMutationInput> = z.object({
  requester_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  request_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  approver_role_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  device_inspection_log_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  approver_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  approved_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_approved: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const inspection_approvalUncheckedUpdateManyInputSchema: z.ZodType<Prisma.inspection_approvalUncheckedUpdateManyInput> = z.object({
  approval_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  requester_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  request_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  approver_role_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  device_inspection_log_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  approver_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  approved_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_approved: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const locationCreateInputSchema: z.ZodType<Prisma.locationCreateInput> = z.object({
  location_type: z.lazy(() => location_location_typeSchema),
  warehouse_id: z.number().int().optional().nullable(),
  client_branch_id: z.number().int().optional().nullable()
}).strict();

export const locationUncheckedCreateInputSchema: z.ZodType<Prisma.locationUncheckedCreateInput> = z.object({
  location_id: z.number().int().optional(),
  location_type: z.lazy(() => location_location_typeSchema),
  warehouse_id: z.number().int().optional().nullable(),
  client_branch_id: z.number().int().optional().nullable()
}).strict();

export const locationUpdateInputSchema: z.ZodType<Prisma.locationUpdateInput> = z.object({
  location_type: z.union([ z.lazy(() => location_location_typeSchema),z.lazy(() => Enumlocation_location_typeFieldUpdateOperationsInputSchema) ]).optional(),
  warehouse_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  client_branch_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const locationUncheckedUpdateInputSchema: z.ZodType<Prisma.locationUncheckedUpdateInput> = z.object({
  location_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  location_type: z.union([ z.lazy(() => location_location_typeSchema),z.lazy(() => Enumlocation_location_typeFieldUpdateOperationsInputSchema) ]).optional(),
  warehouse_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  client_branch_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const locationCreateManyInputSchema: z.ZodType<Prisma.locationCreateManyInput> = z.object({
  location_id: z.number().int().optional(),
  location_type: z.lazy(() => location_location_typeSchema),
  warehouse_id: z.number().int().optional().nullable(),
  client_branch_id: z.number().int().optional().nullable()
}).strict();

export const locationUpdateManyMutationInputSchema: z.ZodType<Prisma.locationUpdateManyMutationInput> = z.object({
  location_type: z.union([ z.lazy(() => location_location_typeSchema),z.lazy(() => Enumlocation_location_typeFieldUpdateOperationsInputSchema) ]).optional(),
  warehouse_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  client_branch_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const locationUncheckedUpdateManyInputSchema: z.ZodType<Prisma.locationUncheckedUpdateManyInput> = z.object({
  location_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  location_type: z.union([ z.lazy(() => location_location_typeSchema),z.lazy(() => Enumlocation_location_typeFieldUpdateOperationsInputSchema) ]).optional(),
  warehouse_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  client_branch_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const option_modelCreateInputSchema: z.ZodType<Prisma.option_modelCreateInput> = z.object({
  option_model_name: z.string(),
  option_type: z.string(),
  manufacturer: z.string()
}).strict();

export const option_modelUncheckedCreateInputSchema: z.ZodType<Prisma.option_modelUncheckedCreateInput> = z.object({
  option_model_id: z.number().int().optional(),
  option_model_name: z.string(),
  option_type: z.string(),
  manufacturer: z.string()
}).strict();

export const option_modelUpdateInputSchema: z.ZodType<Prisma.option_modelUpdateInput> = z.object({
  option_model_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  option_type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  manufacturer: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const option_modelUncheckedUpdateInputSchema: z.ZodType<Prisma.option_modelUncheckedUpdateInput> = z.object({
  option_model_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  option_model_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  option_type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  manufacturer: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const option_modelCreateManyInputSchema: z.ZodType<Prisma.option_modelCreateManyInput> = z.object({
  option_model_id: z.number().int().optional(),
  option_model_name: z.string(),
  option_type: z.string(),
  manufacturer: z.string()
}).strict();

export const option_modelUpdateManyMutationInputSchema: z.ZodType<Prisma.option_modelUpdateManyMutationInput> = z.object({
  option_model_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  option_type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  manufacturer: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const option_modelUncheckedUpdateManyInputSchema: z.ZodType<Prisma.option_modelUncheckedUpdateManyInput> = z.object({
  option_model_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  option_model_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  option_type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  manufacturer: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const sidoCreateInputSchema: z.ZodType<Prisma.sidoCreateInput> = z.object({
  sido_name: z.string().optional().nullable()
}).strict();

export const sidoUncheckedCreateInputSchema: z.ZodType<Prisma.sidoUncheckedCreateInput> = z.object({
  sido_id: z.number().int().optional(),
  sido_name: z.string().optional().nullable()
}).strict();

export const sidoUpdateInputSchema: z.ZodType<Prisma.sidoUpdateInput> = z.object({
  sido_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const sidoUncheckedUpdateInputSchema: z.ZodType<Prisma.sidoUncheckedUpdateInput> = z.object({
  sido_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  sido_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const sidoCreateManyInputSchema: z.ZodType<Prisma.sidoCreateManyInput> = z.object({
  sido_id: z.number().int().optional(),
  sido_name: z.string().optional().nullable()
}).strict();

export const sidoUpdateManyMutationInputSchema: z.ZodType<Prisma.sidoUpdateManyMutationInput> = z.object({
  sido_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const sidoUncheckedUpdateManyInputSchema: z.ZodType<Prisma.sidoUncheckedUpdateManyInput> = z.object({
  sido_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  sido_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const sigunguCreateInputSchema: z.ZodType<Prisma.sigunguCreateInput> = z.object({
  sigungu_name: z.string(),
  sido_id: z.number().int()
}).strict();

export const sigunguUncheckedCreateInputSchema: z.ZodType<Prisma.sigunguUncheckedCreateInput> = z.object({
  sigungu_id: z.number().int().optional(),
  sigungu_name: z.string(),
  sido_id: z.number().int()
}).strict();

export const sigunguUpdateInputSchema: z.ZodType<Prisma.sigunguUpdateInput> = z.object({
  sigungu_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sido_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const sigunguUncheckedUpdateInputSchema: z.ZodType<Prisma.sigunguUncheckedUpdateInput> = z.object({
  sigungu_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  sigungu_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sido_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const sigunguCreateManyInputSchema: z.ZodType<Prisma.sigunguCreateManyInput> = z.object({
  sigungu_id: z.number().int().optional(),
  sigungu_name: z.string(),
  sido_id: z.number().int()
}).strict();

export const sigunguUpdateManyMutationInputSchema: z.ZodType<Prisma.sigunguUpdateManyMutationInput> = z.object({
  sigungu_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sido_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const sigunguUncheckedUpdateManyInputSchema: z.ZodType<Prisma.sigunguUncheckedUpdateManyInput> = z.object({
  sigungu_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  sigungu_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sido_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const userCreateInputSchema: z.ZodType<Prisma.userCreateInput> = z.object({
  user_name: z.string(),
  login_id: z.string(),
  password: z.string(),
  mobile_num: z.string().optional().nullable(),
  office_num: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  modified_at: z.coerce.date().optional().nullable(),
  dept_id: z.number().int(),
  approval_role_id: z.number().int().optional().nullable(),
  position_id: z.number().int(),
  created_at: z.coerce.date().optional(),
  is_active: z.number().int().optional(),
  permission: z.lazy(() => user_permissionSchema).optional()
}).strict();

export const userUncheckedCreateInputSchema: z.ZodType<Prisma.userUncheckedCreateInput> = z.object({
  user_id: z.number().int().optional(),
  user_name: z.string(),
  login_id: z.string(),
  password: z.string(),
  mobile_num: z.string().optional().nullable(),
  office_num: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  modified_at: z.coerce.date().optional().nullable(),
  dept_id: z.number().int(),
  approval_role_id: z.number().int().optional().nullable(),
  position_id: z.number().int(),
  created_at: z.coerce.date().optional(),
  is_active: z.number().int().optional(),
  permission: z.lazy(() => user_permissionSchema).optional()
}).strict();

export const userUpdateInputSchema: z.ZodType<Prisma.userUpdateInput> = z.object({
  user_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  login_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mobile_num: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  office_num: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  modified_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dept_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  approval_role_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  position_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  is_active: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  permission: z.union([ z.lazy(() => user_permissionSchema),z.lazy(() => Enumuser_permissionFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const userUncheckedUpdateInputSchema: z.ZodType<Prisma.userUncheckedUpdateInput> = z.object({
  user_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  user_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  login_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mobile_num: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  office_num: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  modified_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dept_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  approval_role_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  position_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  is_active: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  permission: z.union([ z.lazy(() => user_permissionSchema),z.lazy(() => Enumuser_permissionFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const userCreateManyInputSchema: z.ZodType<Prisma.userCreateManyInput> = z.object({
  user_id: z.number().int().optional(),
  user_name: z.string(),
  login_id: z.string(),
  password: z.string(),
  mobile_num: z.string().optional().nullable(),
  office_num: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  modified_at: z.coerce.date().optional().nullable(),
  dept_id: z.number().int(),
  approval_role_id: z.number().int().optional().nullable(),
  position_id: z.number().int(),
  created_at: z.coerce.date().optional(),
  is_active: z.number().int().optional(),
  permission: z.lazy(() => user_permissionSchema).optional()
}).strict();

export const userUpdateManyMutationInputSchema: z.ZodType<Prisma.userUpdateManyMutationInput> = z.object({
  user_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  login_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mobile_num: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  office_num: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  modified_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dept_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  approval_role_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  position_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  is_active: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  permission: z.union([ z.lazy(() => user_permissionSchema),z.lazy(() => Enumuser_permissionFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const userUncheckedUpdateManyInputSchema: z.ZodType<Prisma.userUncheckedUpdateManyInput> = z.object({
  user_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  user_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  login_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mobile_num: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  office_num: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  modified_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dept_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  approval_role_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  position_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  is_active: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  permission: z.union([ z.lazy(() => user_permissionSchema),z.lazy(() => Enumuser_permissionFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const user_positionCreateInputSchema: z.ZodType<Prisma.user_positionCreateInput> = z.object({
  position_name: z.string()
}).strict();

export const user_positionUncheckedCreateInputSchema: z.ZodType<Prisma.user_positionUncheckedCreateInput> = z.object({
  user_position_id: z.number().int().optional(),
  position_name: z.string()
}).strict();

export const user_positionUpdateInputSchema: z.ZodType<Prisma.user_positionUpdateInput> = z.object({
  position_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const user_positionUncheckedUpdateInputSchema: z.ZodType<Prisma.user_positionUncheckedUpdateInput> = z.object({
  user_position_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  position_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const user_positionCreateManyInputSchema: z.ZodType<Prisma.user_positionCreateManyInput> = z.object({
  user_position_id: z.number().int().optional(),
  position_name: z.string()
}).strict();

export const user_positionUpdateManyMutationInputSchema: z.ZodType<Prisma.user_positionUpdateManyMutationInput> = z.object({
  position_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const user_positionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.user_positionUncheckedUpdateManyInput> = z.object({
  user_position_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  position_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const user_role_assignmentCreateInputSchema: z.ZodType<Prisma.user_role_assignmentCreateInput> = z.object({
  role_id: z.number().int(),
  approver_id: z.number().int()
}).strict();

export const user_role_assignmentUncheckedCreateInputSchema: z.ZodType<Prisma.user_role_assignmentUncheckedCreateInput> = z.object({
  role_id: z.number().int(),
  approver_id: z.number().int()
}).strict();

export const user_role_assignmentUpdateInputSchema: z.ZodType<Prisma.user_role_assignmentUpdateInput> = z.object({
  role_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  approver_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const user_role_assignmentUncheckedUpdateInputSchema: z.ZodType<Prisma.user_role_assignmentUncheckedUpdateInput> = z.object({
  role_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  approver_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const user_role_assignmentCreateManyInputSchema: z.ZodType<Prisma.user_role_assignmentCreateManyInput> = z.object({
  role_id: z.number().int(),
  approver_id: z.number().int()
}).strict();

export const user_role_assignmentUpdateManyMutationInputSchema: z.ZodType<Prisma.user_role_assignmentUpdateManyMutationInput> = z.object({
  role_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  approver_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const user_role_assignmentUncheckedUpdateManyInputSchema: z.ZodType<Prisma.user_role_assignmentUncheckedUpdateManyInput> = z.object({
  role_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  approver_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const warehouseCreateInputSchema: z.ZodType<Prisma.warehouseCreateInput> = z.object({
  warehouse_name: z.string(),
  mgmt_dept_id: z.number().int()
}).strict();

export const warehouseUncheckedCreateInputSchema: z.ZodType<Prisma.warehouseUncheckedCreateInput> = z.object({
  warehouse_id: z.number().int().optional(),
  warehouse_name: z.string(),
  mgmt_dept_id: z.number().int()
}).strict();

export const warehouseUpdateInputSchema: z.ZodType<Prisma.warehouseUpdateInput> = z.object({
  warehouse_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mgmt_dept_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const warehouseUncheckedUpdateInputSchema: z.ZodType<Prisma.warehouseUncheckedUpdateInput> = z.object({
  warehouse_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  warehouse_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mgmt_dept_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const warehouseCreateManyInputSchema: z.ZodType<Prisma.warehouseCreateManyInput> = z.object({
  warehouse_id: z.number().int().optional(),
  warehouse_name: z.string(),
  mgmt_dept_id: z.number().int()
}).strict();

export const warehouseUpdateManyMutationInputSchema: z.ZodType<Prisma.warehouseUpdateManyMutationInput> = z.object({
  warehouse_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mgmt_dept_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const warehouseUncheckedUpdateManyInputSchema: z.ZodType<Prisma.warehouseUncheckedUpdateManyInput> = z.object({
  warehouse_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  warehouse_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mgmt_dept_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const v_clientCreateInputSchema: z.ZodType<Prisma.v_clientCreateInput> = z.object({
  client_id: z.number().int().optional(),
  client_name: z.string().optional(),
  parent_client_id: z.number().int().optional().nullable(),
  default_client_branch_rate_id: z.bigint().optional(),
  is_active: z.number().int().optional(),
  parent_client_name: z.string().optional().nullable(),
  client_rate: z.string().optional().nullable(),
  rate_detail: z.string().optional().nullable(),
  branch_count: z.bigint().optional()
}).strict();

export const v_clientUncheckedCreateInputSchema: z.ZodType<Prisma.v_clientUncheckedCreateInput> = z.object({
  client_id: z.number().int().optional(),
  client_name: z.string().optional(),
  parent_client_id: z.number().int().optional().nullable(),
  default_client_branch_rate_id: z.bigint().optional(),
  is_active: z.number().int().optional(),
  parent_client_name: z.string().optional().nullable(),
  client_rate: z.string().optional().nullable(),
  rate_detail: z.string().optional().nullable(),
  branch_count: z.bigint().optional()
}).strict();

export const v_clientUpdateInputSchema: z.ZodType<Prisma.v_clientUpdateInput> = z.object({
  client_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  client_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  parent_client_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  default_client_branch_rate_id: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  is_active: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  parent_client_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  client_rate: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rate_detail: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  branch_count: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const v_clientUncheckedUpdateInputSchema: z.ZodType<Prisma.v_clientUncheckedUpdateInput> = z.object({
  client_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  client_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  parent_client_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  default_client_branch_rate_id: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  is_active: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  parent_client_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  client_rate: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rate_detail: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  branch_count: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const v_clientCreateManyInputSchema: z.ZodType<Prisma.v_clientCreateManyInput> = z.object({
  client_id: z.number().int().optional(),
  client_name: z.string().optional(),
  parent_client_id: z.number().int().optional().nullable(),
  default_client_branch_rate_id: z.bigint().optional(),
  is_active: z.number().int().optional(),
  parent_client_name: z.string().optional().nullable(),
  client_rate: z.string().optional().nullable(),
  rate_detail: z.string().optional().nullable(),
  branch_count: z.bigint().optional()
}).strict();

export const v_clientUpdateManyMutationInputSchema: z.ZodType<Prisma.v_clientUpdateManyMutationInput> = z.object({
  client_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  client_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  parent_client_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  default_client_branch_rate_id: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  is_active: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  parent_client_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  client_rate: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rate_detail: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  branch_count: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const v_clientUncheckedUpdateManyInputSchema: z.ZodType<Prisma.v_clientUncheckedUpdateManyInput> = z.object({
  client_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  client_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  parent_client_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  default_client_branch_rate_id: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  is_active: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  parent_client_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  client_rate: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rate_detail: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  branch_count: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const v_client_branchCreateInputSchema: z.ZodType<Prisma.v_client_branchCreateInput> = z.object({
  client_branch_id: z.number().int().optional(),
  client_branch_name: z.string(),
  client_id: z.number().int(),
  sigungu_id: z.number().int(),
  mgmt_dept_id: z.number().int(),
  client_branch_rate_id: z.number().int(),
  branch_mgr_name: z.string().optional().nullable(),
  branch_mgr_mobile_num: z.string().optional().nullable(),
  branch_mgr_office_num: z.string().optional().nullable(),
  branch_mgr_email: z.string().optional().nullable(),
  is_active: z.number().int().optional(),
  remote_support: z.number().int().optional(),
  push_alert: z.number().int().optional(),
  client_name: z.string().optional().nullable(),
  sigungu_name: z.string().optional().nullable(),
  sido_name: z.string().optional().nullable()
}).strict();

export const v_client_branchUncheckedCreateInputSchema: z.ZodType<Prisma.v_client_branchUncheckedCreateInput> = z.object({
  client_branch_id: z.number().int().optional(),
  client_branch_name: z.string(),
  client_id: z.number().int(),
  sigungu_id: z.number().int(),
  mgmt_dept_id: z.number().int(),
  client_branch_rate_id: z.number().int(),
  branch_mgr_name: z.string().optional().nullable(),
  branch_mgr_mobile_num: z.string().optional().nullable(),
  branch_mgr_office_num: z.string().optional().nullable(),
  branch_mgr_email: z.string().optional().nullable(),
  is_active: z.number().int().optional(),
  remote_support: z.number().int().optional(),
  push_alert: z.number().int().optional(),
  client_name: z.string().optional().nullable(),
  sigungu_name: z.string().optional().nullable(),
  sido_name: z.string().optional().nullable()
}).strict();

export const v_client_branchUpdateInputSchema: z.ZodType<Prisma.v_client_branchUpdateInput> = z.object({
  client_branch_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  client_branch_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  client_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  sigungu_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mgmt_dept_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  client_branch_rate_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  branch_mgr_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  branch_mgr_mobile_num: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  branch_mgr_office_num: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  branch_mgr_email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_active: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  remote_support: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  push_alert: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  client_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sigungu_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sido_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const v_client_branchUncheckedUpdateInputSchema: z.ZodType<Prisma.v_client_branchUncheckedUpdateInput> = z.object({
  client_branch_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  client_branch_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  client_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  sigungu_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mgmt_dept_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  client_branch_rate_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  branch_mgr_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  branch_mgr_mobile_num: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  branch_mgr_office_num: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  branch_mgr_email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_active: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  remote_support: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  push_alert: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  client_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sigungu_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sido_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const v_client_branchCreateManyInputSchema: z.ZodType<Prisma.v_client_branchCreateManyInput> = z.object({
  client_branch_id: z.number().int().optional(),
  client_branch_name: z.string(),
  client_id: z.number().int(),
  sigungu_id: z.number().int(),
  mgmt_dept_id: z.number().int(),
  client_branch_rate_id: z.number().int(),
  branch_mgr_name: z.string().optional().nullable(),
  branch_mgr_mobile_num: z.string().optional().nullable(),
  branch_mgr_office_num: z.string().optional().nullable(),
  branch_mgr_email: z.string().optional().nullable(),
  is_active: z.number().int().optional(),
  remote_support: z.number().int().optional(),
  push_alert: z.number().int().optional(),
  client_name: z.string().optional().nullable(),
  sigungu_name: z.string().optional().nullable(),
  sido_name: z.string().optional().nullable()
}).strict();

export const v_client_branchUpdateManyMutationInputSchema: z.ZodType<Prisma.v_client_branchUpdateManyMutationInput> = z.object({
  client_branch_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  client_branch_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  client_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  sigungu_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mgmt_dept_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  client_branch_rate_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  branch_mgr_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  branch_mgr_mobile_num: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  branch_mgr_office_num: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  branch_mgr_email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_active: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  remote_support: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  push_alert: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  client_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sigungu_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sido_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const v_client_branchUncheckedUpdateManyInputSchema: z.ZodType<Prisma.v_client_branchUncheckedUpdateManyInput> = z.object({
  client_branch_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  client_branch_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  client_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  sigungu_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mgmt_dept_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  client_branch_rate_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  branch_mgr_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  branch_mgr_mobile_num: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  branch_mgr_office_num: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  branch_mgr_email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_active: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  remote_support: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  push_alert: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  client_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sigungu_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sido_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const v_consumable_modelCreateInputSchema: z.ZodType<Prisma.v_consumable_modelCreateInput> = z.object({
  compatibility_id: z.string(),
  consumable_model_id: z.number().int().optional().nullable(),
  manufacturer: z.string().optional().nullable(),
  consumable_name: z.string().optional().nullable(),
  consumable_type: z.string().optional().nullable(),
  model_manufacturer: z.string().optional().nullable()
}).strict();

export const v_consumable_modelUncheckedCreateInputSchema: z.ZodType<Prisma.v_consumable_modelUncheckedCreateInput> = z.object({
  compatibility_id: z.string(),
  consumable_model_id: z.number().int().optional().nullable(),
  manufacturer: z.string().optional().nullable(),
  consumable_name: z.string().optional().nullable(),
  consumable_type: z.string().optional().nullable(),
  model_manufacturer: z.string().optional().nullable()
}).strict();

export const v_consumable_modelUpdateInputSchema: z.ZodType<Prisma.v_consumable_modelUpdateInput> = z.object({
  compatibility_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  consumable_model_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  manufacturer: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  consumable_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  consumable_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  model_manufacturer: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const v_consumable_modelUncheckedUpdateInputSchema: z.ZodType<Prisma.v_consumable_modelUncheckedUpdateInput> = z.object({
  compatibility_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  consumable_model_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  manufacturer: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  consumable_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  consumable_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  model_manufacturer: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const v_consumable_modelCreateManyInputSchema: z.ZodType<Prisma.v_consumable_modelCreateManyInput> = z.object({
  compatibility_id: z.string(),
  consumable_model_id: z.number().int().optional().nullable(),
  manufacturer: z.string().optional().nullable(),
  consumable_name: z.string().optional().nullable(),
  consumable_type: z.string().optional().nullable(),
  model_manufacturer: z.string().optional().nullable()
}).strict();

export const v_consumable_modelUpdateManyMutationInputSchema: z.ZodType<Prisma.v_consumable_modelUpdateManyMutationInput> = z.object({
  compatibility_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  consumable_model_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  manufacturer: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  consumable_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  consumable_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  model_manufacturer: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const v_consumable_modelUncheckedUpdateManyInputSchema: z.ZodType<Prisma.v_consumable_modelUncheckedUpdateManyInput> = z.object({
  compatibility_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  consumable_model_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  manufacturer: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  consumable_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  consumable_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  model_manufacturer: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const v_deptCreateInputSchema: z.ZodType<Prisma.v_deptCreateInput> = z.object({
  dept_id: z.bigint().optional(),
  dept_1_id: z.string().optional(),
  dept_1: z.string().optional(),
  dept_2_id: z.string().optional().nullable(),
  dept_2: z.string().optional().nullable(),
  dept_3_id: z.string().optional().nullable(),
  dept_3: z.string().optional().nullable()
}).strict();

export const v_deptUncheckedCreateInputSchema: z.ZodType<Prisma.v_deptUncheckedCreateInput> = z.object({
  dept_id: z.bigint().optional(),
  dept_1_id: z.string().optional(),
  dept_1: z.string().optional(),
  dept_2_id: z.string().optional().nullable(),
  dept_2: z.string().optional().nullable(),
  dept_3_id: z.string().optional().nullable(),
  dept_3: z.string().optional().nullable()
}).strict();

export const v_deptUpdateInputSchema: z.ZodType<Prisma.v_deptUpdateInput> = z.object({
  dept_id: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  dept_1_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dept_1: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dept_2_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dept_2: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dept_3_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dept_3: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const v_deptUncheckedUpdateInputSchema: z.ZodType<Prisma.v_deptUncheckedUpdateInput> = z.object({
  dept_id: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  dept_1_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dept_1: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dept_2_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dept_2: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dept_3_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dept_3: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const v_deptCreateManyInputSchema: z.ZodType<Prisma.v_deptCreateManyInput> = z.object({
  dept_id: z.bigint().optional(),
  dept_1_id: z.string().optional(),
  dept_1: z.string().optional(),
  dept_2_id: z.string().optional().nullable(),
  dept_2: z.string().optional().nullable(),
  dept_3_id: z.string().optional().nullable(),
  dept_3: z.string().optional().nullable()
}).strict();

export const v_deptUpdateManyMutationInputSchema: z.ZodType<Prisma.v_deptUpdateManyMutationInput> = z.object({
  dept_id: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  dept_1_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dept_1: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dept_2_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dept_2: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dept_3_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dept_3: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const v_deptUncheckedUpdateManyInputSchema: z.ZodType<Prisma.v_deptUncheckedUpdateManyInput> = z.object({
  dept_id: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  dept_1_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dept_1: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dept_2_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dept_2: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dept_3_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dept_3: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const v_device_driverCreateInputSchema: z.ZodType<Prisma.v_device_driverCreateInput> = z.object({
  device_driver_id: z.number().int().optional(),
  device_model_id: z.number().int(),
  driver_manufacturer: z.string().optional().nullable(),
  printer_language: z.string().optional().nullable(),
  install_file_address: z.string().optional().nullable(),
  model_manufacturer: z.string().optional().nullable(),
  model_name: z.string().optional().nullable(),
  color_support: z.number().int().optional().nullable()
}).strict();

export const v_device_driverUncheckedCreateInputSchema: z.ZodType<Prisma.v_device_driverUncheckedCreateInput> = z.object({
  device_driver_id: z.number().int().optional(),
  device_model_id: z.number().int(),
  driver_manufacturer: z.string().optional().nullable(),
  printer_language: z.string().optional().nullable(),
  install_file_address: z.string().optional().nullable(),
  model_manufacturer: z.string().optional().nullable(),
  model_name: z.string().optional().nullable(),
  color_support: z.number().int().optional().nullable()
}).strict();

export const v_device_driverUpdateInputSchema: z.ZodType<Prisma.v_device_driverUpdateInput> = z.object({
  device_driver_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  device_model_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  driver_manufacturer: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  printer_language: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  install_file_address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  model_manufacturer: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  model_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color_support: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const v_device_driverUncheckedUpdateInputSchema: z.ZodType<Prisma.v_device_driverUncheckedUpdateInput> = z.object({
  device_driver_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  device_model_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  driver_manufacturer: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  printer_language: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  install_file_address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  model_manufacturer: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  model_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color_support: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const v_device_driverCreateManyInputSchema: z.ZodType<Prisma.v_device_driverCreateManyInput> = z.object({
  device_driver_id: z.number().int().optional(),
  device_model_id: z.number().int(),
  driver_manufacturer: z.string().optional().nullable(),
  printer_language: z.string().optional().nullable(),
  install_file_address: z.string().optional().nullable(),
  model_manufacturer: z.string().optional().nullable(),
  model_name: z.string().optional().nullable(),
  color_support: z.number().int().optional().nullable()
}).strict();

export const v_device_driverUpdateManyMutationInputSchema: z.ZodType<Prisma.v_device_driverUpdateManyMutationInput> = z.object({
  device_driver_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  device_model_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  driver_manufacturer: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  printer_language: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  install_file_address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  model_manufacturer: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  model_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color_support: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const v_device_driverUncheckedUpdateManyInputSchema: z.ZodType<Prisma.v_device_driverUncheckedUpdateManyInput> = z.object({
  device_driver_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  device_model_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  driver_manufacturer: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  printer_language: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  install_file_address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  model_manufacturer: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  model_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color_support: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const v_userCreateInputSchema: z.ZodType<Prisma.v_userCreateInput> = z.object({
  user_id: z.number().int().optional(),
  user_name: z.string(),
  login_id: z.string(),
  mobile_num: z.string().optional().nullable(),
  office_num: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  modified_at: z.coerce.date().optional().nullable(),
  created_at: z.coerce.date().optional(),
  is_active: z.number().int().optional(),
  permission: z.lazy(() => v_user_permissionSchema).optional(),
  dept_id: z.number().int(),
  approval_role_id: z.number().int().optional().nullable(),
  position_id: z.number().int(),
  dept_name: z.string().optional().nullable(),
  parent_dept_id: z.number().int().optional().nullable()
}).strict();

export const v_userUncheckedCreateInputSchema: z.ZodType<Prisma.v_userUncheckedCreateInput> = z.object({
  user_id: z.number().int().optional(),
  user_name: z.string(),
  login_id: z.string(),
  mobile_num: z.string().optional().nullable(),
  office_num: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  modified_at: z.coerce.date().optional().nullable(),
  created_at: z.coerce.date().optional(),
  is_active: z.number().int().optional(),
  permission: z.lazy(() => v_user_permissionSchema).optional(),
  dept_id: z.number().int(),
  approval_role_id: z.number().int().optional().nullable(),
  position_id: z.number().int(),
  dept_name: z.string().optional().nullable(),
  parent_dept_id: z.number().int().optional().nullable()
}).strict();

export const v_userUpdateInputSchema: z.ZodType<Prisma.v_userUpdateInput> = z.object({
  user_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  user_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  login_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mobile_num: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  office_num: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  modified_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  is_active: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  permission: z.union([ z.lazy(() => v_user_permissionSchema),z.lazy(() => Enumv_user_permissionFieldUpdateOperationsInputSchema) ]).optional(),
  dept_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  approval_role_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  position_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  dept_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  parent_dept_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const v_userUncheckedUpdateInputSchema: z.ZodType<Prisma.v_userUncheckedUpdateInput> = z.object({
  user_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  user_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  login_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mobile_num: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  office_num: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  modified_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  is_active: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  permission: z.union([ z.lazy(() => v_user_permissionSchema),z.lazy(() => Enumv_user_permissionFieldUpdateOperationsInputSchema) ]).optional(),
  dept_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  approval_role_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  position_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  dept_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  parent_dept_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const v_userCreateManyInputSchema: z.ZodType<Prisma.v_userCreateManyInput> = z.object({
  user_id: z.number().int().optional(),
  user_name: z.string(),
  login_id: z.string(),
  mobile_num: z.string().optional().nullable(),
  office_num: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  modified_at: z.coerce.date().optional().nullable(),
  created_at: z.coerce.date().optional(),
  is_active: z.number().int().optional(),
  permission: z.lazy(() => v_user_permissionSchema).optional(),
  dept_id: z.number().int(),
  approval_role_id: z.number().int().optional().nullable(),
  position_id: z.number().int(),
  dept_name: z.string().optional().nullable(),
  parent_dept_id: z.number().int().optional().nullable()
}).strict();

export const v_userUpdateManyMutationInputSchema: z.ZodType<Prisma.v_userUpdateManyMutationInput> = z.object({
  user_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  user_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  login_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mobile_num: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  office_num: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  modified_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  is_active: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  permission: z.union([ z.lazy(() => v_user_permissionSchema),z.lazy(() => Enumv_user_permissionFieldUpdateOperationsInputSchema) ]).optional(),
  dept_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  approval_role_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  position_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  dept_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  parent_dept_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const v_userUncheckedUpdateManyInputSchema: z.ZodType<Prisma.v_userUncheckedUpdateManyInput> = z.object({
  user_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  user_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  login_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mobile_num: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  office_num: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  modified_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  is_active: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  permission: z.union([ z.lazy(() => v_user_permissionSchema),z.lazy(() => Enumv_user_permissionFieldUpdateOperationsInputSchema) ]).optional(),
  dept_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  approval_role_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  position_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  dept_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  parent_dept_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const v_warehouseCreateInputSchema: z.ZodType<Prisma.v_warehouseCreateInput> = z.object({
  warehouse_id: z.number().int().optional(),
  warehouse_name: z.string(),
  mgmt_dept_id: z.number().int(),
  mgmt_dept_name: z.string().optional().nullable(),
  mgmt_parent_dept_id: z.number().int().optional().nullable()
}).strict();

export const v_warehouseUncheckedCreateInputSchema: z.ZodType<Prisma.v_warehouseUncheckedCreateInput> = z.object({
  warehouse_id: z.number().int().optional(),
  warehouse_name: z.string(),
  mgmt_dept_id: z.number().int(),
  mgmt_dept_name: z.string().optional().nullable(),
  mgmt_parent_dept_id: z.number().int().optional().nullable()
}).strict();

export const v_warehouseUpdateInputSchema: z.ZodType<Prisma.v_warehouseUpdateInput> = z.object({
  warehouse_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  warehouse_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mgmt_dept_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mgmt_dept_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mgmt_parent_dept_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const v_warehouseUncheckedUpdateInputSchema: z.ZodType<Prisma.v_warehouseUncheckedUpdateInput> = z.object({
  warehouse_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  warehouse_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mgmt_dept_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mgmt_dept_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mgmt_parent_dept_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const v_warehouseCreateManyInputSchema: z.ZodType<Prisma.v_warehouseCreateManyInput> = z.object({
  warehouse_id: z.number().int().optional(),
  warehouse_name: z.string(),
  mgmt_dept_id: z.number().int(),
  mgmt_dept_name: z.string().optional().nullable(),
  mgmt_parent_dept_id: z.number().int().optional().nullable()
}).strict();

export const v_warehouseUpdateManyMutationInputSchema: z.ZodType<Prisma.v_warehouseUpdateManyMutationInput> = z.object({
  warehouse_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  warehouse_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mgmt_dept_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mgmt_dept_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mgmt_parent_dept_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const v_warehouseUncheckedUpdateManyInputSchema: z.ZodType<Prisma.v_warehouseUncheckedUpdateManyInput> = z.object({
  warehouse_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  warehouse_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mgmt_dept_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mgmt_dept_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mgmt_parent_dept_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const v_deviceCreateInputSchema: z.ZodType<Prisma.v_deviceCreateInput> = z.object({
  device_id: z.number().int().optional(),
  device_model_id: z.number().int(),
  owner_dept_id: z.number().int(),
  mgmt_dept_id: z.number().int(),
  serial: z.string(),
  regi_date: z.coerce.date(),
  mac: z.string(),
  last_inspection_log_id: z.number().int().optional().nullable(),
  last_location_log_id: z.number().int().optional().nullable(),
  status_id: z.number().int().optional(),
  model_name: z.string().optional().nullable(),
  manufacturer: z.string().optional().nullable(),
  owner_dept_name: z.string().optional().nullable(),
  mgmt_dept_name: z.string().optional().nullable(),
  location_id: z.number().int().optional().nullable(),
  warehouse_id: z.number().int().optional().nullable(),
  warehouse_name: z.string().optional().nullable(),
  client_branch_id: z.number().int().optional().nullable(),
  client_branch_name: z.string().optional().nullable(),
  status_name: z.string().optional().nullable(),
  has_fax: z.bigint().optional().nullable(),
  has_desk: z.bigint().optional().nullable(),
  has_shelf: z.bigint().optional().nullable()
}).strict();

export const v_deviceUncheckedCreateInputSchema: z.ZodType<Prisma.v_deviceUncheckedCreateInput> = z.object({
  device_id: z.number().int().optional(),
  device_model_id: z.number().int(),
  owner_dept_id: z.number().int(),
  mgmt_dept_id: z.number().int(),
  serial: z.string(),
  regi_date: z.coerce.date(),
  mac: z.string(),
  last_inspection_log_id: z.number().int().optional().nullable(),
  last_location_log_id: z.number().int().optional().nullable(),
  status_id: z.number().int().optional(),
  model_name: z.string().optional().nullable(),
  manufacturer: z.string().optional().nullable(),
  owner_dept_name: z.string().optional().nullable(),
  mgmt_dept_name: z.string().optional().nullable(),
  location_id: z.number().int().optional().nullable(),
  warehouse_id: z.number().int().optional().nullable(),
  warehouse_name: z.string().optional().nullable(),
  client_branch_id: z.number().int().optional().nullable(),
  client_branch_name: z.string().optional().nullable(),
  status_name: z.string().optional().nullable(),
  has_fax: z.bigint().optional().nullable(),
  has_desk: z.bigint().optional().nullable(),
  has_shelf: z.bigint().optional().nullable()
}).strict();

export const v_deviceUpdateInputSchema: z.ZodType<Prisma.v_deviceUpdateInput> = z.object({
  device_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  device_model_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  owner_dept_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mgmt_dept_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  serial: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  regi_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mac: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  last_inspection_log_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  last_location_log_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  model_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  manufacturer: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  owner_dept_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mgmt_dept_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  warehouse_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  warehouse_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  client_branch_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  client_branch_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  has_fax: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  has_desk: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  has_shelf: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const v_deviceUncheckedUpdateInputSchema: z.ZodType<Prisma.v_deviceUncheckedUpdateInput> = z.object({
  device_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  device_model_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  owner_dept_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mgmt_dept_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  serial: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  regi_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mac: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  last_inspection_log_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  last_location_log_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  model_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  manufacturer: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  owner_dept_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mgmt_dept_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  warehouse_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  warehouse_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  client_branch_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  client_branch_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  has_fax: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  has_desk: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  has_shelf: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const v_deviceCreateManyInputSchema: z.ZodType<Prisma.v_deviceCreateManyInput> = z.object({
  device_id: z.number().int().optional(),
  device_model_id: z.number().int(),
  owner_dept_id: z.number().int(),
  mgmt_dept_id: z.number().int(),
  serial: z.string(),
  regi_date: z.coerce.date(),
  mac: z.string(),
  last_inspection_log_id: z.number().int().optional().nullable(),
  last_location_log_id: z.number().int().optional().nullable(),
  status_id: z.number().int().optional(),
  model_name: z.string().optional().nullable(),
  manufacturer: z.string().optional().nullable(),
  owner_dept_name: z.string().optional().nullable(),
  mgmt_dept_name: z.string().optional().nullable(),
  location_id: z.number().int().optional().nullable(),
  warehouse_id: z.number().int().optional().nullable(),
  warehouse_name: z.string().optional().nullable(),
  client_branch_id: z.number().int().optional().nullable(),
  client_branch_name: z.string().optional().nullable(),
  status_name: z.string().optional().nullable(),
  has_fax: z.bigint().optional().nullable(),
  has_desk: z.bigint().optional().nullable(),
  has_shelf: z.bigint().optional().nullable()
}).strict();

export const v_deviceUpdateManyMutationInputSchema: z.ZodType<Prisma.v_deviceUpdateManyMutationInput> = z.object({
  device_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  device_model_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  owner_dept_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mgmt_dept_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  serial: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  regi_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mac: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  last_inspection_log_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  last_location_log_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  model_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  manufacturer: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  owner_dept_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mgmt_dept_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  warehouse_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  warehouse_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  client_branch_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  client_branch_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  has_fax: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  has_desk: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  has_shelf: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const v_deviceUncheckedUpdateManyInputSchema: z.ZodType<Prisma.v_deviceUncheckedUpdateManyInput> = z.object({
  device_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  device_model_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  owner_dept_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mgmt_dept_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  serial: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  regi_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mac: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  last_inspection_log_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  last_location_log_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  model_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  manufacturer: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  owner_dept_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mgmt_dept_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  warehouse_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  warehouse_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  client_branch_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  client_branch_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  has_fax: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  has_desk: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  has_shelf: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const IntNullableFilterSchema: z.ZodType<Prisma.IntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z.object({
  sort: z.lazy(() => SortOrderSchema),
  nulls: z.lazy(() => NullsOrderSchema).optional()
}).strict();

export const approval_roleCountOrderByAggregateInputSchema: z.ZodType<Prisma.approval_roleCountOrderByAggregateInput> = z.object({
  role_id: z.lazy(() => SortOrderSchema).optional(),
  role_name: z.lazy(() => SortOrderSchema).optional(),
  upper_role_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const approval_roleAvgOrderByAggregateInputSchema: z.ZodType<Prisma.approval_roleAvgOrderByAggregateInput> = z.object({
  role_id: z.lazy(() => SortOrderSchema).optional(),
  upper_role_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const approval_roleMaxOrderByAggregateInputSchema: z.ZodType<Prisma.approval_roleMaxOrderByAggregateInput> = z.object({
  role_id: z.lazy(() => SortOrderSchema).optional(),
  role_name: z.lazy(() => SortOrderSchema).optional(),
  upper_role_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const approval_roleMinOrderByAggregateInputSchema: z.ZodType<Prisma.approval_roleMinOrderByAggregateInput> = z.object({
  role_id: z.lazy(() => SortOrderSchema).optional(),
  role_name: z.lazy(() => SortOrderSchema).optional(),
  upper_role_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const approval_roleSumOrderByAggregateInputSchema: z.ZodType<Prisma.approval_roleSumOrderByAggregateInput> = z.object({
  role_id: z.lazy(() => SortOrderSchema).optional(),
  upper_role_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const IntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.IntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const DateTimeNullableFilterSchema: z.ZodType<Prisma.DateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const callCountOrderByAggregateInputSchema: z.ZodType<Prisma.callCountOrderByAggregateInput> = z.object({
  call_id: z.lazy(() => SortOrderSchema).optional(),
  call_type_id: z.lazy(() => SortOrderSchema).optional(),
  client_branch_id: z.lazy(() => SortOrderSchema).optional(),
  requester_name: z.lazy(() => SortOrderSchema).optional(),
  requester_num: z.lazy(() => SortOrderSchema).optional(),
  requester_black_consumer: z.lazy(() => SortOrderSchema).optional(),
  device_id: z.lazy(() => SortOrderSchema).optional(),
  detail: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  received_at: z.lazy(() => SortOrderSchema).optional(),
  receiver_id: z.lazy(() => SortOrderSchema).optional(),
  transferred_at: z.lazy(() => SortOrderSchema).optional(),
  transferred_dept_id: z.lazy(() => SortOrderSchema).optional(),
  assigner_id: z.lazy(() => SortOrderSchema).optional(),
  completed_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const callAvgOrderByAggregateInputSchema: z.ZodType<Prisma.callAvgOrderByAggregateInput> = z.object({
  call_id: z.lazy(() => SortOrderSchema).optional(),
  call_type_id: z.lazy(() => SortOrderSchema).optional(),
  client_branch_id: z.lazy(() => SortOrderSchema).optional(),
  requester_black_consumer: z.lazy(() => SortOrderSchema).optional(),
  device_id: z.lazy(() => SortOrderSchema).optional(),
  receiver_id: z.lazy(() => SortOrderSchema).optional(),
  transferred_dept_id: z.lazy(() => SortOrderSchema).optional(),
  assigner_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const callMaxOrderByAggregateInputSchema: z.ZodType<Prisma.callMaxOrderByAggregateInput> = z.object({
  call_id: z.lazy(() => SortOrderSchema).optional(),
  call_type_id: z.lazy(() => SortOrderSchema).optional(),
  client_branch_id: z.lazy(() => SortOrderSchema).optional(),
  requester_name: z.lazy(() => SortOrderSchema).optional(),
  requester_num: z.lazy(() => SortOrderSchema).optional(),
  requester_black_consumer: z.lazy(() => SortOrderSchema).optional(),
  device_id: z.lazy(() => SortOrderSchema).optional(),
  detail: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  received_at: z.lazy(() => SortOrderSchema).optional(),
  receiver_id: z.lazy(() => SortOrderSchema).optional(),
  transferred_at: z.lazy(() => SortOrderSchema).optional(),
  transferred_dept_id: z.lazy(() => SortOrderSchema).optional(),
  assigner_id: z.lazy(() => SortOrderSchema).optional(),
  completed_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const callMinOrderByAggregateInputSchema: z.ZodType<Prisma.callMinOrderByAggregateInput> = z.object({
  call_id: z.lazy(() => SortOrderSchema).optional(),
  call_type_id: z.lazy(() => SortOrderSchema).optional(),
  client_branch_id: z.lazy(() => SortOrderSchema).optional(),
  requester_name: z.lazy(() => SortOrderSchema).optional(),
  requester_num: z.lazy(() => SortOrderSchema).optional(),
  requester_black_consumer: z.lazy(() => SortOrderSchema).optional(),
  device_id: z.lazy(() => SortOrderSchema).optional(),
  detail: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  received_at: z.lazy(() => SortOrderSchema).optional(),
  receiver_id: z.lazy(() => SortOrderSchema).optional(),
  transferred_at: z.lazy(() => SortOrderSchema).optional(),
  transferred_dept_id: z.lazy(() => SortOrderSchema).optional(),
  assigner_id: z.lazy(() => SortOrderSchema).optional(),
  completed_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const callSumOrderByAggregateInputSchema: z.ZodType<Prisma.callSumOrderByAggregateInput> = z.object({
  call_id: z.lazy(() => SortOrderSchema).optional(),
  call_type_id: z.lazy(() => SortOrderSchema).optional(),
  client_branch_id: z.lazy(() => SortOrderSchema).optional(),
  requester_black_consumer: z.lazy(() => SortOrderSchema).optional(),
  device_id: z.lazy(() => SortOrderSchema).optional(),
  receiver_id: z.lazy(() => SortOrderSchema).optional(),
  transferred_dept_id: z.lazy(() => SortOrderSchema).optional(),
  assigner_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const DateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const call_typeCountOrderByAggregateInputSchema: z.ZodType<Prisma.call_typeCountOrderByAggregateInput> = z.object({
  call_type_id: z.lazy(() => SortOrderSchema).optional(),
  call_type_name: z.lazy(() => SortOrderSchema).optional(),
  parent_call_type_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const call_typeAvgOrderByAggregateInputSchema: z.ZodType<Prisma.call_typeAvgOrderByAggregateInput> = z.object({
  call_type_id: z.lazy(() => SortOrderSchema).optional(),
  parent_call_type_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const call_typeMaxOrderByAggregateInputSchema: z.ZodType<Prisma.call_typeMaxOrderByAggregateInput> = z.object({
  call_type_id: z.lazy(() => SortOrderSchema).optional(),
  call_type_name: z.lazy(() => SortOrderSchema).optional(),
  parent_call_type_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const call_typeMinOrderByAggregateInputSchema: z.ZodType<Prisma.call_typeMinOrderByAggregateInput> = z.object({
  call_type_id: z.lazy(() => SortOrderSchema).optional(),
  call_type_name: z.lazy(() => SortOrderSchema).optional(),
  parent_call_type_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const call_typeSumOrderByAggregateInputSchema: z.ZodType<Prisma.call_typeSumOrderByAggregateInput> = z.object({
  call_type_id: z.lazy(() => SortOrderSchema).optional(),
  parent_call_type_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const clientCountOrderByAggregateInputSchema: z.ZodType<Prisma.clientCountOrderByAggregateInput> = z.object({
  client_id: z.lazy(() => SortOrderSchema).optional(),
  parent_client_id: z.lazy(() => SortOrderSchema).optional(),
  default_client_branch_rate_id: z.lazy(() => SortOrderSchema).optional(),
  client_name: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const clientAvgOrderByAggregateInputSchema: z.ZodType<Prisma.clientAvgOrderByAggregateInput> = z.object({
  client_id: z.lazy(() => SortOrderSchema).optional(),
  parent_client_id: z.lazy(() => SortOrderSchema).optional(),
  default_client_branch_rate_id: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const clientMaxOrderByAggregateInputSchema: z.ZodType<Prisma.clientMaxOrderByAggregateInput> = z.object({
  client_id: z.lazy(() => SortOrderSchema).optional(),
  parent_client_id: z.lazy(() => SortOrderSchema).optional(),
  default_client_branch_rate_id: z.lazy(() => SortOrderSchema).optional(),
  client_name: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const clientMinOrderByAggregateInputSchema: z.ZodType<Prisma.clientMinOrderByAggregateInput> = z.object({
  client_id: z.lazy(() => SortOrderSchema).optional(),
  parent_client_id: z.lazy(() => SortOrderSchema).optional(),
  default_client_branch_rate_id: z.lazy(() => SortOrderSchema).optional(),
  client_name: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const clientSumOrderByAggregateInputSchema: z.ZodType<Prisma.clientSumOrderByAggregateInput> = z.object({
  client_id: z.lazy(() => SortOrderSchema).optional(),
  parent_client_id: z.lazy(() => SortOrderSchema).optional(),
  default_client_branch_rate_id: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const client_branchCountOrderByAggregateInputSchema: z.ZodType<Prisma.client_branchCountOrderByAggregateInput> = z.object({
  client_branch_id: z.lazy(() => SortOrderSchema).optional(),
  sigungu_id: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_id: z.lazy(() => SortOrderSchema).optional(),
  client_id: z.lazy(() => SortOrderSchema).optional(),
  client_branch_name: z.lazy(() => SortOrderSchema).optional(),
  client_branch_rate_id: z.lazy(() => SortOrderSchema).optional(),
  branch_mgr_name: z.lazy(() => SortOrderSchema).optional(),
  branch_mgr_mobile_num: z.lazy(() => SortOrderSchema).optional(),
  branch_mgr_office_num: z.lazy(() => SortOrderSchema).optional(),
  branch_mgr_email: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  remote_support: z.lazy(() => SortOrderSchema).optional(),
  push_alert: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const client_branchAvgOrderByAggregateInputSchema: z.ZodType<Prisma.client_branchAvgOrderByAggregateInput> = z.object({
  client_branch_id: z.lazy(() => SortOrderSchema).optional(),
  sigungu_id: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_id: z.lazy(() => SortOrderSchema).optional(),
  client_id: z.lazy(() => SortOrderSchema).optional(),
  client_branch_rate_id: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  remote_support: z.lazy(() => SortOrderSchema).optional(),
  push_alert: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const client_branchMaxOrderByAggregateInputSchema: z.ZodType<Prisma.client_branchMaxOrderByAggregateInput> = z.object({
  client_branch_id: z.lazy(() => SortOrderSchema).optional(),
  sigungu_id: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_id: z.lazy(() => SortOrderSchema).optional(),
  client_id: z.lazy(() => SortOrderSchema).optional(),
  client_branch_name: z.lazy(() => SortOrderSchema).optional(),
  client_branch_rate_id: z.lazy(() => SortOrderSchema).optional(),
  branch_mgr_name: z.lazy(() => SortOrderSchema).optional(),
  branch_mgr_mobile_num: z.lazy(() => SortOrderSchema).optional(),
  branch_mgr_office_num: z.lazy(() => SortOrderSchema).optional(),
  branch_mgr_email: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  remote_support: z.lazy(() => SortOrderSchema).optional(),
  push_alert: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const client_branchMinOrderByAggregateInputSchema: z.ZodType<Prisma.client_branchMinOrderByAggregateInput> = z.object({
  client_branch_id: z.lazy(() => SortOrderSchema).optional(),
  sigungu_id: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_id: z.lazy(() => SortOrderSchema).optional(),
  client_id: z.lazy(() => SortOrderSchema).optional(),
  client_branch_name: z.lazy(() => SortOrderSchema).optional(),
  client_branch_rate_id: z.lazy(() => SortOrderSchema).optional(),
  branch_mgr_name: z.lazy(() => SortOrderSchema).optional(),
  branch_mgr_mobile_num: z.lazy(() => SortOrderSchema).optional(),
  branch_mgr_office_num: z.lazy(() => SortOrderSchema).optional(),
  branch_mgr_email: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  remote_support: z.lazy(() => SortOrderSchema).optional(),
  push_alert: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const client_branchSumOrderByAggregateInputSchema: z.ZodType<Prisma.client_branchSumOrderByAggregateInput> = z.object({
  client_branch_id: z.lazy(() => SortOrderSchema).optional(),
  sigungu_id: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_id: z.lazy(() => SortOrderSchema).optional(),
  client_id: z.lazy(() => SortOrderSchema).optional(),
  client_branch_rate_id: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  remote_support: z.lazy(() => SortOrderSchema).optional(),
  push_alert: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const client_rateCountOrderByAggregateInputSchema: z.ZodType<Prisma.client_rateCountOrderByAggregateInput> = z.object({
  client_rate_id: z.lazy(() => SortOrderSchema).optional(),
  rate_type: z.lazy(() => SortOrderSchema).optional(),
  rate_detail: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const client_rateAvgOrderByAggregateInputSchema: z.ZodType<Prisma.client_rateAvgOrderByAggregateInput> = z.object({
  client_rate_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const client_rateMaxOrderByAggregateInputSchema: z.ZodType<Prisma.client_rateMaxOrderByAggregateInput> = z.object({
  client_rate_id: z.lazy(() => SortOrderSchema).optional(),
  rate_type: z.lazy(() => SortOrderSchema).optional(),
  rate_detail: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const client_rateMinOrderByAggregateInputSchema: z.ZodType<Prisma.client_rateMinOrderByAggregateInput> = z.object({
  client_rate_id: z.lazy(() => SortOrderSchema).optional(),
  rate_type: z.lazy(() => SortOrderSchema).optional(),
  rate_detail: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const client_rateSumOrderByAggregateInputSchema: z.ZodType<Prisma.client_rateSumOrderByAggregateInput> = z.object({
  client_rate_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const consumable_modelCountOrderByAggregateInputSchema: z.ZodType<Prisma.consumable_modelCountOrderByAggregateInput> = z.object({
  consumable_model_id: z.lazy(() => SortOrderSchema).optional(),
  manufacturer: z.lazy(() => SortOrderSchema).optional(),
  consumable_name: z.lazy(() => SortOrderSchema).optional(),
  consumable_type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const consumable_modelAvgOrderByAggregateInputSchema: z.ZodType<Prisma.consumable_modelAvgOrderByAggregateInput> = z.object({
  consumable_model_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const consumable_modelMaxOrderByAggregateInputSchema: z.ZodType<Prisma.consumable_modelMaxOrderByAggregateInput> = z.object({
  consumable_model_id: z.lazy(() => SortOrderSchema).optional(),
  manufacturer: z.lazy(() => SortOrderSchema).optional(),
  consumable_name: z.lazy(() => SortOrderSchema).optional(),
  consumable_type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const consumable_modelMinOrderByAggregateInputSchema: z.ZodType<Prisma.consumable_modelMinOrderByAggregateInput> = z.object({
  consumable_model_id: z.lazy(() => SortOrderSchema).optional(),
  manufacturer: z.lazy(() => SortOrderSchema).optional(),
  consumable_name: z.lazy(() => SortOrderSchema).optional(),
  consumable_type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const consumable_modelSumOrderByAggregateInputSchema: z.ZodType<Prisma.consumable_modelSumOrderByAggregateInput> = z.object({
  consumable_model_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const deptCountOrderByAggregateInputSchema: z.ZodType<Prisma.deptCountOrderByAggregateInput> = z.object({
  dept_id: z.lazy(() => SortOrderSchema).optional(),
  parent_dept_id: z.lazy(() => SortOrderSchema).optional(),
  dept_name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const deptAvgOrderByAggregateInputSchema: z.ZodType<Prisma.deptAvgOrderByAggregateInput> = z.object({
  dept_id: z.lazy(() => SortOrderSchema).optional(),
  parent_dept_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const deptMaxOrderByAggregateInputSchema: z.ZodType<Prisma.deptMaxOrderByAggregateInput> = z.object({
  dept_id: z.lazy(() => SortOrderSchema).optional(),
  parent_dept_id: z.lazy(() => SortOrderSchema).optional(),
  dept_name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const deptMinOrderByAggregateInputSchema: z.ZodType<Prisma.deptMinOrderByAggregateInput> = z.object({
  dept_id: z.lazy(() => SortOrderSchema).optional(),
  parent_dept_id: z.lazy(() => SortOrderSchema).optional(),
  dept_name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const deptSumOrderByAggregateInputSchema: z.ZodType<Prisma.deptSumOrderByAggregateInput> = z.object({
  dept_id: z.lazy(() => SortOrderSchema).optional(),
  parent_dept_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const deviceCountOrderByAggregateInputSchema: z.ZodType<Prisma.deviceCountOrderByAggregateInput> = z.object({
  device_id: z.lazy(() => SortOrderSchema).optional(),
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  owner_dept_id: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_id: z.lazy(() => SortOrderSchema).optional(),
  serial: z.lazy(() => SortOrderSchema).optional(),
  regi_date: z.lazy(() => SortOrderSchema).optional(),
  mac: z.lazy(() => SortOrderSchema).optional(),
  last_inspection_log_id: z.lazy(() => SortOrderSchema).optional(),
  last_location_log_id: z.lazy(() => SortOrderSchema).optional(),
  status_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const deviceAvgOrderByAggregateInputSchema: z.ZodType<Prisma.deviceAvgOrderByAggregateInput> = z.object({
  device_id: z.lazy(() => SortOrderSchema).optional(),
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  owner_dept_id: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_id: z.lazy(() => SortOrderSchema).optional(),
  last_inspection_log_id: z.lazy(() => SortOrderSchema).optional(),
  last_location_log_id: z.lazy(() => SortOrderSchema).optional(),
  status_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const deviceMaxOrderByAggregateInputSchema: z.ZodType<Prisma.deviceMaxOrderByAggregateInput> = z.object({
  device_id: z.lazy(() => SortOrderSchema).optional(),
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  owner_dept_id: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_id: z.lazy(() => SortOrderSchema).optional(),
  serial: z.lazy(() => SortOrderSchema).optional(),
  regi_date: z.lazy(() => SortOrderSchema).optional(),
  mac: z.lazy(() => SortOrderSchema).optional(),
  last_inspection_log_id: z.lazy(() => SortOrderSchema).optional(),
  last_location_log_id: z.lazy(() => SortOrderSchema).optional(),
  status_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const deviceMinOrderByAggregateInputSchema: z.ZodType<Prisma.deviceMinOrderByAggregateInput> = z.object({
  device_id: z.lazy(() => SortOrderSchema).optional(),
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  owner_dept_id: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_id: z.lazy(() => SortOrderSchema).optional(),
  serial: z.lazy(() => SortOrderSchema).optional(),
  regi_date: z.lazy(() => SortOrderSchema).optional(),
  mac: z.lazy(() => SortOrderSchema).optional(),
  last_inspection_log_id: z.lazy(() => SortOrderSchema).optional(),
  last_location_log_id: z.lazy(() => SortOrderSchema).optional(),
  status_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const deviceSumOrderByAggregateInputSchema: z.ZodType<Prisma.deviceSumOrderByAggregateInput> = z.object({
  device_id: z.lazy(() => SortOrderSchema).optional(),
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  owner_dept_id: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_id: z.lazy(() => SortOrderSchema).optional(),
  last_inspection_log_id: z.lazy(() => SortOrderSchema).optional(),
  last_location_log_id: z.lazy(() => SortOrderSchema).optional(),
  status_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const device_approvalCountOrderByAggregateInputSchema: z.ZodType<Prisma.device_approvalCountOrderByAggregateInput> = z.object({
  approval_id: z.lazy(() => SortOrderSchema).optional(),
  approval_type_id: z.lazy(() => SortOrderSchema).optional(),
  sub_approval_id: z.lazy(() => SortOrderSchema).optional(),
  requester_id: z.lazy(() => SortOrderSchema).optional(),
  request_at: z.lazy(() => SortOrderSchema).optional(),
  approver_role_id: z.lazy(() => SortOrderSchema).optional(),
  origin_location_id: z.lazy(() => SortOrderSchema).optional(),
  destination_location_id: z.lazy(() => SortOrderSchema).optional(),
  approver_id: z.lazy(() => SortOrderSchema).optional(),
  approve_at: z.lazy(() => SortOrderSchema).optional(),
  is_approved: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const device_approvalAvgOrderByAggregateInputSchema: z.ZodType<Prisma.device_approvalAvgOrderByAggregateInput> = z.object({
  approval_id: z.lazy(() => SortOrderSchema).optional(),
  approval_type_id: z.lazy(() => SortOrderSchema).optional(),
  sub_approval_id: z.lazy(() => SortOrderSchema).optional(),
  requester_id: z.lazy(() => SortOrderSchema).optional(),
  approver_role_id: z.lazy(() => SortOrderSchema).optional(),
  origin_location_id: z.lazy(() => SortOrderSchema).optional(),
  destination_location_id: z.lazy(() => SortOrderSchema).optional(),
  approver_id: z.lazy(() => SortOrderSchema).optional(),
  is_approved: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const device_approvalMaxOrderByAggregateInputSchema: z.ZodType<Prisma.device_approvalMaxOrderByAggregateInput> = z.object({
  approval_id: z.lazy(() => SortOrderSchema).optional(),
  approval_type_id: z.lazy(() => SortOrderSchema).optional(),
  sub_approval_id: z.lazy(() => SortOrderSchema).optional(),
  requester_id: z.lazy(() => SortOrderSchema).optional(),
  request_at: z.lazy(() => SortOrderSchema).optional(),
  approver_role_id: z.lazy(() => SortOrderSchema).optional(),
  origin_location_id: z.lazy(() => SortOrderSchema).optional(),
  destination_location_id: z.lazy(() => SortOrderSchema).optional(),
  approver_id: z.lazy(() => SortOrderSchema).optional(),
  approve_at: z.lazy(() => SortOrderSchema).optional(),
  is_approved: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const device_approvalMinOrderByAggregateInputSchema: z.ZodType<Prisma.device_approvalMinOrderByAggregateInput> = z.object({
  approval_id: z.lazy(() => SortOrderSchema).optional(),
  approval_type_id: z.lazy(() => SortOrderSchema).optional(),
  sub_approval_id: z.lazy(() => SortOrderSchema).optional(),
  requester_id: z.lazy(() => SortOrderSchema).optional(),
  request_at: z.lazy(() => SortOrderSchema).optional(),
  approver_role_id: z.lazy(() => SortOrderSchema).optional(),
  origin_location_id: z.lazy(() => SortOrderSchema).optional(),
  destination_location_id: z.lazy(() => SortOrderSchema).optional(),
  approver_id: z.lazy(() => SortOrderSchema).optional(),
  approve_at: z.lazy(() => SortOrderSchema).optional(),
  is_approved: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const device_approvalSumOrderByAggregateInputSchema: z.ZodType<Prisma.device_approvalSumOrderByAggregateInput> = z.object({
  approval_id: z.lazy(() => SortOrderSchema).optional(),
  approval_type_id: z.lazy(() => SortOrderSchema).optional(),
  sub_approval_id: z.lazy(() => SortOrderSchema).optional(),
  requester_id: z.lazy(() => SortOrderSchema).optional(),
  approver_role_id: z.lazy(() => SortOrderSchema).optional(),
  origin_location_id: z.lazy(() => SortOrderSchema).optional(),
  destination_location_id: z.lazy(() => SortOrderSchema).optional(),
  approver_id: z.lazy(() => SortOrderSchema).optional(),
  is_approved: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const device_approval_typeCountOrderByAggregateInputSchema: z.ZodType<Prisma.device_approval_typeCountOrderByAggregateInput> = z.object({
  approval_type_id: z.lazy(() => SortOrderSchema).optional(),
  approval_type_name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const device_approval_typeAvgOrderByAggregateInputSchema: z.ZodType<Prisma.device_approval_typeAvgOrderByAggregateInput> = z.object({
  approval_type_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const device_approval_typeMaxOrderByAggregateInputSchema: z.ZodType<Prisma.device_approval_typeMaxOrderByAggregateInput> = z.object({
  approval_type_id: z.lazy(() => SortOrderSchema).optional(),
  approval_type_name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const device_approval_typeMinOrderByAggregateInputSchema: z.ZodType<Prisma.device_approval_typeMinOrderByAggregateInput> = z.object({
  approval_type_id: z.lazy(() => SortOrderSchema).optional(),
  approval_type_name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const device_approval_typeSumOrderByAggregateInputSchema: z.ZodType<Prisma.device_approval_typeSumOrderByAggregateInput> = z.object({
  approval_type_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const device_consumable_compatibilityDevice_model_idConsumable_model_idCompoundUniqueInputSchema: z.ZodType<Prisma.device_consumable_compatibilityDevice_model_idConsumable_model_idCompoundUniqueInput> = z.object({
  device_model_id: z.number(),
  consumable_model_id: z.number()
}).strict();

export const device_consumable_compatibilityCountOrderByAggregateInputSchema: z.ZodType<Prisma.device_consumable_compatibilityCountOrderByAggregateInput> = z.object({
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  consumable_model_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const device_consumable_compatibilityAvgOrderByAggregateInputSchema: z.ZodType<Prisma.device_consumable_compatibilityAvgOrderByAggregateInput> = z.object({
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  consumable_model_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const device_consumable_compatibilityMaxOrderByAggregateInputSchema: z.ZodType<Prisma.device_consumable_compatibilityMaxOrderByAggregateInput> = z.object({
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  consumable_model_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const device_consumable_compatibilityMinOrderByAggregateInputSchema: z.ZodType<Prisma.device_consumable_compatibilityMinOrderByAggregateInput> = z.object({
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  consumable_model_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const device_consumable_compatibilitySumOrderByAggregateInputSchema: z.ZodType<Prisma.device_consumable_compatibilitySumOrderByAggregateInput> = z.object({
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  consumable_model_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const device_driverCountOrderByAggregateInputSchema: z.ZodType<Prisma.device_driverCountOrderByAggregateInput> = z.object({
  device_driver_id: z.lazy(() => SortOrderSchema).optional(),
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  manufacturer: z.lazy(() => SortOrderSchema).optional(),
  printer_language: z.lazy(() => SortOrderSchema).optional(),
  install_file_address: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const device_driverAvgOrderByAggregateInputSchema: z.ZodType<Prisma.device_driverAvgOrderByAggregateInput> = z.object({
  device_driver_id: z.lazy(() => SortOrderSchema).optional(),
  device_model_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const device_driverMaxOrderByAggregateInputSchema: z.ZodType<Prisma.device_driverMaxOrderByAggregateInput> = z.object({
  device_driver_id: z.lazy(() => SortOrderSchema).optional(),
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  manufacturer: z.lazy(() => SortOrderSchema).optional(),
  printer_language: z.lazy(() => SortOrderSchema).optional(),
  install_file_address: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const device_driverMinOrderByAggregateInputSchema: z.ZodType<Prisma.device_driverMinOrderByAggregateInput> = z.object({
  device_driver_id: z.lazy(() => SortOrderSchema).optional(),
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  manufacturer: z.lazy(() => SortOrderSchema).optional(),
  printer_language: z.lazy(() => SortOrderSchema).optional(),
  install_file_address: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const device_driverSumOrderByAggregateInputSchema: z.ZodType<Prisma.device_driverSumOrderByAggregateInput> = z.object({
  device_driver_id: z.lazy(() => SortOrderSchema).optional(),
  device_model_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Enumdevice_inspection_log_statusNullableFilterSchema: z.ZodType<Prisma.Enumdevice_inspection_log_statusNullableFilter> = z.object({
  equals: z.lazy(() => device_inspection_log_statusSchema).optional().nullable(),
  in: z.lazy(() => device_inspection_log_statusSchema).array().optional().nullable(),
  notIn: z.lazy(() => device_inspection_log_statusSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => device_inspection_log_statusSchema),z.lazy(() => NestedEnumdevice_inspection_log_statusNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const device_inspection_logCountOrderByAggregateInputSchema: z.ZodType<Prisma.device_inspection_logCountOrderByAggregateInput> = z.object({
  device_inspection_log_id: z.lazy(() => SortOrderSchema).optional(),
  device_id: z.lazy(() => SortOrderSchema).optional(),
  inspector_id: z.lazy(() => SortOrderSchema).optional(),
  inspection_date: z.lazy(() => SortOrderSchema).optional(),
  visit_type: z.lazy(() => SortOrderSchema).optional(),
  call_id: z.lazy(() => SortOrderSchema).optional(),
  FL: z.lazy(() => SortOrderSchema).optional(),
  FS: z.lazy(() => SortOrderSchema).optional(),
  BL: z.lazy(() => SortOrderSchema).optional(),
  BS: z.lazy(() => SortOrderSchema).optional(),
  toner_count_YE: z.lazy(() => SortOrderSchema).optional(),
  toner_count_MA: z.lazy(() => SortOrderSchema).optional(),
  toner_count_CY: z.lazy(() => SortOrderSchema).optional(),
  toner_count_BK: z.lazy(() => SortOrderSchema).optional(),
  toner_stock_YE: z.lazy(() => SortOrderSchema).optional(),
  toner_stock_MA: z.lazy(() => SortOrderSchema).optional(),
  toner_stock_CY: z.lazy(() => SortOrderSchema).optional(),
  toner_stock_BK: z.lazy(() => SortOrderSchema).optional(),
  toner_deliver_YE: z.lazy(() => SortOrderSchema).optional(),
  toner_deliver_CY: z.lazy(() => SortOrderSchema).optional(),
  toner_deliver_MA: z.lazy(() => SortOrderSchema).optional(),
  toner_deliver_BK: z.lazy(() => SortOrderSchema).optional(),
  drum_count_YE: z.lazy(() => SortOrderSchema).optional(),
  drum_count_MA: z.lazy(() => SortOrderSchema).optional(),
  drum_count_CY: z.lazy(() => SortOrderSchema).optional(),
  drum_count_BK: z.lazy(() => SortOrderSchema).optional(),
  drum_replacement_detail: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const device_inspection_logAvgOrderByAggregateInputSchema: z.ZodType<Prisma.device_inspection_logAvgOrderByAggregateInput> = z.object({
  device_inspection_log_id: z.lazy(() => SortOrderSchema).optional(),
  device_id: z.lazy(() => SortOrderSchema).optional(),
  inspector_id: z.lazy(() => SortOrderSchema).optional(),
  call_id: z.lazy(() => SortOrderSchema).optional(),
  FL: z.lazy(() => SortOrderSchema).optional(),
  FS: z.lazy(() => SortOrderSchema).optional(),
  BL: z.lazy(() => SortOrderSchema).optional(),
  BS: z.lazy(() => SortOrderSchema).optional(),
  toner_count_YE: z.lazy(() => SortOrderSchema).optional(),
  toner_count_MA: z.lazy(() => SortOrderSchema).optional(),
  toner_count_CY: z.lazy(() => SortOrderSchema).optional(),
  toner_count_BK: z.lazy(() => SortOrderSchema).optional(),
  toner_stock_YE: z.lazy(() => SortOrderSchema).optional(),
  toner_stock_MA: z.lazy(() => SortOrderSchema).optional(),
  toner_stock_CY: z.lazy(() => SortOrderSchema).optional(),
  toner_stock_BK: z.lazy(() => SortOrderSchema).optional(),
  toner_deliver_YE: z.lazy(() => SortOrderSchema).optional(),
  toner_deliver_CY: z.lazy(() => SortOrderSchema).optional(),
  toner_deliver_MA: z.lazy(() => SortOrderSchema).optional(),
  toner_deliver_BK: z.lazy(() => SortOrderSchema).optional(),
  drum_count_YE: z.lazy(() => SortOrderSchema).optional(),
  drum_count_MA: z.lazy(() => SortOrderSchema).optional(),
  drum_count_CY: z.lazy(() => SortOrderSchema).optional(),
  drum_count_BK: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const device_inspection_logMaxOrderByAggregateInputSchema: z.ZodType<Prisma.device_inspection_logMaxOrderByAggregateInput> = z.object({
  device_inspection_log_id: z.lazy(() => SortOrderSchema).optional(),
  device_id: z.lazy(() => SortOrderSchema).optional(),
  inspector_id: z.lazy(() => SortOrderSchema).optional(),
  inspection_date: z.lazy(() => SortOrderSchema).optional(),
  visit_type: z.lazy(() => SortOrderSchema).optional(),
  call_id: z.lazy(() => SortOrderSchema).optional(),
  FL: z.lazy(() => SortOrderSchema).optional(),
  FS: z.lazy(() => SortOrderSchema).optional(),
  BL: z.lazy(() => SortOrderSchema).optional(),
  BS: z.lazy(() => SortOrderSchema).optional(),
  toner_count_YE: z.lazy(() => SortOrderSchema).optional(),
  toner_count_MA: z.lazy(() => SortOrderSchema).optional(),
  toner_count_CY: z.lazy(() => SortOrderSchema).optional(),
  toner_count_BK: z.lazy(() => SortOrderSchema).optional(),
  toner_stock_YE: z.lazy(() => SortOrderSchema).optional(),
  toner_stock_MA: z.lazy(() => SortOrderSchema).optional(),
  toner_stock_CY: z.lazy(() => SortOrderSchema).optional(),
  toner_stock_BK: z.lazy(() => SortOrderSchema).optional(),
  toner_deliver_YE: z.lazy(() => SortOrderSchema).optional(),
  toner_deliver_CY: z.lazy(() => SortOrderSchema).optional(),
  toner_deliver_MA: z.lazy(() => SortOrderSchema).optional(),
  toner_deliver_BK: z.lazy(() => SortOrderSchema).optional(),
  drum_count_YE: z.lazy(() => SortOrderSchema).optional(),
  drum_count_MA: z.lazy(() => SortOrderSchema).optional(),
  drum_count_CY: z.lazy(() => SortOrderSchema).optional(),
  drum_count_BK: z.lazy(() => SortOrderSchema).optional(),
  drum_replacement_detail: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const device_inspection_logMinOrderByAggregateInputSchema: z.ZodType<Prisma.device_inspection_logMinOrderByAggregateInput> = z.object({
  device_inspection_log_id: z.lazy(() => SortOrderSchema).optional(),
  device_id: z.lazy(() => SortOrderSchema).optional(),
  inspector_id: z.lazy(() => SortOrderSchema).optional(),
  inspection_date: z.lazy(() => SortOrderSchema).optional(),
  visit_type: z.lazy(() => SortOrderSchema).optional(),
  call_id: z.lazy(() => SortOrderSchema).optional(),
  FL: z.lazy(() => SortOrderSchema).optional(),
  FS: z.lazy(() => SortOrderSchema).optional(),
  BL: z.lazy(() => SortOrderSchema).optional(),
  BS: z.lazy(() => SortOrderSchema).optional(),
  toner_count_YE: z.lazy(() => SortOrderSchema).optional(),
  toner_count_MA: z.lazy(() => SortOrderSchema).optional(),
  toner_count_CY: z.lazy(() => SortOrderSchema).optional(),
  toner_count_BK: z.lazy(() => SortOrderSchema).optional(),
  toner_stock_YE: z.lazy(() => SortOrderSchema).optional(),
  toner_stock_MA: z.lazy(() => SortOrderSchema).optional(),
  toner_stock_CY: z.lazy(() => SortOrderSchema).optional(),
  toner_stock_BK: z.lazy(() => SortOrderSchema).optional(),
  toner_deliver_YE: z.lazy(() => SortOrderSchema).optional(),
  toner_deliver_CY: z.lazy(() => SortOrderSchema).optional(),
  toner_deliver_MA: z.lazy(() => SortOrderSchema).optional(),
  toner_deliver_BK: z.lazy(() => SortOrderSchema).optional(),
  drum_count_YE: z.lazy(() => SortOrderSchema).optional(),
  drum_count_MA: z.lazy(() => SortOrderSchema).optional(),
  drum_count_CY: z.lazy(() => SortOrderSchema).optional(),
  drum_count_BK: z.lazy(() => SortOrderSchema).optional(),
  drum_replacement_detail: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const device_inspection_logSumOrderByAggregateInputSchema: z.ZodType<Prisma.device_inspection_logSumOrderByAggregateInput> = z.object({
  device_inspection_log_id: z.lazy(() => SortOrderSchema).optional(),
  device_id: z.lazy(() => SortOrderSchema).optional(),
  inspector_id: z.lazy(() => SortOrderSchema).optional(),
  call_id: z.lazy(() => SortOrderSchema).optional(),
  FL: z.lazy(() => SortOrderSchema).optional(),
  FS: z.lazy(() => SortOrderSchema).optional(),
  BL: z.lazy(() => SortOrderSchema).optional(),
  BS: z.lazy(() => SortOrderSchema).optional(),
  toner_count_YE: z.lazy(() => SortOrderSchema).optional(),
  toner_count_MA: z.lazy(() => SortOrderSchema).optional(),
  toner_count_CY: z.lazy(() => SortOrderSchema).optional(),
  toner_count_BK: z.lazy(() => SortOrderSchema).optional(),
  toner_stock_YE: z.lazy(() => SortOrderSchema).optional(),
  toner_stock_MA: z.lazy(() => SortOrderSchema).optional(),
  toner_stock_CY: z.lazy(() => SortOrderSchema).optional(),
  toner_stock_BK: z.lazy(() => SortOrderSchema).optional(),
  toner_deliver_YE: z.lazy(() => SortOrderSchema).optional(),
  toner_deliver_CY: z.lazy(() => SortOrderSchema).optional(),
  toner_deliver_MA: z.lazy(() => SortOrderSchema).optional(),
  toner_deliver_BK: z.lazy(() => SortOrderSchema).optional(),
  drum_count_YE: z.lazy(() => SortOrderSchema).optional(),
  drum_count_MA: z.lazy(() => SortOrderSchema).optional(),
  drum_count_CY: z.lazy(() => SortOrderSchema).optional(),
  drum_count_BK: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Enumdevice_inspection_log_statusNullableWithAggregatesFilterSchema: z.ZodType<Prisma.Enumdevice_inspection_log_statusNullableWithAggregatesFilter> = z.object({
  equals: z.lazy(() => device_inspection_log_statusSchema).optional().nullable(),
  in: z.lazy(() => device_inspection_log_statusSchema).array().optional().nullable(),
  notIn: z.lazy(() => device_inspection_log_statusSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => device_inspection_log_statusSchema),z.lazy(() => NestedEnumdevice_inspection_log_statusNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumdevice_inspection_log_statusNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumdevice_inspection_log_statusNullableFilterSchema).optional()
}).strict();

export const device_install_infoCountOrderByAggregateInputSchema: z.ZodType<Prisma.device_install_infoCountOrderByAggregateInput> = z.object({
  device_id: z.lazy(() => SortOrderSchema).optional(),
  installer_id: z.lazy(() => SortOrderSchema).optional(),
  mgmt_num: z.lazy(() => SortOrderSchema).optional(),
  ip_address: z.lazy(() => SortOrderSchema).optional(),
  subnet_mask: z.lazy(() => SortOrderSchema).optional(),
  gateway: z.lazy(() => SortOrderSchema).optional(),
  dns1: z.lazy(() => SortOrderSchema).optional(),
  dns2: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const device_install_infoAvgOrderByAggregateInputSchema: z.ZodType<Prisma.device_install_infoAvgOrderByAggregateInput> = z.object({
  device_id: z.lazy(() => SortOrderSchema).optional(),
  installer_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const device_install_infoMaxOrderByAggregateInputSchema: z.ZodType<Prisma.device_install_infoMaxOrderByAggregateInput> = z.object({
  device_id: z.lazy(() => SortOrderSchema).optional(),
  installer_id: z.lazy(() => SortOrderSchema).optional(),
  mgmt_num: z.lazy(() => SortOrderSchema).optional(),
  ip_address: z.lazy(() => SortOrderSchema).optional(),
  subnet_mask: z.lazy(() => SortOrderSchema).optional(),
  gateway: z.lazy(() => SortOrderSchema).optional(),
  dns1: z.lazy(() => SortOrderSchema).optional(),
  dns2: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const device_install_infoMinOrderByAggregateInputSchema: z.ZodType<Prisma.device_install_infoMinOrderByAggregateInput> = z.object({
  device_id: z.lazy(() => SortOrderSchema).optional(),
  installer_id: z.lazy(() => SortOrderSchema).optional(),
  mgmt_num: z.lazy(() => SortOrderSchema).optional(),
  ip_address: z.lazy(() => SortOrderSchema).optional(),
  subnet_mask: z.lazy(() => SortOrderSchema).optional(),
  gateway: z.lazy(() => SortOrderSchema).optional(),
  dns1: z.lazy(() => SortOrderSchema).optional(),
  dns2: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const device_install_infoSumOrderByAggregateInputSchema: z.ZodType<Prisma.device_install_infoSumOrderByAggregateInput> = z.object({
  device_id: z.lazy(() => SortOrderSchema).optional(),
  installer_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const device_location_logCountOrderByAggregateInputSchema: z.ZodType<Prisma.device_location_logCountOrderByAggregateInput> = z.object({
  device_location_log_id: z.lazy(() => SortOrderSchema).optional(),
  device_id: z.lazy(() => SortOrderSchema).optional(),
  location_date: z.lazy(() => SortOrderSchema).optional(),
  location_id: z.lazy(() => SortOrderSchema).optional(),
  location_detail: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const device_location_logAvgOrderByAggregateInputSchema: z.ZodType<Prisma.device_location_logAvgOrderByAggregateInput> = z.object({
  device_location_log_id: z.lazy(() => SortOrderSchema).optional(),
  device_id: z.lazy(() => SortOrderSchema).optional(),
  location_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const device_location_logMaxOrderByAggregateInputSchema: z.ZodType<Prisma.device_location_logMaxOrderByAggregateInput> = z.object({
  device_location_log_id: z.lazy(() => SortOrderSchema).optional(),
  device_id: z.lazy(() => SortOrderSchema).optional(),
  location_date: z.lazy(() => SortOrderSchema).optional(),
  location_id: z.lazy(() => SortOrderSchema).optional(),
  location_detail: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const device_location_logMinOrderByAggregateInputSchema: z.ZodType<Prisma.device_location_logMinOrderByAggregateInput> = z.object({
  device_location_log_id: z.lazy(() => SortOrderSchema).optional(),
  device_id: z.lazy(() => SortOrderSchema).optional(),
  location_date: z.lazy(() => SortOrderSchema).optional(),
  location_id: z.lazy(() => SortOrderSchema).optional(),
  location_detail: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const device_location_logSumOrderByAggregateInputSchema: z.ZodType<Prisma.device_location_logSumOrderByAggregateInput> = z.object({
  device_location_log_id: z.lazy(() => SortOrderSchema).optional(),
  device_id: z.lazy(() => SortOrderSchema).optional(),
  location_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const device_modelCountOrderByAggregateInputSchema: z.ZodType<Prisma.device_modelCountOrderByAggregateInput> = z.object({
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  model_name: z.lazy(() => SortOrderSchema).optional(),
  manufacturer: z.lazy(() => SortOrderSchema).optional(),
  color_support: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const device_modelAvgOrderByAggregateInputSchema: z.ZodType<Prisma.device_modelAvgOrderByAggregateInput> = z.object({
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  color_support: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const device_modelMaxOrderByAggregateInputSchema: z.ZodType<Prisma.device_modelMaxOrderByAggregateInput> = z.object({
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  model_name: z.lazy(() => SortOrderSchema).optional(),
  manufacturer: z.lazy(() => SortOrderSchema).optional(),
  color_support: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const device_modelMinOrderByAggregateInputSchema: z.ZodType<Prisma.device_modelMinOrderByAggregateInput> = z.object({
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  model_name: z.lazy(() => SortOrderSchema).optional(),
  manufacturer: z.lazy(() => SortOrderSchema).optional(),
  color_support: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const device_modelSumOrderByAggregateInputSchema: z.ZodType<Prisma.device_modelSumOrderByAggregateInput> = z.object({
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  color_support: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Enumdevice_option_location_typeFilterSchema: z.ZodType<Prisma.Enumdevice_option_location_typeFilter> = z.object({
  equals: z.lazy(() => device_option_location_typeSchema).optional(),
  in: z.lazy(() => device_option_location_typeSchema).array().optional(),
  notIn: z.lazy(() => device_option_location_typeSchema).array().optional(),
  not: z.union([ z.lazy(() => device_option_location_typeSchema),z.lazy(() => NestedEnumdevice_option_location_typeFilterSchema) ]).optional(),
}).strict();

export const device_optionCountOrderByAggregateInputSchema: z.ZodType<Prisma.device_optionCountOrderByAggregateInput> = z.object({
  device_option_id: z.lazy(() => SortOrderSchema).optional(),
  option_model_id: z.lazy(() => SortOrderSchema).optional(),
  serial: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  location_type: z.lazy(() => SortOrderSchema).optional(),
  location_warehouse_id: z.lazy(() => SortOrderSchema).optional(),
  location_device_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const device_optionAvgOrderByAggregateInputSchema: z.ZodType<Prisma.device_optionAvgOrderByAggregateInput> = z.object({
  device_option_id: z.lazy(() => SortOrderSchema).optional(),
  option_model_id: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  location_warehouse_id: z.lazy(() => SortOrderSchema).optional(),
  location_device_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const device_optionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.device_optionMaxOrderByAggregateInput> = z.object({
  device_option_id: z.lazy(() => SortOrderSchema).optional(),
  option_model_id: z.lazy(() => SortOrderSchema).optional(),
  serial: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  location_type: z.lazy(() => SortOrderSchema).optional(),
  location_warehouse_id: z.lazy(() => SortOrderSchema).optional(),
  location_device_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const device_optionMinOrderByAggregateInputSchema: z.ZodType<Prisma.device_optionMinOrderByAggregateInput> = z.object({
  device_option_id: z.lazy(() => SortOrderSchema).optional(),
  option_model_id: z.lazy(() => SortOrderSchema).optional(),
  serial: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  location_type: z.lazy(() => SortOrderSchema).optional(),
  location_warehouse_id: z.lazy(() => SortOrderSchema).optional(),
  location_device_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const device_optionSumOrderByAggregateInputSchema: z.ZodType<Prisma.device_optionSumOrderByAggregateInput> = z.object({
  device_option_id: z.lazy(() => SortOrderSchema).optional(),
  option_model_id: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  location_warehouse_id: z.lazy(() => SortOrderSchema).optional(),
  location_device_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Enumdevice_option_location_typeWithAggregatesFilterSchema: z.ZodType<Prisma.Enumdevice_option_location_typeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => device_option_location_typeSchema).optional(),
  in: z.lazy(() => device_option_location_typeSchema).array().optional(),
  notIn: z.lazy(() => device_option_location_typeSchema).array().optional(),
  not: z.union([ z.lazy(() => device_option_location_typeSchema),z.lazy(() => NestedEnumdevice_option_location_typeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumdevice_option_location_typeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumdevice_option_location_typeFilterSchema).optional()
}).strict();

export const device_option_compatibilityDevice_model_idOption_model_idCompoundUniqueInputSchema: z.ZodType<Prisma.device_option_compatibilityDevice_model_idOption_model_idCompoundUniqueInput> = z.object({
  device_model_id: z.number(),
  option_model_id: z.number()
}).strict();

export const device_option_compatibilityCountOrderByAggregateInputSchema: z.ZodType<Prisma.device_option_compatibilityCountOrderByAggregateInput> = z.object({
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  option_model_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const device_option_compatibilityAvgOrderByAggregateInputSchema: z.ZodType<Prisma.device_option_compatibilityAvgOrderByAggregateInput> = z.object({
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  option_model_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const device_option_compatibilityMaxOrderByAggregateInputSchema: z.ZodType<Prisma.device_option_compatibilityMaxOrderByAggregateInput> = z.object({
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  option_model_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const device_option_compatibilityMinOrderByAggregateInputSchema: z.ZodType<Prisma.device_option_compatibilityMinOrderByAggregateInput> = z.object({
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  option_model_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const device_option_compatibilitySumOrderByAggregateInputSchema: z.ZodType<Prisma.device_option_compatibilitySumOrderByAggregateInput> = z.object({
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  option_model_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const device_statusCountOrderByAggregateInputSchema: z.ZodType<Prisma.device_statusCountOrderByAggregateInput> = z.object({
  status_id: z.lazy(() => SortOrderSchema).optional(),
  status_name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const device_statusAvgOrderByAggregateInputSchema: z.ZodType<Prisma.device_statusAvgOrderByAggregateInput> = z.object({
  status_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const device_statusMaxOrderByAggregateInputSchema: z.ZodType<Prisma.device_statusMaxOrderByAggregateInput> = z.object({
  status_id: z.lazy(() => SortOrderSchema).optional(),
  status_name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const device_statusMinOrderByAggregateInputSchema: z.ZodType<Prisma.device_statusMinOrderByAggregateInput> = z.object({
  status_id: z.lazy(() => SortOrderSchema).optional(),
  status_name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const device_statusSumOrderByAggregateInputSchema: z.ZodType<Prisma.device_statusSumOrderByAggregateInput> = z.object({
  status_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const inspection_approvalCountOrderByAggregateInputSchema: z.ZodType<Prisma.inspection_approvalCountOrderByAggregateInput> = z.object({
  approval_id: z.lazy(() => SortOrderSchema).optional(),
  requester_id: z.lazy(() => SortOrderSchema).optional(),
  request_at: z.lazy(() => SortOrderSchema).optional(),
  approver_role_id: z.lazy(() => SortOrderSchema).optional(),
  device_inspection_log_id: z.lazy(() => SortOrderSchema).optional(),
  approver_id: z.lazy(() => SortOrderSchema).optional(),
  approved_at: z.lazy(() => SortOrderSchema).optional(),
  is_approved: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const inspection_approvalAvgOrderByAggregateInputSchema: z.ZodType<Prisma.inspection_approvalAvgOrderByAggregateInput> = z.object({
  approval_id: z.lazy(() => SortOrderSchema).optional(),
  requester_id: z.lazy(() => SortOrderSchema).optional(),
  approver_role_id: z.lazy(() => SortOrderSchema).optional(),
  device_inspection_log_id: z.lazy(() => SortOrderSchema).optional(),
  approver_id: z.lazy(() => SortOrderSchema).optional(),
  is_approved: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const inspection_approvalMaxOrderByAggregateInputSchema: z.ZodType<Prisma.inspection_approvalMaxOrderByAggregateInput> = z.object({
  approval_id: z.lazy(() => SortOrderSchema).optional(),
  requester_id: z.lazy(() => SortOrderSchema).optional(),
  request_at: z.lazy(() => SortOrderSchema).optional(),
  approver_role_id: z.lazy(() => SortOrderSchema).optional(),
  device_inspection_log_id: z.lazy(() => SortOrderSchema).optional(),
  approver_id: z.lazy(() => SortOrderSchema).optional(),
  approved_at: z.lazy(() => SortOrderSchema).optional(),
  is_approved: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const inspection_approvalMinOrderByAggregateInputSchema: z.ZodType<Prisma.inspection_approvalMinOrderByAggregateInput> = z.object({
  approval_id: z.lazy(() => SortOrderSchema).optional(),
  requester_id: z.lazy(() => SortOrderSchema).optional(),
  request_at: z.lazy(() => SortOrderSchema).optional(),
  approver_role_id: z.lazy(() => SortOrderSchema).optional(),
  device_inspection_log_id: z.lazy(() => SortOrderSchema).optional(),
  approver_id: z.lazy(() => SortOrderSchema).optional(),
  approved_at: z.lazy(() => SortOrderSchema).optional(),
  is_approved: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const inspection_approvalSumOrderByAggregateInputSchema: z.ZodType<Prisma.inspection_approvalSumOrderByAggregateInput> = z.object({
  approval_id: z.lazy(() => SortOrderSchema).optional(),
  requester_id: z.lazy(() => SortOrderSchema).optional(),
  approver_role_id: z.lazy(() => SortOrderSchema).optional(),
  device_inspection_log_id: z.lazy(() => SortOrderSchema).optional(),
  approver_id: z.lazy(() => SortOrderSchema).optional(),
  is_approved: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Enumlocation_location_typeFilterSchema: z.ZodType<Prisma.Enumlocation_location_typeFilter> = z.object({
  equals: z.lazy(() => location_location_typeSchema).optional(),
  in: z.lazy(() => location_location_typeSchema).array().optional(),
  notIn: z.lazy(() => location_location_typeSchema).array().optional(),
  not: z.union([ z.lazy(() => location_location_typeSchema),z.lazy(() => NestedEnumlocation_location_typeFilterSchema) ]).optional(),
}).strict();

export const locationCountOrderByAggregateInputSchema: z.ZodType<Prisma.locationCountOrderByAggregateInput> = z.object({
  location_id: z.lazy(() => SortOrderSchema).optional(),
  location_type: z.lazy(() => SortOrderSchema).optional(),
  warehouse_id: z.lazy(() => SortOrderSchema).optional(),
  client_branch_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const locationAvgOrderByAggregateInputSchema: z.ZodType<Prisma.locationAvgOrderByAggregateInput> = z.object({
  location_id: z.lazy(() => SortOrderSchema).optional(),
  warehouse_id: z.lazy(() => SortOrderSchema).optional(),
  client_branch_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const locationMaxOrderByAggregateInputSchema: z.ZodType<Prisma.locationMaxOrderByAggregateInput> = z.object({
  location_id: z.lazy(() => SortOrderSchema).optional(),
  location_type: z.lazy(() => SortOrderSchema).optional(),
  warehouse_id: z.lazy(() => SortOrderSchema).optional(),
  client_branch_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const locationMinOrderByAggregateInputSchema: z.ZodType<Prisma.locationMinOrderByAggregateInput> = z.object({
  location_id: z.lazy(() => SortOrderSchema).optional(),
  location_type: z.lazy(() => SortOrderSchema).optional(),
  warehouse_id: z.lazy(() => SortOrderSchema).optional(),
  client_branch_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const locationSumOrderByAggregateInputSchema: z.ZodType<Prisma.locationSumOrderByAggregateInput> = z.object({
  location_id: z.lazy(() => SortOrderSchema).optional(),
  warehouse_id: z.lazy(() => SortOrderSchema).optional(),
  client_branch_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Enumlocation_location_typeWithAggregatesFilterSchema: z.ZodType<Prisma.Enumlocation_location_typeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => location_location_typeSchema).optional(),
  in: z.lazy(() => location_location_typeSchema).array().optional(),
  notIn: z.lazy(() => location_location_typeSchema).array().optional(),
  not: z.union([ z.lazy(() => location_location_typeSchema),z.lazy(() => NestedEnumlocation_location_typeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumlocation_location_typeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumlocation_location_typeFilterSchema).optional()
}).strict();

export const option_modelCountOrderByAggregateInputSchema: z.ZodType<Prisma.option_modelCountOrderByAggregateInput> = z.object({
  option_model_id: z.lazy(() => SortOrderSchema).optional(),
  option_model_name: z.lazy(() => SortOrderSchema).optional(),
  option_type: z.lazy(() => SortOrderSchema).optional(),
  manufacturer: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const option_modelAvgOrderByAggregateInputSchema: z.ZodType<Prisma.option_modelAvgOrderByAggregateInput> = z.object({
  option_model_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const option_modelMaxOrderByAggregateInputSchema: z.ZodType<Prisma.option_modelMaxOrderByAggregateInput> = z.object({
  option_model_id: z.lazy(() => SortOrderSchema).optional(),
  option_model_name: z.lazy(() => SortOrderSchema).optional(),
  option_type: z.lazy(() => SortOrderSchema).optional(),
  manufacturer: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const option_modelMinOrderByAggregateInputSchema: z.ZodType<Prisma.option_modelMinOrderByAggregateInput> = z.object({
  option_model_id: z.lazy(() => SortOrderSchema).optional(),
  option_model_name: z.lazy(() => SortOrderSchema).optional(),
  option_type: z.lazy(() => SortOrderSchema).optional(),
  manufacturer: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const option_modelSumOrderByAggregateInputSchema: z.ZodType<Prisma.option_modelSumOrderByAggregateInput> = z.object({
  option_model_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const sidoCountOrderByAggregateInputSchema: z.ZodType<Prisma.sidoCountOrderByAggregateInput> = z.object({
  sido_id: z.lazy(() => SortOrderSchema).optional(),
  sido_name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const sidoAvgOrderByAggregateInputSchema: z.ZodType<Prisma.sidoAvgOrderByAggregateInput> = z.object({
  sido_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const sidoMaxOrderByAggregateInputSchema: z.ZodType<Prisma.sidoMaxOrderByAggregateInput> = z.object({
  sido_id: z.lazy(() => SortOrderSchema).optional(),
  sido_name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const sidoMinOrderByAggregateInputSchema: z.ZodType<Prisma.sidoMinOrderByAggregateInput> = z.object({
  sido_id: z.lazy(() => SortOrderSchema).optional(),
  sido_name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const sidoSumOrderByAggregateInputSchema: z.ZodType<Prisma.sidoSumOrderByAggregateInput> = z.object({
  sido_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const sigunguCountOrderByAggregateInputSchema: z.ZodType<Prisma.sigunguCountOrderByAggregateInput> = z.object({
  sigungu_id: z.lazy(() => SortOrderSchema).optional(),
  sigungu_name: z.lazy(() => SortOrderSchema).optional(),
  sido_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const sigunguAvgOrderByAggregateInputSchema: z.ZodType<Prisma.sigunguAvgOrderByAggregateInput> = z.object({
  sigungu_id: z.lazy(() => SortOrderSchema).optional(),
  sido_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const sigunguMaxOrderByAggregateInputSchema: z.ZodType<Prisma.sigunguMaxOrderByAggregateInput> = z.object({
  sigungu_id: z.lazy(() => SortOrderSchema).optional(),
  sigungu_name: z.lazy(() => SortOrderSchema).optional(),
  sido_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const sigunguMinOrderByAggregateInputSchema: z.ZodType<Prisma.sigunguMinOrderByAggregateInput> = z.object({
  sigungu_id: z.lazy(() => SortOrderSchema).optional(),
  sigungu_name: z.lazy(() => SortOrderSchema).optional(),
  sido_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const sigunguSumOrderByAggregateInputSchema: z.ZodType<Prisma.sigunguSumOrderByAggregateInput> = z.object({
  sigungu_id: z.lazy(() => SortOrderSchema).optional(),
  sido_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Enumuser_permissionFilterSchema: z.ZodType<Prisma.Enumuser_permissionFilter> = z.object({
  equals: z.lazy(() => user_permissionSchema).optional(),
  in: z.lazy(() => user_permissionSchema).array().optional(),
  notIn: z.lazy(() => user_permissionSchema).array().optional(),
  not: z.union([ z.lazy(() => user_permissionSchema),z.lazy(() => NestedEnumuser_permissionFilterSchema) ]).optional(),
}).strict();

export const userCountOrderByAggregateInputSchema: z.ZodType<Prisma.userCountOrderByAggregateInput> = z.object({
  user_id: z.lazy(() => SortOrderSchema).optional(),
  user_name: z.lazy(() => SortOrderSchema).optional(),
  login_id: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  mobile_num: z.lazy(() => SortOrderSchema).optional(),
  office_num: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  modified_at: z.lazy(() => SortOrderSchema).optional(),
  dept_id: z.lazy(() => SortOrderSchema).optional(),
  approval_role_id: z.lazy(() => SortOrderSchema).optional(),
  position_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  permission: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const userAvgOrderByAggregateInputSchema: z.ZodType<Prisma.userAvgOrderByAggregateInput> = z.object({
  user_id: z.lazy(() => SortOrderSchema).optional(),
  dept_id: z.lazy(() => SortOrderSchema).optional(),
  approval_role_id: z.lazy(() => SortOrderSchema).optional(),
  position_id: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const userMaxOrderByAggregateInputSchema: z.ZodType<Prisma.userMaxOrderByAggregateInput> = z.object({
  user_id: z.lazy(() => SortOrderSchema).optional(),
  user_name: z.lazy(() => SortOrderSchema).optional(),
  login_id: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  mobile_num: z.lazy(() => SortOrderSchema).optional(),
  office_num: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  modified_at: z.lazy(() => SortOrderSchema).optional(),
  dept_id: z.lazy(() => SortOrderSchema).optional(),
  approval_role_id: z.lazy(() => SortOrderSchema).optional(),
  position_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  permission: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const userMinOrderByAggregateInputSchema: z.ZodType<Prisma.userMinOrderByAggregateInput> = z.object({
  user_id: z.lazy(() => SortOrderSchema).optional(),
  user_name: z.lazy(() => SortOrderSchema).optional(),
  login_id: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  mobile_num: z.lazy(() => SortOrderSchema).optional(),
  office_num: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  modified_at: z.lazy(() => SortOrderSchema).optional(),
  dept_id: z.lazy(() => SortOrderSchema).optional(),
  approval_role_id: z.lazy(() => SortOrderSchema).optional(),
  position_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  permission: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const userSumOrderByAggregateInputSchema: z.ZodType<Prisma.userSumOrderByAggregateInput> = z.object({
  user_id: z.lazy(() => SortOrderSchema).optional(),
  dept_id: z.lazy(() => SortOrderSchema).optional(),
  approval_role_id: z.lazy(() => SortOrderSchema).optional(),
  position_id: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Enumuser_permissionWithAggregatesFilterSchema: z.ZodType<Prisma.Enumuser_permissionWithAggregatesFilter> = z.object({
  equals: z.lazy(() => user_permissionSchema).optional(),
  in: z.lazy(() => user_permissionSchema).array().optional(),
  notIn: z.lazy(() => user_permissionSchema).array().optional(),
  not: z.union([ z.lazy(() => user_permissionSchema),z.lazy(() => NestedEnumuser_permissionWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumuser_permissionFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumuser_permissionFilterSchema).optional()
}).strict();

export const user_positionCountOrderByAggregateInputSchema: z.ZodType<Prisma.user_positionCountOrderByAggregateInput> = z.object({
  user_position_id: z.lazy(() => SortOrderSchema).optional(),
  position_name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const user_positionAvgOrderByAggregateInputSchema: z.ZodType<Prisma.user_positionAvgOrderByAggregateInput> = z.object({
  user_position_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const user_positionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.user_positionMaxOrderByAggregateInput> = z.object({
  user_position_id: z.lazy(() => SortOrderSchema).optional(),
  position_name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const user_positionMinOrderByAggregateInputSchema: z.ZodType<Prisma.user_positionMinOrderByAggregateInput> = z.object({
  user_position_id: z.lazy(() => SortOrderSchema).optional(),
  position_name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const user_positionSumOrderByAggregateInputSchema: z.ZodType<Prisma.user_positionSumOrderByAggregateInput> = z.object({
  user_position_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const user_role_assignmentRole_idApprover_idCompoundUniqueInputSchema: z.ZodType<Prisma.user_role_assignmentRole_idApprover_idCompoundUniqueInput> = z.object({
  role_id: z.number(),
  approver_id: z.number()
}).strict();

export const user_role_assignmentCountOrderByAggregateInputSchema: z.ZodType<Prisma.user_role_assignmentCountOrderByAggregateInput> = z.object({
  role_id: z.lazy(() => SortOrderSchema).optional(),
  approver_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const user_role_assignmentAvgOrderByAggregateInputSchema: z.ZodType<Prisma.user_role_assignmentAvgOrderByAggregateInput> = z.object({
  role_id: z.lazy(() => SortOrderSchema).optional(),
  approver_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const user_role_assignmentMaxOrderByAggregateInputSchema: z.ZodType<Prisma.user_role_assignmentMaxOrderByAggregateInput> = z.object({
  role_id: z.lazy(() => SortOrderSchema).optional(),
  approver_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const user_role_assignmentMinOrderByAggregateInputSchema: z.ZodType<Prisma.user_role_assignmentMinOrderByAggregateInput> = z.object({
  role_id: z.lazy(() => SortOrderSchema).optional(),
  approver_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const user_role_assignmentSumOrderByAggregateInputSchema: z.ZodType<Prisma.user_role_assignmentSumOrderByAggregateInput> = z.object({
  role_id: z.lazy(() => SortOrderSchema).optional(),
  approver_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const warehouseCountOrderByAggregateInputSchema: z.ZodType<Prisma.warehouseCountOrderByAggregateInput> = z.object({
  warehouse_id: z.lazy(() => SortOrderSchema).optional(),
  warehouse_name: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const warehouseAvgOrderByAggregateInputSchema: z.ZodType<Prisma.warehouseAvgOrderByAggregateInput> = z.object({
  warehouse_id: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const warehouseMaxOrderByAggregateInputSchema: z.ZodType<Prisma.warehouseMaxOrderByAggregateInput> = z.object({
  warehouse_id: z.lazy(() => SortOrderSchema).optional(),
  warehouse_name: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const warehouseMinOrderByAggregateInputSchema: z.ZodType<Prisma.warehouseMinOrderByAggregateInput> = z.object({
  warehouse_id: z.lazy(() => SortOrderSchema).optional(),
  warehouse_name: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const warehouseSumOrderByAggregateInputSchema: z.ZodType<Prisma.warehouseSumOrderByAggregateInput> = z.object({
  warehouse_id: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BigIntFilterSchema: z.ZodType<Prisma.BigIntFilter> = z.object({
  equals: z.bigint().optional(),
  in: z.bigint().array().optional(),
  notIn: z.bigint().array().optional(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([ z.bigint(),z.lazy(() => NestedBigIntFilterSchema) ]).optional(),
}).strict();

export const v_clientCountOrderByAggregateInputSchema: z.ZodType<Prisma.v_clientCountOrderByAggregateInput> = z.object({
  client_id: z.lazy(() => SortOrderSchema).optional(),
  client_name: z.lazy(() => SortOrderSchema).optional(),
  parent_client_id: z.lazy(() => SortOrderSchema).optional(),
  default_client_branch_rate_id: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  parent_client_name: z.lazy(() => SortOrderSchema).optional(),
  client_rate: z.lazy(() => SortOrderSchema).optional(),
  rate_detail: z.lazy(() => SortOrderSchema).optional(),
  branch_count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const v_clientAvgOrderByAggregateInputSchema: z.ZodType<Prisma.v_clientAvgOrderByAggregateInput> = z.object({
  client_id: z.lazy(() => SortOrderSchema).optional(),
  parent_client_id: z.lazy(() => SortOrderSchema).optional(),
  default_client_branch_rate_id: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  branch_count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const v_clientMaxOrderByAggregateInputSchema: z.ZodType<Prisma.v_clientMaxOrderByAggregateInput> = z.object({
  client_id: z.lazy(() => SortOrderSchema).optional(),
  client_name: z.lazy(() => SortOrderSchema).optional(),
  parent_client_id: z.lazy(() => SortOrderSchema).optional(),
  default_client_branch_rate_id: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  parent_client_name: z.lazy(() => SortOrderSchema).optional(),
  client_rate: z.lazy(() => SortOrderSchema).optional(),
  rate_detail: z.lazy(() => SortOrderSchema).optional(),
  branch_count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const v_clientMinOrderByAggregateInputSchema: z.ZodType<Prisma.v_clientMinOrderByAggregateInput> = z.object({
  client_id: z.lazy(() => SortOrderSchema).optional(),
  client_name: z.lazy(() => SortOrderSchema).optional(),
  parent_client_id: z.lazy(() => SortOrderSchema).optional(),
  default_client_branch_rate_id: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  parent_client_name: z.lazy(() => SortOrderSchema).optional(),
  client_rate: z.lazy(() => SortOrderSchema).optional(),
  rate_detail: z.lazy(() => SortOrderSchema).optional(),
  branch_count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const v_clientSumOrderByAggregateInputSchema: z.ZodType<Prisma.v_clientSumOrderByAggregateInput> = z.object({
  client_id: z.lazy(() => SortOrderSchema).optional(),
  parent_client_id: z.lazy(() => SortOrderSchema).optional(),
  default_client_branch_rate_id: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  branch_count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BigIntWithAggregatesFilterSchema: z.ZodType<Prisma.BigIntWithAggregatesFilter> = z.object({
  equals: z.bigint().optional(),
  in: z.bigint().array().optional(),
  notIn: z.bigint().array().optional(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([ z.bigint(),z.lazy(() => NestedBigIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedBigIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBigIntFilterSchema).optional(),
  _max: z.lazy(() => NestedBigIntFilterSchema).optional()
}).strict();

export const v_client_branchCountOrderByAggregateInputSchema: z.ZodType<Prisma.v_client_branchCountOrderByAggregateInput> = z.object({
  client_branch_id: z.lazy(() => SortOrderSchema).optional(),
  client_branch_name: z.lazy(() => SortOrderSchema).optional(),
  client_id: z.lazy(() => SortOrderSchema).optional(),
  sigungu_id: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_id: z.lazy(() => SortOrderSchema).optional(),
  client_branch_rate_id: z.lazy(() => SortOrderSchema).optional(),
  branch_mgr_name: z.lazy(() => SortOrderSchema).optional(),
  branch_mgr_mobile_num: z.lazy(() => SortOrderSchema).optional(),
  branch_mgr_office_num: z.lazy(() => SortOrderSchema).optional(),
  branch_mgr_email: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  remote_support: z.lazy(() => SortOrderSchema).optional(),
  push_alert: z.lazy(() => SortOrderSchema).optional(),
  client_name: z.lazy(() => SortOrderSchema).optional(),
  sigungu_name: z.lazy(() => SortOrderSchema).optional(),
  sido_name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const v_client_branchAvgOrderByAggregateInputSchema: z.ZodType<Prisma.v_client_branchAvgOrderByAggregateInput> = z.object({
  client_branch_id: z.lazy(() => SortOrderSchema).optional(),
  client_id: z.lazy(() => SortOrderSchema).optional(),
  sigungu_id: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_id: z.lazy(() => SortOrderSchema).optional(),
  client_branch_rate_id: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  remote_support: z.lazy(() => SortOrderSchema).optional(),
  push_alert: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const v_client_branchMaxOrderByAggregateInputSchema: z.ZodType<Prisma.v_client_branchMaxOrderByAggregateInput> = z.object({
  client_branch_id: z.lazy(() => SortOrderSchema).optional(),
  client_branch_name: z.lazy(() => SortOrderSchema).optional(),
  client_id: z.lazy(() => SortOrderSchema).optional(),
  sigungu_id: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_id: z.lazy(() => SortOrderSchema).optional(),
  client_branch_rate_id: z.lazy(() => SortOrderSchema).optional(),
  branch_mgr_name: z.lazy(() => SortOrderSchema).optional(),
  branch_mgr_mobile_num: z.lazy(() => SortOrderSchema).optional(),
  branch_mgr_office_num: z.lazy(() => SortOrderSchema).optional(),
  branch_mgr_email: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  remote_support: z.lazy(() => SortOrderSchema).optional(),
  push_alert: z.lazy(() => SortOrderSchema).optional(),
  client_name: z.lazy(() => SortOrderSchema).optional(),
  sigungu_name: z.lazy(() => SortOrderSchema).optional(),
  sido_name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const v_client_branchMinOrderByAggregateInputSchema: z.ZodType<Prisma.v_client_branchMinOrderByAggregateInput> = z.object({
  client_branch_id: z.lazy(() => SortOrderSchema).optional(),
  client_branch_name: z.lazy(() => SortOrderSchema).optional(),
  client_id: z.lazy(() => SortOrderSchema).optional(),
  sigungu_id: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_id: z.lazy(() => SortOrderSchema).optional(),
  client_branch_rate_id: z.lazy(() => SortOrderSchema).optional(),
  branch_mgr_name: z.lazy(() => SortOrderSchema).optional(),
  branch_mgr_mobile_num: z.lazy(() => SortOrderSchema).optional(),
  branch_mgr_office_num: z.lazy(() => SortOrderSchema).optional(),
  branch_mgr_email: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  remote_support: z.lazy(() => SortOrderSchema).optional(),
  push_alert: z.lazy(() => SortOrderSchema).optional(),
  client_name: z.lazy(() => SortOrderSchema).optional(),
  sigungu_name: z.lazy(() => SortOrderSchema).optional(),
  sido_name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const v_client_branchSumOrderByAggregateInputSchema: z.ZodType<Prisma.v_client_branchSumOrderByAggregateInput> = z.object({
  client_branch_id: z.lazy(() => SortOrderSchema).optional(),
  client_id: z.lazy(() => SortOrderSchema).optional(),
  sigungu_id: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_id: z.lazy(() => SortOrderSchema).optional(),
  client_branch_rate_id: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  remote_support: z.lazy(() => SortOrderSchema).optional(),
  push_alert: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const v_consumable_modelCountOrderByAggregateInputSchema: z.ZodType<Prisma.v_consumable_modelCountOrderByAggregateInput> = z.object({
  compatibility_id: z.lazy(() => SortOrderSchema).optional(),
  consumable_model_id: z.lazy(() => SortOrderSchema).optional(),
  manufacturer: z.lazy(() => SortOrderSchema).optional(),
  consumable_name: z.lazy(() => SortOrderSchema).optional(),
  consumable_type: z.lazy(() => SortOrderSchema).optional(),
  model_manufacturer: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const v_consumable_modelAvgOrderByAggregateInputSchema: z.ZodType<Prisma.v_consumable_modelAvgOrderByAggregateInput> = z.object({
  consumable_model_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const v_consumable_modelMaxOrderByAggregateInputSchema: z.ZodType<Prisma.v_consumable_modelMaxOrderByAggregateInput> = z.object({
  compatibility_id: z.lazy(() => SortOrderSchema).optional(),
  consumable_model_id: z.lazy(() => SortOrderSchema).optional(),
  manufacturer: z.lazy(() => SortOrderSchema).optional(),
  consumable_name: z.lazy(() => SortOrderSchema).optional(),
  consumable_type: z.lazy(() => SortOrderSchema).optional(),
  model_manufacturer: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const v_consumable_modelMinOrderByAggregateInputSchema: z.ZodType<Prisma.v_consumable_modelMinOrderByAggregateInput> = z.object({
  compatibility_id: z.lazy(() => SortOrderSchema).optional(),
  consumable_model_id: z.lazy(() => SortOrderSchema).optional(),
  manufacturer: z.lazy(() => SortOrderSchema).optional(),
  consumable_name: z.lazy(() => SortOrderSchema).optional(),
  consumable_type: z.lazy(() => SortOrderSchema).optional(),
  model_manufacturer: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const v_consumable_modelSumOrderByAggregateInputSchema: z.ZodType<Prisma.v_consumable_modelSumOrderByAggregateInput> = z.object({
  consumable_model_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const v_deptCountOrderByAggregateInputSchema: z.ZodType<Prisma.v_deptCountOrderByAggregateInput> = z.object({
  dept_id: z.lazy(() => SortOrderSchema).optional(),
  dept_1_id: z.lazy(() => SortOrderSchema).optional(),
  dept_1: z.lazy(() => SortOrderSchema).optional(),
  dept_2_id: z.lazy(() => SortOrderSchema).optional(),
  dept_2: z.lazy(() => SortOrderSchema).optional(),
  dept_3_id: z.lazy(() => SortOrderSchema).optional(),
  dept_3: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const v_deptAvgOrderByAggregateInputSchema: z.ZodType<Prisma.v_deptAvgOrderByAggregateInput> = z.object({
  dept_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const v_deptMaxOrderByAggregateInputSchema: z.ZodType<Prisma.v_deptMaxOrderByAggregateInput> = z.object({
  dept_id: z.lazy(() => SortOrderSchema).optional(),
  dept_1_id: z.lazy(() => SortOrderSchema).optional(),
  dept_1: z.lazy(() => SortOrderSchema).optional(),
  dept_2_id: z.lazy(() => SortOrderSchema).optional(),
  dept_2: z.lazy(() => SortOrderSchema).optional(),
  dept_3_id: z.lazy(() => SortOrderSchema).optional(),
  dept_3: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const v_deptMinOrderByAggregateInputSchema: z.ZodType<Prisma.v_deptMinOrderByAggregateInput> = z.object({
  dept_id: z.lazy(() => SortOrderSchema).optional(),
  dept_1_id: z.lazy(() => SortOrderSchema).optional(),
  dept_1: z.lazy(() => SortOrderSchema).optional(),
  dept_2_id: z.lazy(() => SortOrderSchema).optional(),
  dept_2: z.lazy(() => SortOrderSchema).optional(),
  dept_3_id: z.lazy(() => SortOrderSchema).optional(),
  dept_3: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const v_deptSumOrderByAggregateInputSchema: z.ZodType<Prisma.v_deptSumOrderByAggregateInput> = z.object({
  dept_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const v_device_driverCountOrderByAggregateInputSchema: z.ZodType<Prisma.v_device_driverCountOrderByAggregateInput> = z.object({
  device_driver_id: z.lazy(() => SortOrderSchema).optional(),
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  driver_manufacturer: z.lazy(() => SortOrderSchema).optional(),
  printer_language: z.lazy(() => SortOrderSchema).optional(),
  install_file_address: z.lazy(() => SortOrderSchema).optional(),
  model_manufacturer: z.lazy(() => SortOrderSchema).optional(),
  model_name: z.lazy(() => SortOrderSchema).optional(),
  color_support: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const v_device_driverAvgOrderByAggregateInputSchema: z.ZodType<Prisma.v_device_driverAvgOrderByAggregateInput> = z.object({
  device_driver_id: z.lazy(() => SortOrderSchema).optional(),
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  color_support: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const v_device_driverMaxOrderByAggregateInputSchema: z.ZodType<Prisma.v_device_driverMaxOrderByAggregateInput> = z.object({
  device_driver_id: z.lazy(() => SortOrderSchema).optional(),
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  driver_manufacturer: z.lazy(() => SortOrderSchema).optional(),
  printer_language: z.lazy(() => SortOrderSchema).optional(),
  install_file_address: z.lazy(() => SortOrderSchema).optional(),
  model_manufacturer: z.lazy(() => SortOrderSchema).optional(),
  model_name: z.lazy(() => SortOrderSchema).optional(),
  color_support: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const v_device_driverMinOrderByAggregateInputSchema: z.ZodType<Prisma.v_device_driverMinOrderByAggregateInput> = z.object({
  device_driver_id: z.lazy(() => SortOrderSchema).optional(),
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  driver_manufacturer: z.lazy(() => SortOrderSchema).optional(),
  printer_language: z.lazy(() => SortOrderSchema).optional(),
  install_file_address: z.lazy(() => SortOrderSchema).optional(),
  model_manufacturer: z.lazy(() => SortOrderSchema).optional(),
  model_name: z.lazy(() => SortOrderSchema).optional(),
  color_support: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const v_device_driverSumOrderByAggregateInputSchema: z.ZodType<Prisma.v_device_driverSumOrderByAggregateInput> = z.object({
  device_driver_id: z.lazy(() => SortOrderSchema).optional(),
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  color_support: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Enumv_user_permissionFilterSchema: z.ZodType<Prisma.Enumv_user_permissionFilter> = z.object({
  equals: z.lazy(() => v_user_permissionSchema).optional(),
  in: z.lazy(() => v_user_permissionSchema).array().optional(),
  notIn: z.lazy(() => v_user_permissionSchema).array().optional(),
  not: z.union([ z.lazy(() => v_user_permissionSchema),z.lazy(() => NestedEnumv_user_permissionFilterSchema) ]).optional(),
}).strict();

export const v_userCountOrderByAggregateInputSchema: z.ZodType<Prisma.v_userCountOrderByAggregateInput> = z.object({
  user_id: z.lazy(() => SortOrderSchema).optional(),
  user_name: z.lazy(() => SortOrderSchema).optional(),
  login_id: z.lazy(() => SortOrderSchema).optional(),
  mobile_num: z.lazy(() => SortOrderSchema).optional(),
  office_num: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  modified_at: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  permission: z.lazy(() => SortOrderSchema).optional(),
  dept_id: z.lazy(() => SortOrderSchema).optional(),
  approval_role_id: z.lazy(() => SortOrderSchema).optional(),
  position_id: z.lazy(() => SortOrderSchema).optional(),
  dept_name: z.lazy(() => SortOrderSchema).optional(),
  parent_dept_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const v_userAvgOrderByAggregateInputSchema: z.ZodType<Prisma.v_userAvgOrderByAggregateInput> = z.object({
  user_id: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  dept_id: z.lazy(() => SortOrderSchema).optional(),
  approval_role_id: z.lazy(() => SortOrderSchema).optional(),
  position_id: z.lazy(() => SortOrderSchema).optional(),
  parent_dept_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const v_userMaxOrderByAggregateInputSchema: z.ZodType<Prisma.v_userMaxOrderByAggregateInput> = z.object({
  user_id: z.lazy(() => SortOrderSchema).optional(),
  user_name: z.lazy(() => SortOrderSchema).optional(),
  login_id: z.lazy(() => SortOrderSchema).optional(),
  mobile_num: z.lazy(() => SortOrderSchema).optional(),
  office_num: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  modified_at: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  permission: z.lazy(() => SortOrderSchema).optional(),
  dept_id: z.lazy(() => SortOrderSchema).optional(),
  approval_role_id: z.lazy(() => SortOrderSchema).optional(),
  position_id: z.lazy(() => SortOrderSchema).optional(),
  dept_name: z.lazy(() => SortOrderSchema).optional(),
  parent_dept_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const v_userMinOrderByAggregateInputSchema: z.ZodType<Prisma.v_userMinOrderByAggregateInput> = z.object({
  user_id: z.lazy(() => SortOrderSchema).optional(),
  user_name: z.lazy(() => SortOrderSchema).optional(),
  login_id: z.lazy(() => SortOrderSchema).optional(),
  mobile_num: z.lazy(() => SortOrderSchema).optional(),
  office_num: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  modified_at: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  permission: z.lazy(() => SortOrderSchema).optional(),
  dept_id: z.lazy(() => SortOrderSchema).optional(),
  approval_role_id: z.lazy(() => SortOrderSchema).optional(),
  position_id: z.lazy(() => SortOrderSchema).optional(),
  dept_name: z.lazy(() => SortOrderSchema).optional(),
  parent_dept_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const v_userSumOrderByAggregateInputSchema: z.ZodType<Prisma.v_userSumOrderByAggregateInput> = z.object({
  user_id: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  dept_id: z.lazy(() => SortOrderSchema).optional(),
  approval_role_id: z.lazy(() => SortOrderSchema).optional(),
  position_id: z.lazy(() => SortOrderSchema).optional(),
  parent_dept_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Enumv_user_permissionWithAggregatesFilterSchema: z.ZodType<Prisma.Enumv_user_permissionWithAggregatesFilter> = z.object({
  equals: z.lazy(() => v_user_permissionSchema).optional(),
  in: z.lazy(() => v_user_permissionSchema).array().optional(),
  notIn: z.lazy(() => v_user_permissionSchema).array().optional(),
  not: z.union([ z.lazy(() => v_user_permissionSchema),z.lazy(() => NestedEnumv_user_permissionWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumv_user_permissionFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumv_user_permissionFilterSchema).optional()
}).strict();

export const v_warehouseCountOrderByAggregateInputSchema: z.ZodType<Prisma.v_warehouseCountOrderByAggregateInput> = z.object({
  warehouse_id: z.lazy(() => SortOrderSchema).optional(),
  warehouse_name: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_id: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_name: z.lazy(() => SortOrderSchema).optional(),
  mgmt_parent_dept_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const v_warehouseAvgOrderByAggregateInputSchema: z.ZodType<Prisma.v_warehouseAvgOrderByAggregateInput> = z.object({
  warehouse_id: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_id: z.lazy(() => SortOrderSchema).optional(),
  mgmt_parent_dept_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const v_warehouseMaxOrderByAggregateInputSchema: z.ZodType<Prisma.v_warehouseMaxOrderByAggregateInput> = z.object({
  warehouse_id: z.lazy(() => SortOrderSchema).optional(),
  warehouse_name: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_id: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_name: z.lazy(() => SortOrderSchema).optional(),
  mgmt_parent_dept_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const v_warehouseMinOrderByAggregateInputSchema: z.ZodType<Prisma.v_warehouseMinOrderByAggregateInput> = z.object({
  warehouse_id: z.lazy(() => SortOrderSchema).optional(),
  warehouse_name: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_id: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_name: z.lazy(() => SortOrderSchema).optional(),
  mgmt_parent_dept_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const v_warehouseSumOrderByAggregateInputSchema: z.ZodType<Prisma.v_warehouseSumOrderByAggregateInput> = z.object({
  warehouse_id: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_id: z.lazy(() => SortOrderSchema).optional(),
  mgmt_parent_dept_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BigIntNullableFilterSchema: z.ZodType<Prisma.BigIntNullableFilter> = z.object({
  equals: z.bigint().optional().nullable(),
  in: z.bigint().array().optional().nullable(),
  notIn: z.bigint().array().optional().nullable(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([ z.bigint(),z.lazy(() => NestedBigIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const v_deviceCountOrderByAggregateInputSchema: z.ZodType<Prisma.v_deviceCountOrderByAggregateInput> = z.object({
  device_id: z.lazy(() => SortOrderSchema).optional(),
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  owner_dept_id: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_id: z.lazy(() => SortOrderSchema).optional(),
  serial: z.lazy(() => SortOrderSchema).optional(),
  regi_date: z.lazy(() => SortOrderSchema).optional(),
  mac: z.lazy(() => SortOrderSchema).optional(),
  last_inspection_log_id: z.lazy(() => SortOrderSchema).optional(),
  last_location_log_id: z.lazy(() => SortOrderSchema).optional(),
  status_id: z.lazy(() => SortOrderSchema).optional(),
  model_name: z.lazy(() => SortOrderSchema).optional(),
  manufacturer: z.lazy(() => SortOrderSchema).optional(),
  owner_dept_name: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_name: z.lazy(() => SortOrderSchema).optional(),
  location_id: z.lazy(() => SortOrderSchema).optional(),
  warehouse_id: z.lazy(() => SortOrderSchema).optional(),
  warehouse_name: z.lazy(() => SortOrderSchema).optional(),
  client_branch_id: z.lazy(() => SortOrderSchema).optional(),
  client_branch_name: z.lazy(() => SortOrderSchema).optional(),
  status_name: z.lazy(() => SortOrderSchema).optional(),
  has_fax: z.lazy(() => SortOrderSchema).optional(),
  has_desk: z.lazy(() => SortOrderSchema).optional(),
  has_shelf: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const v_deviceAvgOrderByAggregateInputSchema: z.ZodType<Prisma.v_deviceAvgOrderByAggregateInput> = z.object({
  device_id: z.lazy(() => SortOrderSchema).optional(),
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  owner_dept_id: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_id: z.lazy(() => SortOrderSchema).optional(),
  last_inspection_log_id: z.lazy(() => SortOrderSchema).optional(),
  last_location_log_id: z.lazy(() => SortOrderSchema).optional(),
  status_id: z.lazy(() => SortOrderSchema).optional(),
  location_id: z.lazy(() => SortOrderSchema).optional(),
  warehouse_id: z.lazy(() => SortOrderSchema).optional(),
  client_branch_id: z.lazy(() => SortOrderSchema).optional(),
  has_fax: z.lazy(() => SortOrderSchema).optional(),
  has_desk: z.lazy(() => SortOrderSchema).optional(),
  has_shelf: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const v_deviceMaxOrderByAggregateInputSchema: z.ZodType<Prisma.v_deviceMaxOrderByAggregateInput> = z.object({
  device_id: z.lazy(() => SortOrderSchema).optional(),
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  owner_dept_id: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_id: z.lazy(() => SortOrderSchema).optional(),
  serial: z.lazy(() => SortOrderSchema).optional(),
  regi_date: z.lazy(() => SortOrderSchema).optional(),
  mac: z.lazy(() => SortOrderSchema).optional(),
  last_inspection_log_id: z.lazy(() => SortOrderSchema).optional(),
  last_location_log_id: z.lazy(() => SortOrderSchema).optional(),
  status_id: z.lazy(() => SortOrderSchema).optional(),
  model_name: z.lazy(() => SortOrderSchema).optional(),
  manufacturer: z.lazy(() => SortOrderSchema).optional(),
  owner_dept_name: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_name: z.lazy(() => SortOrderSchema).optional(),
  location_id: z.lazy(() => SortOrderSchema).optional(),
  warehouse_id: z.lazy(() => SortOrderSchema).optional(),
  warehouse_name: z.lazy(() => SortOrderSchema).optional(),
  client_branch_id: z.lazy(() => SortOrderSchema).optional(),
  client_branch_name: z.lazy(() => SortOrderSchema).optional(),
  status_name: z.lazy(() => SortOrderSchema).optional(),
  has_fax: z.lazy(() => SortOrderSchema).optional(),
  has_desk: z.lazy(() => SortOrderSchema).optional(),
  has_shelf: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const v_deviceMinOrderByAggregateInputSchema: z.ZodType<Prisma.v_deviceMinOrderByAggregateInput> = z.object({
  device_id: z.lazy(() => SortOrderSchema).optional(),
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  owner_dept_id: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_id: z.lazy(() => SortOrderSchema).optional(),
  serial: z.lazy(() => SortOrderSchema).optional(),
  regi_date: z.lazy(() => SortOrderSchema).optional(),
  mac: z.lazy(() => SortOrderSchema).optional(),
  last_inspection_log_id: z.lazy(() => SortOrderSchema).optional(),
  last_location_log_id: z.lazy(() => SortOrderSchema).optional(),
  status_id: z.lazy(() => SortOrderSchema).optional(),
  model_name: z.lazy(() => SortOrderSchema).optional(),
  manufacturer: z.lazy(() => SortOrderSchema).optional(),
  owner_dept_name: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_name: z.lazy(() => SortOrderSchema).optional(),
  location_id: z.lazy(() => SortOrderSchema).optional(),
  warehouse_id: z.lazy(() => SortOrderSchema).optional(),
  warehouse_name: z.lazy(() => SortOrderSchema).optional(),
  client_branch_id: z.lazy(() => SortOrderSchema).optional(),
  client_branch_name: z.lazy(() => SortOrderSchema).optional(),
  status_name: z.lazy(() => SortOrderSchema).optional(),
  has_fax: z.lazy(() => SortOrderSchema).optional(),
  has_desk: z.lazy(() => SortOrderSchema).optional(),
  has_shelf: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const v_deviceSumOrderByAggregateInputSchema: z.ZodType<Prisma.v_deviceSumOrderByAggregateInput> = z.object({
  device_id: z.lazy(() => SortOrderSchema).optional(),
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  owner_dept_id: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_id: z.lazy(() => SortOrderSchema).optional(),
  last_inspection_log_id: z.lazy(() => SortOrderSchema).optional(),
  last_location_log_id: z.lazy(() => SortOrderSchema).optional(),
  status_id: z.lazy(() => SortOrderSchema).optional(),
  location_id: z.lazy(() => SortOrderSchema).optional(),
  warehouse_id: z.lazy(() => SortOrderSchema).optional(),
  client_branch_id: z.lazy(() => SortOrderSchema).optional(),
  has_fax: z.lazy(() => SortOrderSchema).optional(),
  has_desk: z.lazy(() => SortOrderSchema).optional(),
  has_shelf: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BigIntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.BigIntNullableWithAggregatesFilter> = z.object({
  equals: z.bigint().optional().nullable(),
  in: z.bigint().array().optional().nullable(),
  notIn: z.bigint().array().optional().nullable(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([ z.bigint(),z.lazy(() => NestedBigIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedBigIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedBigIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedBigIntNullableFilterSchema).optional()
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const NullableIntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableIntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional().nullable(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const NullableDateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional().nullable()
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict();

export const NullableEnumdevice_inspection_log_statusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumdevice_inspection_log_statusFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => device_inspection_log_statusSchema).optional().nullable()
}).strict();

export const Enumdevice_option_location_typeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.Enumdevice_option_location_typeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => device_option_location_typeSchema).optional()
}).strict();

export const Enumlocation_location_typeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.Enumlocation_location_typeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => location_location_typeSchema).optional()
}).strict();

export const Enumuser_permissionFieldUpdateOperationsInputSchema: z.ZodType<Prisma.Enumuser_permissionFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => user_permissionSchema).optional()
}).strict();

export const BigIntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BigIntFieldUpdateOperationsInput> = z.object({
  set: z.bigint().optional(),
  increment: z.bigint().optional(),
  decrement: z.bigint().optional(),
  multiply: z.bigint().optional(),
  divide: z.bigint().optional()
}).strict();

export const Enumv_user_permissionFieldUpdateOperationsInputSchema: z.ZodType<Prisma.Enumv_user_permissionFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => v_user_permissionSchema).optional()
}).strict();

export const NullableBigIntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableBigIntFieldUpdateOperationsInput> = z.object({
  set: z.bigint().optional().nullable(),
  increment: z.bigint().optional(),
  decrement: z.bigint().optional(),
  multiply: z.bigint().optional(),
  divide: z.bigint().optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict();

export const NestedFloatNullableFilterSchema: z.ZodType<Prisma.NestedFloatNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeNullableFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const NestedDateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const NestedEnumdevice_inspection_log_statusNullableFilterSchema: z.ZodType<Prisma.NestedEnumdevice_inspection_log_statusNullableFilter> = z.object({
  equals: z.lazy(() => device_inspection_log_statusSchema).optional().nullable(),
  in: z.lazy(() => device_inspection_log_statusSchema).array().optional().nullable(),
  notIn: z.lazy(() => device_inspection_log_statusSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => device_inspection_log_statusSchema),z.lazy(() => NestedEnumdevice_inspection_log_statusNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedEnumdevice_inspection_log_statusNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumdevice_inspection_log_statusNullableWithAggregatesFilter> = z.object({
  equals: z.lazy(() => device_inspection_log_statusSchema).optional().nullable(),
  in: z.lazy(() => device_inspection_log_statusSchema).array().optional().nullable(),
  notIn: z.lazy(() => device_inspection_log_statusSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => device_inspection_log_statusSchema),z.lazy(() => NestedEnumdevice_inspection_log_statusNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumdevice_inspection_log_statusNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumdevice_inspection_log_statusNullableFilterSchema).optional()
}).strict();

export const NestedEnumdevice_option_location_typeFilterSchema: z.ZodType<Prisma.NestedEnumdevice_option_location_typeFilter> = z.object({
  equals: z.lazy(() => device_option_location_typeSchema).optional(),
  in: z.lazy(() => device_option_location_typeSchema).array().optional(),
  notIn: z.lazy(() => device_option_location_typeSchema).array().optional(),
  not: z.union([ z.lazy(() => device_option_location_typeSchema),z.lazy(() => NestedEnumdevice_option_location_typeFilterSchema) ]).optional(),
}).strict();

export const NestedEnumdevice_option_location_typeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumdevice_option_location_typeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => device_option_location_typeSchema).optional(),
  in: z.lazy(() => device_option_location_typeSchema).array().optional(),
  notIn: z.lazy(() => device_option_location_typeSchema).array().optional(),
  not: z.union([ z.lazy(() => device_option_location_typeSchema),z.lazy(() => NestedEnumdevice_option_location_typeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumdevice_option_location_typeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumdevice_option_location_typeFilterSchema).optional()
}).strict();

export const NestedEnumlocation_location_typeFilterSchema: z.ZodType<Prisma.NestedEnumlocation_location_typeFilter> = z.object({
  equals: z.lazy(() => location_location_typeSchema).optional(),
  in: z.lazy(() => location_location_typeSchema).array().optional(),
  notIn: z.lazy(() => location_location_typeSchema).array().optional(),
  not: z.union([ z.lazy(() => location_location_typeSchema),z.lazy(() => NestedEnumlocation_location_typeFilterSchema) ]).optional(),
}).strict();

export const NestedEnumlocation_location_typeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumlocation_location_typeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => location_location_typeSchema).optional(),
  in: z.lazy(() => location_location_typeSchema).array().optional(),
  notIn: z.lazy(() => location_location_typeSchema).array().optional(),
  not: z.union([ z.lazy(() => location_location_typeSchema),z.lazy(() => NestedEnumlocation_location_typeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumlocation_location_typeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumlocation_location_typeFilterSchema).optional()
}).strict();

export const NestedEnumuser_permissionFilterSchema: z.ZodType<Prisma.NestedEnumuser_permissionFilter> = z.object({
  equals: z.lazy(() => user_permissionSchema).optional(),
  in: z.lazy(() => user_permissionSchema).array().optional(),
  notIn: z.lazy(() => user_permissionSchema).array().optional(),
  not: z.union([ z.lazy(() => user_permissionSchema),z.lazy(() => NestedEnumuser_permissionFilterSchema) ]).optional(),
}).strict();

export const NestedEnumuser_permissionWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumuser_permissionWithAggregatesFilter> = z.object({
  equals: z.lazy(() => user_permissionSchema).optional(),
  in: z.lazy(() => user_permissionSchema).array().optional(),
  notIn: z.lazy(() => user_permissionSchema).array().optional(),
  not: z.union([ z.lazy(() => user_permissionSchema),z.lazy(() => NestedEnumuser_permissionWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumuser_permissionFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumuser_permissionFilterSchema).optional()
}).strict();

export const NestedBigIntFilterSchema: z.ZodType<Prisma.NestedBigIntFilter> = z.object({
  equals: z.bigint().optional(),
  in: z.bigint().array().optional(),
  notIn: z.bigint().array().optional(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([ z.bigint(),z.lazy(() => NestedBigIntFilterSchema) ]).optional(),
}).strict();

export const NestedBigIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBigIntWithAggregatesFilter> = z.object({
  equals: z.bigint().optional(),
  in: z.bigint().array().optional(),
  notIn: z.bigint().array().optional(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([ z.bigint(),z.lazy(() => NestedBigIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedBigIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBigIntFilterSchema).optional(),
  _max: z.lazy(() => NestedBigIntFilterSchema).optional()
}).strict();

export const NestedEnumv_user_permissionFilterSchema: z.ZodType<Prisma.NestedEnumv_user_permissionFilter> = z.object({
  equals: z.lazy(() => v_user_permissionSchema).optional(),
  in: z.lazy(() => v_user_permissionSchema).array().optional(),
  notIn: z.lazy(() => v_user_permissionSchema).array().optional(),
  not: z.union([ z.lazy(() => v_user_permissionSchema),z.lazy(() => NestedEnumv_user_permissionFilterSchema) ]).optional(),
}).strict();

export const NestedEnumv_user_permissionWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumv_user_permissionWithAggregatesFilter> = z.object({
  equals: z.lazy(() => v_user_permissionSchema).optional(),
  in: z.lazy(() => v_user_permissionSchema).array().optional(),
  notIn: z.lazy(() => v_user_permissionSchema).array().optional(),
  not: z.union([ z.lazy(() => v_user_permissionSchema),z.lazy(() => NestedEnumv_user_permissionWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumv_user_permissionFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumv_user_permissionFilterSchema).optional()
}).strict();

export const NestedBigIntNullableFilterSchema: z.ZodType<Prisma.NestedBigIntNullableFilter> = z.object({
  equals: z.bigint().optional().nullable(),
  in: z.bigint().array().optional().nullable(),
  notIn: z.bigint().array().optional().nullable(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([ z.bigint(),z.lazy(() => NestedBigIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedBigIntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBigIntNullableWithAggregatesFilter> = z.object({
  equals: z.bigint().optional().nullable(),
  in: z.bigint().array().optional().nullable(),
  notIn: z.bigint().array().optional().nullable(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([ z.bigint(),z.lazy(() => NestedBigIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedBigIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedBigIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedBigIntNullableFilterSchema).optional()
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const approval_roleFindFirstArgsSchema: z.ZodType<Prisma.approval_roleFindFirstArgs> = z.object({
  select: approval_roleSelectSchema.optional(),
  where: approval_roleWhereInputSchema.optional(),
  orderBy: z.union([ approval_roleOrderByWithRelationInputSchema.array(),approval_roleOrderByWithRelationInputSchema ]).optional(),
  cursor: approval_roleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Approval_roleScalarFieldEnumSchema,Approval_roleScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const approval_roleFindFirstOrThrowArgsSchema: z.ZodType<Prisma.approval_roleFindFirstOrThrowArgs> = z.object({
  select: approval_roleSelectSchema.optional(),
  where: approval_roleWhereInputSchema.optional(),
  orderBy: z.union([ approval_roleOrderByWithRelationInputSchema.array(),approval_roleOrderByWithRelationInputSchema ]).optional(),
  cursor: approval_roleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Approval_roleScalarFieldEnumSchema,Approval_roleScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const approval_roleFindManyArgsSchema: z.ZodType<Prisma.approval_roleFindManyArgs> = z.object({
  select: approval_roleSelectSchema.optional(),
  where: approval_roleWhereInputSchema.optional(),
  orderBy: z.union([ approval_roleOrderByWithRelationInputSchema.array(),approval_roleOrderByWithRelationInputSchema ]).optional(),
  cursor: approval_roleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Approval_roleScalarFieldEnumSchema,Approval_roleScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const approval_roleAggregateArgsSchema: z.ZodType<Prisma.Approval_roleAggregateArgs> = z.object({
  where: approval_roleWhereInputSchema.optional(),
  orderBy: z.union([ approval_roleOrderByWithRelationInputSchema.array(),approval_roleOrderByWithRelationInputSchema ]).optional(),
  cursor: approval_roleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const approval_roleGroupByArgsSchema: z.ZodType<Prisma.approval_roleGroupByArgs> = z.object({
  where: approval_roleWhereInputSchema.optional(),
  orderBy: z.union([ approval_roleOrderByWithAggregationInputSchema.array(),approval_roleOrderByWithAggregationInputSchema ]).optional(),
  by: Approval_roleScalarFieldEnumSchema.array(),
  having: approval_roleScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const approval_roleFindUniqueArgsSchema: z.ZodType<Prisma.approval_roleFindUniqueArgs> = z.object({
  select: approval_roleSelectSchema.optional(),
  where: approval_roleWhereUniqueInputSchema,
}).strict() ;

export const approval_roleFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.approval_roleFindUniqueOrThrowArgs> = z.object({
  select: approval_roleSelectSchema.optional(),
  where: approval_roleWhereUniqueInputSchema,
}).strict() ;

export const callFindFirstArgsSchema: z.ZodType<Prisma.callFindFirstArgs> = z.object({
  select: callSelectSchema.optional(),
  where: callWhereInputSchema.optional(),
  orderBy: z.union([ callOrderByWithRelationInputSchema.array(),callOrderByWithRelationInputSchema ]).optional(),
  cursor: callWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CallScalarFieldEnumSchema,CallScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const callFindFirstOrThrowArgsSchema: z.ZodType<Prisma.callFindFirstOrThrowArgs> = z.object({
  select: callSelectSchema.optional(),
  where: callWhereInputSchema.optional(),
  orderBy: z.union([ callOrderByWithRelationInputSchema.array(),callOrderByWithRelationInputSchema ]).optional(),
  cursor: callWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CallScalarFieldEnumSchema,CallScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const callFindManyArgsSchema: z.ZodType<Prisma.callFindManyArgs> = z.object({
  select: callSelectSchema.optional(),
  where: callWhereInputSchema.optional(),
  orderBy: z.union([ callOrderByWithRelationInputSchema.array(),callOrderByWithRelationInputSchema ]).optional(),
  cursor: callWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CallScalarFieldEnumSchema,CallScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const callAggregateArgsSchema: z.ZodType<Prisma.CallAggregateArgs> = z.object({
  where: callWhereInputSchema.optional(),
  orderBy: z.union([ callOrderByWithRelationInputSchema.array(),callOrderByWithRelationInputSchema ]).optional(),
  cursor: callWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const callGroupByArgsSchema: z.ZodType<Prisma.callGroupByArgs> = z.object({
  where: callWhereInputSchema.optional(),
  orderBy: z.union([ callOrderByWithAggregationInputSchema.array(),callOrderByWithAggregationInputSchema ]).optional(),
  by: CallScalarFieldEnumSchema.array(),
  having: callScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const callFindUniqueArgsSchema: z.ZodType<Prisma.callFindUniqueArgs> = z.object({
  select: callSelectSchema.optional(),
  where: callWhereUniqueInputSchema,
}).strict() ;

export const callFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.callFindUniqueOrThrowArgs> = z.object({
  select: callSelectSchema.optional(),
  where: callWhereUniqueInputSchema,
}).strict() ;

export const call_typeFindFirstArgsSchema: z.ZodType<Prisma.call_typeFindFirstArgs> = z.object({
  select: call_typeSelectSchema.optional(),
  where: call_typeWhereInputSchema.optional(),
  orderBy: z.union([ call_typeOrderByWithRelationInputSchema.array(),call_typeOrderByWithRelationInputSchema ]).optional(),
  cursor: call_typeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Call_typeScalarFieldEnumSchema,Call_typeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const call_typeFindFirstOrThrowArgsSchema: z.ZodType<Prisma.call_typeFindFirstOrThrowArgs> = z.object({
  select: call_typeSelectSchema.optional(),
  where: call_typeWhereInputSchema.optional(),
  orderBy: z.union([ call_typeOrderByWithRelationInputSchema.array(),call_typeOrderByWithRelationInputSchema ]).optional(),
  cursor: call_typeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Call_typeScalarFieldEnumSchema,Call_typeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const call_typeFindManyArgsSchema: z.ZodType<Prisma.call_typeFindManyArgs> = z.object({
  select: call_typeSelectSchema.optional(),
  where: call_typeWhereInputSchema.optional(),
  orderBy: z.union([ call_typeOrderByWithRelationInputSchema.array(),call_typeOrderByWithRelationInputSchema ]).optional(),
  cursor: call_typeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Call_typeScalarFieldEnumSchema,Call_typeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const call_typeAggregateArgsSchema: z.ZodType<Prisma.Call_typeAggregateArgs> = z.object({
  where: call_typeWhereInputSchema.optional(),
  orderBy: z.union([ call_typeOrderByWithRelationInputSchema.array(),call_typeOrderByWithRelationInputSchema ]).optional(),
  cursor: call_typeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const call_typeGroupByArgsSchema: z.ZodType<Prisma.call_typeGroupByArgs> = z.object({
  where: call_typeWhereInputSchema.optional(),
  orderBy: z.union([ call_typeOrderByWithAggregationInputSchema.array(),call_typeOrderByWithAggregationInputSchema ]).optional(),
  by: Call_typeScalarFieldEnumSchema.array(),
  having: call_typeScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const call_typeFindUniqueArgsSchema: z.ZodType<Prisma.call_typeFindUniqueArgs> = z.object({
  select: call_typeSelectSchema.optional(),
  where: call_typeWhereUniqueInputSchema,
}).strict() ;

export const call_typeFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.call_typeFindUniqueOrThrowArgs> = z.object({
  select: call_typeSelectSchema.optional(),
  where: call_typeWhereUniqueInputSchema,
}).strict() ;

export const clientFindFirstArgsSchema: z.ZodType<Prisma.clientFindFirstArgs> = z.object({
  select: clientSelectSchema.optional(),
  where: clientWhereInputSchema.optional(),
  orderBy: z.union([ clientOrderByWithRelationInputSchema.array(),clientOrderByWithRelationInputSchema ]).optional(),
  cursor: clientWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ClientScalarFieldEnumSchema,ClientScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const clientFindFirstOrThrowArgsSchema: z.ZodType<Prisma.clientFindFirstOrThrowArgs> = z.object({
  select: clientSelectSchema.optional(),
  where: clientWhereInputSchema.optional(),
  orderBy: z.union([ clientOrderByWithRelationInputSchema.array(),clientOrderByWithRelationInputSchema ]).optional(),
  cursor: clientWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ClientScalarFieldEnumSchema,ClientScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const clientFindManyArgsSchema: z.ZodType<Prisma.clientFindManyArgs> = z.object({
  select: clientSelectSchema.optional(),
  where: clientWhereInputSchema.optional(),
  orderBy: z.union([ clientOrderByWithRelationInputSchema.array(),clientOrderByWithRelationInputSchema ]).optional(),
  cursor: clientWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ClientScalarFieldEnumSchema,ClientScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const clientAggregateArgsSchema: z.ZodType<Prisma.ClientAggregateArgs> = z.object({
  where: clientWhereInputSchema.optional(),
  orderBy: z.union([ clientOrderByWithRelationInputSchema.array(),clientOrderByWithRelationInputSchema ]).optional(),
  cursor: clientWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const clientGroupByArgsSchema: z.ZodType<Prisma.clientGroupByArgs> = z.object({
  where: clientWhereInputSchema.optional(),
  orderBy: z.union([ clientOrderByWithAggregationInputSchema.array(),clientOrderByWithAggregationInputSchema ]).optional(),
  by: ClientScalarFieldEnumSchema.array(),
  having: clientScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const clientFindUniqueArgsSchema: z.ZodType<Prisma.clientFindUniqueArgs> = z.object({
  select: clientSelectSchema.optional(),
  where: clientWhereUniqueInputSchema,
}).strict() ;

export const clientFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.clientFindUniqueOrThrowArgs> = z.object({
  select: clientSelectSchema.optional(),
  where: clientWhereUniqueInputSchema,
}).strict() ;

export const client_branchFindFirstArgsSchema: z.ZodType<Prisma.client_branchFindFirstArgs> = z.object({
  select: client_branchSelectSchema.optional(),
  where: client_branchWhereInputSchema.optional(),
  orderBy: z.union([ client_branchOrderByWithRelationInputSchema.array(),client_branchOrderByWithRelationInputSchema ]).optional(),
  cursor: client_branchWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Client_branchScalarFieldEnumSchema,Client_branchScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const client_branchFindFirstOrThrowArgsSchema: z.ZodType<Prisma.client_branchFindFirstOrThrowArgs> = z.object({
  select: client_branchSelectSchema.optional(),
  where: client_branchWhereInputSchema.optional(),
  orderBy: z.union([ client_branchOrderByWithRelationInputSchema.array(),client_branchOrderByWithRelationInputSchema ]).optional(),
  cursor: client_branchWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Client_branchScalarFieldEnumSchema,Client_branchScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const client_branchFindManyArgsSchema: z.ZodType<Prisma.client_branchFindManyArgs> = z.object({
  select: client_branchSelectSchema.optional(),
  where: client_branchWhereInputSchema.optional(),
  orderBy: z.union([ client_branchOrderByWithRelationInputSchema.array(),client_branchOrderByWithRelationInputSchema ]).optional(),
  cursor: client_branchWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Client_branchScalarFieldEnumSchema,Client_branchScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const client_branchAggregateArgsSchema: z.ZodType<Prisma.Client_branchAggregateArgs> = z.object({
  where: client_branchWhereInputSchema.optional(),
  orderBy: z.union([ client_branchOrderByWithRelationInputSchema.array(),client_branchOrderByWithRelationInputSchema ]).optional(),
  cursor: client_branchWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const client_branchGroupByArgsSchema: z.ZodType<Prisma.client_branchGroupByArgs> = z.object({
  where: client_branchWhereInputSchema.optional(),
  orderBy: z.union([ client_branchOrderByWithAggregationInputSchema.array(),client_branchOrderByWithAggregationInputSchema ]).optional(),
  by: Client_branchScalarFieldEnumSchema.array(),
  having: client_branchScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const client_branchFindUniqueArgsSchema: z.ZodType<Prisma.client_branchFindUniqueArgs> = z.object({
  select: client_branchSelectSchema.optional(),
  where: client_branchWhereUniqueInputSchema,
}).strict() ;

export const client_branchFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.client_branchFindUniqueOrThrowArgs> = z.object({
  select: client_branchSelectSchema.optional(),
  where: client_branchWhereUniqueInputSchema,
}).strict() ;

export const client_rateFindFirstArgsSchema: z.ZodType<Prisma.client_rateFindFirstArgs> = z.object({
  select: client_rateSelectSchema.optional(),
  where: client_rateWhereInputSchema.optional(),
  orderBy: z.union([ client_rateOrderByWithRelationInputSchema.array(),client_rateOrderByWithRelationInputSchema ]).optional(),
  cursor: client_rateWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Client_rateScalarFieldEnumSchema,Client_rateScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const client_rateFindFirstOrThrowArgsSchema: z.ZodType<Prisma.client_rateFindFirstOrThrowArgs> = z.object({
  select: client_rateSelectSchema.optional(),
  where: client_rateWhereInputSchema.optional(),
  orderBy: z.union([ client_rateOrderByWithRelationInputSchema.array(),client_rateOrderByWithRelationInputSchema ]).optional(),
  cursor: client_rateWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Client_rateScalarFieldEnumSchema,Client_rateScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const client_rateFindManyArgsSchema: z.ZodType<Prisma.client_rateFindManyArgs> = z.object({
  select: client_rateSelectSchema.optional(),
  where: client_rateWhereInputSchema.optional(),
  orderBy: z.union([ client_rateOrderByWithRelationInputSchema.array(),client_rateOrderByWithRelationInputSchema ]).optional(),
  cursor: client_rateWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Client_rateScalarFieldEnumSchema,Client_rateScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const client_rateAggregateArgsSchema: z.ZodType<Prisma.Client_rateAggregateArgs> = z.object({
  where: client_rateWhereInputSchema.optional(),
  orderBy: z.union([ client_rateOrderByWithRelationInputSchema.array(),client_rateOrderByWithRelationInputSchema ]).optional(),
  cursor: client_rateWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const client_rateGroupByArgsSchema: z.ZodType<Prisma.client_rateGroupByArgs> = z.object({
  where: client_rateWhereInputSchema.optional(),
  orderBy: z.union([ client_rateOrderByWithAggregationInputSchema.array(),client_rateOrderByWithAggregationInputSchema ]).optional(),
  by: Client_rateScalarFieldEnumSchema.array(),
  having: client_rateScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const client_rateFindUniqueArgsSchema: z.ZodType<Prisma.client_rateFindUniqueArgs> = z.object({
  select: client_rateSelectSchema.optional(),
  where: client_rateWhereUniqueInputSchema,
}).strict() ;

export const client_rateFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.client_rateFindUniqueOrThrowArgs> = z.object({
  select: client_rateSelectSchema.optional(),
  where: client_rateWhereUniqueInputSchema,
}).strict() ;

export const consumable_modelFindFirstArgsSchema: z.ZodType<Prisma.consumable_modelFindFirstArgs> = z.object({
  select: consumable_modelSelectSchema.optional(),
  where: consumable_modelWhereInputSchema.optional(),
  orderBy: z.union([ consumable_modelOrderByWithRelationInputSchema.array(),consumable_modelOrderByWithRelationInputSchema ]).optional(),
  cursor: consumable_modelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Consumable_modelScalarFieldEnumSchema,Consumable_modelScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const consumable_modelFindFirstOrThrowArgsSchema: z.ZodType<Prisma.consumable_modelFindFirstOrThrowArgs> = z.object({
  select: consumable_modelSelectSchema.optional(),
  where: consumable_modelWhereInputSchema.optional(),
  orderBy: z.union([ consumable_modelOrderByWithRelationInputSchema.array(),consumable_modelOrderByWithRelationInputSchema ]).optional(),
  cursor: consumable_modelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Consumable_modelScalarFieldEnumSchema,Consumable_modelScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const consumable_modelFindManyArgsSchema: z.ZodType<Prisma.consumable_modelFindManyArgs> = z.object({
  select: consumable_modelSelectSchema.optional(),
  where: consumable_modelWhereInputSchema.optional(),
  orderBy: z.union([ consumable_modelOrderByWithRelationInputSchema.array(),consumable_modelOrderByWithRelationInputSchema ]).optional(),
  cursor: consumable_modelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Consumable_modelScalarFieldEnumSchema,Consumable_modelScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const consumable_modelAggregateArgsSchema: z.ZodType<Prisma.Consumable_modelAggregateArgs> = z.object({
  where: consumable_modelWhereInputSchema.optional(),
  orderBy: z.union([ consumable_modelOrderByWithRelationInputSchema.array(),consumable_modelOrderByWithRelationInputSchema ]).optional(),
  cursor: consumable_modelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const consumable_modelGroupByArgsSchema: z.ZodType<Prisma.consumable_modelGroupByArgs> = z.object({
  where: consumable_modelWhereInputSchema.optional(),
  orderBy: z.union([ consumable_modelOrderByWithAggregationInputSchema.array(),consumable_modelOrderByWithAggregationInputSchema ]).optional(),
  by: Consumable_modelScalarFieldEnumSchema.array(),
  having: consumable_modelScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const consumable_modelFindUniqueArgsSchema: z.ZodType<Prisma.consumable_modelFindUniqueArgs> = z.object({
  select: consumable_modelSelectSchema.optional(),
  where: consumable_modelWhereUniqueInputSchema,
}).strict() ;

export const consumable_modelFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.consumable_modelFindUniqueOrThrowArgs> = z.object({
  select: consumable_modelSelectSchema.optional(),
  where: consumable_modelWhereUniqueInputSchema,
}).strict() ;

export const deptFindFirstArgsSchema: z.ZodType<Prisma.deptFindFirstArgs> = z.object({
  select: deptSelectSchema.optional(),
  where: deptWhereInputSchema.optional(),
  orderBy: z.union([ deptOrderByWithRelationInputSchema.array(),deptOrderByWithRelationInputSchema ]).optional(),
  cursor: deptWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ DeptScalarFieldEnumSchema,DeptScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const deptFindFirstOrThrowArgsSchema: z.ZodType<Prisma.deptFindFirstOrThrowArgs> = z.object({
  select: deptSelectSchema.optional(),
  where: deptWhereInputSchema.optional(),
  orderBy: z.union([ deptOrderByWithRelationInputSchema.array(),deptOrderByWithRelationInputSchema ]).optional(),
  cursor: deptWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ DeptScalarFieldEnumSchema,DeptScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const deptFindManyArgsSchema: z.ZodType<Prisma.deptFindManyArgs> = z.object({
  select: deptSelectSchema.optional(),
  where: deptWhereInputSchema.optional(),
  orderBy: z.union([ deptOrderByWithRelationInputSchema.array(),deptOrderByWithRelationInputSchema ]).optional(),
  cursor: deptWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ DeptScalarFieldEnumSchema,DeptScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const deptAggregateArgsSchema: z.ZodType<Prisma.DeptAggregateArgs> = z.object({
  where: deptWhereInputSchema.optional(),
  orderBy: z.union([ deptOrderByWithRelationInputSchema.array(),deptOrderByWithRelationInputSchema ]).optional(),
  cursor: deptWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const deptGroupByArgsSchema: z.ZodType<Prisma.deptGroupByArgs> = z.object({
  where: deptWhereInputSchema.optional(),
  orderBy: z.union([ deptOrderByWithAggregationInputSchema.array(),deptOrderByWithAggregationInputSchema ]).optional(),
  by: DeptScalarFieldEnumSchema.array(),
  having: deptScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const deptFindUniqueArgsSchema: z.ZodType<Prisma.deptFindUniqueArgs> = z.object({
  select: deptSelectSchema.optional(),
  where: deptWhereUniqueInputSchema,
}).strict() ;

export const deptFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.deptFindUniqueOrThrowArgs> = z.object({
  select: deptSelectSchema.optional(),
  where: deptWhereUniqueInputSchema,
}).strict() ;

export const deviceFindFirstArgsSchema: z.ZodType<Prisma.deviceFindFirstArgs> = z.object({
  select: deviceSelectSchema.optional(),
  where: deviceWhereInputSchema.optional(),
  orderBy: z.union([ deviceOrderByWithRelationInputSchema.array(),deviceOrderByWithRelationInputSchema ]).optional(),
  cursor: deviceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ DeviceScalarFieldEnumSchema,DeviceScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const deviceFindFirstOrThrowArgsSchema: z.ZodType<Prisma.deviceFindFirstOrThrowArgs> = z.object({
  select: deviceSelectSchema.optional(),
  where: deviceWhereInputSchema.optional(),
  orderBy: z.union([ deviceOrderByWithRelationInputSchema.array(),deviceOrderByWithRelationInputSchema ]).optional(),
  cursor: deviceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ DeviceScalarFieldEnumSchema,DeviceScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const deviceFindManyArgsSchema: z.ZodType<Prisma.deviceFindManyArgs> = z.object({
  select: deviceSelectSchema.optional(),
  where: deviceWhereInputSchema.optional(),
  orderBy: z.union([ deviceOrderByWithRelationInputSchema.array(),deviceOrderByWithRelationInputSchema ]).optional(),
  cursor: deviceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ DeviceScalarFieldEnumSchema,DeviceScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const deviceAggregateArgsSchema: z.ZodType<Prisma.DeviceAggregateArgs> = z.object({
  where: deviceWhereInputSchema.optional(),
  orderBy: z.union([ deviceOrderByWithRelationInputSchema.array(),deviceOrderByWithRelationInputSchema ]).optional(),
  cursor: deviceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const deviceGroupByArgsSchema: z.ZodType<Prisma.deviceGroupByArgs> = z.object({
  where: deviceWhereInputSchema.optional(),
  orderBy: z.union([ deviceOrderByWithAggregationInputSchema.array(),deviceOrderByWithAggregationInputSchema ]).optional(),
  by: DeviceScalarFieldEnumSchema.array(),
  having: deviceScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const deviceFindUniqueArgsSchema: z.ZodType<Prisma.deviceFindUniqueArgs> = z.object({
  select: deviceSelectSchema.optional(),
  where: deviceWhereUniqueInputSchema,
}).strict() ;

export const deviceFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.deviceFindUniqueOrThrowArgs> = z.object({
  select: deviceSelectSchema.optional(),
  where: deviceWhereUniqueInputSchema,
}).strict() ;

export const device_approvalFindFirstArgsSchema: z.ZodType<Prisma.device_approvalFindFirstArgs> = z.object({
  select: device_approvalSelectSchema.optional(),
  where: device_approvalWhereInputSchema.optional(),
  orderBy: z.union([ device_approvalOrderByWithRelationInputSchema.array(),device_approvalOrderByWithRelationInputSchema ]).optional(),
  cursor: device_approvalWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Device_approvalScalarFieldEnumSchema,Device_approvalScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const device_approvalFindFirstOrThrowArgsSchema: z.ZodType<Prisma.device_approvalFindFirstOrThrowArgs> = z.object({
  select: device_approvalSelectSchema.optional(),
  where: device_approvalWhereInputSchema.optional(),
  orderBy: z.union([ device_approvalOrderByWithRelationInputSchema.array(),device_approvalOrderByWithRelationInputSchema ]).optional(),
  cursor: device_approvalWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Device_approvalScalarFieldEnumSchema,Device_approvalScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const device_approvalFindManyArgsSchema: z.ZodType<Prisma.device_approvalFindManyArgs> = z.object({
  select: device_approvalSelectSchema.optional(),
  where: device_approvalWhereInputSchema.optional(),
  orderBy: z.union([ device_approvalOrderByWithRelationInputSchema.array(),device_approvalOrderByWithRelationInputSchema ]).optional(),
  cursor: device_approvalWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Device_approvalScalarFieldEnumSchema,Device_approvalScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const device_approvalAggregateArgsSchema: z.ZodType<Prisma.Device_approvalAggregateArgs> = z.object({
  where: device_approvalWhereInputSchema.optional(),
  orderBy: z.union([ device_approvalOrderByWithRelationInputSchema.array(),device_approvalOrderByWithRelationInputSchema ]).optional(),
  cursor: device_approvalWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const device_approvalGroupByArgsSchema: z.ZodType<Prisma.device_approvalGroupByArgs> = z.object({
  where: device_approvalWhereInputSchema.optional(),
  orderBy: z.union([ device_approvalOrderByWithAggregationInputSchema.array(),device_approvalOrderByWithAggregationInputSchema ]).optional(),
  by: Device_approvalScalarFieldEnumSchema.array(),
  having: device_approvalScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const device_approvalFindUniqueArgsSchema: z.ZodType<Prisma.device_approvalFindUniqueArgs> = z.object({
  select: device_approvalSelectSchema.optional(),
  where: device_approvalWhereUniqueInputSchema,
}).strict() ;

export const device_approvalFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.device_approvalFindUniqueOrThrowArgs> = z.object({
  select: device_approvalSelectSchema.optional(),
  where: device_approvalWhereUniqueInputSchema,
}).strict() ;

export const device_approval_typeFindFirstArgsSchema: z.ZodType<Prisma.device_approval_typeFindFirstArgs> = z.object({
  select: device_approval_typeSelectSchema.optional(),
  where: device_approval_typeWhereInputSchema.optional(),
  orderBy: z.union([ device_approval_typeOrderByWithRelationInputSchema.array(),device_approval_typeOrderByWithRelationInputSchema ]).optional(),
  cursor: device_approval_typeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Device_approval_typeScalarFieldEnumSchema,Device_approval_typeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const device_approval_typeFindFirstOrThrowArgsSchema: z.ZodType<Prisma.device_approval_typeFindFirstOrThrowArgs> = z.object({
  select: device_approval_typeSelectSchema.optional(),
  where: device_approval_typeWhereInputSchema.optional(),
  orderBy: z.union([ device_approval_typeOrderByWithRelationInputSchema.array(),device_approval_typeOrderByWithRelationInputSchema ]).optional(),
  cursor: device_approval_typeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Device_approval_typeScalarFieldEnumSchema,Device_approval_typeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const device_approval_typeFindManyArgsSchema: z.ZodType<Prisma.device_approval_typeFindManyArgs> = z.object({
  select: device_approval_typeSelectSchema.optional(),
  where: device_approval_typeWhereInputSchema.optional(),
  orderBy: z.union([ device_approval_typeOrderByWithRelationInputSchema.array(),device_approval_typeOrderByWithRelationInputSchema ]).optional(),
  cursor: device_approval_typeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Device_approval_typeScalarFieldEnumSchema,Device_approval_typeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const device_approval_typeAggregateArgsSchema: z.ZodType<Prisma.Device_approval_typeAggregateArgs> = z.object({
  where: device_approval_typeWhereInputSchema.optional(),
  orderBy: z.union([ device_approval_typeOrderByWithRelationInputSchema.array(),device_approval_typeOrderByWithRelationInputSchema ]).optional(),
  cursor: device_approval_typeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const device_approval_typeGroupByArgsSchema: z.ZodType<Prisma.device_approval_typeGroupByArgs> = z.object({
  where: device_approval_typeWhereInputSchema.optional(),
  orderBy: z.union([ device_approval_typeOrderByWithAggregationInputSchema.array(),device_approval_typeOrderByWithAggregationInputSchema ]).optional(),
  by: Device_approval_typeScalarFieldEnumSchema.array(),
  having: device_approval_typeScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const device_approval_typeFindUniqueArgsSchema: z.ZodType<Prisma.device_approval_typeFindUniqueArgs> = z.object({
  select: device_approval_typeSelectSchema.optional(),
  where: device_approval_typeWhereUniqueInputSchema,
}).strict() ;

export const device_approval_typeFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.device_approval_typeFindUniqueOrThrowArgs> = z.object({
  select: device_approval_typeSelectSchema.optional(),
  where: device_approval_typeWhereUniqueInputSchema,
}).strict() ;

export const device_consumable_compatibilityFindFirstArgsSchema: z.ZodType<Prisma.device_consumable_compatibilityFindFirstArgs> = z.object({
  select: device_consumable_compatibilitySelectSchema.optional(),
  where: device_consumable_compatibilityWhereInputSchema.optional(),
  orderBy: z.union([ device_consumable_compatibilityOrderByWithRelationInputSchema.array(),device_consumable_compatibilityOrderByWithRelationInputSchema ]).optional(),
  cursor: device_consumable_compatibilityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Device_consumable_compatibilityScalarFieldEnumSchema,Device_consumable_compatibilityScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const device_consumable_compatibilityFindFirstOrThrowArgsSchema: z.ZodType<Prisma.device_consumable_compatibilityFindFirstOrThrowArgs> = z.object({
  select: device_consumable_compatibilitySelectSchema.optional(),
  where: device_consumable_compatibilityWhereInputSchema.optional(),
  orderBy: z.union([ device_consumable_compatibilityOrderByWithRelationInputSchema.array(),device_consumable_compatibilityOrderByWithRelationInputSchema ]).optional(),
  cursor: device_consumable_compatibilityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Device_consumable_compatibilityScalarFieldEnumSchema,Device_consumable_compatibilityScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const device_consumable_compatibilityFindManyArgsSchema: z.ZodType<Prisma.device_consumable_compatibilityFindManyArgs> = z.object({
  select: device_consumable_compatibilitySelectSchema.optional(),
  where: device_consumable_compatibilityWhereInputSchema.optional(),
  orderBy: z.union([ device_consumable_compatibilityOrderByWithRelationInputSchema.array(),device_consumable_compatibilityOrderByWithRelationInputSchema ]).optional(),
  cursor: device_consumable_compatibilityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Device_consumable_compatibilityScalarFieldEnumSchema,Device_consumable_compatibilityScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const device_consumable_compatibilityAggregateArgsSchema: z.ZodType<Prisma.Device_consumable_compatibilityAggregateArgs> = z.object({
  where: device_consumable_compatibilityWhereInputSchema.optional(),
  orderBy: z.union([ device_consumable_compatibilityOrderByWithRelationInputSchema.array(),device_consumable_compatibilityOrderByWithRelationInputSchema ]).optional(),
  cursor: device_consumable_compatibilityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const device_consumable_compatibilityGroupByArgsSchema: z.ZodType<Prisma.device_consumable_compatibilityGroupByArgs> = z.object({
  where: device_consumable_compatibilityWhereInputSchema.optional(),
  orderBy: z.union([ device_consumable_compatibilityOrderByWithAggregationInputSchema.array(),device_consumable_compatibilityOrderByWithAggregationInputSchema ]).optional(),
  by: Device_consumable_compatibilityScalarFieldEnumSchema.array(),
  having: device_consumable_compatibilityScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const device_consumable_compatibilityFindUniqueArgsSchema: z.ZodType<Prisma.device_consumable_compatibilityFindUniqueArgs> = z.object({
  select: device_consumable_compatibilitySelectSchema.optional(),
  where: device_consumable_compatibilityWhereUniqueInputSchema,
}).strict() ;

export const device_consumable_compatibilityFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.device_consumable_compatibilityFindUniqueOrThrowArgs> = z.object({
  select: device_consumable_compatibilitySelectSchema.optional(),
  where: device_consumable_compatibilityWhereUniqueInputSchema,
}).strict() ;

export const device_driverFindFirstArgsSchema: z.ZodType<Prisma.device_driverFindFirstArgs> = z.object({
  select: device_driverSelectSchema.optional(),
  where: device_driverWhereInputSchema.optional(),
  orderBy: z.union([ device_driverOrderByWithRelationInputSchema.array(),device_driverOrderByWithRelationInputSchema ]).optional(),
  cursor: device_driverWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Device_driverScalarFieldEnumSchema,Device_driverScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const device_driverFindFirstOrThrowArgsSchema: z.ZodType<Prisma.device_driverFindFirstOrThrowArgs> = z.object({
  select: device_driverSelectSchema.optional(),
  where: device_driverWhereInputSchema.optional(),
  orderBy: z.union([ device_driverOrderByWithRelationInputSchema.array(),device_driverOrderByWithRelationInputSchema ]).optional(),
  cursor: device_driverWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Device_driverScalarFieldEnumSchema,Device_driverScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const device_driverFindManyArgsSchema: z.ZodType<Prisma.device_driverFindManyArgs> = z.object({
  select: device_driverSelectSchema.optional(),
  where: device_driverWhereInputSchema.optional(),
  orderBy: z.union([ device_driverOrderByWithRelationInputSchema.array(),device_driverOrderByWithRelationInputSchema ]).optional(),
  cursor: device_driverWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Device_driverScalarFieldEnumSchema,Device_driverScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const device_driverAggregateArgsSchema: z.ZodType<Prisma.Device_driverAggregateArgs> = z.object({
  where: device_driverWhereInputSchema.optional(),
  orderBy: z.union([ device_driverOrderByWithRelationInputSchema.array(),device_driverOrderByWithRelationInputSchema ]).optional(),
  cursor: device_driverWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const device_driverGroupByArgsSchema: z.ZodType<Prisma.device_driverGroupByArgs> = z.object({
  where: device_driverWhereInputSchema.optional(),
  orderBy: z.union([ device_driverOrderByWithAggregationInputSchema.array(),device_driverOrderByWithAggregationInputSchema ]).optional(),
  by: Device_driverScalarFieldEnumSchema.array(),
  having: device_driverScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const device_driverFindUniqueArgsSchema: z.ZodType<Prisma.device_driverFindUniqueArgs> = z.object({
  select: device_driverSelectSchema.optional(),
  where: device_driverWhereUniqueInputSchema,
}).strict() ;

export const device_driverFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.device_driverFindUniqueOrThrowArgs> = z.object({
  select: device_driverSelectSchema.optional(),
  where: device_driverWhereUniqueInputSchema,
}).strict() ;

export const device_inspection_logFindFirstArgsSchema: z.ZodType<Prisma.device_inspection_logFindFirstArgs> = z.object({
  select: device_inspection_logSelectSchema.optional(),
  where: device_inspection_logWhereInputSchema.optional(),
  orderBy: z.union([ device_inspection_logOrderByWithRelationInputSchema.array(),device_inspection_logOrderByWithRelationInputSchema ]).optional(),
  cursor: device_inspection_logWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Device_inspection_logScalarFieldEnumSchema,Device_inspection_logScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const device_inspection_logFindFirstOrThrowArgsSchema: z.ZodType<Prisma.device_inspection_logFindFirstOrThrowArgs> = z.object({
  select: device_inspection_logSelectSchema.optional(),
  where: device_inspection_logWhereInputSchema.optional(),
  orderBy: z.union([ device_inspection_logOrderByWithRelationInputSchema.array(),device_inspection_logOrderByWithRelationInputSchema ]).optional(),
  cursor: device_inspection_logWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Device_inspection_logScalarFieldEnumSchema,Device_inspection_logScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const device_inspection_logFindManyArgsSchema: z.ZodType<Prisma.device_inspection_logFindManyArgs> = z.object({
  select: device_inspection_logSelectSchema.optional(),
  where: device_inspection_logWhereInputSchema.optional(),
  orderBy: z.union([ device_inspection_logOrderByWithRelationInputSchema.array(),device_inspection_logOrderByWithRelationInputSchema ]).optional(),
  cursor: device_inspection_logWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Device_inspection_logScalarFieldEnumSchema,Device_inspection_logScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const device_inspection_logAggregateArgsSchema: z.ZodType<Prisma.Device_inspection_logAggregateArgs> = z.object({
  where: device_inspection_logWhereInputSchema.optional(),
  orderBy: z.union([ device_inspection_logOrderByWithRelationInputSchema.array(),device_inspection_logOrderByWithRelationInputSchema ]).optional(),
  cursor: device_inspection_logWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const device_inspection_logGroupByArgsSchema: z.ZodType<Prisma.device_inspection_logGroupByArgs> = z.object({
  where: device_inspection_logWhereInputSchema.optional(),
  orderBy: z.union([ device_inspection_logOrderByWithAggregationInputSchema.array(),device_inspection_logOrderByWithAggregationInputSchema ]).optional(),
  by: Device_inspection_logScalarFieldEnumSchema.array(),
  having: device_inspection_logScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const device_inspection_logFindUniqueArgsSchema: z.ZodType<Prisma.device_inspection_logFindUniqueArgs> = z.object({
  select: device_inspection_logSelectSchema.optional(),
  where: device_inspection_logWhereUniqueInputSchema,
}).strict() ;

export const device_inspection_logFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.device_inspection_logFindUniqueOrThrowArgs> = z.object({
  select: device_inspection_logSelectSchema.optional(),
  where: device_inspection_logWhereUniqueInputSchema,
}).strict() ;

export const device_install_infoFindFirstArgsSchema: z.ZodType<Prisma.device_install_infoFindFirstArgs> = z.object({
  select: device_install_infoSelectSchema.optional(),
  where: device_install_infoWhereInputSchema.optional(),
  orderBy: z.union([ device_install_infoOrderByWithRelationInputSchema.array(),device_install_infoOrderByWithRelationInputSchema ]).optional(),
  cursor: device_install_infoWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Device_install_infoScalarFieldEnumSchema,Device_install_infoScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const device_install_infoFindFirstOrThrowArgsSchema: z.ZodType<Prisma.device_install_infoFindFirstOrThrowArgs> = z.object({
  select: device_install_infoSelectSchema.optional(),
  where: device_install_infoWhereInputSchema.optional(),
  orderBy: z.union([ device_install_infoOrderByWithRelationInputSchema.array(),device_install_infoOrderByWithRelationInputSchema ]).optional(),
  cursor: device_install_infoWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Device_install_infoScalarFieldEnumSchema,Device_install_infoScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const device_install_infoFindManyArgsSchema: z.ZodType<Prisma.device_install_infoFindManyArgs> = z.object({
  select: device_install_infoSelectSchema.optional(),
  where: device_install_infoWhereInputSchema.optional(),
  orderBy: z.union([ device_install_infoOrderByWithRelationInputSchema.array(),device_install_infoOrderByWithRelationInputSchema ]).optional(),
  cursor: device_install_infoWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Device_install_infoScalarFieldEnumSchema,Device_install_infoScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const device_install_infoAggregateArgsSchema: z.ZodType<Prisma.Device_install_infoAggregateArgs> = z.object({
  where: device_install_infoWhereInputSchema.optional(),
  orderBy: z.union([ device_install_infoOrderByWithRelationInputSchema.array(),device_install_infoOrderByWithRelationInputSchema ]).optional(),
  cursor: device_install_infoWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const device_install_infoGroupByArgsSchema: z.ZodType<Prisma.device_install_infoGroupByArgs> = z.object({
  where: device_install_infoWhereInputSchema.optional(),
  orderBy: z.union([ device_install_infoOrderByWithAggregationInputSchema.array(),device_install_infoOrderByWithAggregationInputSchema ]).optional(),
  by: Device_install_infoScalarFieldEnumSchema.array(),
  having: device_install_infoScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const device_install_infoFindUniqueArgsSchema: z.ZodType<Prisma.device_install_infoFindUniqueArgs> = z.object({
  select: device_install_infoSelectSchema.optional(),
  where: device_install_infoWhereUniqueInputSchema,
}).strict() ;

export const device_install_infoFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.device_install_infoFindUniqueOrThrowArgs> = z.object({
  select: device_install_infoSelectSchema.optional(),
  where: device_install_infoWhereUniqueInputSchema,
}).strict() ;

export const device_location_logFindFirstArgsSchema: z.ZodType<Prisma.device_location_logFindFirstArgs> = z.object({
  select: device_location_logSelectSchema.optional(),
  where: device_location_logWhereInputSchema.optional(),
  orderBy: z.union([ device_location_logOrderByWithRelationInputSchema.array(),device_location_logOrderByWithRelationInputSchema ]).optional(),
  cursor: device_location_logWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Device_location_logScalarFieldEnumSchema,Device_location_logScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const device_location_logFindFirstOrThrowArgsSchema: z.ZodType<Prisma.device_location_logFindFirstOrThrowArgs> = z.object({
  select: device_location_logSelectSchema.optional(),
  where: device_location_logWhereInputSchema.optional(),
  orderBy: z.union([ device_location_logOrderByWithRelationInputSchema.array(),device_location_logOrderByWithRelationInputSchema ]).optional(),
  cursor: device_location_logWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Device_location_logScalarFieldEnumSchema,Device_location_logScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const device_location_logFindManyArgsSchema: z.ZodType<Prisma.device_location_logFindManyArgs> = z.object({
  select: device_location_logSelectSchema.optional(),
  where: device_location_logWhereInputSchema.optional(),
  orderBy: z.union([ device_location_logOrderByWithRelationInputSchema.array(),device_location_logOrderByWithRelationInputSchema ]).optional(),
  cursor: device_location_logWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Device_location_logScalarFieldEnumSchema,Device_location_logScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const device_location_logAggregateArgsSchema: z.ZodType<Prisma.Device_location_logAggregateArgs> = z.object({
  where: device_location_logWhereInputSchema.optional(),
  orderBy: z.union([ device_location_logOrderByWithRelationInputSchema.array(),device_location_logOrderByWithRelationInputSchema ]).optional(),
  cursor: device_location_logWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const device_location_logGroupByArgsSchema: z.ZodType<Prisma.device_location_logGroupByArgs> = z.object({
  where: device_location_logWhereInputSchema.optional(),
  orderBy: z.union([ device_location_logOrderByWithAggregationInputSchema.array(),device_location_logOrderByWithAggregationInputSchema ]).optional(),
  by: Device_location_logScalarFieldEnumSchema.array(),
  having: device_location_logScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const device_location_logFindUniqueArgsSchema: z.ZodType<Prisma.device_location_logFindUniqueArgs> = z.object({
  select: device_location_logSelectSchema.optional(),
  where: device_location_logWhereUniqueInputSchema,
}).strict() ;

export const device_location_logFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.device_location_logFindUniqueOrThrowArgs> = z.object({
  select: device_location_logSelectSchema.optional(),
  where: device_location_logWhereUniqueInputSchema,
}).strict() ;

export const device_modelFindFirstArgsSchema: z.ZodType<Prisma.device_modelFindFirstArgs> = z.object({
  select: device_modelSelectSchema.optional(),
  where: device_modelWhereInputSchema.optional(),
  orderBy: z.union([ device_modelOrderByWithRelationInputSchema.array(),device_modelOrderByWithRelationInputSchema ]).optional(),
  cursor: device_modelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Device_modelScalarFieldEnumSchema,Device_modelScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const device_modelFindFirstOrThrowArgsSchema: z.ZodType<Prisma.device_modelFindFirstOrThrowArgs> = z.object({
  select: device_modelSelectSchema.optional(),
  where: device_modelWhereInputSchema.optional(),
  orderBy: z.union([ device_modelOrderByWithRelationInputSchema.array(),device_modelOrderByWithRelationInputSchema ]).optional(),
  cursor: device_modelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Device_modelScalarFieldEnumSchema,Device_modelScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const device_modelFindManyArgsSchema: z.ZodType<Prisma.device_modelFindManyArgs> = z.object({
  select: device_modelSelectSchema.optional(),
  where: device_modelWhereInputSchema.optional(),
  orderBy: z.union([ device_modelOrderByWithRelationInputSchema.array(),device_modelOrderByWithRelationInputSchema ]).optional(),
  cursor: device_modelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Device_modelScalarFieldEnumSchema,Device_modelScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const device_modelAggregateArgsSchema: z.ZodType<Prisma.Device_modelAggregateArgs> = z.object({
  where: device_modelWhereInputSchema.optional(),
  orderBy: z.union([ device_modelOrderByWithRelationInputSchema.array(),device_modelOrderByWithRelationInputSchema ]).optional(),
  cursor: device_modelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const device_modelGroupByArgsSchema: z.ZodType<Prisma.device_modelGroupByArgs> = z.object({
  where: device_modelWhereInputSchema.optional(),
  orderBy: z.union([ device_modelOrderByWithAggregationInputSchema.array(),device_modelOrderByWithAggregationInputSchema ]).optional(),
  by: Device_modelScalarFieldEnumSchema.array(),
  having: device_modelScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const device_modelFindUniqueArgsSchema: z.ZodType<Prisma.device_modelFindUniqueArgs> = z.object({
  select: device_modelSelectSchema.optional(),
  where: device_modelWhereUniqueInputSchema,
}).strict() ;

export const device_modelFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.device_modelFindUniqueOrThrowArgs> = z.object({
  select: device_modelSelectSchema.optional(),
  where: device_modelWhereUniqueInputSchema,
}).strict() ;

export const device_optionFindFirstArgsSchema: z.ZodType<Prisma.device_optionFindFirstArgs> = z.object({
  select: device_optionSelectSchema.optional(),
  where: device_optionWhereInputSchema.optional(),
  orderBy: z.union([ device_optionOrderByWithRelationInputSchema.array(),device_optionOrderByWithRelationInputSchema ]).optional(),
  cursor: device_optionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Device_optionScalarFieldEnumSchema,Device_optionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const device_optionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.device_optionFindFirstOrThrowArgs> = z.object({
  select: device_optionSelectSchema.optional(),
  where: device_optionWhereInputSchema.optional(),
  orderBy: z.union([ device_optionOrderByWithRelationInputSchema.array(),device_optionOrderByWithRelationInputSchema ]).optional(),
  cursor: device_optionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Device_optionScalarFieldEnumSchema,Device_optionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const device_optionFindManyArgsSchema: z.ZodType<Prisma.device_optionFindManyArgs> = z.object({
  select: device_optionSelectSchema.optional(),
  where: device_optionWhereInputSchema.optional(),
  orderBy: z.union([ device_optionOrderByWithRelationInputSchema.array(),device_optionOrderByWithRelationInputSchema ]).optional(),
  cursor: device_optionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Device_optionScalarFieldEnumSchema,Device_optionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const device_optionAggregateArgsSchema: z.ZodType<Prisma.Device_optionAggregateArgs> = z.object({
  where: device_optionWhereInputSchema.optional(),
  orderBy: z.union([ device_optionOrderByWithRelationInputSchema.array(),device_optionOrderByWithRelationInputSchema ]).optional(),
  cursor: device_optionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const device_optionGroupByArgsSchema: z.ZodType<Prisma.device_optionGroupByArgs> = z.object({
  where: device_optionWhereInputSchema.optional(),
  orderBy: z.union([ device_optionOrderByWithAggregationInputSchema.array(),device_optionOrderByWithAggregationInputSchema ]).optional(),
  by: Device_optionScalarFieldEnumSchema.array(),
  having: device_optionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const device_optionFindUniqueArgsSchema: z.ZodType<Prisma.device_optionFindUniqueArgs> = z.object({
  select: device_optionSelectSchema.optional(),
  where: device_optionWhereUniqueInputSchema,
}).strict() ;

export const device_optionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.device_optionFindUniqueOrThrowArgs> = z.object({
  select: device_optionSelectSchema.optional(),
  where: device_optionWhereUniqueInputSchema,
}).strict() ;

export const device_option_compatibilityFindFirstArgsSchema: z.ZodType<Prisma.device_option_compatibilityFindFirstArgs> = z.object({
  select: device_option_compatibilitySelectSchema.optional(),
  where: device_option_compatibilityWhereInputSchema.optional(),
  orderBy: z.union([ device_option_compatibilityOrderByWithRelationInputSchema.array(),device_option_compatibilityOrderByWithRelationInputSchema ]).optional(),
  cursor: device_option_compatibilityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Device_option_compatibilityScalarFieldEnumSchema,Device_option_compatibilityScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const device_option_compatibilityFindFirstOrThrowArgsSchema: z.ZodType<Prisma.device_option_compatibilityFindFirstOrThrowArgs> = z.object({
  select: device_option_compatibilitySelectSchema.optional(),
  where: device_option_compatibilityWhereInputSchema.optional(),
  orderBy: z.union([ device_option_compatibilityOrderByWithRelationInputSchema.array(),device_option_compatibilityOrderByWithRelationInputSchema ]).optional(),
  cursor: device_option_compatibilityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Device_option_compatibilityScalarFieldEnumSchema,Device_option_compatibilityScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const device_option_compatibilityFindManyArgsSchema: z.ZodType<Prisma.device_option_compatibilityFindManyArgs> = z.object({
  select: device_option_compatibilitySelectSchema.optional(),
  where: device_option_compatibilityWhereInputSchema.optional(),
  orderBy: z.union([ device_option_compatibilityOrderByWithRelationInputSchema.array(),device_option_compatibilityOrderByWithRelationInputSchema ]).optional(),
  cursor: device_option_compatibilityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Device_option_compatibilityScalarFieldEnumSchema,Device_option_compatibilityScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const device_option_compatibilityAggregateArgsSchema: z.ZodType<Prisma.Device_option_compatibilityAggregateArgs> = z.object({
  where: device_option_compatibilityWhereInputSchema.optional(),
  orderBy: z.union([ device_option_compatibilityOrderByWithRelationInputSchema.array(),device_option_compatibilityOrderByWithRelationInputSchema ]).optional(),
  cursor: device_option_compatibilityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const device_option_compatibilityGroupByArgsSchema: z.ZodType<Prisma.device_option_compatibilityGroupByArgs> = z.object({
  where: device_option_compatibilityWhereInputSchema.optional(),
  orderBy: z.union([ device_option_compatibilityOrderByWithAggregationInputSchema.array(),device_option_compatibilityOrderByWithAggregationInputSchema ]).optional(),
  by: Device_option_compatibilityScalarFieldEnumSchema.array(),
  having: device_option_compatibilityScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const device_option_compatibilityFindUniqueArgsSchema: z.ZodType<Prisma.device_option_compatibilityFindUniqueArgs> = z.object({
  select: device_option_compatibilitySelectSchema.optional(),
  where: device_option_compatibilityWhereUniqueInputSchema,
}).strict() ;

export const device_option_compatibilityFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.device_option_compatibilityFindUniqueOrThrowArgs> = z.object({
  select: device_option_compatibilitySelectSchema.optional(),
  where: device_option_compatibilityWhereUniqueInputSchema,
}).strict() ;

export const device_statusFindFirstArgsSchema: z.ZodType<Prisma.device_statusFindFirstArgs> = z.object({
  select: device_statusSelectSchema.optional(),
  where: device_statusWhereInputSchema.optional(),
  orderBy: z.union([ device_statusOrderByWithRelationInputSchema.array(),device_statusOrderByWithRelationInputSchema ]).optional(),
  cursor: device_statusWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Device_statusScalarFieldEnumSchema,Device_statusScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const device_statusFindFirstOrThrowArgsSchema: z.ZodType<Prisma.device_statusFindFirstOrThrowArgs> = z.object({
  select: device_statusSelectSchema.optional(),
  where: device_statusWhereInputSchema.optional(),
  orderBy: z.union([ device_statusOrderByWithRelationInputSchema.array(),device_statusOrderByWithRelationInputSchema ]).optional(),
  cursor: device_statusWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Device_statusScalarFieldEnumSchema,Device_statusScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const device_statusFindManyArgsSchema: z.ZodType<Prisma.device_statusFindManyArgs> = z.object({
  select: device_statusSelectSchema.optional(),
  where: device_statusWhereInputSchema.optional(),
  orderBy: z.union([ device_statusOrderByWithRelationInputSchema.array(),device_statusOrderByWithRelationInputSchema ]).optional(),
  cursor: device_statusWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Device_statusScalarFieldEnumSchema,Device_statusScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const device_statusAggregateArgsSchema: z.ZodType<Prisma.Device_statusAggregateArgs> = z.object({
  where: device_statusWhereInputSchema.optional(),
  orderBy: z.union([ device_statusOrderByWithRelationInputSchema.array(),device_statusOrderByWithRelationInputSchema ]).optional(),
  cursor: device_statusWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const device_statusGroupByArgsSchema: z.ZodType<Prisma.device_statusGroupByArgs> = z.object({
  where: device_statusWhereInputSchema.optional(),
  orderBy: z.union([ device_statusOrderByWithAggregationInputSchema.array(),device_statusOrderByWithAggregationInputSchema ]).optional(),
  by: Device_statusScalarFieldEnumSchema.array(),
  having: device_statusScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const device_statusFindUniqueArgsSchema: z.ZodType<Prisma.device_statusFindUniqueArgs> = z.object({
  select: device_statusSelectSchema.optional(),
  where: device_statusWhereUniqueInputSchema,
}).strict() ;

export const device_statusFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.device_statusFindUniqueOrThrowArgs> = z.object({
  select: device_statusSelectSchema.optional(),
  where: device_statusWhereUniqueInputSchema,
}).strict() ;

export const inspection_approvalFindFirstArgsSchema: z.ZodType<Prisma.inspection_approvalFindFirstArgs> = z.object({
  select: inspection_approvalSelectSchema.optional(),
  where: inspection_approvalWhereInputSchema.optional(),
  orderBy: z.union([ inspection_approvalOrderByWithRelationInputSchema.array(),inspection_approvalOrderByWithRelationInputSchema ]).optional(),
  cursor: inspection_approvalWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Inspection_approvalScalarFieldEnumSchema,Inspection_approvalScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const inspection_approvalFindFirstOrThrowArgsSchema: z.ZodType<Prisma.inspection_approvalFindFirstOrThrowArgs> = z.object({
  select: inspection_approvalSelectSchema.optional(),
  where: inspection_approvalWhereInputSchema.optional(),
  orderBy: z.union([ inspection_approvalOrderByWithRelationInputSchema.array(),inspection_approvalOrderByWithRelationInputSchema ]).optional(),
  cursor: inspection_approvalWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Inspection_approvalScalarFieldEnumSchema,Inspection_approvalScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const inspection_approvalFindManyArgsSchema: z.ZodType<Prisma.inspection_approvalFindManyArgs> = z.object({
  select: inspection_approvalSelectSchema.optional(),
  where: inspection_approvalWhereInputSchema.optional(),
  orderBy: z.union([ inspection_approvalOrderByWithRelationInputSchema.array(),inspection_approvalOrderByWithRelationInputSchema ]).optional(),
  cursor: inspection_approvalWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Inspection_approvalScalarFieldEnumSchema,Inspection_approvalScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const inspection_approvalAggregateArgsSchema: z.ZodType<Prisma.Inspection_approvalAggregateArgs> = z.object({
  where: inspection_approvalWhereInputSchema.optional(),
  orderBy: z.union([ inspection_approvalOrderByWithRelationInputSchema.array(),inspection_approvalOrderByWithRelationInputSchema ]).optional(),
  cursor: inspection_approvalWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const inspection_approvalGroupByArgsSchema: z.ZodType<Prisma.inspection_approvalGroupByArgs> = z.object({
  where: inspection_approvalWhereInputSchema.optional(),
  orderBy: z.union([ inspection_approvalOrderByWithAggregationInputSchema.array(),inspection_approvalOrderByWithAggregationInputSchema ]).optional(),
  by: Inspection_approvalScalarFieldEnumSchema.array(),
  having: inspection_approvalScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const inspection_approvalFindUniqueArgsSchema: z.ZodType<Prisma.inspection_approvalFindUniqueArgs> = z.object({
  select: inspection_approvalSelectSchema.optional(),
  where: inspection_approvalWhereUniqueInputSchema,
}).strict() ;

export const inspection_approvalFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.inspection_approvalFindUniqueOrThrowArgs> = z.object({
  select: inspection_approvalSelectSchema.optional(),
  where: inspection_approvalWhereUniqueInputSchema,
}).strict() ;

export const locationFindFirstArgsSchema: z.ZodType<Prisma.locationFindFirstArgs> = z.object({
  select: locationSelectSchema.optional(),
  where: locationWhereInputSchema.optional(),
  orderBy: z.union([ locationOrderByWithRelationInputSchema.array(),locationOrderByWithRelationInputSchema ]).optional(),
  cursor: locationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LocationScalarFieldEnumSchema,LocationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const locationFindFirstOrThrowArgsSchema: z.ZodType<Prisma.locationFindFirstOrThrowArgs> = z.object({
  select: locationSelectSchema.optional(),
  where: locationWhereInputSchema.optional(),
  orderBy: z.union([ locationOrderByWithRelationInputSchema.array(),locationOrderByWithRelationInputSchema ]).optional(),
  cursor: locationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LocationScalarFieldEnumSchema,LocationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const locationFindManyArgsSchema: z.ZodType<Prisma.locationFindManyArgs> = z.object({
  select: locationSelectSchema.optional(),
  where: locationWhereInputSchema.optional(),
  orderBy: z.union([ locationOrderByWithRelationInputSchema.array(),locationOrderByWithRelationInputSchema ]).optional(),
  cursor: locationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LocationScalarFieldEnumSchema,LocationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const locationAggregateArgsSchema: z.ZodType<Prisma.LocationAggregateArgs> = z.object({
  where: locationWhereInputSchema.optional(),
  orderBy: z.union([ locationOrderByWithRelationInputSchema.array(),locationOrderByWithRelationInputSchema ]).optional(),
  cursor: locationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const locationGroupByArgsSchema: z.ZodType<Prisma.locationGroupByArgs> = z.object({
  where: locationWhereInputSchema.optional(),
  orderBy: z.union([ locationOrderByWithAggregationInputSchema.array(),locationOrderByWithAggregationInputSchema ]).optional(),
  by: LocationScalarFieldEnumSchema.array(),
  having: locationScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const locationFindUniqueArgsSchema: z.ZodType<Prisma.locationFindUniqueArgs> = z.object({
  select: locationSelectSchema.optional(),
  where: locationWhereUniqueInputSchema,
}).strict() ;

export const locationFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.locationFindUniqueOrThrowArgs> = z.object({
  select: locationSelectSchema.optional(),
  where: locationWhereUniqueInputSchema,
}).strict() ;

export const option_modelFindFirstArgsSchema: z.ZodType<Prisma.option_modelFindFirstArgs> = z.object({
  select: option_modelSelectSchema.optional(),
  where: option_modelWhereInputSchema.optional(),
  orderBy: z.union([ option_modelOrderByWithRelationInputSchema.array(),option_modelOrderByWithRelationInputSchema ]).optional(),
  cursor: option_modelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Option_modelScalarFieldEnumSchema,Option_modelScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const option_modelFindFirstOrThrowArgsSchema: z.ZodType<Prisma.option_modelFindFirstOrThrowArgs> = z.object({
  select: option_modelSelectSchema.optional(),
  where: option_modelWhereInputSchema.optional(),
  orderBy: z.union([ option_modelOrderByWithRelationInputSchema.array(),option_modelOrderByWithRelationInputSchema ]).optional(),
  cursor: option_modelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Option_modelScalarFieldEnumSchema,Option_modelScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const option_modelFindManyArgsSchema: z.ZodType<Prisma.option_modelFindManyArgs> = z.object({
  select: option_modelSelectSchema.optional(),
  where: option_modelWhereInputSchema.optional(),
  orderBy: z.union([ option_modelOrderByWithRelationInputSchema.array(),option_modelOrderByWithRelationInputSchema ]).optional(),
  cursor: option_modelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Option_modelScalarFieldEnumSchema,Option_modelScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const option_modelAggregateArgsSchema: z.ZodType<Prisma.Option_modelAggregateArgs> = z.object({
  where: option_modelWhereInputSchema.optional(),
  orderBy: z.union([ option_modelOrderByWithRelationInputSchema.array(),option_modelOrderByWithRelationInputSchema ]).optional(),
  cursor: option_modelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const option_modelGroupByArgsSchema: z.ZodType<Prisma.option_modelGroupByArgs> = z.object({
  where: option_modelWhereInputSchema.optional(),
  orderBy: z.union([ option_modelOrderByWithAggregationInputSchema.array(),option_modelOrderByWithAggregationInputSchema ]).optional(),
  by: Option_modelScalarFieldEnumSchema.array(),
  having: option_modelScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const option_modelFindUniqueArgsSchema: z.ZodType<Prisma.option_modelFindUniqueArgs> = z.object({
  select: option_modelSelectSchema.optional(),
  where: option_modelWhereUniqueInputSchema,
}).strict() ;

export const option_modelFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.option_modelFindUniqueOrThrowArgs> = z.object({
  select: option_modelSelectSchema.optional(),
  where: option_modelWhereUniqueInputSchema,
}).strict() ;

export const sidoFindFirstArgsSchema: z.ZodType<Prisma.sidoFindFirstArgs> = z.object({
  select: sidoSelectSchema.optional(),
  where: sidoWhereInputSchema.optional(),
  orderBy: z.union([ sidoOrderByWithRelationInputSchema.array(),sidoOrderByWithRelationInputSchema ]).optional(),
  cursor: sidoWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SidoScalarFieldEnumSchema,SidoScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const sidoFindFirstOrThrowArgsSchema: z.ZodType<Prisma.sidoFindFirstOrThrowArgs> = z.object({
  select: sidoSelectSchema.optional(),
  where: sidoWhereInputSchema.optional(),
  orderBy: z.union([ sidoOrderByWithRelationInputSchema.array(),sidoOrderByWithRelationInputSchema ]).optional(),
  cursor: sidoWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SidoScalarFieldEnumSchema,SidoScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const sidoFindManyArgsSchema: z.ZodType<Prisma.sidoFindManyArgs> = z.object({
  select: sidoSelectSchema.optional(),
  where: sidoWhereInputSchema.optional(),
  orderBy: z.union([ sidoOrderByWithRelationInputSchema.array(),sidoOrderByWithRelationInputSchema ]).optional(),
  cursor: sidoWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SidoScalarFieldEnumSchema,SidoScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const sidoAggregateArgsSchema: z.ZodType<Prisma.SidoAggregateArgs> = z.object({
  where: sidoWhereInputSchema.optional(),
  orderBy: z.union([ sidoOrderByWithRelationInputSchema.array(),sidoOrderByWithRelationInputSchema ]).optional(),
  cursor: sidoWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const sidoGroupByArgsSchema: z.ZodType<Prisma.sidoGroupByArgs> = z.object({
  where: sidoWhereInputSchema.optional(),
  orderBy: z.union([ sidoOrderByWithAggregationInputSchema.array(),sidoOrderByWithAggregationInputSchema ]).optional(),
  by: SidoScalarFieldEnumSchema.array(),
  having: sidoScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const sidoFindUniqueArgsSchema: z.ZodType<Prisma.sidoFindUniqueArgs> = z.object({
  select: sidoSelectSchema.optional(),
  where: sidoWhereUniqueInputSchema,
}).strict() ;

export const sidoFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.sidoFindUniqueOrThrowArgs> = z.object({
  select: sidoSelectSchema.optional(),
  where: sidoWhereUniqueInputSchema,
}).strict() ;

export const sigunguFindFirstArgsSchema: z.ZodType<Prisma.sigunguFindFirstArgs> = z.object({
  select: sigunguSelectSchema.optional(),
  where: sigunguWhereInputSchema.optional(),
  orderBy: z.union([ sigunguOrderByWithRelationInputSchema.array(),sigunguOrderByWithRelationInputSchema ]).optional(),
  cursor: sigunguWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SigunguScalarFieldEnumSchema,SigunguScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const sigunguFindFirstOrThrowArgsSchema: z.ZodType<Prisma.sigunguFindFirstOrThrowArgs> = z.object({
  select: sigunguSelectSchema.optional(),
  where: sigunguWhereInputSchema.optional(),
  orderBy: z.union([ sigunguOrderByWithRelationInputSchema.array(),sigunguOrderByWithRelationInputSchema ]).optional(),
  cursor: sigunguWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SigunguScalarFieldEnumSchema,SigunguScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const sigunguFindManyArgsSchema: z.ZodType<Prisma.sigunguFindManyArgs> = z.object({
  select: sigunguSelectSchema.optional(),
  where: sigunguWhereInputSchema.optional(),
  orderBy: z.union([ sigunguOrderByWithRelationInputSchema.array(),sigunguOrderByWithRelationInputSchema ]).optional(),
  cursor: sigunguWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SigunguScalarFieldEnumSchema,SigunguScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const sigunguAggregateArgsSchema: z.ZodType<Prisma.SigunguAggregateArgs> = z.object({
  where: sigunguWhereInputSchema.optional(),
  orderBy: z.union([ sigunguOrderByWithRelationInputSchema.array(),sigunguOrderByWithRelationInputSchema ]).optional(),
  cursor: sigunguWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const sigunguGroupByArgsSchema: z.ZodType<Prisma.sigunguGroupByArgs> = z.object({
  where: sigunguWhereInputSchema.optional(),
  orderBy: z.union([ sigunguOrderByWithAggregationInputSchema.array(),sigunguOrderByWithAggregationInputSchema ]).optional(),
  by: SigunguScalarFieldEnumSchema.array(),
  having: sigunguScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const sigunguFindUniqueArgsSchema: z.ZodType<Prisma.sigunguFindUniqueArgs> = z.object({
  select: sigunguSelectSchema.optional(),
  where: sigunguWhereUniqueInputSchema,
}).strict() ;

export const sigunguFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.sigunguFindUniqueOrThrowArgs> = z.object({
  select: sigunguSelectSchema.optional(),
  where: sigunguWhereUniqueInputSchema,
}).strict() ;

export const userFindFirstArgsSchema: z.ZodType<Prisma.userFindFirstArgs> = z.object({
  select: userSelectSchema.optional(),
  where: userWhereInputSchema.optional(),
  orderBy: z.union([ userOrderByWithRelationInputSchema.array(),userOrderByWithRelationInputSchema ]).optional(),
  cursor: userWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const userFindFirstOrThrowArgsSchema: z.ZodType<Prisma.userFindFirstOrThrowArgs> = z.object({
  select: userSelectSchema.optional(),
  where: userWhereInputSchema.optional(),
  orderBy: z.union([ userOrderByWithRelationInputSchema.array(),userOrderByWithRelationInputSchema ]).optional(),
  cursor: userWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const userFindManyArgsSchema: z.ZodType<Prisma.userFindManyArgs> = z.object({
  select: userSelectSchema.optional(),
  where: userWhereInputSchema.optional(),
  orderBy: z.union([ userOrderByWithRelationInputSchema.array(),userOrderByWithRelationInputSchema ]).optional(),
  cursor: userWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const userAggregateArgsSchema: z.ZodType<Prisma.UserAggregateArgs> = z.object({
  where: userWhereInputSchema.optional(),
  orderBy: z.union([ userOrderByWithRelationInputSchema.array(),userOrderByWithRelationInputSchema ]).optional(),
  cursor: userWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const userGroupByArgsSchema: z.ZodType<Prisma.userGroupByArgs> = z.object({
  where: userWhereInputSchema.optional(),
  orderBy: z.union([ userOrderByWithAggregationInputSchema.array(),userOrderByWithAggregationInputSchema ]).optional(),
  by: UserScalarFieldEnumSchema.array(),
  having: userScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const userFindUniqueArgsSchema: z.ZodType<Prisma.userFindUniqueArgs> = z.object({
  select: userSelectSchema.optional(),
  where: userWhereUniqueInputSchema,
}).strict() ;

export const userFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.userFindUniqueOrThrowArgs> = z.object({
  select: userSelectSchema.optional(),
  where: userWhereUniqueInputSchema,
}).strict() ;

export const user_positionFindFirstArgsSchema: z.ZodType<Prisma.user_positionFindFirstArgs> = z.object({
  select: user_positionSelectSchema.optional(),
  where: user_positionWhereInputSchema.optional(),
  orderBy: z.union([ user_positionOrderByWithRelationInputSchema.array(),user_positionOrderByWithRelationInputSchema ]).optional(),
  cursor: user_positionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ User_positionScalarFieldEnumSchema,User_positionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const user_positionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.user_positionFindFirstOrThrowArgs> = z.object({
  select: user_positionSelectSchema.optional(),
  where: user_positionWhereInputSchema.optional(),
  orderBy: z.union([ user_positionOrderByWithRelationInputSchema.array(),user_positionOrderByWithRelationInputSchema ]).optional(),
  cursor: user_positionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ User_positionScalarFieldEnumSchema,User_positionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const user_positionFindManyArgsSchema: z.ZodType<Prisma.user_positionFindManyArgs> = z.object({
  select: user_positionSelectSchema.optional(),
  where: user_positionWhereInputSchema.optional(),
  orderBy: z.union([ user_positionOrderByWithRelationInputSchema.array(),user_positionOrderByWithRelationInputSchema ]).optional(),
  cursor: user_positionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ User_positionScalarFieldEnumSchema,User_positionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const user_positionAggregateArgsSchema: z.ZodType<Prisma.User_positionAggregateArgs> = z.object({
  where: user_positionWhereInputSchema.optional(),
  orderBy: z.union([ user_positionOrderByWithRelationInputSchema.array(),user_positionOrderByWithRelationInputSchema ]).optional(),
  cursor: user_positionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const user_positionGroupByArgsSchema: z.ZodType<Prisma.user_positionGroupByArgs> = z.object({
  where: user_positionWhereInputSchema.optional(),
  orderBy: z.union([ user_positionOrderByWithAggregationInputSchema.array(),user_positionOrderByWithAggregationInputSchema ]).optional(),
  by: User_positionScalarFieldEnumSchema.array(),
  having: user_positionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const user_positionFindUniqueArgsSchema: z.ZodType<Prisma.user_positionFindUniqueArgs> = z.object({
  select: user_positionSelectSchema.optional(),
  where: user_positionWhereUniqueInputSchema,
}).strict() ;

export const user_positionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.user_positionFindUniqueOrThrowArgs> = z.object({
  select: user_positionSelectSchema.optional(),
  where: user_positionWhereUniqueInputSchema,
}).strict() ;

export const user_role_assignmentFindFirstArgsSchema: z.ZodType<Prisma.user_role_assignmentFindFirstArgs> = z.object({
  select: user_role_assignmentSelectSchema.optional(),
  where: user_role_assignmentWhereInputSchema.optional(),
  orderBy: z.union([ user_role_assignmentOrderByWithRelationInputSchema.array(),user_role_assignmentOrderByWithRelationInputSchema ]).optional(),
  cursor: user_role_assignmentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ User_role_assignmentScalarFieldEnumSchema,User_role_assignmentScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const user_role_assignmentFindFirstOrThrowArgsSchema: z.ZodType<Prisma.user_role_assignmentFindFirstOrThrowArgs> = z.object({
  select: user_role_assignmentSelectSchema.optional(),
  where: user_role_assignmentWhereInputSchema.optional(),
  orderBy: z.union([ user_role_assignmentOrderByWithRelationInputSchema.array(),user_role_assignmentOrderByWithRelationInputSchema ]).optional(),
  cursor: user_role_assignmentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ User_role_assignmentScalarFieldEnumSchema,User_role_assignmentScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const user_role_assignmentFindManyArgsSchema: z.ZodType<Prisma.user_role_assignmentFindManyArgs> = z.object({
  select: user_role_assignmentSelectSchema.optional(),
  where: user_role_assignmentWhereInputSchema.optional(),
  orderBy: z.union([ user_role_assignmentOrderByWithRelationInputSchema.array(),user_role_assignmentOrderByWithRelationInputSchema ]).optional(),
  cursor: user_role_assignmentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ User_role_assignmentScalarFieldEnumSchema,User_role_assignmentScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const user_role_assignmentAggregateArgsSchema: z.ZodType<Prisma.User_role_assignmentAggregateArgs> = z.object({
  where: user_role_assignmentWhereInputSchema.optional(),
  orderBy: z.union([ user_role_assignmentOrderByWithRelationInputSchema.array(),user_role_assignmentOrderByWithRelationInputSchema ]).optional(),
  cursor: user_role_assignmentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const user_role_assignmentGroupByArgsSchema: z.ZodType<Prisma.user_role_assignmentGroupByArgs> = z.object({
  where: user_role_assignmentWhereInputSchema.optional(),
  orderBy: z.union([ user_role_assignmentOrderByWithAggregationInputSchema.array(),user_role_assignmentOrderByWithAggregationInputSchema ]).optional(),
  by: User_role_assignmentScalarFieldEnumSchema.array(),
  having: user_role_assignmentScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const user_role_assignmentFindUniqueArgsSchema: z.ZodType<Prisma.user_role_assignmentFindUniqueArgs> = z.object({
  select: user_role_assignmentSelectSchema.optional(),
  where: user_role_assignmentWhereUniqueInputSchema,
}).strict() ;

export const user_role_assignmentFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.user_role_assignmentFindUniqueOrThrowArgs> = z.object({
  select: user_role_assignmentSelectSchema.optional(),
  where: user_role_assignmentWhereUniqueInputSchema,
}).strict() ;

export const warehouseFindFirstArgsSchema: z.ZodType<Prisma.warehouseFindFirstArgs> = z.object({
  select: warehouseSelectSchema.optional(),
  where: warehouseWhereInputSchema.optional(),
  orderBy: z.union([ warehouseOrderByWithRelationInputSchema.array(),warehouseOrderByWithRelationInputSchema ]).optional(),
  cursor: warehouseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ WarehouseScalarFieldEnumSchema,WarehouseScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const warehouseFindFirstOrThrowArgsSchema: z.ZodType<Prisma.warehouseFindFirstOrThrowArgs> = z.object({
  select: warehouseSelectSchema.optional(),
  where: warehouseWhereInputSchema.optional(),
  orderBy: z.union([ warehouseOrderByWithRelationInputSchema.array(),warehouseOrderByWithRelationInputSchema ]).optional(),
  cursor: warehouseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ WarehouseScalarFieldEnumSchema,WarehouseScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const warehouseFindManyArgsSchema: z.ZodType<Prisma.warehouseFindManyArgs> = z.object({
  select: warehouseSelectSchema.optional(),
  where: warehouseWhereInputSchema.optional(),
  orderBy: z.union([ warehouseOrderByWithRelationInputSchema.array(),warehouseOrderByWithRelationInputSchema ]).optional(),
  cursor: warehouseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ WarehouseScalarFieldEnumSchema,WarehouseScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const warehouseAggregateArgsSchema: z.ZodType<Prisma.WarehouseAggregateArgs> = z.object({
  where: warehouseWhereInputSchema.optional(),
  orderBy: z.union([ warehouseOrderByWithRelationInputSchema.array(),warehouseOrderByWithRelationInputSchema ]).optional(),
  cursor: warehouseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const warehouseGroupByArgsSchema: z.ZodType<Prisma.warehouseGroupByArgs> = z.object({
  where: warehouseWhereInputSchema.optional(),
  orderBy: z.union([ warehouseOrderByWithAggregationInputSchema.array(),warehouseOrderByWithAggregationInputSchema ]).optional(),
  by: WarehouseScalarFieldEnumSchema.array(),
  having: warehouseScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const warehouseFindUniqueArgsSchema: z.ZodType<Prisma.warehouseFindUniqueArgs> = z.object({
  select: warehouseSelectSchema.optional(),
  where: warehouseWhereUniqueInputSchema,
}).strict() ;

export const warehouseFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.warehouseFindUniqueOrThrowArgs> = z.object({
  select: warehouseSelectSchema.optional(),
  where: warehouseWhereUniqueInputSchema,
}).strict() ;

export const v_clientFindFirstArgsSchema: z.ZodType<Prisma.v_clientFindFirstArgs> = z.object({
  select: v_clientSelectSchema.optional(),
  where: v_clientWhereInputSchema.optional(),
  orderBy: z.union([ v_clientOrderByWithRelationInputSchema.array(),v_clientOrderByWithRelationInputSchema ]).optional(),
  cursor: v_clientWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ V_clientScalarFieldEnumSchema,V_clientScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const v_clientFindFirstOrThrowArgsSchema: z.ZodType<Prisma.v_clientFindFirstOrThrowArgs> = z.object({
  select: v_clientSelectSchema.optional(),
  where: v_clientWhereInputSchema.optional(),
  orderBy: z.union([ v_clientOrderByWithRelationInputSchema.array(),v_clientOrderByWithRelationInputSchema ]).optional(),
  cursor: v_clientWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ V_clientScalarFieldEnumSchema,V_clientScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const v_clientFindManyArgsSchema: z.ZodType<Prisma.v_clientFindManyArgs> = z.object({
  select: v_clientSelectSchema.optional(),
  where: v_clientWhereInputSchema.optional(),
  orderBy: z.union([ v_clientOrderByWithRelationInputSchema.array(),v_clientOrderByWithRelationInputSchema ]).optional(),
  cursor: v_clientWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ V_clientScalarFieldEnumSchema,V_clientScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const v_clientAggregateArgsSchema: z.ZodType<Prisma.V_clientAggregateArgs> = z.object({
  where: v_clientWhereInputSchema.optional(),
  orderBy: z.union([ v_clientOrderByWithRelationInputSchema.array(),v_clientOrderByWithRelationInputSchema ]).optional(),
  cursor: v_clientWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const v_clientGroupByArgsSchema: z.ZodType<Prisma.v_clientGroupByArgs> = z.object({
  where: v_clientWhereInputSchema.optional(),
  orderBy: z.union([ v_clientOrderByWithAggregationInputSchema.array(),v_clientOrderByWithAggregationInputSchema ]).optional(),
  by: V_clientScalarFieldEnumSchema.array(),
  having: v_clientScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const v_clientFindUniqueArgsSchema: z.ZodType<Prisma.v_clientFindUniqueArgs> = z.object({
  select: v_clientSelectSchema.optional(),
  where: v_clientWhereUniqueInputSchema,
}).strict() ;

export const v_clientFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.v_clientFindUniqueOrThrowArgs> = z.object({
  select: v_clientSelectSchema.optional(),
  where: v_clientWhereUniqueInputSchema,
}).strict() ;

export const v_client_branchFindFirstArgsSchema: z.ZodType<Prisma.v_client_branchFindFirstArgs> = z.object({
  select: v_client_branchSelectSchema.optional(),
  where: v_client_branchWhereInputSchema.optional(),
  orderBy: z.union([ v_client_branchOrderByWithRelationInputSchema.array(),v_client_branchOrderByWithRelationInputSchema ]).optional(),
  cursor: v_client_branchWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ V_client_branchScalarFieldEnumSchema,V_client_branchScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const v_client_branchFindFirstOrThrowArgsSchema: z.ZodType<Prisma.v_client_branchFindFirstOrThrowArgs> = z.object({
  select: v_client_branchSelectSchema.optional(),
  where: v_client_branchWhereInputSchema.optional(),
  orderBy: z.union([ v_client_branchOrderByWithRelationInputSchema.array(),v_client_branchOrderByWithRelationInputSchema ]).optional(),
  cursor: v_client_branchWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ V_client_branchScalarFieldEnumSchema,V_client_branchScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const v_client_branchFindManyArgsSchema: z.ZodType<Prisma.v_client_branchFindManyArgs> = z.object({
  select: v_client_branchSelectSchema.optional(),
  where: v_client_branchWhereInputSchema.optional(),
  orderBy: z.union([ v_client_branchOrderByWithRelationInputSchema.array(),v_client_branchOrderByWithRelationInputSchema ]).optional(),
  cursor: v_client_branchWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ V_client_branchScalarFieldEnumSchema,V_client_branchScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const v_client_branchAggregateArgsSchema: z.ZodType<Prisma.V_client_branchAggregateArgs> = z.object({
  where: v_client_branchWhereInputSchema.optional(),
  orderBy: z.union([ v_client_branchOrderByWithRelationInputSchema.array(),v_client_branchOrderByWithRelationInputSchema ]).optional(),
  cursor: v_client_branchWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const v_client_branchGroupByArgsSchema: z.ZodType<Prisma.v_client_branchGroupByArgs> = z.object({
  where: v_client_branchWhereInputSchema.optional(),
  orderBy: z.union([ v_client_branchOrderByWithAggregationInputSchema.array(),v_client_branchOrderByWithAggregationInputSchema ]).optional(),
  by: V_client_branchScalarFieldEnumSchema.array(),
  having: v_client_branchScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const v_client_branchFindUniqueArgsSchema: z.ZodType<Prisma.v_client_branchFindUniqueArgs> = z.object({
  select: v_client_branchSelectSchema.optional(),
  where: v_client_branchWhereUniqueInputSchema,
}).strict() ;

export const v_client_branchFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.v_client_branchFindUniqueOrThrowArgs> = z.object({
  select: v_client_branchSelectSchema.optional(),
  where: v_client_branchWhereUniqueInputSchema,
}).strict() ;

export const v_consumable_modelFindFirstArgsSchema: z.ZodType<Prisma.v_consumable_modelFindFirstArgs> = z.object({
  select: v_consumable_modelSelectSchema.optional(),
  where: v_consumable_modelWhereInputSchema.optional(),
  orderBy: z.union([ v_consumable_modelOrderByWithRelationInputSchema.array(),v_consumable_modelOrderByWithRelationInputSchema ]).optional(),
  cursor: v_consumable_modelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ V_consumable_modelScalarFieldEnumSchema,V_consumable_modelScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const v_consumable_modelFindFirstOrThrowArgsSchema: z.ZodType<Prisma.v_consumable_modelFindFirstOrThrowArgs> = z.object({
  select: v_consumable_modelSelectSchema.optional(),
  where: v_consumable_modelWhereInputSchema.optional(),
  orderBy: z.union([ v_consumable_modelOrderByWithRelationInputSchema.array(),v_consumable_modelOrderByWithRelationInputSchema ]).optional(),
  cursor: v_consumable_modelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ V_consumable_modelScalarFieldEnumSchema,V_consumable_modelScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const v_consumable_modelFindManyArgsSchema: z.ZodType<Prisma.v_consumable_modelFindManyArgs> = z.object({
  select: v_consumable_modelSelectSchema.optional(),
  where: v_consumable_modelWhereInputSchema.optional(),
  orderBy: z.union([ v_consumable_modelOrderByWithRelationInputSchema.array(),v_consumable_modelOrderByWithRelationInputSchema ]).optional(),
  cursor: v_consumable_modelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ V_consumable_modelScalarFieldEnumSchema,V_consumable_modelScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const v_consumable_modelAggregateArgsSchema: z.ZodType<Prisma.V_consumable_modelAggregateArgs> = z.object({
  where: v_consumable_modelWhereInputSchema.optional(),
  orderBy: z.union([ v_consumable_modelOrderByWithRelationInputSchema.array(),v_consumable_modelOrderByWithRelationInputSchema ]).optional(),
  cursor: v_consumable_modelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const v_consumable_modelGroupByArgsSchema: z.ZodType<Prisma.v_consumable_modelGroupByArgs> = z.object({
  where: v_consumable_modelWhereInputSchema.optional(),
  orderBy: z.union([ v_consumable_modelOrderByWithAggregationInputSchema.array(),v_consumable_modelOrderByWithAggregationInputSchema ]).optional(),
  by: V_consumable_modelScalarFieldEnumSchema.array(),
  having: v_consumable_modelScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const v_consumable_modelFindUniqueArgsSchema: z.ZodType<Prisma.v_consumable_modelFindUniqueArgs> = z.object({
  select: v_consumable_modelSelectSchema.optional(),
  where: v_consumable_modelWhereUniqueInputSchema,
}).strict() ;

export const v_consumable_modelFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.v_consumable_modelFindUniqueOrThrowArgs> = z.object({
  select: v_consumable_modelSelectSchema.optional(),
  where: v_consumable_modelWhereUniqueInputSchema,
}).strict() ;

export const v_deptFindFirstArgsSchema: z.ZodType<Prisma.v_deptFindFirstArgs> = z.object({
  select: v_deptSelectSchema.optional(),
  where: v_deptWhereInputSchema.optional(),
  orderBy: z.union([ v_deptOrderByWithRelationInputSchema.array(),v_deptOrderByWithRelationInputSchema ]).optional(),
  cursor: v_deptWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ V_deptScalarFieldEnumSchema,V_deptScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const v_deptFindFirstOrThrowArgsSchema: z.ZodType<Prisma.v_deptFindFirstOrThrowArgs> = z.object({
  select: v_deptSelectSchema.optional(),
  where: v_deptWhereInputSchema.optional(),
  orderBy: z.union([ v_deptOrderByWithRelationInputSchema.array(),v_deptOrderByWithRelationInputSchema ]).optional(),
  cursor: v_deptWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ V_deptScalarFieldEnumSchema,V_deptScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const v_deptFindManyArgsSchema: z.ZodType<Prisma.v_deptFindManyArgs> = z.object({
  select: v_deptSelectSchema.optional(),
  where: v_deptWhereInputSchema.optional(),
  orderBy: z.union([ v_deptOrderByWithRelationInputSchema.array(),v_deptOrderByWithRelationInputSchema ]).optional(),
  cursor: v_deptWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ V_deptScalarFieldEnumSchema,V_deptScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const v_deptAggregateArgsSchema: z.ZodType<Prisma.V_deptAggregateArgs> = z.object({
  where: v_deptWhereInputSchema.optional(),
  orderBy: z.union([ v_deptOrderByWithRelationInputSchema.array(),v_deptOrderByWithRelationInputSchema ]).optional(),
  cursor: v_deptWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const v_deptGroupByArgsSchema: z.ZodType<Prisma.v_deptGroupByArgs> = z.object({
  where: v_deptWhereInputSchema.optional(),
  orderBy: z.union([ v_deptOrderByWithAggregationInputSchema.array(),v_deptOrderByWithAggregationInputSchema ]).optional(),
  by: V_deptScalarFieldEnumSchema.array(),
  having: v_deptScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const v_deptFindUniqueArgsSchema: z.ZodType<Prisma.v_deptFindUniqueArgs> = z.object({
  select: v_deptSelectSchema.optional(),
  where: v_deptWhereUniqueInputSchema,
}).strict() ;

export const v_deptFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.v_deptFindUniqueOrThrowArgs> = z.object({
  select: v_deptSelectSchema.optional(),
  where: v_deptWhereUniqueInputSchema,
}).strict() ;

export const v_device_driverFindFirstArgsSchema: z.ZodType<Prisma.v_device_driverFindFirstArgs> = z.object({
  select: v_device_driverSelectSchema.optional(),
  where: v_device_driverWhereInputSchema.optional(),
  orderBy: z.union([ v_device_driverOrderByWithRelationInputSchema.array(),v_device_driverOrderByWithRelationInputSchema ]).optional(),
  cursor: v_device_driverWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ V_device_driverScalarFieldEnumSchema,V_device_driverScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const v_device_driverFindFirstOrThrowArgsSchema: z.ZodType<Prisma.v_device_driverFindFirstOrThrowArgs> = z.object({
  select: v_device_driverSelectSchema.optional(),
  where: v_device_driverWhereInputSchema.optional(),
  orderBy: z.union([ v_device_driverOrderByWithRelationInputSchema.array(),v_device_driverOrderByWithRelationInputSchema ]).optional(),
  cursor: v_device_driverWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ V_device_driverScalarFieldEnumSchema,V_device_driverScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const v_device_driverFindManyArgsSchema: z.ZodType<Prisma.v_device_driverFindManyArgs> = z.object({
  select: v_device_driverSelectSchema.optional(),
  where: v_device_driverWhereInputSchema.optional(),
  orderBy: z.union([ v_device_driverOrderByWithRelationInputSchema.array(),v_device_driverOrderByWithRelationInputSchema ]).optional(),
  cursor: v_device_driverWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ V_device_driverScalarFieldEnumSchema,V_device_driverScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const v_device_driverAggregateArgsSchema: z.ZodType<Prisma.V_device_driverAggregateArgs> = z.object({
  where: v_device_driverWhereInputSchema.optional(),
  orderBy: z.union([ v_device_driverOrderByWithRelationInputSchema.array(),v_device_driverOrderByWithRelationInputSchema ]).optional(),
  cursor: v_device_driverWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const v_device_driverGroupByArgsSchema: z.ZodType<Prisma.v_device_driverGroupByArgs> = z.object({
  where: v_device_driverWhereInputSchema.optional(),
  orderBy: z.union([ v_device_driverOrderByWithAggregationInputSchema.array(),v_device_driverOrderByWithAggregationInputSchema ]).optional(),
  by: V_device_driverScalarFieldEnumSchema.array(),
  having: v_device_driverScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const v_device_driverFindUniqueArgsSchema: z.ZodType<Prisma.v_device_driverFindUniqueArgs> = z.object({
  select: v_device_driverSelectSchema.optional(),
  where: v_device_driverWhereUniqueInputSchema,
}).strict() ;

export const v_device_driverFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.v_device_driverFindUniqueOrThrowArgs> = z.object({
  select: v_device_driverSelectSchema.optional(),
  where: v_device_driverWhereUniqueInputSchema,
}).strict() ;

export const v_userFindFirstArgsSchema: z.ZodType<Prisma.v_userFindFirstArgs> = z.object({
  select: v_userSelectSchema.optional(),
  where: v_userWhereInputSchema.optional(),
  orderBy: z.union([ v_userOrderByWithRelationInputSchema.array(),v_userOrderByWithRelationInputSchema ]).optional(),
  cursor: v_userWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ V_userScalarFieldEnumSchema,V_userScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const v_userFindFirstOrThrowArgsSchema: z.ZodType<Prisma.v_userFindFirstOrThrowArgs> = z.object({
  select: v_userSelectSchema.optional(),
  where: v_userWhereInputSchema.optional(),
  orderBy: z.union([ v_userOrderByWithRelationInputSchema.array(),v_userOrderByWithRelationInputSchema ]).optional(),
  cursor: v_userWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ V_userScalarFieldEnumSchema,V_userScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const v_userFindManyArgsSchema: z.ZodType<Prisma.v_userFindManyArgs> = z.object({
  select: v_userSelectSchema.optional(),
  where: v_userWhereInputSchema.optional(),
  orderBy: z.union([ v_userOrderByWithRelationInputSchema.array(),v_userOrderByWithRelationInputSchema ]).optional(),
  cursor: v_userWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ V_userScalarFieldEnumSchema,V_userScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const v_userAggregateArgsSchema: z.ZodType<Prisma.V_userAggregateArgs> = z.object({
  where: v_userWhereInputSchema.optional(),
  orderBy: z.union([ v_userOrderByWithRelationInputSchema.array(),v_userOrderByWithRelationInputSchema ]).optional(),
  cursor: v_userWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const v_userGroupByArgsSchema: z.ZodType<Prisma.v_userGroupByArgs> = z.object({
  where: v_userWhereInputSchema.optional(),
  orderBy: z.union([ v_userOrderByWithAggregationInputSchema.array(),v_userOrderByWithAggregationInputSchema ]).optional(),
  by: V_userScalarFieldEnumSchema.array(),
  having: v_userScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const v_userFindUniqueArgsSchema: z.ZodType<Prisma.v_userFindUniqueArgs> = z.object({
  select: v_userSelectSchema.optional(),
  where: v_userWhereUniqueInputSchema,
}).strict() ;

export const v_userFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.v_userFindUniqueOrThrowArgs> = z.object({
  select: v_userSelectSchema.optional(),
  where: v_userWhereUniqueInputSchema,
}).strict() ;

export const v_warehouseFindFirstArgsSchema: z.ZodType<Prisma.v_warehouseFindFirstArgs> = z.object({
  select: v_warehouseSelectSchema.optional(),
  where: v_warehouseWhereInputSchema.optional(),
  orderBy: z.union([ v_warehouseOrderByWithRelationInputSchema.array(),v_warehouseOrderByWithRelationInputSchema ]).optional(),
  cursor: v_warehouseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ V_warehouseScalarFieldEnumSchema,V_warehouseScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const v_warehouseFindFirstOrThrowArgsSchema: z.ZodType<Prisma.v_warehouseFindFirstOrThrowArgs> = z.object({
  select: v_warehouseSelectSchema.optional(),
  where: v_warehouseWhereInputSchema.optional(),
  orderBy: z.union([ v_warehouseOrderByWithRelationInputSchema.array(),v_warehouseOrderByWithRelationInputSchema ]).optional(),
  cursor: v_warehouseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ V_warehouseScalarFieldEnumSchema,V_warehouseScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const v_warehouseFindManyArgsSchema: z.ZodType<Prisma.v_warehouseFindManyArgs> = z.object({
  select: v_warehouseSelectSchema.optional(),
  where: v_warehouseWhereInputSchema.optional(),
  orderBy: z.union([ v_warehouseOrderByWithRelationInputSchema.array(),v_warehouseOrderByWithRelationInputSchema ]).optional(),
  cursor: v_warehouseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ V_warehouseScalarFieldEnumSchema,V_warehouseScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const v_warehouseAggregateArgsSchema: z.ZodType<Prisma.V_warehouseAggregateArgs> = z.object({
  where: v_warehouseWhereInputSchema.optional(),
  orderBy: z.union([ v_warehouseOrderByWithRelationInputSchema.array(),v_warehouseOrderByWithRelationInputSchema ]).optional(),
  cursor: v_warehouseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const v_warehouseGroupByArgsSchema: z.ZodType<Prisma.v_warehouseGroupByArgs> = z.object({
  where: v_warehouseWhereInputSchema.optional(),
  orderBy: z.union([ v_warehouseOrderByWithAggregationInputSchema.array(),v_warehouseOrderByWithAggregationInputSchema ]).optional(),
  by: V_warehouseScalarFieldEnumSchema.array(),
  having: v_warehouseScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const v_warehouseFindUniqueArgsSchema: z.ZodType<Prisma.v_warehouseFindUniqueArgs> = z.object({
  select: v_warehouseSelectSchema.optional(),
  where: v_warehouseWhereUniqueInputSchema,
}).strict() ;

export const v_warehouseFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.v_warehouseFindUniqueOrThrowArgs> = z.object({
  select: v_warehouseSelectSchema.optional(),
  where: v_warehouseWhereUniqueInputSchema,
}).strict() ;

export const v_deviceFindFirstArgsSchema: z.ZodType<Prisma.v_deviceFindFirstArgs> = z.object({
  select: v_deviceSelectSchema.optional(),
  where: v_deviceWhereInputSchema.optional(),
  orderBy: z.union([ v_deviceOrderByWithRelationInputSchema.array(),v_deviceOrderByWithRelationInputSchema ]).optional(),
  cursor: v_deviceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ V_deviceScalarFieldEnumSchema,V_deviceScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const v_deviceFindFirstOrThrowArgsSchema: z.ZodType<Prisma.v_deviceFindFirstOrThrowArgs> = z.object({
  select: v_deviceSelectSchema.optional(),
  where: v_deviceWhereInputSchema.optional(),
  orderBy: z.union([ v_deviceOrderByWithRelationInputSchema.array(),v_deviceOrderByWithRelationInputSchema ]).optional(),
  cursor: v_deviceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ V_deviceScalarFieldEnumSchema,V_deviceScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const v_deviceFindManyArgsSchema: z.ZodType<Prisma.v_deviceFindManyArgs> = z.object({
  select: v_deviceSelectSchema.optional(),
  where: v_deviceWhereInputSchema.optional(),
  orderBy: z.union([ v_deviceOrderByWithRelationInputSchema.array(),v_deviceOrderByWithRelationInputSchema ]).optional(),
  cursor: v_deviceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ V_deviceScalarFieldEnumSchema,V_deviceScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const v_deviceAggregateArgsSchema: z.ZodType<Prisma.V_deviceAggregateArgs> = z.object({
  where: v_deviceWhereInputSchema.optional(),
  orderBy: z.union([ v_deviceOrderByWithRelationInputSchema.array(),v_deviceOrderByWithRelationInputSchema ]).optional(),
  cursor: v_deviceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const v_deviceGroupByArgsSchema: z.ZodType<Prisma.v_deviceGroupByArgs> = z.object({
  where: v_deviceWhereInputSchema.optional(),
  orderBy: z.union([ v_deviceOrderByWithAggregationInputSchema.array(),v_deviceOrderByWithAggregationInputSchema ]).optional(),
  by: V_deviceScalarFieldEnumSchema.array(),
  having: v_deviceScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const v_deviceFindUniqueArgsSchema: z.ZodType<Prisma.v_deviceFindUniqueArgs> = z.object({
  select: v_deviceSelectSchema.optional(),
  where: v_deviceWhereUniqueInputSchema,
}).strict() ;

export const v_deviceFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.v_deviceFindUniqueOrThrowArgs> = z.object({
  select: v_deviceSelectSchema.optional(),
  where: v_deviceWhereUniqueInputSchema,
}).strict() ;

export const approval_roleCreateArgsSchema: z.ZodType<Prisma.approval_roleCreateArgs> = z.object({
  select: approval_roleSelectSchema.optional(),
  data: z.union([ approval_roleCreateInputSchema,approval_roleUncheckedCreateInputSchema ]),
}).strict() ;

export const approval_roleUpsertArgsSchema: z.ZodType<Prisma.approval_roleUpsertArgs> = z.object({
  select: approval_roleSelectSchema.optional(),
  where: approval_roleWhereUniqueInputSchema,
  create: z.union([ approval_roleCreateInputSchema,approval_roleUncheckedCreateInputSchema ]),
  update: z.union([ approval_roleUpdateInputSchema,approval_roleUncheckedUpdateInputSchema ]),
}).strict() ;

export const approval_roleCreateManyArgsSchema: z.ZodType<Prisma.approval_roleCreateManyArgs> = z.object({
  data: z.union([ approval_roleCreateManyInputSchema,approval_roleCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const approval_roleDeleteArgsSchema: z.ZodType<Prisma.approval_roleDeleteArgs> = z.object({
  select: approval_roleSelectSchema.optional(),
  where: approval_roleWhereUniqueInputSchema,
}).strict() ;

export const approval_roleUpdateArgsSchema: z.ZodType<Prisma.approval_roleUpdateArgs> = z.object({
  select: approval_roleSelectSchema.optional(),
  data: z.union([ approval_roleUpdateInputSchema,approval_roleUncheckedUpdateInputSchema ]),
  where: approval_roleWhereUniqueInputSchema,
}).strict() ;

export const approval_roleUpdateManyArgsSchema: z.ZodType<Prisma.approval_roleUpdateManyArgs> = z.object({
  data: z.union([ approval_roleUpdateManyMutationInputSchema,approval_roleUncheckedUpdateManyInputSchema ]),
  where: approval_roleWhereInputSchema.optional(),
}).strict() ;

export const approval_roleDeleteManyArgsSchema: z.ZodType<Prisma.approval_roleDeleteManyArgs> = z.object({
  where: approval_roleWhereInputSchema.optional(),
}).strict() ;

export const callCreateArgsSchema: z.ZodType<Prisma.callCreateArgs> = z.object({
  select: callSelectSchema.optional(),
  data: z.union([ callCreateInputSchema,callUncheckedCreateInputSchema ]),
}).strict() ;

export const callUpsertArgsSchema: z.ZodType<Prisma.callUpsertArgs> = z.object({
  select: callSelectSchema.optional(),
  where: callWhereUniqueInputSchema,
  create: z.union([ callCreateInputSchema,callUncheckedCreateInputSchema ]),
  update: z.union([ callUpdateInputSchema,callUncheckedUpdateInputSchema ]),
}).strict() ;

export const callCreateManyArgsSchema: z.ZodType<Prisma.callCreateManyArgs> = z.object({
  data: z.union([ callCreateManyInputSchema,callCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const callDeleteArgsSchema: z.ZodType<Prisma.callDeleteArgs> = z.object({
  select: callSelectSchema.optional(),
  where: callWhereUniqueInputSchema,
}).strict() ;

export const callUpdateArgsSchema: z.ZodType<Prisma.callUpdateArgs> = z.object({
  select: callSelectSchema.optional(),
  data: z.union([ callUpdateInputSchema,callUncheckedUpdateInputSchema ]),
  where: callWhereUniqueInputSchema,
}).strict() ;

export const callUpdateManyArgsSchema: z.ZodType<Prisma.callUpdateManyArgs> = z.object({
  data: z.union([ callUpdateManyMutationInputSchema,callUncheckedUpdateManyInputSchema ]),
  where: callWhereInputSchema.optional(),
}).strict() ;

export const callDeleteManyArgsSchema: z.ZodType<Prisma.callDeleteManyArgs> = z.object({
  where: callWhereInputSchema.optional(),
}).strict() ;

export const call_typeCreateArgsSchema: z.ZodType<Prisma.call_typeCreateArgs> = z.object({
  select: call_typeSelectSchema.optional(),
  data: z.union([ call_typeCreateInputSchema,call_typeUncheckedCreateInputSchema ]),
}).strict() ;

export const call_typeUpsertArgsSchema: z.ZodType<Prisma.call_typeUpsertArgs> = z.object({
  select: call_typeSelectSchema.optional(),
  where: call_typeWhereUniqueInputSchema,
  create: z.union([ call_typeCreateInputSchema,call_typeUncheckedCreateInputSchema ]),
  update: z.union([ call_typeUpdateInputSchema,call_typeUncheckedUpdateInputSchema ]),
}).strict() ;

export const call_typeCreateManyArgsSchema: z.ZodType<Prisma.call_typeCreateManyArgs> = z.object({
  data: z.union([ call_typeCreateManyInputSchema,call_typeCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const call_typeDeleteArgsSchema: z.ZodType<Prisma.call_typeDeleteArgs> = z.object({
  select: call_typeSelectSchema.optional(),
  where: call_typeWhereUniqueInputSchema,
}).strict() ;

export const call_typeUpdateArgsSchema: z.ZodType<Prisma.call_typeUpdateArgs> = z.object({
  select: call_typeSelectSchema.optional(),
  data: z.union([ call_typeUpdateInputSchema,call_typeUncheckedUpdateInputSchema ]),
  where: call_typeWhereUniqueInputSchema,
}).strict() ;

export const call_typeUpdateManyArgsSchema: z.ZodType<Prisma.call_typeUpdateManyArgs> = z.object({
  data: z.union([ call_typeUpdateManyMutationInputSchema,call_typeUncheckedUpdateManyInputSchema ]),
  where: call_typeWhereInputSchema.optional(),
}).strict() ;

export const call_typeDeleteManyArgsSchema: z.ZodType<Prisma.call_typeDeleteManyArgs> = z.object({
  where: call_typeWhereInputSchema.optional(),
}).strict() ;

export const clientCreateArgsSchema: z.ZodType<Prisma.clientCreateArgs> = z.object({
  select: clientSelectSchema.optional(),
  data: z.union([ clientCreateInputSchema,clientUncheckedCreateInputSchema ]),
}).strict() ;

export const clientUpsertArgsSchema: z.ZodType<Prisma.clientUpsertArgs> = z.object({
  select: clientSelectSchema.optional(),
  where: clientWhereUniqueInputSchema,
  create: z.union([ clientCreateInputSchema,clientUncheckedCreateInputSchema ]),
  update: z.union([ clientUpdateInputSchema,clientUncheckedUpdateInputSchema ]),
}).strict() ;

export const clientCreateManyArgsSchema: z.ZodType<Prisma.clientCreateManyArgs> = z.object({
  data: z.union([ clientCreateManyInputSchema,clientCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const clientDeleteArgsSchema: z.ZodType<Prisma.clientDeleteArgs> = z.object({
  select: clientSelectSchema.optional(),
  where: clientWhereUniqueInputSchema,
}).strict() ;

export const clientUpdateArgsSchema: z.ZodType<Prisma.clientUpdateArgs> = z.object({
  select: clientSelectSchema.optional(),
  data: z.union([ clientUpdateInputSchema,clientUncheckedUpdateInputSchema ]),
  where: clientWhereUniqueInputSchema,
}).strict() ;

export const clientUpdateManyArgsSchema: z.ZodType<Prisma.clientUpdateManyArgs> = z.object({
  data: z.union([ clientUpdateManyMutationInputSchema,clientUncheckedUpdateManyInputSchema ]),
  where: clientWhereInputSchema.optional(),
}).strict() ;

export const clientDeleteManyArgsSchema: z.ZodType<Prisma.clientDeleteManyArgs> = z.object({
  where: clientWhereInputSchema.optional(),
}).strict() ;

export const client_branchCreateArgsSchema: z.ZodType<Prisma.client_branchCreateArgs> = z.object({
  select: client_branchSelectSchema.optional(),
  data: z.union([ client_branchCreateInputSchema,client_branchUncheckedCreateInputSchema ]),
}).strict() ;

export const client_branchUpsertArgsSchema: z.ZodType<Prisma.client_branchUpsertArgs> = z.object({
  select: client_branchSelectSchema.optional(),
  where: client_branchWhereUniqueInputSchema,
  create: z.union([ client_branchCreateInputSchema,client_branchUncheckedCreateInputSchema ]),
  update: z.union([ client_branchUpdateInputSchema,client_branchUncheckedUpdateInputSchema ]),
}).strict() ;

export const client_branchCreateManyArgsSchema: z.ZodType<Prisma.client_branchCreateManyArgs> = z.object({
  data: z.union([ client_branchCreateManyInputSchema,client_branchCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const client_branchDeleteArgsSchema: z.ZodType<Prisma.client_branchDeleteArgs> = z.object({
  select: client_branchSelectSchema.optional(),
  where: client_branchWhereUniqueInputSchema,
}).strict() ;

export const client_branchUpdateArgsSchema: z.ZodType<Prisma.client_branchUpdateArgs> = z.object({
  select: client_branchSelectSchema.optional(),
  data: z.union([ client_branchUpdateInputSchema,client_branchUncheckedUpdateInputSchema ]),
  where: client_branchWhereUniqueInputSchema,
}).strict() ;

export const client_branchUpdateManyArgsSchema: z.ZodType<Prisma.client_branchUpdateManyArgs> = z.object({
  data: z.union([ client_branchUpdateManyMutationInputSchema,client_branchUncheckedUpdateManyInputSchema ]),
  where: client_branchWhereInputSchema.optional(),
}).strict() ;

export const client_branchDeleteManyArgsSchema: z.ZodType<Prisma.client_branchDeleteManyArgs> = z.object({
  where: client_branchWhereInputSchema.optional(),
}).strict() ;

export const client_rateCreateArgsSchema: z.ZodType<Prisma.client_rateCreateArgs> = z.object({
  select: client_rateSelectSchema.optional(),
  data: z.union([ client_rateCreateInputSchema,client_rateUncheckedCreateInputSchema ]),
}).strict() ;

export const client_rateUpsertArgsSchema: z.ZodType<Prisma.client_rateUpsertArgs> = z.object({
  select: client_rateSelectSchema.optional(),
  where: client_rateWhereUniqueInputSchema,
  create: z.union([ client_rateCreateInputSchema,client_rateUncheckedCreateInputSchema ]),
  update: z.union([ client_rateUpdateInputSchema,client_rateUncheckedUpdateInputSchema ]),
}).strict() ;

export const client_rateCreateManyArgsSchema: z.ZodType<Prisma.client_rateCreateManyArgs> = z.object({
  data: z.union([ client_rateCreateManyInputSchema,client_rateCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const client_rateDeleteArgsSchema: z.ZodType<Prisma.client_rateDeleteArgs> = z.object({
  select: client_rateSelectSchema.optional(),
  where: client_rateWhereUniqueInputSchema,
}).strict() ;

export const client_rateUpdateArgsSchema: z.ZodType<Prisma.client_rateUpdateArgs> = z.object({
  select: client_rateSelectSchema.optional(),
  data: z.union([ client_rateUpdateInputSchema,client_rateUncheckedUpdateInputSchema ]),
  where: client_rateWhereUniqueInputSchema,
}).strict() ;

export const client_rateUpdateManyArgsSchema: z.ZodType<Prisma.client_rateUpdateManyArgs> = z.object({
  data: z.union([ client_rateUpdateManyMutationInputSchema,client_rateUncheckedUpdateManyInputSchema ]),
  where: client_rateWhereInputSchema.optional(),
}).strict() ;

export const client_rateDeleteManyArgsSchema: z.ZodType<Prisma.client_rateDeleteManyArgs> = z.object({
  where: client_rateWhereInputSchema.optional(),
}).strict() ;

export const consumable_modelCreateArgsSchema: z.ZodType<Prisma.consumable_modelCreateArgs> = z.object({
  select: consumable_modelSelectSchema.optional(),
  data: z.union([ consumable_modelCreateInputSchema,consumable_modelUncheckedCreateInputSchema ]),
}).strict() ;

export const consumable_modelUpsertArgsSchema: z.ZodType<Prisma.consumable_modelUpsertArgs> = z.object({
  select: consumable_modelSelectSchema.optional(),
  where: consumable_modelWhereUniqueInputSchema,
  create: z.union([ consumable_modelCreateInputSchema,consumable_modelUncheckedCreateInputSchema ]),
  update: z.union([ consumable_modelUpdateInputSchema,consumable_modelUncheckedUpdateInputSchema ]),
}).strict() ;

export const consumable_modelCreateManyArgsSchema: z.ZodType<Prisma.consumable_modelCreateManyArgs> = z.object({
  data: z.union([ consumable_modelCreateManyInputSchema,consumable_modelCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const consumable_modelDeleteArgsSchema: z.ZodType<Prisma.consumable_modelDeleteArgs> = z.object({
  select: consumable_modelSelectSchema.optional(),
  where: consumable_modelWhereUniqueInputSchema,
}).strict() ;

export const consumable_modelUpdateArgsSchema: z.ZodType<Prisma.consumable_modelUpdateArgs> = z.object({
  select: consumable_modelSelectSchema.optional(),
  data: z.union([ consumable_modelUpdateInputSchema,consumable_modelUncheckedUpdateInputSchema ]),
  where: consumable_modelWhereUniqueInputSchema,
}).strict() ;

export const consumable_modelUpdateManyArgsSchema: z.ZodType<Prisma.consumable_modelUpdateManyArgs> = z.object({
  data: z.union([ consumable_modelUpdateManyMutationInputSchema,consumable_modelUncheckedUpdateManyInputSchema ]),
  where: consumable_modelWhereInputSchema.optional(),
}).strict() ;

export const consumable_modelDeleteManyArgsSchema: z.ZodType<Prisma.consumable_modelDeleteManyArgs> = z.object({
  where: consumable_modelWhereInputSchema.optional(),
}).strict() ;

export const deptCreateArgsSchema: z.ZodType<Prisma.deptCreateArgs> = z.object({
  select: deptSelectSchema.optional(),
  data: z.union([ deptCreateInputSchema,deptUncheckedCreateInputSchema ]),
}).strict() ;

export const deptUpsertArgsSchema: z.ZodType<Prisma.deptUpsertArgs> = z.object({
  select: deptSelectSchema.optional(),
  where: deptWhereUniqueInputSchema,
  create: z.union([ deptCreateInputSchema,deptUncheckedCreateInputSchema ]),
  update: z.union([ deptUpdateInputSchema,deptUncheckedUpdateInputSchema ]),
}).strict() ;

export const deptCreateManyArgsSchema: z.ZodType<Prisma.deptCreateManyArgs> = z.object({
  data: z.union([ deptCreateManyInputSchema,deptCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const deptDeleteArgsSchema: z.ZodType<Prisma.deptDeleteArgs> = z.object({
  select: deptSelectSchema.optional(),
  where: deptWhereUniqueInputSchema,
}).strict() ;

export const deptUpdateArgsSchema: z.ZodType<Prisma.deptUpdateArgs> = z.object({
  select: deptSelectSchema.optional(),
  data: z.union([ deptUpdateInputSchema,deptUncheckedUpdateInputSchema ]),
  where: deptWhereUniqueInputSchema,
}).strict() ;

export const deptUpdateManyArgsSchema: z.ZodType<Prisma.deptUpdateManyArgs> = z.object({
  data: z.union([ deptUpdateManyMutationInputSchema,deptUncheckedUpdateManyInputSchema ]),
  where: deptWhereInputSchema.optional(),
}).strict() ;

export const deptDeleteManyArgsSchema: z.ZodType<Prisma.deptDeleteManyArgs> = z.object({
  where: deptWhereInputSchema.optional(),
}).strict() ;

export const deviceCreateArgsSchema: z.ZodType<Prisma.deviceCreateArgs> = z.object({
  select: deviceSelectSchema.optional(),
  data: z.union([ deviceCreateInputSchema,deviceUncheckedCreateInputSchema ]),
}).strict() ;

export const deviceUpsertArgsSchema: z.ZodType<Prisma.deviceUpsertArgs> = z.object({
  select: deviceSelectSchema.optional(),
  where: deviceWhereUniqueInputSchema,
  create: z.union([ deviceCreateInputSchema,deviceUncheckedCreateInputSchema ]),
  update: z.union([ deviceUpdateInputSchema,deviceUncheckedUpdateInputSchema ]),
}).strict() ;

export const deviceCreateManyArgsSchema: z.ZodType<Prisma.deviceCreateManyArgs> = z.object({
  data: z.union([ deviceCreateManyInputSchema,deviceCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const deviceDeleteArgsSchema: z.ZodType<Prisma.deviceDeleteArgs> = z.object({
  select: deviceSelectSchema.optional(),
  where: deviceWhereUniqueInputSchema,
}).strict() ;

export const deviceUpdateArgsSchema: z.ZodType<Prisma.deviceUpdateArgs> = z.object({
  select: deviceSelectSchema.optional(),
  data: z.union([ deviceUpdateInputSchema,deviceUncheckedUpdateInputSchema ]),
  where: deviceWhereUniqueInputSchema,
}).strict() ;

export const deviceUpdateManyArgsSchema: z.ZodType<Prisma.deviceUpdateManyArgs> = z.object({
  data: z.union([ deviceUpdateManyMutationInputSchema,deviceUncheckedUpdateManyInputSchema ]),
  where: deviceWhereInputSchema.optional(),
}).strict() ;

export const deviceDeleteManyArgsSchema: z.ZodType<Prisma.deviceDeleteManyArgs> = z.object({
  where: deviceWhereInputSchema.optional(),
}).strict() ;

export const device_approvalCreateArgsSchema: z.ZodType<Prisma.device_approvalCreateArgs> = z.object({
  select: device_approvalSelectSchema.optional(),
  data: z.union([ device_approvalCreateInputSchema,device_approvalUncheckedCreateInputSchema ]),
}).strict() ;

export const device_approvalUpsertArgsSchema: z.ZodType<Prisma.device_approvalUpsertArgs> = z.object({
  select: device_approvalSelectSchema.optional(),
  where: device_approvalWhereUniqueInputSchema,
  create: z.union([ device_approvalCreateInputSchema,device_approvalUncheckedCreateInputSchema ]),
  update: z.union([ device_approvalUpdateInputSchema,device_approvalUncheckedUpdateInputSchema ]),
}).strict() ;

export const device_approvalCreateManyArgsSchema: z.ZodType<Prisma.device_approvalCreateManyArgs> = z.object({
  data: z.union([ device_approvalCreateManyInputSchema,device_approvalCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const device_approvalDeleteArgsSchema: z.ZodType<Prisma.device_approvalDeleteArgs> = z.object({
  select: device_approvalSelectSchema.optional(),
  where: device_approvalWhereUniqueInputSchema,
}).strict() ;

export const device_approvalUpdateArgsSchema: z.ZodType<Prisma.device_approvalUpdateArgs> = z.object({
  select: device_approvalSelectSchema.optional(),
  data: z.union([ device_approvalUpdateInputSchema,device_approvalUncheckedUpdateInputSchema ]),
  where: device_approvalWhereUniqueInputSchema,
}).strict() ;

export const device_approvalUpdateManyArgsSchema: z.ZodType<Prisma.device_approvalUpdateManyArgs> = z.object({
  data: z.union([ device_approvalUpdateManyMutationInputSchema,device_approvalUncheckedUpdateManyInputSchema ]),
  where: device_approvalWhereInputSchema.optional(),
}).strict() ;

export const device_approvalDeleteManyArgsSchema: z.ZodType<Prisma.device_approvalDeleteManyArgs> = z.object({
  where: device_approvalWhereInputSchema.optional(),
}).strict() ;

export const device_approval_typeCreateArgsSchema: z.ZodType<Prisma.device_approval_typeCreateArgs> = z.object({
  select: device_approval_typeSelectSchema.optional(),
  data: z.union([ device_approval_typeCreateInputSchema,device_approval_typeUncheckedCreateInputSchema ]),
}).strict() ;

export const device_approval_typeUpsertArgsSchema: z.ZodType<Prisma.device_approval_typeUpsertArgs> = z.object({
  select: device_approval_typeSelectSchema.optional(),
  where: device_approval_typeWhereUniqueInputSchema,
  create: z.union([ device_approval_typeCreateInputSchema,device_approval_typeUncheckedCreateInputSchema ]),
  update: z.union([ device_approval_typeUpdateInputSchema,device_approval_typeUncheckedUpdateInputSchema ]),
}).strict() ;

export const device_approval_typeCreateManyArgsSchema: z.ZodType<Prisma.device_approval_typeCreateManyArgs> = z.object({
  data: z.union([ device_approval_typeCreateManyInputSchema,device_approval_typeCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const device_approval_typeDeleteArgsSchema: z.ZodType<Prisma.device_approval_typeDeleteArgs> = z.object({
  select: device_approval_typeSelectSchema.optional(),
  where: device_approval_typeWhereUniqueInputSchema,
}).strict() ;

export const device_approval_typeUpdateArgsSchema: z.ZodType<Prisma.device_approval_typeUpdateArgs> = z.object({
  select: device_approval_typeSelectSchema.optional(),
  data: z.union([ device_approval_typeUpdateInputSchema,device_approval_typeUncheckedUpdateInputSchema ]),
  where: device_approval_typeWhereUniqueInputSchema,
}).strict() ;

export const device_approval_typeUpdateManyArgsSchema: z.ZodType<Prisma.device_approval_typeUpdateManyArgs> = z.object({
  data: z.union([ device_approval_typeUpdateManyMutationInputSchema,device_approval_typeUncheckedUpdateManyInputSchema ]),
  where: device_approval_typeWhereInputSchema.optional(),
}).strict() ;

export const device_approval_typeDeleteManyArgsSchema: z.ZodType<Prisma.device_approval_typeDeleteManyArgs> = z.object({
  where: device_approval_typeWhereInputSchema.optional(),
}).strict() ;

export const device_consumable_compatibilityCreateArgsSchema: z.ZodType<Prisma.device_consumable_compatibilityCreateArgs> = z.object({
  select: device_consumable_compatibilitySelectSchema.optional(),
  data: z.union([ device_consumable_compatibilityCreateInputSchema,device_consumable_compatibilityUncheckedCreateInputSchema ]),
}).strict() ;

export const device_consumable_compatibilityUpsertArgsSchema: z.ZodType<Prisma.device_consumable_compatibilityUpsertArgs> = z.object({
  select: device_consumable_compatibilitySelectSchema.optional(),
  where: device_consumable_compatibilityWhereUniqueInputSchema,
  create: z.union([ device_consumable_compatibilityCreateInputSchema,device_consumable_compatibilityUncheckedCreateInputSchema ]),
  update: z.union([ device_consumable_compatibilityUpdateInputSchema,device_consumable_compatibilityUncheckedUpdateInputSchema ]),
}).strict() ;

export const device_consumable_compatibilityCreateManyArgsSchema: z.ZodType<Prisma.device_consumable_compatibilityCreateManyArgs> = z.object({
  data: z.union([ device_consumable_compatibilityCreateManyInputSchema,device_consumable_compatibilityCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const device_consumable_compatibilityDeleteArgsSchema: z.ZodType<Prisma.device_consumable_compatibilityDeleteArgs> = z.object({
  select: device_consumable_compatibilitySelectSchema.optional(),
  where: device_consumable_compatibilityWhereUniqueInputSchema,
}).strict() ;

export const device_consumable_compatibilityUpdateArgsSchema: z.ZodType<Prisma.device_consumable_compatibilityUpdateArgs> = z.object({
  select: device_consumable_compatibilitySelectSchema.optional(),
  data: z.union([ device_consumable_compatibilityUpdateInputSchema,device_consumable_compatibilityUncheckedUpdateInputSchema ]),
  where: device_consumable_compatibilityWhereUniqueInputSchema,
}).strict() ;

export const device_consumable_compatibilityUpdateManyArgsSchema: z.ZodType<Prisma.device_consumable_compatibilityUpdateManyArgs> = z.object({
  data: z.union([ device_consumable_compatibilityUpdateManyMutationInputSchema,device_consumable_compatibilityUncheckedUpdateManyInputSchema ]),
  where: device_consumable_compatibilityWhereInputSchema.optional(),
}).strict() ;

export const device_consumable_compatibilityDeleteManyArgsSchema: z.ZodType<Prisma.device_consumable_compatibilityDeleteManyArgs> = z.object({
  where: device_consumable_compatibilityWhereInputSchema.optional(),
}).strict() ;

export const device_driverCreateArgsSchema: z.ZodType<Prisma.device_driverCreateArgs> = z.object({
  select: device_driverSelectSchema.optional(),
  data: z.union([ device_driverCreateInputSchema,device_driverUncheckedCreateInputSchema ]),
}).strict() ;

export const device_driverUpsertArgsSchema: z.ZodType<Prisma.device_driverUpsertArgs> = z.object({
  select: device_driverSelectSchema.optional(),
  where: device_driverWhereUniqueInputSchema,
  create: z.union([ device_driverCreateInputSchema,device_driverUncheckedCreateInputSchema ]),
  update: z.union([ device_driverUpdateInputSchema,device_driverUncheckedUpdateInputSchema ]),
}).strict() ;

export const device_driverCreateManyArgsSchema: z.ZodType<Prisma.device_driverCreateManyArgs> = z.object({
  data: z.union([ device_driverCreateManyInputSchema,device_driverCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const device_driverDeleteArgsSchema: z.ZodType<Prisma.device_driverDeleteArgs> = z.object({
  select: device_driverSelectSchema.optional(),
  where: device_driverWhereUniqueInputSchema,
}).strict() ;

export const device_driverUpdateArgsSchema: z.ZodType<Prisma.device_driverUpdateArgs> = z.object({
  select: device_driverSelectSchema.optional(),
  data: z.union([ device_driverUpdateInputSchema,device_driverUncheckedUpdateInputSchema ]),
  where: device_driverWhereUniqueInputSchema,
}).strict() ;

export const device_driverUpdateManyArgsSchema: z.ZodType<Prisma.device_driverUpdateManyArgs> = z.object({
  data: z.union([ device_driverUpdateManyMutationInputSchema,device_driverUncheckedUpdateManyInputSchema ]),
  where: device_driverWhereInputSchema.optional(),
}).strict() ;

export const device_driverDeleteManyArgsSchema: z.ZodType<Prisma.device_driverDeleteManyArgs> = z.object({
  where: device_driverWhereInputSchema.optional(),
}).strict() ;

export const device_inspection_logCreateArgsSchema: z.ZodType<Prisma.device_inspection_logCreateArgs> = z.object({
  select: device_inspection_logSelectSchema.optional(),
  data: z.union([ device_inspection_logCreateInputSchema,device_inspection_logUncheckedCreateInputSchema ]),
}).strict() ;

export const device_inspection_logUpsertArgsSchema: z.ZodType<Prisma.device_inspection_logUpsertArgs> = z.object({
  select: device_inspection_logSelectSchema.optional(),
  where: device_inspection_logWhereUniqueInputSchema,
  create: z.union([ device_inspection_logCreateInputSchema,device_inspection_logUncheckedCreateInputSchema ]),
  update: z.union([ device_inspection_logUpdateInputSchema,device_inspection_logUncheckedUpdateInputSchema ]),
}).strict() ;

export const device_inspection_logCreateManyArgsSchema: z.ZodType<Prisma.device_inspection_logCreateManyArgs> = z.object({
  data: z.union([ device_inspection_logCreateManyInputSchema,device_inspection_logCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const device_inspection_logDeleteArgsSchema: z.ZodType<Prisma.device_inspection_logDeleteArgs> = z.object({
  select: device_inspection_logSelectSchema.optional(),
  where: device_inspection_logWhereUniqueInputSchema,
}).strict() ;

export const device_inspection_logUpdateArgsSchema: z.ZodType<Prisma.device_inspection_logUpdateArgs> = z.object({
  select: device_inspection_logSelectSchema.optional(),
  data: z.union([ device_inspection_logUpdateInputSchema,device_inspection_logUncheckedUpdateInputSchema ]),
  where: device_inspection_logWhereUniqueInputSchema,
}).strict() ;

export const device_inspection_logUpdateManyArgsSchema: z.ZodType<Prisma.device_inspection_logUpdateManyArgs> = z.object({
  data: z.union([ device_inspection_logUpdateManyMutationInputSchema,device_inspection_logUncheckedUpdateManyInputSchema ]),
  where: device_inspection_logWhereInputSchema.optional(),
}).strict() ;

export const device_inspection_logDeleteManyArgsSchema: z.ZodType<Prisma.device_inspection_logDeleteManyArgs> = z.object({
  where: device_inspection_logWhereInputSchema.optional(),
}).strict() ;

export const device_install_infoCreateArgsSchema: z.ZodType<Prisma.device_install_infoCreateArgs> = z.object({
  select: device_install_infoSelectSchema.optional(),
  data: z.union([ device_install_infoCreateInputSchema,device_install_infoUncheckedCreateInputSchema ]),
}).strict() ;

export const device_install_infoUpsertArgsSchema: z.ZodType<Prisma.device_install_infoUpsertArgs> = z.object({
  select: device_install_infoSelectSchema.optional(),
  where: device_install_infoWhereUniqueInputSchema,
  create: z.union([ device_install_infoCreateInputSchema,device_install_infoUncheckedCreateInputSchema ]),
  update: z.union([ device_install_infoUpdateInputSchema,device_install_infoUncheckedUpdateInputSchema ]),
}).strict() ;

export const device_install_infoCreateManyArgsSchema: z.ZodType<Prisma.device_install_infoCreateManyArgs> = z.object({
  data: z.union([ device_install_infoCreateManyInputSchema,device_install_infoCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const device_install_infoDeleteArgsSchema: z.ZodType<Prisma.device_install_infoDeleteArgs> = z.object({
  select: device_install_infoSelectSchema.optional(),
  where: device_install_infoWhereUniqueInputSchema,
}).strict() ;

export const device_install_infoUpdateArgsSchema: z.ZodType<Prisma.device_install_infoUpdateArgs> = z.object({
  select: device_install_infoSelectSchema.optional(),
  data: z.union([ device_install_infoUpdateInputSchema,device_install_infoUncheckedUpdateInputSchema ]),
  where: device_install_infoWhereUniqueInputSchema,
}).strict() ;

export const device_install_infoUpdateManyArgsSchema: z.ZodType<Prisma.device_install_infoUpdateManyArgs> = z.object({
  data: z.union([ device_install_infoUpdateManyMutationInputSchema,device_install_infoUncheckedUpdateManyInputSchema ]),
  where: device_install_infoWhereInputSchema.optional(),
}).strict() ;

export const device_install_infoDeleteManyArgsSchema: z.ZodType<Prisma.device_install_infoDeleteManyArgs> = z.object({
  where: device_install_infoWhereInputSchema.optional(),
}).strict() ;

export const device_location_logCreateArgsSchema: z.ZodType<Prisma.device_location_logCreateArgs> = z.object({
  select: device_location_logSelectSchema.optional(),
  data: z.union([ device_location_logCreateInputSchema,device_location_logUncheckedCreateInputSchema ]),
}).strict() ;

export const device_location_logUpsertArgsSchema: z.ZodType<Prisma.device_location_logUpsertArgs> = z.object({
  select: device_location_logSelectSchema.optional(),
  where: device_location_logWhereUniqueInputSchema,
  create: z.union([ device_location_logCreateInputSchema,device_location_logUncheckedCreateInputSchema ]),
  update: z.union([ device_location_logUpdateInputSchema,device_location_logUncheckedUpdateInputSchema ]),
}).strict() ;

export const device_location_logCreateManyArgsSchema: z.ZodType<Prisma.device_location_logCreateManyArgs> = z.object({
  data: z.union([ device_location_logCreateManyInputSchema,device_location_logCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const device_location_logDeleteArgsSchema: z.ZodType<Prisma.device_location_logDeleteArgs> = z.object({
  select: device_location_logSelectSchema.optional(),
  where: device_location_logWhereUniqueInputSchema,
}).strict() ;

export const device_location_logUpdateArgsSchema: z.ZodType<Prisma.device_location_logUpdateArgs> = z.object({
  select: device_location_logSelectSchema.optional(),
  data: z.union([ device_location_logUpdateInputSchema,device_location_logUncheckedUpdateInputSchema ]),
  where: device_location_logWhereUniqueInputSchema,
}).strict() ;

export const device_location_logUpdateManyArgsSchema: z.ZodType<Prisma.device_location_logUpdateManyArgs> = z.object({
  data: z.union([ device_location_logUpdateManyMutationInputSchema,device_location_logUncheckedUpdateManyInputSchema ]),
  where: device_location_logWhereInputSchema.optional(),
}).strict() ;

export const device_location_logDeleteManyArgsSchema: z.ZodType<Prisma.device_location_logDeleteManyArgs> = z.object({
  where: device_location_logWhereInputSchema.optional(),
}).strict() ;

export const device_modelCreateArgsSchema: z.ZodType<Prisma.device_modelCreateArgs> = z.object({
  select: device_modelSelectSchema.optional(),
  data: z.union([ device_modelCreateInputSchema,device_modelUncheckedCreateInputSchema ]),
}).strict() ;

export const device_modelUpsertArgsSchema: z.ZodType<Prisma.device_modelUpsertArgs> = z.object({
  select: device_modelSelectSchema.optional(),
  where: device_modelWhereUniqueInputSchema,
  create: z.union([ device_modelCreateInputSchema,device_modelUncheckedCreateInputSchema ]),
  update: z.union([ device_modelUpdateInputSchema,device_modelUncheckedUpdateInputSchema ]),
}).strict() ;

export const device_modelCreateManyArgsSchema: z.ZodType<Prisma.device_modelCreateManyArgs> = z.object({
  data: z.union([ device_modelCreateManyInputSchema,device_modelCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const device_modelDeleteArgsSchema: z.ZodType<Prisma.device_modelDeleteArgs> = z.object({
  select: device_modelSelectSchema.optional(),
  where: device_modelWhereUniqueInputSchema,
}).strict() ;

export const device_modelUpdateArgsSchema: z.ZodType<Prisma.device_modelUpdateArgs> = z.object({
  select: device_modelSelectSchema.optional(),
  data: z.union([ device_modelUpdateInputSchema,device_modelUncheckedUpdateInputSchema ]),
  where: device_modelWhereUniqueInputSchema,
}).strict() ;

export const device_modelUpdateManyArgsSchema: z.ZodType<Prisma.device_modelUpdateManyArgs> = z.object({
  data: z.union([ device_modelUpdateManyMutationInputSchema,device_modelUncheckedUpdateManyInputSchema ]),
  where: device_modelWhereInputSchema.optional(),
}).strict() ;

export const device_modelDeleteManyArgsSchema: z.ZodType<Prisma.device_modelDeleteManyArgs> = z.object({
  where: device_modelWhereInputSchema.optional(),
}).strict() ;

export const device_optionCreateArgsSchema: z.ZodType<Prisma.device_optionCreateArgs> = z.object({
  select: device_optionSelectSchema.optional(),
  data: z.union([ device_optionCreateInputSchema,device_optionUncheckedCreateInputSchema ]),
}).strict() ;

export const device_optionUpsertArgsSchema: z.ZodType<Prisma.device_optionUpsertArgs> = z.object({
  select: device_optionSelectSchema.optional(),
  where: device_optionWhereUniqueInputSchema,
  create: z.union([ device_optionCreateInputSchema,device_optionUncheckedCreateInputSchema ]),
  update: z.union([ device_optionUpdateInputSchema,device_optionUncheckedUpdateInputSchema ]),
}).strict() ;

export const device_optionCreateManyArgsSchema: z.ZodType<Prisma.device_optionCreateManyArgs> = z.object({
  data: z.union([ device_optionCreateManyInputSchema,device_optionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const device_optionDeleteArgsSchema: z.ZodType<Prisma.device_optionDeleteArgs> = z.object({
  select: device_optionSelectSchema.optional(),
  where: device_optionWhereUniqueInputSchema,
}).strict() ;

export const device_optionUpdateArgsSchema: z.ZodType<Prisma.device_optionUpdateArgs> = z.object({
  select: device_optionSelectSchema.optional(),
  data: z.union([ device_optionUpdateInputSchema,device_optionUncheckedUpdateInputSchema ]),
  where: device_optionWhereUniqueInputSchema,
}).strict() ;

export const device_optionUpdateManyArgsSchema: z.ZodType<Prisma.device_optionUpdateManyArgs> = z.object({
  data: z.union([ device_optionUpdateManyMutationInputSchema,device_optionUncheckedUpdateManyInputSchema ]),
  where: device_optionWhereInputSchema.optional(),
}).strict() ;

export const device_optionDeleteManyArgsSchema: z.ZodType<Prisma.device_optionDeleteManyArgs> = z.object({
  where: device_optionWhereInputSchema.optional(),
}).strict() ;

export const device_option_compatibilityCreateArgsSchema: z.ZodType<Prisma.device_option_compatibilityCreateArgs> = z.object({
  select: device_option_compatibilitySelectSchema.optional(),
  data: z.union([ device_option_compatibilityCreateInputSchema,device_option_compatibilityUncheckedCreateInputSchema ]),
}).strict() ;

export const device_option_compatibilityUpsertArgsSchema: z.ZodType<Prisma.device_option_compatibilityUpsertArgs> = z.object({
  select: device_option_compatibilitySelectSchema.optional(),
  where: device_option_compatibilityWhereUniqueInputSchema,
  create: z.union([ device_option_compatibilityCreateInputSchema,device_option_compatibilityUncheckedCreateInputSchema ]),
  update: z.union([ device_option_compatibilityUpdateInputSchema,device_option_compatibilityUncheckedUpdateInputSchema ]),
}).strict() ;

export const device_option_compatibilityCreateManyArgsSchema: z.ZodType<Prisma.device_option_compatibilityCreateManyArgs> = z.object({
  data: z.union([ device_option_compatibilityCreateManyInputSchema,device_option_compatibilityCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const device_option_compatibilityDeleteArgsSchema: z.ZodType<Prisma.device_option_compatibilityDeleteArgs> = z.object({
  select: device_option_compatibilitySelectSchema.optional(),
  where: device_option_compatibilityWhereUniqueInputSchema,
}).strict() ;

export const device_option_compatibilityUpdateArgsSchema: z.ZodType<Prisma.device_option_compatibilityUpdateArgs> = z.object({
  select: device_option_compatibilitySelectSchema.optional(),
  data: z.union([ device_option_compatibilityUpdateInputSchema,device_option_compatibilityUncheckedUpdateInputSchema ]),
  where: device_option_compatibilityWhereUniqueInputSchema,
}).strict() ;

export const device_option_compatibilityUpdateManyArgsSchema: z.ZodType<Prisma.device_option_compatibilityUpdateManyArgs> = z.object({
  data: z.union([ device_option_compatibilityUpdateManyMutationInputSchema,device_option_compatibilityUncheckedUpdateManyInputSchema ]),
  where: device_option_compatibilityWhereInputSchema.optional(),
}).strict() ;

export const device_option_compatibilityDeleteManyArgsSchema: z.ZodType<Prisma.device_option_compatibilityDeleteManyArgs> = z.object({
  where: device_option_compatibilityWhereInputSchema.optional(),
}).strict() ;

export const device_statusCreateArgsSchema: z.ZodType<Prisma.device_statusCreateArgs> = z.object({
  select: device_statusSelectSchema.optional(),
  data: z.union([ device_statusCreateInputSchema,device_statusUncheckedCreateInputSchema ]),
}).strict() ;

export const device_statusUpsertArgsSchema: z.ZodType<Prisma.device_statusUpsertArgs> = z.object({
  select: device_statusSelectSchema.optional(),
  where: device_statusWhereUniqueInputSchema,
  create: z.union([ device_statusCreateInputSchema,device_statusUncheckedCreateInputSchema ]),
  update: z.union([ device_statusUpdateInputSchema,device_statusUncheckedUpdateInputSchema ]),
}).strict() ;

export const device_statusCreateManyArgsSchema: z.ZodType<Prisma.device_statusCreateManyArgs> = z.object({
  data: z.union([ device_statusCreateManyInputSchema,device_statusCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const device_statusDeleteArgsSchema: z.ZodType<Prisma.device_statusDeleteArgs> = z.object({
  select: device_statusSelectSchema.optional(),
  where: device_statusWhereUniqueInputSchema,
}).strict() ;

export const device_statusUpdateArgsSchema: z.ZodType<Prisma.device_statusUpdateArgs> = z.object({
  select: device_statusSelectSchema.optional(),
  data: z.union([ device_statusUpdateInputSchema,device_statusUncheckedUpdateInputSchema ]),
  where: device_statusWhereUniqueInputSchema,
}).strict() ;

export const device_statusUpdateManyArgsSchema: z.ZodType<Prisma.device_statusUpdateManyArgs> = z.object({
  data: z.union([ device_statusUpdateManyMutationInputSchema,device_statusUncheckedUpdateManyInputSchema ]),
  where: device_statusWhereInputSchema.optional(),
}).strict() ;

export const device_statusDeleteManyArgsSchema: z.ZodType<Prisma.device_statusDeleteManyArgs> = z.object({
  where: device_statusWhereInputSchema.optional(),
}).strict() ;

export const inspection_approvalCreateArgsSchema: z.ZodType<Prisma.inspection_approvalCreateArgs> = z.object({
  select: inspection_approvalSelectSchema.optional(),
  data: z.union([ inspection_approvalCreateInputSchema,inspection_approvalUncheckedCreateInputSchema ]),
}).strict() ;

export const inspection_approvalUpsertArgsSchema: z.ZodType<Prisma.inspection_approvalUpsertArgs> = z.object({
  select: inspection_approvalSelectSchema.optional(),
  where: inspection_approvalWhereUniqueInputSchema,
  create: z.union([ inspection_approvalCreateInputSchema,inspection_approvalUncheckedCreateInputSchema ]),
  update: z.union([ inspection_approvalUpdateInputSchema,inspection_approvalUncheckedUpdateInputSchema ]),
}).strict() ;

export const inspection_approvalCreateManyArgsSchema: z.ZodType<Prisma.inspection_approvalCreateManyArgs> = z.object({
  data: z.union([ inspection_approvalCreateManyInputSchema,inspection_approvalCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const inspection_approvalDeleteArgsSchema: z.ZodType<Prisma.inspection_approvalDeleteArgs> = z.object({
  select: inspection_approvalSelectSchema.optional(),
  where: inspection_approvalWhereUniqueInputSchema,
}).strict() ;

export const inspection_approvalUpdateArgsSchema: z.ZodType<Prisma.inspection_approvalUpdateArgs> = z.object({
  select: inspection_approvalSelectSchema.optional(),
  data: z.union([ inspection_approvalUpdateInputSchema,inspection_approvalUncheckedUpdateInputSchema ]),
  where: inspection_approvalWhereUniqueInputSchema,
}).strict() ;

export const inspection_approvalUpdateManyArgsSchema: z.ZodType<Prisma.inspection_approvalUpdateManyArgs> = z.object({
  data: z.union([ inspection_approvalUpdateManyMutationInputSchema,inspection_approvalUncheckedUpdateManyInputSchema ]),
  where: inspection_approvalWhereInputSchema.optional(),
}).strict() ;

export const inspection_approvalDeleteManyArgsSchema: z.ZodType<Prisma.inspection_approvalDeleteManyArgs> = z.object({
  where: inspection_approvalWhereInputSchema.optional(),
}).strict() ;

export const locationCreateArgsSchema: z.ZodType<Prisma.locationCreateArgs> = z.object({
  select: locationSelectSchema.optional(),
  data: z.union([ locationCreateInputSchema,locationUncheckedCreateInputSchema ]),
}).strict() ;

export const locationUpsertArgsSchema: z.ZodType<Prisma.locationUpsertArgs> = z.object({
  select: locationSelectSchema.optional(),
  where: locationWhereUniqueInputSchema,
  create: z.union([ locationCreateInputSchema,locationUncheckedCreateInputSchema ]),
  update: z.union([ locationUpdateInputSchema,locationUncheckedUpdateInputSchema ]),
}).strict() ;

export const locationCreateManyArgsSchema: z.ZodType<Prisma.locationCreateManyArgs> = z.object({
  data: z.union([ locationCreateManyInputSchema,locationCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const locationDeleteArgsSchema: z.ZodType<Prisma.locationDeleteArgs> = z.object({
  select: locationSelectSchema.optional(),
  where: locationWhereUniqueInputSchema,
}).strict() ;

export const locationUpdateArgsSchema: z.ZodType<Prisma.locationUpdateArgs> = z.object({
  select: locationSelectSchema.optional(),
  data: z.union([ locationUpdateInputSchema,locationUncheckedUpdateInputSchema ]),
  where: locationWhereUniqueInputSchema,
}).strict() ;

export const locationUpdateManyArgsSchema: z.ZodType<Prisma.locationUpdateManyArgs> = z.object({
  data: z.union([ locationUpdateManyMutationInputSchema,locationUncheckedUpdateManyInputSchema ]),
  where: locationWhereInputSchema.optional(),
}).strict() ;

export const locationDeleteManyArgsSchema: z.ZodType<Prisma.locationDeleteManyArgs> = z.object({
  where: locationWhereInputSchema.optional(),
}).strict() ;

export const option_modelCreateArgsSchema: z.ZodType<Prisma.option_modelCreateArgs> = z.object({
  select: option_modelSelectSchema.optional(),
  data: z.union([ option_modelCreateInputSchema,option_modelUncheckedCreateInputSchema ]),
}).strict() ;

export const option_modelUpsertArgsSchema: z.ZodType<Prisma.option_modelUpsertArgs> = z.object({
  select: option_modelSelectSchema.optional(),
  where: option_modelWhereUniqueInputSchema,
  create: z.union([ option_modelCreateInputSchema,option_modelUncheckedCreateInputSchema ]),
  update: z.union([ option_modelUpdateInputSchema,option_modelUncheckedUpdateInputSchema ]),
}).strict() ;

export const option_modelCreateManyArgsSchema: z.ZodType<Prisma.option_modelCreateManyArgs> = z.object({
  data: z.union([ option_modelCreateManyInputSchema,option_modelCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const option_modelDeleteArgsSchema: z.ZodType<Prisma.option_modelDeleteArgs> = z.object({
  select: option_modelSelectSchema.optional(),
  where: option_modelWhereUniqueInputSchema,
}).strict() ;

export const option_modelUpdateArgsSchema: z.ZodType<Prisma.option_modelUpdateArgs> = z.object({
  select: option_modelSelectSchema.optional(),
  data: z.union([ option_modelUpdateInputSchema,option_modelUncheckedUpdateInputSchema ]),
  where: option_modelWhereUniqueInputSchema,
}).strict() ;

export const option_modelUpdateManyArgsSchema: z.ZodType<Prisma.option_modelUpdateManyArgs> = z.object({
  data: z.union([ option_modelUpdateManyMutationInputSchema,option_modelUncheckedUpdateManyInputSchema ]),
  where: option_modelWhereInputSchema.optional(),
}).strict() ;

export const option_modelDeleteManyArgsSchema: z.ZodType<Prisma.option_modelDeleteManyArgs> = z.object({
  where: option_modelWhereInputSchema.optional(),
}).strict() ;

export const sidoCreateArgsSchema: z.ZodType<Prisma.sidoCreateArgs> = z.object({
  select: sidoSelectSchema.optional(),
  data: z.union([ sidoCreateInputSchema,sidoUncheckedCreateInputSchema ]).optional(),
}).strict() ;

export const sidoUpsertArgsSchema: z.ZodType<Prisma.sidoUpsertArgs> = z.object({
  select: sidoSelectSchema.optional(),
  where: sidoWhereUniqueInputSchema,
  create: z.union([ sidoCreateInputSchema,sidoUncheckedCreateInputSchema ]),
  update: z.union([ sidoUpdateInputSchema,sidoUncheckedUpdateInputSchema ]),
}).strict() ;

export const sidoCreateManyArgsSchema: z.ZodType<Prisma.sidoCreateManyArgs> = z.object({
  data: z.union([ sidoCreateManyInputSchema,sidoCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const sidoDeleteArgsSchema: z.ZodType<Prisma.sidoDeleteArgs> = z.object({
  select: sidoSelectSchema.optional(),
  where: sidoWhereUniqueInputSchema,
}).strict() ;

export const sidoUpdateArgsSchema: z.ZodType<Prisma.sidoUpdateArgs> = z.object({
  select: sidoSelectSchema.optional(),
  data: z.union([ sidoUpdateInputSchema,sidoUncheckedUpdateInputSchema ]),
  where: sidoWhereUniqueInputSchema,
}).strict() ;

export const sidoUpdateManyArgsSchema: z.ZodType<Prisma.sidoUpdateManyArgs> = z.object({
  data: z.union([ sidoUpdateManyMutationInputSchema,sidoUncheckedUpdateManyInputSchema ]),
  where: sidoWhereInputSchema.optional(),
}).strict() ;

export const sidoDeleteManyArgsSchema: z.ZodType<Prisma.sidoDeleteManyArgs> = z.object({
  where: sidoWhereInputSchema.optional(),
}).strict() ;

export const sigunguCreateArgsSchema: z.ZodType<Prisma.sigunguCreateArgs> = z.object({
  select: sigunguSelectSchema.optional(),
  data: z.union([ sigunguCreateInputSchema,sigunguUncheckedCreateInputSchema ]),
}).strict() ;

export const sigunguUpsertArgsSchema: z.ZodType<Prisma.sigunguUpsertArgs> = z.object({
  select: sigunguSelectSchema.optional(),
  where: sigunguWhereUniqueInputSchema,
  create: z.union([ sigunguCreateInputSchema,sigunguUncheckedCreateInputSchema ]),
  update: z.union([ sigunguUpdateInputSchema,sigunguUncheckedUpdateInputSchema ]),
}).strict() ;

export const sigunguCreateManyArgsSchema: z.ZodType<Prisma.sigunguCreateManyArgs> = z.object({
  data: z.union([ sigunguCreateManyInputSchema,sigunguCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const sigunguDeleteArgsSchema: z.ZodType<Prisma.sigunguDeleteArgs> = z.object({
  select: sigunguSelectSchema.optional(),
  where: sigunguWhereUniqueInputSchema,
}).strict() ;

export const sigunguUpdateArgsSchema: z.ZodType<Prisma.sigunguUpdateArgs> = z.object({
  select: sigunguSelectSchema.optional(),
  data: z.union([ sigunguUpdateInputSchema,sigunguUncheckedUpdateInputSchema ]),
  where: sigunguWhereUniqueInputSchema,
}).strict() ;

export const sigunguUpdateManyArgsSchema: z.ZodType<Prisma.sigunguUpdateManyArgs> = z.object({
  data: z.union([ sigunguUpdateManyMutationInputSchema,sigunguUncheckedUpdateManyInputSchema ]),
  where: sigunguWhereInputSchema.optional(),
}).strict() ;

export const sigunguDeleteManyArgsSchema: z.ZodType<Prisma.sigunguDeleteManyArgs> = z.object({
  where: sigunguWhereInputSchema.optional(),
}).strict() ;

export const userCreateArgsSchema: z.ZodType<Prisma.userCreateArgs> = z.object({
  select: userSelectSchema.optional(),
  data: z.union([ userCreateInputSchema,userUncheckedCreateInputSchema ]),
}).strict() ;

export const userUpsertArgsSchema: z.ZodType<Prisma.userUpsertArgs> = z.object({
  select: userSelectSchema.optional(),
  where: userWhereUniqueInputSchema,
  create: z.union([ userCreateInputSchema,userUncheckedCreateInputSchema ]),
  update: z.union([ userUpdateInputSchema,userUncheckedUpdateInputSchema ]),
}).strict() ;

export const userCreateManyArgsSchema: z.ZodType<Prisma.userCreateManyArgs> = z.object({
  data: z.union([ userCreateManyInputSchema,userCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const userDeleteArgsSchema: z.ZodType<Prisma.userDeleteArgs> = z.object({
  select: userSelectSchema.optional(),
  where: userWhereUniqueInputSchema,
}).strict() ;

export const userUpdateArgsSchema: z.ZodType<Prisma.userUpdateArgs> = z.object({
  select: userSelectSchema.optional(),
  data: z.union([ userUpdateInputSchema,userUncheckedUpdateInputSchema ]),
  where: userWhereUniqueInputSchema,
}).strict() ;

export const userUpdateManyArgsSchema: z.ZodType<Prisma.userUpdateManyArgs> = z.object({
  data: z.union([ userUpdateManyMutationInputSchema,userUncheckedUpdateManyInputSchema ]),
  where: userWhereInputSchema.optional(),
}).strict() ;

export const userDeleteManyArgsSchema: z.ZodType<Prisma.userDeleteManyArgs> = z.object({
  where: userWhereInputSchema.optional(),
}).strict() ;

export const user_positionCreateArgsSchema: z.ZodType<Prisma.user_positionCreateArgs> = z.object({
  select: user_positionSelectSchema.optional(),
  data: z.union([ user_positionCreateInputSchema,user_positionUncheckedCreateInputSchema ]),
}).strict() ;

export const user_positionUpsertArgsSchema: z.ZodType<Prisma.user_positionUpsertArgs> = z.object({
  select: user_positionSelectSchema.optional(),
  where: user_positionWhereUniqueInputSchema,
  create: z.union([ user_positionCreateInputSchema,user_positionUncheckedCreateInputSchema ]),
  update: z.union([ user_positionUpdateInputSchema,user_positionUncheckedUpdateInputSchema ]),
}).strict() ;

export const user_positionCreateManyArgsSchema: z.ZodType<Prisma.user_positionCreateManyArgs> = z.object({
  data: z.union([ user_positionCreateManyInputSchema,user_positionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const user_positionDeleteArgsSchema: z.ZodType<Prisma.user_positionDeleteArgs> = z.object({
  select: user_positionSelectSchema.optional(),
  where: user_positionWhereUniqueInputSchema,
}).strict() ;

export const user_positionUpdateArgsSchema: z.ZodType<Prisma.user_positionUpdateArgs> = z.object({
  select: user_positionSelectSchema.optional(),
  data: z.union([ user_positionUpdateInputSchema,user_positionUncheckedUpdateInputSchema ]),
  where: user_positionWhereUniqueInputSchema,
}).strict() ;

export const user_positionUpdateManyArgsSchema: z.ZodType<Prisma.user_positionUpdateManyArgs> = z.object({
  data: z.union([ user_positionUpdateManyMutationInputSchema,user_positionUncheckedUpdateManyInputSchema ]),
  where: user_positionWhereInputSchema.optional(),
}).strict() ;

export const user_positionDeleteManyArgsSchema: z.ZodType<Prisma.user_positionDeleteManyArgs> = z.object({
  where: user_positionWhereInputSchema.optional(),
}).strict() ;

export const user_role_assignmentCreateArgsSchema: z.ZodType<Prisma.user_role_assignmentCreateArgs> = z.object({
  select: user_role_assignmentSelectSchema.optional(),
  data: z.union([ user_role_assignmentCreateInputSchema,user_role_assignmentUncheckedCreateInputSchema ]),
}).strict() ;

export const user_role_assignmentUpsertArgsSchema: z.ZodType<Prisma.user_role_assignmentUpsertArgs> = z.object({
  select: user_role_assignmentSelectSchema.optional(),
  where: user_role_assignmentWhereUniqueInputSchema,
  create: z.union([ user_role_assignmentCreateInputSchema,user_role_assignmentUncheckedCreateInputSchema ]),
  update: z.union([ user_role_assignmentUpdateInputSchema,user_role_assignmentUncheckedUpdateInputSchema ]),
}).strict() ;

export const user_role_assignmentCreateManyArgsSchema: z.ZodType<Prisma.user_role_assignmentCreateManyArgs> = z.object({
  data: z.union([ user_role_assignmentCreateManyInputSchema,user_role_assignmentCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const user_role_assignmentDeleteArgsSchema: z.ZodType<Prisma.user_role_assignmentDeleteArgs> = z.object({
  select: user_role_assignmentSelectSchema.optional(),
  where: user_role_assignmentWhereUniqueInputSchema,
}).strict() ;

export const user_role_assignmentUpdateArgsSchema: z.ZodType<Prisma.user_role_assignmentUpdateArgs> = z.object({
  select: user_role_assignmentSelectSchema.optional(),
  data: z.union([ user_role_assignmentUpdateInputSchema,user_role_assignmentUncheckedUpdateInputSchema ]),
  where: user_role_assignmentWhereUniqueInputSchema,
}).strict() ;

export const user_role_assignmentUpdateManyArgsSchema: z.ZodType<Prisma.user_role_assignmentUpdateManyArgs> = z.object({
  data: z.union([ user_role_assignmentUpdateManyMutationInputSchema,user_role_assignmentUncheckedUpdateManyInputSchema ]),
  where: user_role_assignmentWhereInputSchema.optional(),
}).strict() ;

export const user_role_assignmentDeleteManyArgsSchema: z.ZodType<Prisma.user_role_assignmentDeleteManyArgs> = z.object({
  where: user_role_assignmentWhereInputSchema.optional(),
}).strict() ;

export const warehouseCreateArgsSchema: z.ZodType<Prisma.warehouseCreateArgs> = z.object({
  select: warehouseSelectSchema.optional(),
  data: z.union([ warehouseCreateInputSchema,warehouseUncheckedCreateInputSchema ]),
}).strict() ;

export const warehouseUpsertArgsSchema: z.ZodType<Prisma.warehouseUpsertArgs> = z.object({
  select: warehouseSelectSchema.optional(),
  where: warehouseWhereUniqueInputSchema,
  create: z.union([ warehouseCreateInputSchema,warehouseUncheckedCreateInputSchema ]),
  update: z.union([ warehouseUpdateInputSchema,warehouseUncheckedUpdateInputSchema ]),
}).strict() ;

export const warehouseCreateManyArgsSchema: z.ZodType<Prisma.warehouseCreateManyArgs> = z.object({
  data: z.union([ warehouseCreateManyInputSchema,warehouseCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const warehouseDeleteArgsSchema: z.ZodType<Prisma.warehouseDeleteArgs> = z.object({
  select: warehouseSelectSchema.optional(),
  where: warehouseWhereUniqueInputSchema,
}).strict() ;

export const warehouseUpdateArgsSchema: z.ZodType<Prisma.warehouseUpdateArgs> = z.object({
  select: warehouseSelectSchema.optional(),
  data: z.union([ warehouseUpdateInputSchema,warehouseUncheckedUpdateInputSchema ]),
  where: warehouseWhereUniqueInputSchema,
}).strict() ;

export const warehouseUpdateManyArgsSchema: z.ZodType<Prisma.warehouseUpdateManyArgs> = z.object({
  data: z.union([ warehouseUpdateManyMutationInputSchema,warehouseUncheckedUpdateManyInputSchema ]),
  where: warehouseWhereInputSchema.optional(),
}).strict() ;

export const warehouseDeleteManyArgsSchema: z.ZodType<Prisma.warehouseDeleteManyArgs> = z.object({
  where: warehouseWhereInputSchema.optional(),
}).strict() ;

export const v_clientCreateArgsSchema: z.ZodType<Prisma.v_clientCreateArgs> = z.object({
  select: v_clientSelectSchema.optional(),
  data: z.union([ v_clientCreateInputSchema,v_clientUncheckedCreateInputSchema ]).optional(),
}).strict() ;

export const v_clientUpsertArgsSchema: z.ZodType<Prisma.v_clientUpsertArgs> = z.object({
  select: v_clientSelectSchema.optional(),
  where: v_clientWhereUniqueInputSchema,
  create: z.union([ v_clientCreateInputSchema,v_clientUncheckedCreateInputSchema ]),
  update: z.union([ v_clientUpdateInputSchema,v_clientUncheckedUpdateInputSchema ]),
}).strict() ;

export const v_clientCreateManyArgsSchema: z.ZodType<Prisma.v_clientCreateManyArgs> = z.object({
  data: z.union([ v_clientCreateManyInputSchema,v_clientCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const v_clientDeleteArgsSchema: z.ZodType<Prisma.v_clientDeleteArgs> = z.object({
  select: v_clientSelectSchema.optional(),
  where: v_clientWhereUniqueInputSchema,
}).strict() ;

export const v_clientUpdateArgsSchema: z.ZodType<Prisma.v_clientUpdateArgs> = z.object({
  select: v_clientSelectSchema.optional(),
  data: z.union([ v_clientUpdateInputSchema,v_clientUncheckedUpdateInputSchema ]),
  where: v_clientWhereUniqueInputSchema,
}).strict() ;

export const v_clientUpdateManyArgsSchema: z.ZodType<Prisma.v_clientUpdateManyArgs> = z.object({
  data: z.union([ v_clientUpdateManyMutationInputSchema,v_clientUncheckedUpdateManyInputSchema ]),
  where: v_clientWhereInputSchema.optional(),
}).strict() ;

export const v_clientDeleteManyArgsSchema: z.ZodType<Prisma.v_clientDeleteManyArgs> = z.object({
  where: v_clientWhereInputSchema.optional(),
}).strict() ;

export const v_client_branchCreateArgsSchema: z.ZodType<Prisma.v_client_branchCreateArgs> = z.object({
  select: v_client_branchSelectSchema.optional(),
  data: z.union([ v_client_branchCreateInputSchema,v_client_branchUncheckedCreateInputSchema ]),
}).strict() ;

export const v_client_branchUpsertArgsSchema: z.ZodType<Prisma.v_client_branchUpsertArgs> = z.object({
  select: v_client_branchSelectSchema.optional(),
  where: v_client_branchWhereUniqueInputSchema,
  create: z.union([ v_client_branchCreateInputSchema,v_client_branchUncheckedCreateInputSchema ]),
  update: z.union([ v_client_branchUpdateInputSchema,v_client_branchUncheckedUpdateInputSchema ]),
}).strict() ;

export const v_client_branchCreateManyArgsSchema: z.ZodType<Prisma.v_client_branchCreateManyArgs> = z.object({
  data: z.union([ v_client_branchCreateManyInputSchema,v_client_branchCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const v_client_branchDeleteArgsSchema: z.ZodType<Prisma.v_client_branchDeleteArgs> = z.object({
  select: v_client_branchSelectSchema.optional(),
  where: v_client_branchWhereUniqueInputSchema,
}).strict() ;

export const v_client_branchUpdateArgsSchema: z.ZodType<Prisma.v_client_branchUpdateArgs> = z.object({
  select: v_client_branchSelectSchema.optional(),
  data: z.union([ v_client_branchUpdateInputSchema,v_client_branchUncheckedUpdateInputSchema ]),
  where: v_client_branchWhereUniqueInputSchema,
}).strict() ;

export const v_client_branchUpdateManyArgsSchema: z.ZodType<Prisma.v_client_branchUpdateManyArgs> = z.object({
  data: z.union([ v_client_branchUpdateManyMutationInputSchema,v_client_branchUncheckedUpdateManyInputSchema ]),
  where: v_client_branchWhereInputSchema.optional(),
}).strict() ;

export const v_client_branchDeleteManyArgsSchema: z.ZodType<Prisma.v_client_branchDeleteManyArgs> = z.object({
  where: v_client_branchWhereInputSchema.optional(),
}).strict() ;

export const v_consumable_modelCreateArgsSchema: z.ZodType<Prisma.v_consumable_modelCreateArgs> = z.object({
  select: v_consumable_modelSelectSchema.optional(),
  data: z.union([ v_consumable_modelCreateInputSchema,v_consumable_modelUncheckedCreateInputSchema ]),
}).strict() ;

export const v_consumable_modelUpsertArgsSchema: z.ZodType<Prisma.v_consumable_modelUpsertArgs> = z.object({
  select: v_consumable_modelSelectSchema.optional(),
  where: v_consumable_modelWhereUniqueInputSchema,
  create: z.union([ v_consumable_modelCreateInputSchema,v_consumable_modelUncheckedCreateInputSchema ]),
  update: z.union([ v_consumable_modelUpdateInputSchema,v_consumable_modelUncheckedUpdateInputSchema ]),
}).strict() ;

export const v_consumable_modelCreateManyArgsSchema: z.ZodType<Prisma.v_consumable_modelCreateManyArgs> = z.object({
  data: z.union([ v_consumable_modelCreateManyInputSchema,v_consumable_modelCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const v_consumable_modelDeleteArgsSchema: z.ZodType<Prisma.v_consumable_modelDeleteArgs> = z.object({
  select: v_consumable_modelSelectSchema.optional(),
  where: v_consumable_modelWhereUniqueInputSchema,
}).strict() ;

export const v_consumable_modelUpdateArgsSchema: z.ZodType<Prisma.v_consumable_modelUpdateArgs> = z.object({
  select: v_consumable_modelSelectSchema.optional(),
  data: z.union([ v_consumable_modelUpdateInputSchema,v_consumable_modelUncheckedUpdateInputSchema ]),
  where: v_consumable_modelWhereUniqueInputSchema,
}).strict() ;

export const v_consumable_modelUpdateManyArgsSchema: z.ZodType<Prisma.v_consumable_modelUpdateManyArgs> = z.object({
  data: z.union([ v_consumable_modelUpdateManyMutationInputSchema,v_consumable_modelUncheckedUpdateManyInputSchema ]),
  where: v_consumable_modelWhereInputSchema.optional(),
}).strict() ;

export const v_consumable_modelDeleteManyArgsSchema: z.ZodType<Prisma.v_consumable_modelDeleteManyArgs> = z.object({
  where: v_consumable_modelWhereInputSchema.optional(),
}).strict() ;

export const v_deptCreateArgsSchema: z.ZodType<Prisma.v_deptCreateArgs> = z.object({
  select: v_deptSelectSchema.optional(),
  data: z.union([ v_deptCreateInputSchema,v_deptUncheckedCreateInputSchema ]).optional(),
}).strict() ;

export const v_deptUpsertArgsSchema: z.ZodType<Prisma.v_deptUpsertArgs> = z.object({
  select: v_deptSelectSchema.optional(),
  where: v_deptWhereUniqueInputSchema,
  create: z.union([ v_deptCreateInputSchema,v_deptUncheckedCreateInputSchema ]),
  update: z.union([ v_deptUpdateInputSchema,v_deptUncheckedUpdateInputSchema ]),
}).strict() ;

export const v_deptCreateManyArgsSchema: z.ZodType<Prisma.v_deptCreateManyArgs> = z.object({
  data: z.union([ v_deptCreateManyInputSchema,v_deptCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const v_deptDeleteArgsSchema: z.ZodType<Prisma.v_deptDeleteArgs> = z.object({
  select: v_deptSelectSchema.optional(),
  where: v_deptWhereUniqueInputSchema,
}).strict() ;

export const v_deptUpdateArgsSchema: z.ZodType<Prisma.v_deptUpdateArgs> = z.object({
  select: v_deptSelectSchema.optional(),
  data: z.union([ v_deptUpdateInputSchema,v_deptUncheckedUpdateInputSchema ]),
  where: v_deptWhereUniqueInputSchema,
}).strict() ;

export const v_deptUpdateManyArgsSchema: z.ZodType<Prisma.v_deptUpdateManyArgs> = z.object({
  data: z.union([ v_deptUpdateManyMutationInputSchema,v_deptUncheckedUpdateManyInputSchema ]),
  where: v_deptWhereInputSchema.optional(),
}).strict() ;

export const v_deptDeleteManyArgsSchema: z.ZodType<Prisma.v_deptDeleteManyArgs> = z.object({
  where: v_deptWhereInputSchema.optional(),
}).strict() ;

export const v_device_driverCreateArgsSchema: z.ZodType<Prisma.v_device_driverCreateArgs> = z.object({
  select: v_device_driverSelectSchema.optional(),
  data: z.union([ v_device_driverCreateInputSchema,v_device_driverUncheckedCreateInputSchema ]),
}).strict() ;

export const v_device_driverUpsertArgsSchema: z.ZodType<Prisma.v_device_driverUpsertArgs> = z.object({
  select: v_device_driverSelectSchema.optional(),
  where: v_device_driverWhereUniqueInputSchema,
  create: z.union([ v_device_driverCreateInputSchema,v_device_driverUncheckedCreateInputSchema ]),
  update: z.union([ v_device_driverUpdateInputSchema,v_device_driverUncheckedUpdateInputSchema ]),
}).strict() ;

export const v_device_driverCreateManyArgsSchema: z.ZodType<Prisma.v_device_driverCreateManyArgs> = z.object({
  data: z.union([ v_device_driverCreateManyInputSchema,v_device_driverCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const v_device_driverDeleteArgsSchema: z.ZodType<Prisma.v_device_driverDeleteArgs> = z.object({
  select: v_device_driverSelectSchema.optional(),
  where: v_device_driverWhereUniqueInputSchema,
}).strict() ;

export const v_device_driverUpdateArgsSchema: z.ZodType<Prisma.v_device_driverUpdateArgs> = z.object({
  select: v_device_driverSelectSchema.optional(),
  data: z.union([ v_device_driverUpdateInputSchema,v_device_driverUncheckedUpdateInputSchema ]),
  where: v_device_driverWhereUniqueInputSchema,
}).strict() ;

export const v_device_driverUpdateManyArgsSchema: z.ZodType<Prisma.v_device_driverUpdateManyArgs> = z.object({
  data: z.union([ v_device_driverUpdateManyMutationInputSchema,v_device_driverUncheckedUpdateManyInputSchema ]),
  where: v_device_driverWhereInputSchema.optional(),
}).strict() ;

export const v_device_driverDeleteManyArgsSchema: z.ZodType<Prisma.v_device_driverDeleteManyArgs> = z.object({
  where: v_device_driverWhereInputSchema.optional(),
}).strict() ;

export const v_userCreateArgsSchema: z.ZodType<Prisma.v_userCreateArgs> = z.object({
  select: v_userSelectSchema.optional(),
  data: z.union([ v_userCreateInputSchema,v_userUncheckedCreateInputSchema ]),
}).strict() ;

export const v_userUpsertArgsSchema: z.ZodType<Prisma.v_userUpsertArgs> = z.object({
  select: v_userSelectSchema.optional(),
  where: v_userWhereUniqueInputSchema,
  create: z.union([ v_userCreateInputSchema,v_userUncheckedCreateInputSchema ]),
  update: z.union([ v_userUpdateInputSchema,v_userUncheckedUpdateInputSchema ]),
}).strict() ;

export const v_userCreateManyArgsSchema: z.ZodType<Prisma.v_userCreateManyArgs> = z.object({
  data: z.union([ v_userCreateManyInputSchema,v_userCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const v_userDeleteArgsSchema: z.ZodType<Prisma.v_userDeleteArgs> = z.object({
  select: v_userSelectSchema.optional(),
  where: v_userWhereUniqueInputSchema,
}).strict() ;

export const v_userUpdateArgsSchema: z.ZodType<Prisma.v_userUpdateArgs> = z.object({
  select: v_userSelectSchema.optional(),
  data: z.union([ v_userUpdateInputSchema,v_userUncheckedUpdateInputSchema ]),
  where: v_userWhereUniqueInputSchema,
}).strict() ;

export const v_userUpdateManyArgsSchema: z.ZodType<Prisma.v_userUpdateManyArgs> = z.object({
  data: z.union([ v_userUpdateManyMutationInputSchema,v_userUncheckedUpdateManyInputSchema ]),
  where: v_userWhereInputSchema.optional(),
}).strict() ;

export const v_userDeleteManyArgsSchema: z.ZodType<Prisma.v_userDeleteManyArgs> = z.object({
  where: v_userWhereInputSchema.optional(),
}).strict() ;

export const v_warehouseCreateArgsSchema: z.ZodType<Prisma.v_warehouseCreateArgs> = z.object({
  select: v_warehouseSelectSchema.optional(),
  data: z.union([ v_warehouseCreateInputSchema,v_warehouseUncheckedCreateInputSchema ]),
}).strict() ;

export const v_warehouseUpsertArgsSchema: z.ZodType<Prisma.v_warehouseUpsertArgs> = z.object({
  select: v_warehouseSelectSchema.optional(),
  where: v_warehouseWhereUniqueInputSchema,
  create: z.union([ v_warehouseCreateInputSchema,v_warehouseUncheckedCreateInputSchema ]),
  update: z.union([ v_warehouseUpdateInputSchema,v_warehouseUncheckedUpdateInputSchema ]),
}).strict() ;

export const v_warehouseCreateManyArgsSchema: z.ZodType<Prisma.v_warehouseCreateManyArgs> = z.object({
  data: z.union([ v_warehouseCreateManyInputSchema,v_warehouseCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const v_warehouseDeleteArgsSchema: z.ZodType<Prisma.v_warehouseDeleteArgs> = z.object({
  select: v_warehouseSelectSchema.optional(),
  where: v_warehouseWhereUniqueInputSchema,
}).strict() ;

export const v_warehouseUpdateArgsSchema: z.ZodType<Prisma.v_warehouseUpdateArgs> = z.object({
  select: v_warehouseSelectSchema.optional(),
  data: z.union([ v_warehouseUpdateInputSchema,v_warehouseUncheckedUpdateInputSchema ]),
  where: v_warehouseWhereUniqueInputSchema,
}).strict() ;

export const v_warehouseUpdateManyArgsSchema: z.ZodType<Prisma.v_warehouseUpdateManyArgs> = z.object({
  data: z.union([ v_warehouseUpdateManyMutationInputSchema,v_warehouseUncheckedUpdateManyInputSchema ]),
  where: v_warehouseWhereInputSchema.optional(),
}).strict() ;

export const v_warehouseDeleteManyArgsSchema: z.ZodType<Prisma.v_warehouseDeleteManyArgs> = z.object({
  where: v_warehouseWhereInputSchema.optional(),
}).strict() ;

export const v_deviceCreateArgsSchema: z.ZodType<Prisma.v_deviceCreateArgs> = z.object({
  select: v_deviceSelectSchema.optional(),
  data: z.union([ v_deviceCreateInputSchema,v_deviceUncheckedCreateInputSchema ]),
}).strict() ;

export const v_deviceUpsertArgsSchema: z.ZodType<Prisma.v_deviceUpsertArgs> = z.object({
  select: v_deviceSelectSchema.optional(),
  where: v_deviceWhereUniqueInputSchema,
  create: z.union([ v_deviceCreateInputSchema,v_deviceUncheckedCreateInputSchema ]),
  update: z.union([ v_deviceUpdateInputSchema,v_deviceUncheckedUpdateInputSchema ]),
}).strict() ;

export const v_deviceCreateManyArgsSchema: z.ZodType<Prisma.v_deviceCreateManyArgs> = z.object({
  data: z.union([ v_deviceCreateManyInputSchema,v_deviceCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const v_deviceDeleteArgsSchema: z.ZodType<Prisma.v_deviceDeleteArgs> = z.object({
  select: v_deviceSelectSchema.optional(),
  where: v_deviceWhereUniqueInputSchema,
}).strict() ;

export const v_deviceUpdateArgsSchema: z.ZodType<Prisma.v_deviceUpdateArgs> = z.object({
  select: v_deviceSelectSchema.optional(),
  data: z.union([ v_deviceUpdateInputSchema,v_deviceUncheckedUpdateInputSchema ]),
  where: v_deviceWhereUniqueInputSchema,
}).strict() ;

export const v_deviceUpdateManyArgsSchema: z.ZodType<Prisma.v_deviceUpdateManyArgs> = z.object({
  data: z.union([ v_deviceUpdateManyMutationInputSchema,v_deviceUncheckedUpdateManyInputSchema ]),
  where: v_deviceWhereInputSchema.optional(),
}).strict() ;

export const v_deviceDeleteManyArgsSchema: z.ZodType<Prisma.v_deviceDeleteManyArgs> = z.object({
  where: v_deviceWhereInputSchema.optional(),
}).strict() ;