import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { device_option_compatibilityDevice_model_idOption_model_idCompoundUniqueInputSchema } from './device_option_compatibilityDevice_model_idOption_model_idCompoundUniqueInputSchema';
import { device_option_compatibilityWhereInputSchema } from './device_option_compatibilityWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';

export const device_option_compatibilityWhereUniqueInputSchema: z.ZodType<Prisma.device_option_compatibilityWhereUniqueInput> = z.object({
  device_model_id_option_model_id: z.lazy(() => device_option_compatibilityDevice_model_idOption_model_idCompoundUniqueInputSchema)
})
.and(z.object({
  device_model_id_option_model_id: z.lazy(() => device_option_compatibilityDevice_model_idOption_model_idCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => device_option_compatibilityWhereInputSchema),z.lazy(() => device_option_compatibilityWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_option_compatibilityWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_option_compatibilityWhereInputSchema),z.lazy(() => device_option_compatibilityWhereInputSchema).array() ]).optional(),
  device_model_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  option_model_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
}).strict());

export default device_option_compatibilityWhereUniqueInputSchema;
