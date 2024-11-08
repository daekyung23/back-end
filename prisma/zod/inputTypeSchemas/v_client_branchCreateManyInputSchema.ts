import type { Prisma } from '@prisma/client';

import { z } from 'zod';

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

export default v_client_branchCreateManyInputSchema;
