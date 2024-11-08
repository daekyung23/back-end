import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';

export const device_statusWhereInputSchema: z.ZodType<Prisma.device_statusWhereInput> = z.object({
  AND: z.union([ z.lazy(() => device_statusWhereInputSchema),z.lazy(() => device_statusWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_statusWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_statusWhereInputSchema),z.lazy(() => device_statusWhereInputSchema).array() ]).optional(),
  status_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  status_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export default device_statusWhereInputSchema;
