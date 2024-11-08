import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema';

export const call_typeScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.call_typeScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => call_typeScalarWhereWithAggregatesInputSchema),z.lazy(() => call_typeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => call_typeScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => call_typeScalarWhereWithAggregatesInputSchema),z.lazy(() => call_typeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  call_type_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  call_type_name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  parent_call_type_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export default call_typeScalarWhereWithAggregatesInputSchema;
