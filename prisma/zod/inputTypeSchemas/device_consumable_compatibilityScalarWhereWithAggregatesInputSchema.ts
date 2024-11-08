import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';

export const device_consumable_compatibilityScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.device_consumable_compatibilityScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => device_consumable_compatibilityScalarWhereWithAggregatesInputSchema),z.lazy(() => device_consumable_compatibilityScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_consumable_compatibilityScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_consumable_compatibilityScalarWhereWithAggregatesInputSchema),z.lazy(() => device_consumable_compatibilityScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  device_model_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  consumable_model_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export default device_consumable_compatibilityScalarWhereWithAggregatesInputSchema;
