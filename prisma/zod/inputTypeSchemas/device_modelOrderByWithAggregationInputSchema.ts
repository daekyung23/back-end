import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { device_modelCountOrderByAggregateInputSchema } from './device_modelCountOrderByAggregateInputSchema';
import { device_modelAvgOrderByAggregateInputSchema } from './device_modelAvgOrderByAggregateInputSchema';
import { device_modelMaxOrderByAggregateInputSchema } from './device_modelMaxOrderByAggregateInputSchema';
import { device_modelMinOrderByAggregateInputSchema } from './device_modelMinOrderByAggregateInputSchema';
import { device_modelSumOrderByAggregateInputSchema } from './device_modelSumOrderByAggregateInputSchema';

export const device_modelOrderByWithAggregationInputSchema: z.ZodType<Prisma.device_modelOrderByWithAggregationInput> = z.object({
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  model_name: z.lazy(() => SortOrderSchema).optional(),
  manufacturer: z.lazy(() => SortOrderSchema).optional(),
  color_support: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => device_modelCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => device_modelAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => device_modelMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => device_modelMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => device_modelSumOrderByAggregateInputSchema).optional()
}).strict();

export default device_modelOrderByWithAggregationInputSchema;
