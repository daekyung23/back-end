import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';

export const device_driverScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.device_driverScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => device_driverScalarWhereWithAggregatesInputSchema),z.lazy(() => device_driverScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_driverScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_driverScalarWhereWithAggregatesInputSchema),z.lazy(() => device_driverScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  device_driver_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  device_model_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  manufacturer: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  printer_language: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  install_file_address: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default device_driverScalarWhereWithAggregatesInputSchema;
