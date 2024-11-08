import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { sigunguWhereInputSchema } from './sigunguWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';

export const sigunguWhereUniqueInputSchema: z.ZodType<Prisma.sigunguWhereUniqueInput> = z.object({
  sigungu_id: z.number().int()
})
.and(z.object({
  sigungu_id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => sigunguWhereInputSchema),z.lazy(() => sigunguWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => sigunguWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => sigunguWhereInputSchema),z.lazy(() => sigunguWhereInputSchema).array() ]).optional(),
  sigungu_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  sido_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
}).strict());

export default sigunguWhereUniqueInputSchema;
