import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { sigunguWhereInputSchema } from '../inputTypeSchemas/sigunguWhereInputSchema'
import { sigunguOrderByWithRelationInputSchema } from '../inputTypeSchemas/sigunguOrderByWithRelationInputSchema'
import { sigunguWhereUniqueInputSchema } from '../inputTypeSchemas/sigunguWhereUniqueInputSchema'
import { SigunguScalarFieldEnumSchema } from '../inputTypeSchemas/SigunguScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const sigunguSelectSchema: z.ZodType<Prisma.sigunguSelect> = z.object({
  sigungu_id: z.boolean().optional(),
  sigungu_name: z.boolean().optional(),
  sido_id: z.boolean().optional(),
}).strict()

export const sigunguFindFirstOrThrowArgsSchema: z.ZodType<Prisma.sigunguFindFirstOrThrowArgs> = z.object({
  select: sigunguSelectSchema.optional(),
  where: sigunguWhereInputSchema.optional(),
  orderBy: z.union([ sigunguOrderByWithRelationInputSchema.array(),sigunguOrderByWithRelationInputSchema ]).optional(),
  cursor: sigunguWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SigunguScalarFieldEnumSchema,SigunguScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default sigunguFindFirstOrThrowArgsSchema;
