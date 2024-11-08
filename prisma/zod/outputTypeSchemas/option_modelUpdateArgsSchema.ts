import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { option_modelUpdateInputSchema } from '../inputTypeSchemas/option_modelUpdateInputSchema'
import { option_modelUncheckedUpdateInputSchema } from '../inputTypeSchemas/option_modelUncheckedUpdateInputSchema'
import { option_modelWhereUniqueInputSchema } from '../inputTypeSchemas/option_modelWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const option_modelSelectSchema: z.ZodType<Prisma.option_modelSelect> = z.object({
  option_model_id: z.boolean().optional(),
  option_model_name: z.boolean().optional(),
  option_type: z.boolean().optional(),
  manufacturer: z.boolean().optional(),
}).strict()

export const option_modelUpdateArgsSchema: z.ZodType<Prisma.option_modelUpdateArgs> = z.object({
  select: option_modelSelectSchema.optional(),
  data: z.union([ option_modelUpdateInputSchema,option_modelUncheckedUpdateInputSchema ]),
  where: option_modelWhereUniqueInputSchema,
}).strict() ;

export default option_modelUpdateArgsSchema;
