import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { consumable_modelUpdateInputSchema } from '../inputTypeSchemas/consumable_modelUpdateInputSchema'
import { consumable_modelUncheckedUpdateInputSchema } from '../inputTypeSchemas/consumable_modelUncheckedUpdateInputSchema'
import { consumable_modelWhereUniqueInputSchema } from '../inputTypeSchemas/consumable_modelWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const consumable_modelSelectSchema: z.ZodType<Prisma.consumable_modelSelect> = z.object({
  consumable_model_id: z.boolean().optional(),
  manufacturer: z.boolean().optional(),
  consumable_name: z.boolean().optional(),
  consumable_type: z.boolean().optional(),
}).strict()

export const consumable_modelUpdateArgsSchema: z.ZodType<Prisma.consumable_modelUpdateArgs> = z.object({
  select: consumable_modelSelectSchema.optional(),
  data: z.union([ consumable_modelUpdateInputSchema,consumable_modelUncheckedUpdateInputSchema ]),
  where: consumable_modelWhereUniqueInputSchema,
}).strict() ;

export default consumable_modelUpdateArgsSchema;
