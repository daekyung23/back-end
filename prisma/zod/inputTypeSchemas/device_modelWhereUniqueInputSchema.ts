import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { device_modelWhereInputSchema } from './device_modelWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';

export const device_modelWhereUniqueInputSchema: z.ZodType<Prisma.device_modelWhereUniqueInput> = z.object({
  device_model_id: z.number().int()
})
.and(z.object({
  device_model_id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => device_modelWhereInputSchema),z.lazy(() => device_modelWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_modelWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_modelWhereInputSchema),z.lazy(() => device_modelWhereInputSchema).array() ]).optional(),
  model_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  manufacturer: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  color_support: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
}).strict());

export default device_modelWhereUniqueInputSchema;
