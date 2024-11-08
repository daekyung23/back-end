import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const device_option_compatibilityUpdateInputSchema: z.ZodType<Prisma.device_option_compatibilityUpdateInput> = z.object({
  device_model_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  option_model_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default device_option_compatibilityUpdateInputSchema;
