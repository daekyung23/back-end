import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { user_positionWhereInputSchema } from '../inputTypeSchemas/user_positionWhereInputSchema'
import { user_positionOrderByWithRelationInputSchema } from '../inputTypeSchemas/user_positionOrderByWithRelationInputSchema'
import { user_positionWhereUniqueInputSchema } from '../inputTypeSchemas/user_positionWhereUniqueInputSchema'
import { User_positionScalarFieldEnumSchema } from '../inputTypeSchemas/User_positionScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const user_positionSelectSchema: z.ZodType<Prisma.user_positionSelect> = z.object({
  user_position_id: z.boolean().optional(),
  position_name: z.boolean().optional(),
}).strict()

export const user_positionFindFirstArgsSchema: z.ZodType<Prisma.user_positionFindFirstArgs> = z.object({
  select: user_positionSelectSchema.optional(),
  where: user_positionWhereInputSchema.optional(),
  orderBy: z.union([ user_positionOrderByWithRelationInputSchema.array(),user_positionOrderByWithRelationInputSchema ]).optional(),
  cursor: user_positionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ User_positionScalarFieldEnumSchema,User_positionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default user_positionFindFirstArgsSchema;
