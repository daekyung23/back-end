import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';

export const warehouseWhereInputSchema: z.ZodType<Prisma.warehouseWhereInput> = z.object({
  AND: z.union([ z.lazy(() => warehouseWhereInputSchema),z.lazy(() => warehouseWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => warehouseWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => warehouseWhereInputSchema),z.lazy(() => warehouseWhereInputSchema).array() ]).optional(),
  warehouse_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  warehouse_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  mgmt_dept_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export default warehouseWhereInputSchema;
