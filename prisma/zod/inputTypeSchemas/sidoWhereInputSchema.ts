import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const sidoWhereInputSchema: z.ZodType<Prisma.sidoWhereInput> = z.object({
  AND: z.union([ z.lazy(() => sidoWhereInputSchema),z.lazy(() => sidoWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => sidoWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => sidoWhereInputSchema),z.lazy(() => sidoWhereInputSchema).array() ]).optional(),
  sido_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  sido_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default sidoWhereInputSchema;
