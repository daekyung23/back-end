import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';

export const call_typeWhereInputSchema: z.ZodType<Prisma.call_typeWhereInput> = z.object({
  AND: z.union([ z.lazy(() => call_typeWhereInputSchema),z.lazy(() => call_typeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => call_typeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => call_typeWhereInputSchema),z.lazy(() => call_typeWhereInputSchema).array() ]).optional(),
  call_type_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  call_type_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  parent_call_type_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export default call_typeWhereInputSchema;
