import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';

export const approval_roleWhereInputSchema: z.ZodType<Prisma.approval_roleWhereInput> = z.object({
  AND: z.union([ z.lazy(() => approval_roleWhereInputSchema),z.lazy(() => approval_roleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => approval_roleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => approval_roleWhereInputSchema),z.lazy(() => approval_roleWhereInputSchema).array() ]).optional(),
  role_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  role_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  upper_role_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export default approval_roleWhereInputSchema;
