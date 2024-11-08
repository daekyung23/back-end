import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';

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

export default v_client_branchScalarWhereWithAggregatesInputSchema;
