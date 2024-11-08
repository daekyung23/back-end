import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const warehouseSelectSchema: z.ZodType<Prisma.warehouseSelect> = z.object({
  warehouse_id: z.boolean().optional(),
  warehouse_name: z.boolean().optional(),
  mgmt_dept_id: z.boolean().optional(),
}).strict()

export default warehouseSelectSchema;
