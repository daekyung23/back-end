import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { sidoWhereInputSchema } from './sidoWhereInputSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const sidoWhereUniqueInputSchema: z.ZodType<Prisma.sidoWhereUniqueInput> = z.object({
  sido_id: z.number().int()
})
.and(z.object({
  sido_id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => sidoWhereInputSchema),z.lazy(() => sidoWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => sidoWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => sidoWhereInputSchema),z.lazy(() => sidoWhereInputSchema).array() ]).optional(),
  sido_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict());

export default sidoWhereUniqueInputSchema;
