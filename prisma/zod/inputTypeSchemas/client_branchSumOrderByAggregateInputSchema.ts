import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const client_branchSumOrderByAggregateInputSchema: z.ZodType<Prisma.client_branchSumOrderByAggregateInput> = z.object({
  client_branch_id: z.lazy(() => SortOrderSchema).optional(),
  sigungu_id: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_id: z.lazy(() => SortOrderSchema).optional(),
  client_id: z.lazy(() => SortOrderSchema).optional(),
  client_branch_rate_id: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  remote_support: z.lazy(() => SortOrderSchema).optional(),
  push_alert: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default client_branchSumOrderByAggregateInputSchema;
