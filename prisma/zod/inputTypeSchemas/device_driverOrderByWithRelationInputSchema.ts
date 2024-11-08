import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';

export const device_driverOrderByWithRelationInputSchema: z.ZodType<Prisma.device_driverOrderByWithRelationInput> = z.object({
  device_driver_id: z.lazy(() => SortOrderSchema).optional(),
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  manufacturer: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  printer_language: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  install_file_address: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
}).strict();

export default device_driverOrderByWithRelationInputSchema;
