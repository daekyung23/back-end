import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { warehouseWhereInputSchema } from '../inputTypeSchemas/warehouseWhereInputSchema'
import { warehouseOrderByWithRelationInputSchema } from '../inputTypeSchemas/warehouseOrderByWithRelationInputSchema'
import { warehouseWhereUniqueInputSchema } from '../inputTypeSchemas/warehouseWhereUniqueInputSchema'
import { WarehouseScalarFieldEnumSchema } from '../inputTypeSchemas/WarehouseScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const warehouseSelectSchema: z.ZodType<Prisma.warehouseSelect> = z.object({
  warehouse_id: z.boolean().optional(),
  warehouse_name: z.boolean().optional(),
  mgmt_dept_id: z.boolean().optional(),
}).strict()

export const warehouseFindFirstOrThrowArgsSchema: z.ZodType<Prisma.warehouseFindFirstOrThrowArgs> = z.object({
  select: warehouseSelectSchema.optional(),
  where: warehouseWhereInputSchema.optional(),
  orderBy: z.union([ warehouseOrderByWithRelationInputSchema.array(),warehouseOrderByWithRelationInputSchema ]).optional(),
  cursor: warehouseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ WarehouseScalarFieldEnumSchema,WarehouseScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default warehouseFindFirstOrThrowArgsSchema;
