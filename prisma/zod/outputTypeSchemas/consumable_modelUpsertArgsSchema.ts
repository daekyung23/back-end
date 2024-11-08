import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { consumable_modelWhereUniqueInputSchema } from '../inputTypeSchemas/consumable_modelWhereUniqueInputSchema'
import { consumable_modelCreateInputSchema } from '../inputTypeSchemas/consumable_modelCreateInputSchema'
import { consumable_modelUncheckedCreateInputSchema } from '../inputTypeSchemas/consumable_modelUncheckedCreateInputSchema'
import { consumable_modelUpdateInputSchema } from '../inputTypeSchemas/consumable_modelUpdateInputSchema'
import { consumable_modelUncheckedUpdateInputSchema } from '../inputTypeSchemas/consumable_modelUncheckedUpdateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const consumable_modelSelectSchema: z.ZodType<Prisma.consumable_modelSelect> = z.object({
  consumable_model_id: z.boolean().optional(),
  manufacturer: z.boolean().optional(),
  consumable_name: z.boolean().optional(),
  consumable_type: z.boolean().optional(),
}).strict()

export const consumable_modelUpsertArgsSchema: z.ZodType<Prisma.consumable_modelUpsertArgs> = z.object({
  select: consumable_modelSelectSchema.optional(),
  where: consumable_modelWhereUniqueInputSchema,
  create: z.union([ consumable_modelCreateInputSchema,consumable_modelUncheckedCreateInputSchema ]),
  update: z.union([ consumable_modelUpdateInputSchema,consumable_modelUncheckedUpdateInputSchema ]),
}).strict() ;

export default consumable_modelUpsertArgsSchema;
