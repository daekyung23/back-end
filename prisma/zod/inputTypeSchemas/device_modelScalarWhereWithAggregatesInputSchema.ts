import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';

export const device_modelScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.device_modelScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => device_modelScalarWhereWithAggregatesInputSchema),z.lazy(() => device_modelScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_modelScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_modelScalarWhereWithAggregatesInputSchema),z.lazy(() => device_modelScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  device_model_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  model_name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  manufacturer: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  color_support: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export default device_modelScalarWhereWithAggregatesInputSchema;
