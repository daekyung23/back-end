import { z } from 'zod';
import type { Prisma } from '@prisma/client';

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

export default client_branchSelectSchema;
