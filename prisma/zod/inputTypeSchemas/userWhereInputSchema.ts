import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { Enumuser_permissionFilterSchema } from './Enumuser_permissionFilterSchema';
import { user_permissionSchema } from './user_permissionSchema';

export const userWhereInputSchema: z.ZodType<Prisma.userWhereInput> = z.object({
  AND: z.union([ z.lazy(() => userWhereInputSchema),z.lazy(() => userWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => userWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => userWhereInputSchema),z.lazy(() => userWhereInputSchema).array() ]).optional(),
  user_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  user_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  login_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  mobile_num: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  office_num: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  modified_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  dept_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  approval_role_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  position_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  is_active: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  permission: z.union([ z.lazy(() => Enumuser_permissionFilterSchema),z.lazy(() => user_permissionSchema) ]).optional(),
}).strict();

export default userWhereInputSchema;
