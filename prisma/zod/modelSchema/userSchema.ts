import { z } from 'zod';
import { user_permissionSchema } from '../inputTypeSchemas/user_permissionSchema'

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const userSchema = z.object({
  permission: user_permissionSchema,
  user_id: z.number().int(),
  user_name: z.string(),
  login_id: z.string(),
  password: z.string(),
  mobile_num: z.string().nullable(),
  office_num: z.string().nullable(),
  email: z.string().nullable(),
  modified_at: z.coerce.date().nullable(),
  dept_id: z.number().int(),
  approval_role_id: z.number().int().nullable(),
  position_id: z.number().int(),
  created_at: z.coerce.date(),
  is_active: z.number().int(),
})

export type user = z.infer<typeof userSchema>

export default userSchema;
