import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const userCountOrderByAggregateInputSchema: z.ZodType<Prisma.userCountOrderByAggregateInput> = z.object({
  user_id: z.lazy(() => SortOrderSchema).optional(),
  user_name: z.lazy(() => SortOrderSchema).optional(),
  login_id: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  mobile_num: z.lazy(() => SortOrderSchema).optional(),
  office_num: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  modified_at: z.lazy(() => SortOrderSchema).optional(),
  dept_id: z.lazy(() => SortOrderSchema).optional(),
  approval_role_id: z.lazy(() => SortOrderSchema).optional(),
  position_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  permission: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default userCountOrderByAggregateInputSchema;
