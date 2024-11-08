import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const v_clientCountOrderByAggregateInputSchema: z.ZodType<Prisma.v_clientCountOrderByAggregateInput> = z.object({
  client_id: z.lazy(() => SortOrderSchema).optional(),
  client_name: z.lazy(() => SortOrderSchema).optional(),
  parent_client_id: z.lazy(() => SortOrderSchema).optional(),
  default_client_branch_rate_id: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  parent_client_name: z.lazy(() => SortOrderSchema).optional(),
  rate_type: z.lazy(() => SortOrderSchema).optional(),
  rate_detail: z.lazy(() => SortOrderSchema).optional(),
  branch_count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default v_clientCountOrderByAggregateInputSchema;
