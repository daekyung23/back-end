import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { user_permissionSchema } from './user_permissionSchema';

export const userCreateInputSchema: z.ZodType<Prisma.userCreateInput> = z.object({
  user_name: z.string(),
  login_id: z.string(),
  password: z.string(),
  mobile_num: z.string().optional().nullable(),
  office_num: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  modified_at: z.coerce.date().optional().nullable(),
  dept_id: z.number().int(),
  approval_role_id: z.number().int().optional().nullable(),
  position_id: z.number().int(),
  created_at: z.coerce.date().optional(),
  is_active: z.number().int().optional(),
  permission: z.lazy(() => user_permissionSchema).optional()
}).strict();

export default userCreateInputSchema;
