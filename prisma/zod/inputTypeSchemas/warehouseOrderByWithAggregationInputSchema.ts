import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { warehouseCountOrderByAggregateInputSchema } from './warehouseCountOrderByAggregateInputSchema';
import { warehouseAvgOrderByAggregateInputSchema } from './warehouseAvgOrderByAggregateInputSchema';
import { warehouseMaxOrderByAggregateInputSchema } from './warehouseMaxOrderByAggregateInputSchema';
import { warehouseMinOrderByAggregateInputSchema } from './warehouseMinOrderByAggregateInputSchema';
import { warehouseSumOrderByAggregateInputSchema } from './warehouseSumOrderByAggregateInputSchema';

export const warehouseOrderByWithAggregationInputSchema: z.ZodType<Prisma.warehouseOrderByWithAggregationInput> = z.object({
  warehouse_id: z.lazy(() => SortOrderSchema).optional(),
  warehouse_name: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_id: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => warehouseCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => warehouseAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => warehouseMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => warehouseMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => warehouseSumOrderByAggregateInputSchema).optional()
}).strict();

export default warehouseOrderByWithAggregationInputSchema;
