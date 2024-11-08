import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';

export const device_option_compatibilityScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.device_option_compatibilityScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => device_option_compatibilityScalarWhereWithAggregatesInputSchema),z.lazy(() => device_option_compatibilityScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_option_compatibilityScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_option_compatibilityScalarWhereWithAggregatesInputSchema),z.lazy(() => device_option_compatibilityScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  device_model_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  option_model_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export default device_option_compatibilityScalarWhereWithAggregatesInputSchema;
