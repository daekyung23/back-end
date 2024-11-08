import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const locationSumOrderByAggregateInputSchema: z.ZodType<Prisma.locationSumOrderByAggregateInput> = z.object({
  location_id: z.lazy(() => SortOrderSchema).optional(),
  warehouse_id: z.lazy(() => SortOrderSchema).optional(),
  client_branch_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default locationSumOrderByAggregateInputSchema;
