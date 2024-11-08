import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';

export const sigunguScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.sigunguScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => sigunguScalarWhereWithAggregatesInputSchema),z.lazy(() => sigunguScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => sigunguScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => sigunguScalarWhereWithAggregatesInputSchema),z.lazy(() => sigunguScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  sigungu_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  sigungu_name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  sido_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export default sigunguScalarWhereWithAggregatesInputSchema;
