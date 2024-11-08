import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { call_typeWhereInputSchema } from '../inputTypeSchemas/call_typeWhereInputSchema'
import { call_typeOrderByWithRelationInputSchema } from '../inputTypeSchemas/call_typeOrderByWithRelationInputSchema'
import { call_typeWhereUniqueInputSchema } from '../inputTypeSchemas/call_typeWhereUniqueInputSchema'
import { Call_typeScalarFieldEnumSchema } from '../inputTypeSchemas/Call_typeScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const call_typeSelectSchema: z.ZodType<Prisma.call_typeSelect> = z.object({
  call_type_id: z.boolean().optional(),
  call_type_name: z.boolean().optional(),
  parent_call_type_id: z.boolean().optional(),
}).strict()

export const call_typeFindFirstArgsSchema: z.ZodType<Prisma.call_typeFindFirstArgs> = z.object({
  select: call_typeSelectSchema.optional(),
  where: call_typeWhereInputSchema.optional(),
  orderBy: z.union([ call_typeOrderByWithRelationInputSchema.array(),call_typeOrderByWithRelationInputSchema ]).optional(),
  cursor: call_typeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Call_typeScalarFieldEnumSchema,Call_typeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default call_typeFindFirstArgsSchema;
