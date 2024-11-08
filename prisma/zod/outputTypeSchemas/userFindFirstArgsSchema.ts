import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { userWhereInputSchema } from '../inputTypeSchemas/userWhereInputSchema'
import { userOrderByWithRelationInputSchema } from '../inputTypeSchemas/userOrderByWithRelationInputSchema'
import { userWhereUniqueInputSchema } from '../inputTypeSchemas/userWhereUniqueInputSchema'
import { UserScalarFieldEnumSchema } from '../inputTypeSchemas/UserScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const userSelectSchema: z.ZodType<Prisma.userSelect> = z.object({
  user_id: z.boolean().optional(),
  user_name: z.boolean().optional(),
  login_id: z.boolean().optional(),
  password: z.boolean().optional(),
  mobile_num: z.boolean().optional(),
  office_num: z.boolean().optional(),
  email: z.boolean().optional(),
  modified_at: z.boolean().optional(),
  dept_id: z.boolean().optional(),
  approval_role_id: z.boolean().optional(),
  position_id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  is_active: z.boolean().optional(),
  permission: z.boolean().optional(),
}).strict()

export const userFindFirstArgsSchema: z.ZodType<Prisma.userFindFirstArgs> = z.object({
  select: userSelectSchema.optional(),
  where: userWhereInputSchema.optional(),
  orderBy: z.union([ userOrderByWithRelationInputSchema.array(),userOrderByWithRelationInputSchema ]).optional(),
  cursor: userWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default userFindFirstArgsSchema;
