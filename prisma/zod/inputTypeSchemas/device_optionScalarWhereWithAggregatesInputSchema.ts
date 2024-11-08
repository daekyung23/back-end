import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { Enumdevice_option_location_typeWithAggregatesFilterSchema } from './Enumdevice_option_location_typeWithAggregatesFilterSchema';
import { device_option_location_typeSchema } from './device_option_location_typeSchema';
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema';

export const device_optionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.device_optionScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => device_optionScalarWhereWithAggregatesInputSchema),z.lazy(() => device_optionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_optionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_optionScalarWhereWithAggregatesInputSchema),z.lazy(() => device_optionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  device_option_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  option_model_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  serial: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  is_active: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  location_type: z.union([ z.lazy(() => Enumdevice_option_location_typeWithAggregatesFilterSchema),z.lazy(() => device_option_location_typeSchema) ]).optional(),
  location_warehouse_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  location_device_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export default device_optionScalarWhereWithAggregatesInputSchema;
