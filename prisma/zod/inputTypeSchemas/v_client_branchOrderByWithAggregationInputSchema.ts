import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { v_client_branchCountOrderByAggregateInputSchema } from './v_client_branchCountOrderByAggregateInputSchema';
import { v_client_branchAvgOrderByAggregateInputSchema } from './v_client_branchAvgOrderByAggregateInputSchema';
import { v_client_branchMaxOrderByAggregateInputSchema } from './v_client_branchMaxOrderByAggregateInputSchema';
import { v_client_branchMinOrderByAggregateInputSchema } from './v_client_branchMinOrderByAggregateInputSchema';
import { v_client_branchSumOrderByAggregateInputSchema } from './v_client_branchSumOrderByAggregateInputSchema';

export const v_client_branchOrderByWithAggregationInputSchema: z.ZodType<Prisma.v_client_branchOrderByWithAggregationInput> = z.object({
  client_branch_id: z.lazy(() => SortOrderSchema).optional(),
  client_branch_name: z.lazy(() => SortOrderSchema).optional(),
  client_id: z.lazy(() => SortOrderSchema).optional(),
  sigungu_id: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_id: z.lazy(() => SortOrderSchema).optional(),
  client_branch_rate_id: z.lazy(() => SortOrderSchema).optional(),
  branch_mgr_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  branch_mgr_mobile_num: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  branch_mgr_office_num: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  branch_mgr_email: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  remote_support: z.lazy(() => SortOrderSchema).optional(),
  push_alert: z.lazy(() => SortOrderSchema).optional(),
  client_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  sigungu_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  sido_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => v_client_branchCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => v_client_branchAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => v_client_branchMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => v_client_branchMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => v_client_branchSumOrderByAggregateInputSchema).optional()
}).strict();

export default v_client_branchOrderByWithAggregationInputSchema;
