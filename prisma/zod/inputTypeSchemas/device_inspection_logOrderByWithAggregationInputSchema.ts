import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { device_inspection_logCountOrderByAggregateInputSchema } from './device_inspection_logCountOrderByAggregateInputSchema';
import { device_inspection_logAvgOrderByAggregateInputSchema } from './device_inspection_logAvgOrderByAggregateInputSchema';
import { device_inspection_logMaxOrderByAggregateInputSchema } from './device_inspection_logMaxOrderByAggregateInputSchema';
import { device_inspection_logMinOrderByAggregateInputSchema } from './device_inspection_logMinOrderByAggregateInputSchema';
import { device_inspection_logSumOrderByAggregateInputSchema } from './device_inspection_logSumOrderByAggregateInputSchema';

export const device_inspection_logOrderByWithAggregationInputSchema: z.ZodType<Prisma.device_inspection_logOrderByWithAggregationInput> = z.object({
  device_inspection_log_id: z.lazy(() => SortOrderSchema).optional(),
  device_id: z.lazy(() => SortOrderSchema).optional(),
  inspector_id: z.lazy(() => SortOrderSchema).optional(),
  inspection_date: z.lazy(() => SortOrderSchema).optional(),
  visit_type: z.lazy(() => SortOrderSchema).optional(),
  call_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  FL: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  FS: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  BL: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  BS: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  toner_count_YE: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  toner_count_MA: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  toner_count_CY: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  toner_count_BK: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  toner_stock_YE: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  toner_stock_MA: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  toner_stock_CY: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  toner_stock_BK: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  toner_deliver_YE: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  toner_deliver_CY: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  toner_deliver_MA: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  toner_deliver_BK: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  drum_count_YE: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  drum_count_MA: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  drum_count_CY: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  drum_count_BK: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  drum_replacement_detail: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => device_inspection_logCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => device_inspection_logAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => device_inspection_logMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => device_inspection_logMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => device_inspection_logSumOrderByAggregateInputSchema).optional()
}).strict();

export default device_inspection_logOrderByWithAggregationInputSchema;
