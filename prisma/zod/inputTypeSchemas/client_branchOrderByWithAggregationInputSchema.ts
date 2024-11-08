import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { client_branchCountOrderByAggregateInputSchema } from './client_branchCountOrderByAggregateInputSchema';
import { client_branchAvgOrderByAggregateInputSchema } from './client_branchAvgOrderByAggregateInputSchema';
import { client_branchMaxOrderByAggregateInputSchema } from './client_branchMaxOrderByAggregateInputSchema';
import { client_branchMinOrderByAggregateInputSchema } from './client_branchMinOrderByAggregateInputSchema';
import { client_branchSumOrderByAggregateInputSchema } from './client_branchSumOrderByAggregateInputSchema';

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

export default client_branchOrderByWithAggregationInputSchema;
