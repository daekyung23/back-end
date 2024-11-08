import { z } from 'zod';

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

export default client_branchSchema;
