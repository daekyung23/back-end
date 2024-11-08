import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { option_modelCreateInputSchema } from '../inputTypeSchemas/option_modelCreateInputSchema'
import { option_modelUncheckedCreateInputSchema } from '../inputTypeSchemas/option_modelUncheckedCreateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const option_modelSelectSchema: z.ZodType<Prisma.option_modelSelect> = z.object({
  option_model_id: z.boolean().optional(),
  option_model_name: z.boolean().optional(),
  option_type: z.boolean().optional(),
  manufacturer: z.boolean().optional(),
}).strict()

export const option_modelCreateArgsSchema: z.ZodType<Prisma.option_modelCreateArgs> = z.object({
  select: option_modelSelectSchema.optional(),
  data: z.union([ option_modelCreateInputSchema,option_modelUncheckedCreateInputSchema ]),
}).strict() ;

export default option_modelCreateArgsSchema;
