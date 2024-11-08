import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { deviceCountOrderByAggregateInputSchema } from './deviceCountOrderByAggregateInputSchema';
import { deviceAvgOrderByAggregateInputSchema } from './deviceAvgOrderByAggregateInputSchema';
import { deviceMaxOrderByAggregateInputSchema } from './deviceMaxOrderByAggregateInputSchema';
import { deviceMinOrderByAggregateInputSchema } from './deviceMinOrderByAggregateInputSchema';
import { deviceSumOrderByAggregateInputSchema } from './deviceSumOrderByAggregateInputSchema';

export const deviceOrderByWithAggregationInputSchema: z.ZodType<Prisma.deviceOrderByWithAggregationInput> = z.object({
  device_id: z.lazy(() => SortOrderSchema).optional(),
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  owner_dept_id: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_id: z.lazy(() => SortOrderSchema).optional(),
  serial: z.lazy(() => SortOrderSchema).optional(),
  regi_date: z.lazy(() => SortOrderSchema).optional(),
  mac: z.lazy(() => SortOrderSchema).optional(),
  last_inspection_log_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  last_location_log_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  status_id: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => deviceCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => deviceAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => deviceMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => deviceMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => deviceSumOrderByAggregateInputSchema).optional()
}).strict();

export default deviceOrderByWithAggregationInputSchema;
