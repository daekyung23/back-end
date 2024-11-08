import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';

export const device_consumable_compatibilityWhereInputSchema: z.ZodType<Prisma.device_consumable_compatibilityWhereInput> = z.object({
  AND: z.union([ z.lazy(() => device_consumable_compatibilityWhereInputSchema),z.lazy(() => device_consumable_compatibilityWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_consumable_compatibilityWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_consumable_compatibilityWhereInputSchema),z.lazy(() => device_consumable_compatibilityWhereInputSchema).array() ]).optional(),
  device_model_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  consumable_model_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export default device_consumable_compatibilityWhereInputSchema;
