import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';

export const client_rateScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.client_rateScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => client_rateScalarWhereWithAggregatesInputSchema),z.lazy(() => client_rateScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => client_rateScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => client_rateScalarWhereWithAggregatesInputSchema),z.lazy(() => client_rateScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  client_rate_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  rate_type: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  rate_detail: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default client_rateScalarWhereWithAggregatesInputSchema;
