import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const device_statusSumOrderByAggregateInputSchema: z.ZodType<Prisma.device_statusSumOrderByAggregateInput> = z.object({
  status_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default device_statusSumOrderByAggregateInputSchema;
