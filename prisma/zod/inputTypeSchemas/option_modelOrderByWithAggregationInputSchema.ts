import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { option_modelCountOrderByAggregateInputSchema } from './option_modelCountOrderByAggregateInputSchema';
import { option_modelAvgOrderByAggregateInputSchema } from './option_modelAvgOrderByAggregateInputSchema';
import { option_modelMaxOrderByAggregateInputSchema } from './option_modelMaxOrderByAggregateInputSchema';
import { option_modelMinOrderByAggregateInputSchema } from './option_modelMinOrderByAggregateInputSchema';
import { option_modelSumOrderByAggregateInputSchema } from './option_modelSumOrderByAggregateInputSchema';

export const option_modelOrderByWithAggregationInputSchema: z.ZodType<Prisma.option_modelOrderByWithAggregationInput> = z.object({
  option_model_id: z.lazy(() => SortOrderSchema).optional(),
  option_model_name: z.lazy(() => SortOrderSchema).optional(),
  option_type: z.lazy(() => SortOrderSchema).optional(),
  manufacturer: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => option_modelCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => option_modelAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => option_modelMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => option_modelMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => option_modelSumOrderByAggregateInputSchema).optional()
}).strict();

export default option_modelOrderByWithAggregationInputSchema;
