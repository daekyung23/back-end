import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const device_consumable_compatibilityUncheckedUpdateManyInputSchema: z.ZodType<Prisma.device_consumable_compatibilityUncheckedUpdateManyInput> = z.object({
  device_model_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  consumable_model_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default device_consumable_compatibilityUncheckedUpdateManyInputSchema;
