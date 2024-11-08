import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const user_positionUpdateInputSchema: z.ZodType<Prisma.user_positionUpdateInput> = z.object({
  position_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default user_positionUpdateInputSchema;
