import { z } from 'zod';

/////////////////////////////////////////
// V CLIENT BRANCH SCHEMA
/////////////////////////////////////////

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

export default v_client_branchSchema;
