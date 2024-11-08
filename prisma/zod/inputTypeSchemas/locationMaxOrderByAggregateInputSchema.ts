import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const locationMaxOrderByAggregateInputSchema: z.ZodType<Prisma.locationMaxOrderByAggregateInput> = z.object({
  location_id: z.lazy(() => SortOrderSchema).optional(),
  location_type: z.lazy(() => SortOrderSchema).optional(),
  warehouse_id: z.lazy(() => SortOrderSchema).optional(),
  client_branch_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default locationMaxOrderByAggregateInputSchema;
