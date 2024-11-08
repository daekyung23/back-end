import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { clientWhereInputSchema } from './clientWhereInputSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';

export const clientWhereUniqueInputSchema: z.ZodType<Prisma.clientWhereUniqueInput> = z.object({
  client_id: z.number().int()
})
.and(z.object({
  client_id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => clientWhereInputSchema),z.lazy(() => clientWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => clientWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => clientWhereInputSchema),z.lazy(() => clientWhereInputSchema).array() ]).optional(),
  parent_client_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  default_client_branch_rate_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  client_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  is_active: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
}).strict());

export default clientWhereUniqueInputSchema;
