import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const v_client_branchMinOrderByAggregateInputSchema: z.ZodType<Prisma.v_client_branchMinOrderByAggregateInput> = z.object({
  client_branch_id: z.lazy(() => SortOrderSchema).optional(),
  client_branch_name: z.lazy(() => SortOrderSchema).optional(),
  client_id: z.lazy(() => SortOrderSchema).optional(),
  sigungu_id: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_id: z.lazy(() => SortOrderSchema).optional(),
  client_branch_rate_id: z.lazy(() => SortOrderSchema).optional(),
  branch_mgr_name: z.lazy(() => SortOrderSchema).optional(),
  branch_mgr_mobile_num: z.lazy(() => SortOrderSchema).optional(),
  branch_mgr_office_num: z.lazy(() => SortOrderSchema).optional(),
  branch_mgr_email: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  remote_support: z.lazy(() => SortOrderSchema).optional(),
  push_alert: z.lazy(() => SortOrderSchema).optional(),
  client_name: z.lazy(() => SortOrderSchema).optional(),
  sigungu_name: z.lazy(() => SortOrderSchema).optional(),
  sido_name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default v_client_branchMinOrderByAggregateInputSchema;