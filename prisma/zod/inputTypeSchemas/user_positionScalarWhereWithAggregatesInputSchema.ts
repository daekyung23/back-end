import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';

export const user_positionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.user_positionScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => user_positionScalarWhereWithAggregatesInputSchema),z.lazy(() => user_positionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => user_positionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => user_positionScalarWhereWithAggregatesInputSchema),z.lazy(() => user_positionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  user_position_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  position_name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export default user_positionScalarWhereWithAggregatesInputSchema;
