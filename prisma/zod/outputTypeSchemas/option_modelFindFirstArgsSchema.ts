import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { option_modelWhereInputSchema } from '../inputTypeSchemas/option_modelWhereInputSchema'
import { option_modelOrderByWithRelationInputSchema } from '../inputTypeSchemas/option_modelOrderByWithRelationInputSchema'
import { option_modelWhereUniqueInputSchema } from '../inputTypeSchemas/option_modelWhereUniqueInputSchema'
import { Option_modelScalarFieldEnumSchema } from '../inputTypeSchemas/Option_modelScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const option_modelSelectSchema: z.ZodType<Prisma.option_modelSelect> = z.object({
  option_model_id: z.boolean().optional(),
  option_model_name: z.boolean().optional(),
  option_type: z.boolean().optional(),
  manufacturer: z.boolean().optional(),
}).strict()

export const option_modelFindFirstArgsSchema: z.ZodType<Prisma.option_modelFindFirstArgs> = z.object({
  select: option_modelSelectSchema.optional(),
  where: option_modelWhereInputSchema.optional(),
  orderBy: z.union([ option_modelOrderByWithRelationInputSchema.array(),option_modelOrderByWithRelationInputSchema ]).optional(),
  cursor: option_modelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Option_modelScalarFieldEnumSchema,Option_modelScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default option_modelFindFirstArgsSchema;
