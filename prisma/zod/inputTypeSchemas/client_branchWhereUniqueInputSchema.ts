import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { client_branchWhereInputSchema } from './client_branchWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

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

export default client_branchWhereUniqueInputSchema;
