import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const device_driverWhereInputSchema: z.ZodType<Prisma.device_driverWhereInput> = z.object({
  AND: z.union([ z.lazy(() => device_driverWhereInputSchema),z.lazy(() => device_driverWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_driverWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_driverWhereInputSchema),z.lazy(() => device_driverWhereInputSchema).array() ]).optional(),
  device_driver_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  device_model_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  manufacturer: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  printer_language: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  install_file_address: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default device_driverWhereInputSchema;
