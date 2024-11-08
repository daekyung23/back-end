import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const device_statusAvgOrderByAggregateInputSchema: z.ZodType<Prisma.device_statusAvgOrderByAggregateInput> = z.object({
  status_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default device_statusAvgOrderByAggregateInputSchema;
