import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';

export const clientWhereInputSchema: z.ZodType<Prisma.clientWhereInput> = z.object({
  AND: z.union([ z.lazy(() => clientWhereInputSchema),z.lazy(() => clientWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => clientWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => clientWhereInputSchema),z.lazy(() => clientWhereInputSchema).array() ]).optional(),
  client_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  parent_client_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  default_client_branch_rate_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  client_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  is_active: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export default clientWhereInputSchema;
