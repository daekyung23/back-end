import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { device_driverCountOrderByAggregateInputSchema } from './device_driverCountOrderByAggregateInputSchema';
import { device_driverAvgOrderByAggregateInputSchema } from './device_driverAvgOrderByAggregateInputSchema';
import { device_driverMaxOrderByAggregateInputSchema } from './device_driverMaxOrderByAggregateInputSchema';
import { device_driverMinOrderByAggregateInputSchema } from './device_driverMinOrderByAggregateInputSchema';
import { device_driverSumOrderByAggregateInputSchema } from './device_driverSumOrderByAggregateInputSchema';

export const device_driverOrderByWithAggregationInputSchema: z.ZodType<Prisma.device_driverOrderByWithAggregationInput> = z.object({
  device_driver_id: z.lazy(() => SortOrderSchema).optional(),
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  manufacturer: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  printer_language: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  install_file_address: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => device_driverCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => device_driverAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => device_driverMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => device_driverMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => device_driverSumOrderByAggregateInputSchema).optional()
}).strict();

export default device_driverOrderByWithAggregationInputSchema;
