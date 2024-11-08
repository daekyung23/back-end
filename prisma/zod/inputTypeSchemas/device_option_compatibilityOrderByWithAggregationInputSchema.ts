import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { device_option_compatibilityCountOrderByAggregateInputSchema } from './device_option_compatibilityCountOrderByAggregateInputSchema';
import { device_option_compatibilityAvgOrderByAggregateInputSchema } from './device_option_compatibilityAvgOrderByAggregateInputSchema';
import { device_option_compatibilityMaxOrderByAggregateInputSchema } from './device_option_compatibilityMaxOrderByAggregateInputSchema';
import { device_option_compatibilityMinOrderByAggregateInputSchema } from './device_option_compatibilityMinOrderByAggregateInputSchema';
import { device_option_compatibilitySumOrderByAggregateInputSchema } from './device_option_compatibilitySumOrderByAggregateInputSchema';

export const device_option_compatibilityOrderByWithAggregationInputSchema: z.ZodType<Prisma.device_option_compatibilityOrderByWithAggregationInput> = z.object({
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  option_model_id: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => device_option_compatibilityCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => device_option_compatibilityAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => device_option_compatibilityMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => device_option_compatibilityMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => device_option_compatibilitySumOrderByAggregateInputSchema).optional()
}).strict();

export default device_option_compatibilityOrderByWithAggregationInputSchema;
