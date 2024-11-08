import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { consumable_modelWhereInputSchema } from '../inputTypeSchemas/consumable_modelWhereInputSchema'
import { consumable_modelOrderByWithRelationInputSchema } from '../inputTypeSchemas/consumable_modelOrderByWithRelationInputSchema'
import { consumable_modelWhereUniqueInputSchema } from '../inputTypeSchemas/consumable_modelWhereUniqueInputSchema'
import { Consumable_modelScalarFieldEnumSchema } from '../inputTypeSchemas/Consumable_modelScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const consumable_modelSelectSchema: z.ZodType<Prisma.consumable_modelSelect> = z.object({
  consumable_model_id: z.boolean().optional(),
  manufacturer: z.boolean().optional(),
  consumable_name: z.boolean().optional(),
  consumable_type: z.boolean().optional(),
}).strict()

export const consumable_modelFindFirstOrThrowArgsSchema: z.ZodType<Prisma.consumable_modelFindFirstOrThrowArgs> = z.object({
  select: consumable_modelSelectSchema.optional(),
  where: consumable_modelWhereInputSchema.optional(),
  orderBy: z.union([ consumable_modelOrderByWithRelationInputSchema.array(),consumable_modelOrderByWithRelationInputSchema ]).optional(),
  cursor: consumable_modelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Consumable_modelScalarFieldEnumSchema,Consumable_modelScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default consumable_modelFindFirstOrThrowArgsSchema;
