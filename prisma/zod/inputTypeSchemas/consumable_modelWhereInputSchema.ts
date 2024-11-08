import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';

export const consumable_modelWhereInputSchema: z.ZodType<Prisma.consumable_modelWhereInput> = z.object({
  AND: z.union([ z.lazy(() => consumable_modelWhereInputSchema),z.lazy(() => consumable_modelWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => consumable_modelWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => consumable_modelWhereInputSchema),z.lazy(() => consumable_modelWhereInputSchema).array() ]).optional(),
  consumable_model_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  manufacturer: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  consumable_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  consumable_type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export default consumable_modelWhereInputSchema;
