import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const device_approval_typeSumOrderByAggregateInputSchema: z.ZodType<Prisma.device_approval_typeSumOrderByAggregateInput> = z.object({
  approval_type_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default device_approval_typeSumOrderByAggregateInputSchema;
