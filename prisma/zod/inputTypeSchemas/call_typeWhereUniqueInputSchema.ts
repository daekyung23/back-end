import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { call_typeWhereInputSchema } from './call_typeWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';

export const call_typeWhereUniqueInputSchema: z.ZodType<Prisma.call_typeWhereUniqueInput> = z.object({
  call_type_id: z.number().int()
})
.and(z.object({
  call_type_id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => call_typeWhereInputSchema),z.lazy(() => call_typeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => call_typeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => call_typeWhereInputSchema),z.lazy(() => call_typeWhereInputSchema).array() ]).optional(),
  call_type_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  parent_call_type_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
}).strict());

export default call_typeWhereUniqueInputSchema;
