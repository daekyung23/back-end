import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { sidoWhereInputSchema } from '../inputTypeSchemas/sidoWhereInputSchema'
import { sidoOrderByWithRelationInputSchema } from '../inputTypeSchemas/sidoOrderByWithRelationInputSchema'
import { sidoWhereUniqueInputSchema } from '../inputTypeSchemas/sidoWhereUniqueInputSchema'
import { SidoScalarFieldEnumSchema } from '../inputTypeSchemas/SidoScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const sidoSelectSchema: z.ZodType<Prisma.sidoSelect> = z.object({
  sido_id: z.boolean().optional(),
  sido_name: z.boolean().optional(),
}).strict()

export const sidoFindManyArgsSchema: z.ZodType<Prisma.sidoFindManyArgs> = z.object({
  select: sidoSelectSchema.optional(),
  where: sidoWhereInputSchema.optional(),
  orderBy: z.union([ sidoOrderByWithRelationInputSchema.array(),sidoOrderByWithRelationInputSchema ]).optional(),
  cursor: sidoWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SidoScalarFieldEnumSchema,SidoScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default sidoFindManyArgsSchema;
