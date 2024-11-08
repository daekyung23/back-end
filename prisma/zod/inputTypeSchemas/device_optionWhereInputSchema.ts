import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { Enumdevice_option_location_typeFilterSchema } from './Enumdevice_option_location_typeFilterSchema';
import { device_option_location_typeSchema } from './device_option_location_typeSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';

export const device_optionWhereInputSchema: z.ZodType<Prisma.device_optionWhereInput> = z.object({
  AND: z.union([ z.lazy(() => device_optionWhereInputSchema),z.lazy(() => device_optionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_optionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_optionWhereInputSchema),z.lazy(() => device_optionWhereInputSchema).array() ]).optional(),
  device_option_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  option_model_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  serial: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  is_active: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  location_type: z.union([ z.lazy(() => Enumdevice_option_location_typeFilterSchema),z.lazy(() => device_option_location_typeSchema) ]).optional(),
  location_warehouse_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  location_device_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export default device_optionWhereInputSchema;
