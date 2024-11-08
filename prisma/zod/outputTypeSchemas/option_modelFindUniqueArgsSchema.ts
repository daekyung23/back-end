import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { option_modelWhereUniqueInputSchema } from '../inputTypeSchemas/option_modelWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const option_modelSelectSchema: z.ZodType<Prisma.option_modelSelect> = z.object({
  option_model_id: z.boolean().optional(),
  option_model_name: z.boolean().optional(),
  option_type: z.boolean().optional(),
  manufacturer: z.boolean().optional(),
}).strict()

export const option_modelFindUniqueArgsSchema: z.ZodType<Prisma.option_modelFindUniqueArgs> = z.object({
  select: option_modelSelectSchema.optional(),
  where: option_modelWhereUniqueInputSchema,
}).strict() ;

export default option_modelFindUniqueArgsSchema;
