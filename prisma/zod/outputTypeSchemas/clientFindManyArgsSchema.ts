import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { clientWhereInputSchema } from '../inputTypeSchemas/clientWhereInputSchema'
import { clientOrderByWithRelationInputSchema } from '../inputTypeSchemas/clientOrderByWithRelationInputSchema'
import { clientWhereUniqueInputSchema } from '../inputTypeSchemas/clientWhereUniqueInputSchema'
import { ClientScalarFieldEnumSchema } from '../inputTypeSchemas/ClientScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const clientSelectSchema: z.ZodType<Prisma.clientSelect> = z.object({
  client_id: z.boolean().optional(),
  parent_client_id: z.boolean().optional(),
  default_client_branch_rate_id: z.boolean().optional(),
  client_name: z.boolean().optional(),
  is_active: z.boolean().optional(),
}).strict()

export const clientFindManyArgsSchema: z.ZodType<Prisma.clientFindManyArgs> = z.object({
  select: clientSelectSchema.optional(),
  where: clientWhereInputSchema.optional(),
  orderBy: z.union([ clientOrderByWithRelationInputSchema.array(),clientOrderByWithRelationInputSchema ]).optional(),
  cursor: clientWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ClientScalarFieldEnumSchema,ClientScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default clientFindManyArgsSchema;
