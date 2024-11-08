import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { user_positionWhereInputSchema } from './user_positionWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';

export const user_positionWhereUniqueInputSchema: z.ZodType<Prisma.user_positionWhereUniqueInput> = z.object({
  user_position_id: z.number().int()
})
.and(z.object({
  user_position_id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => user_positionWhereInputSchema),z.lazy(() => user_positionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => user_positionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => user_positionWhereInputSchema),z.lazy(() => user_positionWhereInputSchema).array() ]).optional(),
  position_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict());

export default user_positionWhereUniqueInputSchema;
