import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { device_optionWhereInputSchema } from './device_optionWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { Enumdevice_option_location_typeFilterSchema } from './Enumdevice_option_location_typeFilterSchema';
import { device_option_location_typeSchema } from './device_option_location_typeSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';

export const device_optionWhereUniqueInputSchema: z.ZodType<Prisma.device_optionWhereUniqueInput> = z.object({
  device_option_id: z.number().int()
})
.and(z.object({
  device_option_id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => device_optionWhereInputSchema),z.lazy(() => device_optionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_optionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_optionWhereInputSchema),z.lazy(() => device_optionWhereInputSchema).array() ]).optional(),
  option_model_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  serial: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  is_active: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  location_type: z.union([ z.lazy(() => Enumdevice_option_location_typeFilterSchema),z.lazy(() => device_option_location_typeSchema) ]).optional(),
  location_warehouse_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  location_device_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
}).strict());

export default device_optionWhereUniqueInputSchema;
