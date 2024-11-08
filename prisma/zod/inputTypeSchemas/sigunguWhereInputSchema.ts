import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';

export const sigunguWhereInputSchema: z.ZodType<Prisma.sigunguWhereInput> = z.object({
  AND: z.union([ z.lazy(() => sigunguWhereInputSchema),z.lazy(() => sigunguWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => sigunguWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => sigunguWhereInputSchema),z.lazy(() => sigunguWhereInputSchema).array() ]).optional(),
  sigungu_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  sigungu_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  sido_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export default sigunguWhereInputSchema;
