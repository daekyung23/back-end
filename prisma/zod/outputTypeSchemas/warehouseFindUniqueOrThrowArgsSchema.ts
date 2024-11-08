import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { warehouseWhereUniqueInputSchema } from '../inputTypeSchemas/warehouseWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const warehouseSelectSchema: z.ZodType<Prisma.warehouseSelect> = z.object({
  warehouse_id: z.boolean().optional(),
  warehouse_name: z.boolean().optional(),
  mgmt_dept_id: z.boolean().optional(),
}).strict()

export const warehouseFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.warehouseFindUniqueOrThrowArgs> = z.object({
  select: warehouseSelectSchema.optional(),
  where: warehouseWhereUniqueInputSchema,
}).strict() ;

export default warehouseFindUniqueOrThrowArgsSchema;
