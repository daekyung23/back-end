import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { device_consumable_compatibilityCountOrderByAggregateInputSchema } from './device_consumable_compatibilityCountOrderByAggregateInputSchema';
import { device_consumable_compatibilityAvgOrderByAggregateInputSchema } from './device_consumable_compatibilityAvgOrderByAggregateInputSchema';
import { device_consumable_compatibilityMaxOrderByAggregateInputSchema } from './device_consumable_compatibilityMaxOrderByAggregateInputSchema';
import { device_consumable_compatibilityMinOrderByAggregateInputSchema } from './device_consumable_compatibilityMinOrderByAggregateInputSchema';
import { device_consumable_compatibilitySumOrderByAggregateInputSchema } from './device_consumable_compatibilitySumOrderByAggregateInputSchema';

export const device_consumable_compatibilityOrderByWithAggregationInputSchema: z.ZodType<Prisma.device_consumable_compatibilityOrderByWithAggregationInput> = z.object({
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  consumable_model_id: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => device_consumable_compatibilityCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => device_consumable_compatibilityAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => device_consumable_compatibilityMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => device_consumable_compatibilityMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => device_consumable_compatibilitySumOrderByAggregateInputSchema).optional()
}).strict();

export default device_consumable_compatibilityOrderByWithAggregationInputSchema;
