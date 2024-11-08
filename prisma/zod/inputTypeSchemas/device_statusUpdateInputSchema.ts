import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const device_statusUpdateInputSchema: z.ZodType<Prisma.device_statusUpdateInput> = z.object({
  status_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default device_statusUpdateInputSchema;
