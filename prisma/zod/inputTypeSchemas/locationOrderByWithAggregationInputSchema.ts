import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { locationCountOrderByAggregateInputSchema } from './locationCountOrderByAggregateInputSchema';
import { locationAvgOrderByAggregateInputSchema } from './locationAvgOrderByAggregateInputSchema';
import { locationMaxOrderByAggregateInputSchema } from './locationMaxOrderByAggregateInputSchema';
import { locationMinOrderByAggregateInputSchema } from './locationMinOrderByAggregateInputSchema';
import { locationSumOrderByAggregateInputSchema } from './locationSumOrderByAggregateInputSchema';

export const locationOrderByWithAggregationInputSchema: z.ZodType<Prisma.locationOrderByWithAggregationInput> = z.object({
  location_id: z.lazy(() => SortOrderSchema).optional(),
  location_type: z.lazy(() => SortOrderSchema).optional(),
  warehouse_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  client_branch_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => locationCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => locationAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => locationMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => locationMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => locationSumOrderByAggregateInputSchema).optional()
}).strict();

export default locationOrderByWithAggregationInputSchema;
