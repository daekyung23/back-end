import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { device_driverWhereInputSchema } from './device_driverWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const device_driverWhereUniqueInputSchema: z.ZodType<Prisma.device_driverWhereUniqueInput> = z.object({
  device_driver_id: z.number().int()
})
.and(z.object({
  device_driver_id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => device_driverWhereInputSchema),z.lazy(() => device_driverWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_driverWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_driverWhereInputSchema),z.lazy(() => device_driverWhereInputSchema).array() ]).optional(),
  device_model_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  manufacturer: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  printer_language: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  install_file_address: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict());

export default device_driverWhereUniqueInputSchema;
