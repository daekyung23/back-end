import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';

export const option_modelScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.option_modelScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => option_modelScalarWhereWithAggregatesInputSchema),z.lazy(() => option_modelScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => option_modelScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => option_modelScalarWhereWithAggregatesInputSchema),z.lazy(() => option_modelScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  option_model_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  option_model_name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  option_type: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  manufacturer: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export default option_modelScalarWhereWithAggregatesInputSchema;
