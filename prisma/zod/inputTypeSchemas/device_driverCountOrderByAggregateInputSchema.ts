import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const device_driverCountOrderByAggregateInputSchema: z.ZodType<Prisma.device_driverCountOrderByAggregateInput> = z.object({
  device_driver_id: z.lazy(() => SortOrderSchema).optional(),
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  manufacturer: z.lazy(() => SortOrderSchema).optional(),
  printer_language: z.lazy(() => SortOrderSchema).optional(),
  install_file_address: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default device_driverCountOrderByAggregateInputSchema;
