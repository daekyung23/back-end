import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { consumable_modelWhereInputSchema } from './consumable_modelWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';

export const consumable_modelWhereUniqueInputSchema: z.ZodType<Prisma.consumable_modelWhereUniqueInput> = z.object({
  consumable_model_id: z.number().int()
})
.and(z.object({
  consumable_model_id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => consumable_modelWhereInputSchema),z.lazy(() => consumable_modelWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => consumable_modelWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => consumable_modelWhereInputSchema),z.lazy(() => consumable_modelWhereInputSchema).array() ]).optional(),
  manufacturer: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  consumable_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  consumable_type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict());

export default consumable_modelWhereUniqueInputSchema;
