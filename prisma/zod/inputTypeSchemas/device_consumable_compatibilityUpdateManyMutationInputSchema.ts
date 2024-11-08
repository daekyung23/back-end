import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const device_consumable_compatibilityUpdateManyMutationInputSchema: z.ZodType<Prisma.device_consumable_compatibilityUpdateManyMutationInput> = z.object({
  device_model_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  consumable_model_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default device_consumable_compatibilityUpdateManyMutationInputSchema;
