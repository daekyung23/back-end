import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';

export const client_branchOrderByWithRelationInputSchema: z.ZodType<Prisma.client_branchOrderByWithRelationInput> = z.object({
  client_branch_id: z.lazy(() => SortOrderSchema).optional(),
  sigungu_id: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_id: z.lazy(() => SortOrderSchema).optional(),
  client_id: z.lazy(() => SortOrderSchema).optional(),
  client_branch_name: z.lazy(() => SortOrderSchema).optional(),
  client_branch_rate_id: z.lazy(() => SortOrderSchema).optional(),
  branch_mgr_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  branch_mgr_mobile_num: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  branch_mgr_office_num: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  branch_mgr_email: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  remote_support: z.lazy(() => SortOrderSchema).optional(),
  push_alert: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default client_branchOrderByWithRelationInputSchema;
