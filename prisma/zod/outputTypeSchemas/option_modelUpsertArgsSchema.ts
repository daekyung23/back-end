import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { option_modelWhereUniqueInputSchema } from '../inputTypeSchemas/option_modelWhereUniqueInputSchema'
import { option_modelCreateInputSchema } from '../inputTypeSchemas/option_modelCreateInputSchema'
import { option_modelUncheckedCreateInputSchema } from '../inputTypeSchemas/option_modelUncheckedCreateInputSchema'
import { option_modelUpdateInputSchema } from '../inputTypeSchemas/option_modelUpdateInputSchema'
import { option_modelUncheckedUpdateInputSchema } from '../inputTypeSchemas/option_modelUncheckedUpdateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const option_modelSelectSchema: z.ZodType<Prisma.option_modelSelect> = z.object({
  option_model_id: z.boolean().optional(),
  option_model_name: z.boolean().optional(),
  option_type: z.boolean().optional(),
  manufacturer: z.boolean().optional(),
}).strict()

export const option_modelUpsertArgsSchema: z.ZodType<Prisma.option_modelUpsertArgs> = z.object({
  select: option_modelSelectSchema.optional(),
  where: option_modelWhereUniqueInputSchema,
  create: z.union([ option_modelCreateInputSchema,option_modelUncheckedCreateInputSchema ]),
  update: z.union([ option_modelUpdateInputSchema,option_modelUncheckedUpdateInputSchema ]),
}).strict() ;

export default option_modelUpsertArgsSchema;
