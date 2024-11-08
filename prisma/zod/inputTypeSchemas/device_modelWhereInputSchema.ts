import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';

export const device_modelWhereInputSchema: z.ZodType<Prisma.device_modelWhereInput> = z.object({
  AND: z.union([ z.lazy(() => device_modelWhereInputSchema),z.lazy(() => device_modelWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_modelWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_modelWhereInputSchema),z.lazy(() => device_modelWhereInputSchema).array() ]).optional(),
  device_model_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  model_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  manufacturer: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  color_support: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export default device_modelWhereInputSchema;
