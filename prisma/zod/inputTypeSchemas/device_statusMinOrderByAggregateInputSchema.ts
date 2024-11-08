import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const device_statusMinOrderByAggregateInputSchema: z.ZodType<Prisma.device_statusMinOrderByAggregateInput> = z.object({
  status_id: z.lazy(() => SortOrderSchema).optional(),
  status_name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default device_statusMinOrderByAggregateInputSchema;
