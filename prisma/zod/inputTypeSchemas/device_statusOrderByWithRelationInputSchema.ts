import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const device_statusOrderByWithRelationInputSchema: z.ZodType<Prisma.device_statusOrderByWithRelationInput> = z.object({
  status_id: z.lazy(() => SortOrderSchema).optional(),
  status_name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default device_statusOrderByWithRelationInputSchema;
