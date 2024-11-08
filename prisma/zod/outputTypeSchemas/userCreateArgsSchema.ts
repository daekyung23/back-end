import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { userCreateInputSchema } from '../inputTypeSchemas/userCreateInputSchema'
import { userUncheckedCreateInputSchema } from '../inputTypeSchemas/userUncheckedCreateInputSchema'
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

export const userCreateArgsSchema: z.ZodType<Prisma.userCreateArgs> = z.object({
  select: userSelectSchema.optional(),
  data: z.union([ userCreateInputSchema,userUncheckedCreateInputSchema ]),
}).strict() ;

export default userCreateArgsSchema;
