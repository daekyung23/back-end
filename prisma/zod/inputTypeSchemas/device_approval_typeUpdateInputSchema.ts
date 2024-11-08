import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const device_approval_typeUpdateInputSchema: z.ZodType<Prisma.device_approval_typeUpdateInput> = z.object({
  approval_type_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default device_approval_typeUpdateInputSchema;
