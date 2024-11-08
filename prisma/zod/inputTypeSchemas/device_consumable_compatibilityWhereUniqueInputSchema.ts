import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { device_consumable_compatibilityDevice_model_idConsumable_model_idCompoundUniqueInputSchema } from './device_consumable_compatibilityDevice_model_idConsumable_model_idCompoundUniqueInputSchema';
import { device_consumable_compatibilityWhereInputSchema } from './device_consumable_compatibilityWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';

export const device_consumable_compatibilityWhereUniqueInputSchema: z.ZodType<Prisma.device_consumable_compatibilityWhereUniqueInput> = z.object({
  device_model_id_consumable_model_id: z.lazy(() => device_consumable_compatibilityDevice_model_idConsumable_model_idCompoundUniqueInputSchema)
})
.and(z.object({
  device_model_id_consumable_model_id: z.lazy(() => device_consumable_compatibilityDevice_model_idConsumable_model_idCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => device_consumable_compatibilityWhereInputSchema),z.lazy(() => device_consumable_compatibilityWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_consumable_compatibilityWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_consumable_compatibilityWhereInputSchema),z.lazy(() => device_consumable_compatibilityWhereInputSchema).array() ]).optional(),
  device_model_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  consumable_model_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
}).strict());

export default device_consumable_compatibilityWhereUniqueInputSchema;
