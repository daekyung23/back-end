import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const warehouseSumOrderByAggregateInputSchema: z.ZodType<Prisma.warehouseSumOrderByAggregateInput> = z.object({
  warehouse_id: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default warehouseSumOrderByAggregateInputSchema;
