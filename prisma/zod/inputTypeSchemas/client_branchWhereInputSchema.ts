import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

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

export default client_branchWhereInputSchema;
