import { z } from 'zod';

export const Client_branchScalarFieldEnumSchema = z.enum(['client_branch_id','sigungu_id','mgmt_dept_id','client_id','client_branch_name','client_branch_rate_id','branch_mgr_name','branch_mgr_mobile_num','branch_mgr_office_num','branch_mgr_email','is_active','remote_support','push_alert']);

export default Client_branchScalarFieldEnumSchema;
