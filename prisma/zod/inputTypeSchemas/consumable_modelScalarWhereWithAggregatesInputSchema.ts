import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';

export const consumable_modelScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.consumable_modelScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => consumable_modelScalarWhereWithAggregatesInputSchema),z.lazy(() => consumable_modelScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => consumable_modelScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => consumable_modelScalarWhereWithAggregatesInputSchema),z.lazy(() => consumable_modelScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  consumable_model_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  manufacturer: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  consumable_name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  consumable_type: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export default consumable_modelScalarWhereWithAggregatesInputSchema;
