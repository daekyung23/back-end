import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { consumable_modelCountOrderByAggregateInputSchema } from './consumable_modelCountOrderByAggregateInputSchema';
import { consumable_modelAvgOrderByAggregateInputSchema } from './consumable_modelAvgOrderByAggregateInputSchema';
import { consumable_modelMaxOrderByAggregateInputSchema } from './consumable_modelMaxOrderByAggregateInputSchema';
import { consumable_modelMinOrderByAggregateInputSchema } from './consumable_modelMinOrderByAggregateInputSchema';
import { consumable_modelSumOrderByAggregateInputSchema } from './consumable_modelSumOrderByAggregateInputSchema';

export const consumable_modelOrderByWithAggregationInputSchema: z.ZodType<Prisma.consumable_modelOrderByWithAggregationInput> = z.object({
  consumable_model_id: z.lazy(() => SortOrderSchema).optional(),
  manufacturer: z.lazy(() => SortOrderSchema).optional(),
  consumable_name: z.lazy(() => SortOrderSchema).optional(),
  consumable_type: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => consumable_modelCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => consumable_modelAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => consumable_modelMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => consumable_modelMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => consumable_modelSumOrderByAggregateInputSchema).optional()
}).strict();

export default consumable_modelOrderByWithAggregationInputSchema;
