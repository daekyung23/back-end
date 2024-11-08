import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { v_clientWhereInputSchema } from './v_clientWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { BigIntFilterSchema } from './BigIntFilterSchema';

export const v_clientWhereUniqueInputSchema: z.ZodType<Prisma.v_clientWhereUniqueInput> = z.object({
  client_id: z.number().int()
})
.and(z.object({
  client_id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => v_clientWhereInputSchema),z.lazy(() => v_clientWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => v_clientWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => v_clientWhereInputSchema),z.lazy(() => v_clientWhereInputSchema).array() ]).optional(),
  client_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  parent_client_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  default_client_branch_rate_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  is_active: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  parent_client_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  rate_type: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  rate_detail: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  branch_count: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
}).strict());

export default v_clientWhereUniqueInputSchema;
