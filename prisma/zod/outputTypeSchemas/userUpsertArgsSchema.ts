import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { userWhereUniqueInputSchema } from '../inputTypeSchemas/userWhereUniqueInputSchema'
import { userCreateInputSchema } from '../inputTypeSchemas/userCreateInputSchema'
import { userUncheckedCreateInputSchema } from '../inputTypeSchemas/userUncheckedCreateInputSchema'
import { userUpdateInputSchema } from '../inputTypeSchemas/userUpdateInputSchema'
import { userUncheckedUpdateInputSchema } from '../inputTypeSchemas/userUncheckedUpdateInputSchema'
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

export const userUpsertArgsSchema: z.ZodType<Prisma.userUpsertArgs> = z.object({
  select: userSelectSchema.optional(),
  where: userWhereUniqueInputSchema,
  create: z.union([ userCreateInputSchema,userUncheckedCreateInputSchema ]),
  update: z.union([ userUpdateInputSchema,userUncheckedUpdateInputSchema ]),
}).strict() ;

export default userUpsertArgsSchema;
