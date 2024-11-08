import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { warehouseWhereUniqueInputSchema } from '../inputTypeSchemas/warehouseWhereUniqueInputSchema'
import { warehouseCreateInputSchema } from '../inputTypeSchemas/warehouseCreateInputSchema'
import { warehouseUncheckedCreateInputSchema } from '../inputTypeSchemas/warehouseUncheckedCreateInputSchema'
import { warehouseUpdateInputSchema } from '../inputTypeSchemas/warehouseUpdateInputSchema'
import { warehouseUncheckedUpdateInputSchema } from '../inputTypeSchemas/warehouseUncheckedUpdateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const warehouseSelectSchema: z.ZodType<Prisma.warehouseSelect> = z.object({
  warehouse_id: z.boolean().optional(),
  warehouse_name: z.boolean().optional(),
  mgmt_dept_id: z.boolean().optional(),
}).strict()

export const warehouseUpsertArgsSchema: z.ZodType<Prisma.warehouseUpsertArgs> = z.object({
  select: warehouseSelectSchema.optional(),
  where: warehouseWhereUniqueInputSchema,
  create: z.union([ warehouseCreateInputSchema,warehouseUncheckedCreateInputSchema ]),
  update: z.union([ warehouseUpdateInputSchema,warehouseUncheckedUpdateInputSchema ]),
}).strict() ;

export default warehouseUpsertArgsSchema;
