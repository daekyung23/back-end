import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const warehouseCreateInputSchema: z.ZodType<Prisma.warehouseCreateInput> = z.object({
  warehouse_name: z.string(),
  mgmt_dept_id: z.number().int()
}).strict();

export default warehouseCreateInputSchema;
