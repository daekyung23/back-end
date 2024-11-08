import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';

export const warehouseScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.warehouseScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => warehouseScalarWhereWithAggregatesInputSchema),z.lazy(() => warehouseScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => warehouseScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => warehouseScalarWhereWithAggregatesInputSchema),z.lazy(() => warehouseScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  warehouse_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  warehouse_name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  mgmt_dept_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export default warehouseScalarWhereWithAggregatesInputSchema;
