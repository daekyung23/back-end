import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { approval_roleWhereInputSchema } from './approval_roleWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';

export const approval_roleWhereUniqueInputSchema: z.ZodType<Prisma.approval_roleWhereUniqueInput> = z.object({
  role_id: z.number().int()
})
.and(z.object({
  role_id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => approval_roleWhereInputSchema),z.lazy(() => approval_roleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => approval_roleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => approval_roleWhereInputSchema),z.lazy(() => approval_roleWhereInputSchema).array() ]).optional(),
  role_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  upper_role_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
}).strict());

export default approval_roleWhereUniqueInputSchema;
