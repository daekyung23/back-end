import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { consumable_modelCreateInputSchema } from '../inputTypeSchemas/consumable_modelCreateInputSchema'
import { consumable_modelUncheckedCreateInputSchema } from '../inputTypeSchemas/consumable_modelUncheckedCreateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const consumable_modelSelectSchema: z.ZodType<Prisma.consumable_modelSelect> = z.object({
  consumable_model_id: z.boolean().optional(),
  manufacturer: z.boolean().optional(),
  consumable_name: z.boolean().optional(),
  consumable_type: z.boolean().optional(),
}).strict()

export const consumable_modelCreateArgsSchema: z.ZodType<Prisma.consumable_modelCreateArgs> = z.object({
  select: consumable_modelSelectSchema.optional(),
  data: z.union([ consumable_modelCreateInputSchema,consumable_modelUncheckedCreateInputSchema ]),
}).strict() ;

export default consumable_modelCreateArgsSchema;
