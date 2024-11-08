import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';

export const option_modelWhereInputSchema: z.ZodType<Prisma.option_modelWhereInput> = z.object({
  AND: z.union([ z.lazy(() => option_modelWhereInputSchema),z.lazy(() => option_modelWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => option_modelWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => option_modelWhereInputSchema),z.lazy(() => option_modelWhereInputSchema).array() ]).optional(),
  option_model_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  option_model_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  option_type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  manufacturer: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export default option_modelWhereInputSchema;
