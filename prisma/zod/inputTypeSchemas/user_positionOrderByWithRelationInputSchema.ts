import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const user_positionOrderByWithRelationInputSchema: z.ZodType<Prisma.user_positionOrderByWithRelationInput> = z.object({
  user_position_id: z.lazy(() => SortOrderSchema).optional(),
  position_name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default user_positionOrderByWithRelationInputSchema;
