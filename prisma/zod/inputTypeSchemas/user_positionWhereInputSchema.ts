import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';

export const user_positionWhereInputSchema: z.ZodType<Prisma.user_positionWhereInput> = z.object({
  AND: z.union([ z.lazy(() => user_positionWhereInputSchema),z.lazy(() => user_positionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => user_positionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => user_positionWhereInputSchema),z.lazy(() => user_positionWhereInputSchema).array() ]).optional(),
  user_position_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  position_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export default user_positionWhereInputSchema;
