import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';

export const clientScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.clientScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => clientScalarWhereWithAggregatesInputSchema),z.lazy(() => clientScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => clientScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => clientScalarWhereWithAggregatesInputSchema),z.lazy(() => clientScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  client_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  parent_client_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  default_client_branch_rate_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  client_name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  is_active: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export default clientScalarWhereWithAggregatesInputSchema;
