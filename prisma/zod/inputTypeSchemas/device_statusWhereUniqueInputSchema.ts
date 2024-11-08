import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { device_statusWhereInputSchema } from './device_statusWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';

export const device_statusWhereUniqueInputSchema: z.ZodType<Prisma.device_statusWhereUniqueInput> = z.object({
  status_id: z.number().int()
})
.and(z.object({
  status_id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => device_statusWhereInputSchema),z.lazy(() => device_statusWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_statusWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_statusWhereInputSchema),z.lazy(() => device_statusWhereInputSchema).array() ]).optional(),
  status_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict());

export default device_statusWhereUniqueInputSchema;
