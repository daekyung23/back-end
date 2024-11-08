import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';

export const sidoScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.sidoScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => sidoScalarWhereWithAggregatesInputSchema),z.lazy(() => sidoScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => sidoScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => sidoScalarWhereWithAggregatesInputSchema),z.lazy(() => sidoScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  sido_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  sido_name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default sidoScalarWhereWithAggregatesInputSchema;
