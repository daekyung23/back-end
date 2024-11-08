import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { device_location_logCountOrderByAggregateInputSchema } from './device_location_logCountOrderByAggregateInputSchema';
import { device_location_logAvgOrderByAggregateInputSchema } from './device_location_logAvgOrderByAggregateInputSchema';
import { device_location_logMaxOrderByAggregateInputSchema } from './device_location_logMaxOrderByAggregateInputSchema';
import { device_location_logMinOrderByAggregateInputSchema } from './device_location_logMinOrderByAggregateInputSchema';
import { device_location_logSumOrderByAggregateInputSchema } from './device_location_logSumOrderByAggregateInputSchema';

export const device_location_logOrderByWithAggregationInputSchema: z.ZodType<Prisma.device_location_logOrderByWithAggregationInput> = z.object({
  device_location_log_id: z.lazy(() => SortOrderSchema).optional(),
  device_id: z.lazy(() => SortOrderSchema).optional(),
  location_date: z.lazy(() => SortOrderSchema).optional(),
  location_id: z.lazy(() => SortOrderSchema).optional(),
  location_detail: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => device_location_logCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => device_location_logAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => device_location_logMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => device_location_logMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => device_location_logSumOrderByAggregateInputSchema).optional()
}).strict();

export default device_location_logOrderByWithAggregationInputSchema;
