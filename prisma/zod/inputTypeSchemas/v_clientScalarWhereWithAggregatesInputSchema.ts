import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { BigIntWithAggregatesFilterSchema } from './BigIntWithAggregatesFilterSchema';

export const v_clientScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.v_clientScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => v_clientScalarWhereWithAggregatesInputSchema),z.lazy(() => v_clientScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => v_clientScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => v_clientScalarWhereWithAggregatesInputSchema),z.lazy(() => v_clientScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  client_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  client_name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  parent_client_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  default_client_branch_rate_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  is_active: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  parent_client_name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  rate_type: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  rate_detail: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  branch_count: z.union([ z.lazy(() => BigIntWithAggregatesFilterSchema),z.bigint() ]).optional(),
}).strict();

export default v_clientScalarWhereWithAggregatesInputSchema;
