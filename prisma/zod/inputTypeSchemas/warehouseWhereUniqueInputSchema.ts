import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { warehouseWhereInputSchema } from './warehouseWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';

export const warehouseWhereUniqueInputSchema: z.ZodType<Prisma.warehouseWhereUniqueInput> = z.object({
  warehouse_id: z.number().int()
})
.and(z.object({
  warehouse_id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => warehouseWhereInputSchema),z.lazy(() => warehouseWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => warehouseWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => warehouseWhereInputSchema),z.lazy(() => warehouseWhereInputSchema).array() ]).optional(),
  warehouse_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  mgmt_dept_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
}).strict());

export default warehouseWhereUniqueInputSchema;
