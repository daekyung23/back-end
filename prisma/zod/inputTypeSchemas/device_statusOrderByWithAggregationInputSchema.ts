import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { device_statusCountOrderByAggregateInputSchema } from './device_statusCountOrderByAggregateInputSchema';
import { device_statusAvgOrderByAggregateInputSchema } from './device_statusAvgOrderByAggregateInputSchema';
import { device_statusMaxOrderByAggregateInputSchema } from './device_statusMaxOrderByAggregateInputSchema';
import { device_statusMinOrderByAggregateInputSchema } from './device_statusMinOrderByAggregateInputSchema';
import { device_statusSumOrderByAggregateInputSchema } from './device_statusSumOrderByAggregateInputSchema';

export const device_statusOrderByWithAggregationInputSchema: z.ZodType<Prisma.device_statusOrderByWithAggregationInput> = z.object({
  status_id: z.lazy(() => SortOrderSchema).optional(),
  status_name: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => device_statusCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => device_statusAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => device_statusMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => device_statusMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => device_statusSumOrderByAggregateInputSchema).optional()
}).strict();

export default device_statusOrderByWithAggregationInputSchema;
