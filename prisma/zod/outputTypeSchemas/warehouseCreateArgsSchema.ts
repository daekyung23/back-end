import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { warehouseCreateInputSchema } from '../inputTypeSchemas/warehouseCreateInputSchema'
import { warehouseUncheckedCreateInputSchema } from '../inputTypeSchemas/warehouseUncheckedCreateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const warehouseSelectSchema: z.ZodType<Prisma.warehouseSelect> = z.object({
  warehouse_id: z.boolean().optional(),
  warehouse_name: z.boolean().optional(),
  mgmt_dept_id: z.boolean().optional(),
}).strict()

export const warehouseCreateArgsSchema: z.ZodType<Prisma.warehouseCreateArgs> = z.object({
  select: warehouseSelectSchema.optional(),
  data: z.union([ warehouseCreateInputSchema,warehouseUncheckedCreateInputSchema ]),
}).strict() ;

export default warehouseCreateArgsSchema;
