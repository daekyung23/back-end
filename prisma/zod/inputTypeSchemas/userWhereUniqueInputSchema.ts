import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { userWhereInputSchema } from './userWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { Enumuser_permissionFilterSchema } from './Enumuser_permissionFilterSchema';
import { user_permissionSchema } from './user_permissionSchema';

export const userWhereUniqueInputSchema: z.ZodType<Prisma.userWhereUniqueInput> = z.union([
  z.object({
    user_id: z.number().int(),
    login_id: z.string()
  }),
  z.object({
    user_id: z.number().int(),
  }),
  z.object({
    login_id: z.string(),
  }),
])
.and(z.object({
  user_id: z.number().int().optional(),
  login_id: z.string().optional(),
  AND: z.union([ z.lazy(() => userWhereInputSchema),z.lazy(() => userWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => userWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => userWhereInputSchema),z.lazy(() => userWhereInputSchema).array() ]).optional(),
  user_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  mobile_num: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  office_num: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  modified_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  dept_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  approval_role_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  position_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  is_active: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  permission: z.union([ z.lazy(() => Enumuser_permissionFilterSchema),z.lazy(() => user_permissionSchema) ]).optional(),
}).strict());

export default userWhereUniqueInputSchema;
