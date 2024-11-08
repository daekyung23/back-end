import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';

export const device_statusScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.device_statusScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => device_statusScalarWhereWithAggregatesInputSchema),z.lazy(() => device_statusScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_statusScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_statusScalarWhereWithAggregatesInputSchema),z.lazy(() => device_statusScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  status_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  status_name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export default device_statusScalarWhereWithAggregatesInputSchema;
