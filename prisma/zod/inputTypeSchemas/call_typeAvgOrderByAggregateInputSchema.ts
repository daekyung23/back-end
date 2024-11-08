import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const call_typeAvgOrderByAggregateInputSchema: z.ZodType<Prisma.call_typeAvgOrderByAggregateInput> = z.object({
  call_type_id: z.lazy(() => SortOrderSchema).optional(),
  parent_call_type_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default call_typeAvgOrderByAggregateInputSchema;
