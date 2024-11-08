import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { locationWhereInputSchema } from '../inputTypeSchemas/locationWhereInputSchema'
import { locationOrderByWithRelationInputSchema } from '../inputTypeSchemas/locationOrderByWithRelationInputSchema'
import { locationWhereUniqueInputSchema } from '../inputTypeSchemas/locationWhereUniqueInputSchema'
import { LocationScalarFieldEnumSchema } from '../inputTypeSchemas/LocationScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const locationSelectSchema: z.ZodType<Prisma.locationSelect> = z.object({
  location_id: z.boolean().optional(),
  location_type: z.boolean().optional(),
  warehouse_id: z.boolean().optional(),
  client_branch_id: z.boolean().optional(),
}).strict()

export const locationFindManyArgsSchema: z.ZodType<Prisma.locationFindManyArgs> = z.object({
  select: locationSelectSchema.optional(),
  where: locationWhereInputSchema.optional(),
  orderBy: z.union([ locationOrderByWithRelationInputSchema.array(),locationOrderByWithRelationInputSchema ]).optional(),
  cursor: locationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LocationScalarFieldEnumSchema,LocationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default locationFindManyArgsSchema;
