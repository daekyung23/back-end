import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { option_modelWhereInputSchema } from './option_modelWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';

export const option_modelWhereUniqueInputSchema: z.ZodType<Prisma.option_modelWhereUniqueInput> = z.object({
  option_model_id: z.number().int()
})
.and(z.object({
  option_model_id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => option_modelWhereInputSchema),z.lazy(() => option_modelWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => option_modelWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => option_modelWhereInputSchema),z.lazy(() => option_modelWhereInputSchema).array() ]).optional(),
  option_model_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  option_type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  manufacturer: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict());

export default option_modelWhereUniqueInputSchema;
