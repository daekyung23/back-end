import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const warehouseMaxOrderByAggregateInputSchema: z.ZodType<Prisma.warehouseMaxOrderByAggregateInput> = z.object({
  warehouse_id: z.lazy(() => SortOrderSchema).optional(),
  warehouse_name: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default warehouseMaxOrderByAggregateInputSchema;
