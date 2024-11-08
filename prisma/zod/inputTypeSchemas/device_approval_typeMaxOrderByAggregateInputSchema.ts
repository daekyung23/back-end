import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const device_approval_typeMaxOrderByAggregateInputSchema: z.ZodType<Prisma.device_approval_typeMaxOrderByAggregateInput> = z.object({
  approval_type_id: z.lazy(() => SortOrderSchema).optional(),
  approval_type_name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default device_approval_typeMaxOrderByAggregateInputSchema;
