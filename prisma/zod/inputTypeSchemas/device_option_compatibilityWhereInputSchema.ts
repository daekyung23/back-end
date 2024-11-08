import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';

export const device_option_compatibilityWhereInputSchema: z.ZodType<Prisma.device_option_compatibilityWhereInput> = z.object({
  AND: z.union([ z.lazy(() => device_option_compatibilityWhereInputSchema),z.lazy(() => device_option_compatibilityWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_option_compatibilityWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_option_compatibilityWhereInputSchema),z.lazy(() => device_option_compatibilityWhereInputSchema).array() ]).optional(),
  device_model_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  option_model_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export default device_option_compatibilityWhereInputSchema;
