import type { Prisma } from '@prisma/client';

import { z } from 'zod';

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

export default client_branchUncheckedCreateInputSchema;
