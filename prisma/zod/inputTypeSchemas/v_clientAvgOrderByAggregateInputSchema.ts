import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const v_clientAvgOrderByAggregateInputSchema: z.ZodType<Prisma.v_clientAvgOrderByAggregateInput> = z.object({
  client_id: z.lazy(() => SortOrderSchema).optional(),
  parent_client_id: z.lazy(() => SortOrderSchema).optional(),
  default_client_branch_rate_id: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  branch_count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default v_clientAvgOrderByAggregateInputSchema;
