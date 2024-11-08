import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const warehouseCreateManyInputSchema: z.ZodType<Prisma.warehouseCreateManyInput> = z.object({
  warehouse_id: z.number().int().optional(),
  warehouse_name: z.string(),
  mgmt_dept_id: z.number().int()
}).strict();

export default warehouseCreateManyInputSchema;
