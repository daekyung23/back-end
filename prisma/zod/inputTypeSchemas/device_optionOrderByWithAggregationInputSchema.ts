import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { device_optionCountOrderByAggregateInputSchema } from './device_optionCountOrderByAggregateInputSchema';
import { device_optionAvgOrderByAggregateInputSchema } from './device_optionAvgOrderByAggregateInputSchema';
import { device_optionMaxOrderByAggregateInputSchema } from './device_optionMaxOrderByAggregateInputSchema';
import { device_optionMinOrderByAggregateInputSchema } from './device_optionMinOrderByAggregateInputSchema';
import { device_optionSumOrderByAggregateInputSchema } from './device_optionSumOrderByAggregateInputSchema';

export const device_optionOrderByWithAggregationInputSchema: z.ZodType<Prisma.device_optionOrderByWithAggregationInput> = z.object({
  device_option_id: z.lazy(() => SortOrderSchema).optional(),
  option_model_id: z.lazy(() => SortOrderSchema).optional(),
  serial: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  location_type: z.lazy(() => SortOrderSchema).optional(),
  location_warehouse_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  location_device_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => device_optionCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => device_optionAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => device_optionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => device_optionMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => device_optionSumOrderByAggregateInputSchema).optional()
}).strict();

export default device_optionOrderByWithAggregationInputSchema;
