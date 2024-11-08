import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { device_approval_typeCountOrderByAggregateInputSchema } from './device_approval_typeCountOrderByAggregateInputSchema';
import { device_approval_typeAvgOrderByAggregateInputSchema } from './device_approval_typeAvgOrderByAggregateInputSchema';
import { device_approval_typeMaxOrderByAggregateInputSchema } from './device_approval_typeMaxOrderByAggregateInputSchema';
import { device_approval_typeMinOrderByAggregateInputSchema } from './device_approval_typeMinOrderByAggregateInputSchema';
import { device_approval_typeSumOrderByAggregateInputSchema } from './device_approval_typeSumOrderByAggregateInputSchema';

export const device_approval_typeOrderByWithAggregationInputSchema: z.ZodType<Prisma.device_approval_typeOrderByWithAggregationInput> = z.object({
  approval_type_id: z.lazy(() => SortOrderSchema).optional(),
  approval_type_name: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => device_approval_typeCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => device_approval_typeAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => device_approval_typeMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => device_approval_typeMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => device_approval_typeSumOrderByAggregateInputSchema).optional()
}).strict();

export default device_approval_typeOrderByWithAggregationInputSchema;
