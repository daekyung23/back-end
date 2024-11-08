import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const warehouseUncheckedCreateInputSchema: z.ZodType<Prisma.warehouseUncheckedCreateInput> = z.object({
  warehouse_id: z.number().int().optional(),
  warehouse_name: z.string(),
  mgmt_dept_id: z.number().int()
}).strict();

export default warehouseUncheckedCreateInputSchema;
