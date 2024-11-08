import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const callCountOrderByAggregateInputSchema: z.ZodType<Prisma.callCountOrderByAggregateInput> = z.object({
  call_id: z.lazy(() => SortOrderSchema).optional(),
  call_type_id: z.lazy(() => SortOrderSchema).optional(),
  client_branch_id: z.lazy(() => SortOrderSchema).optional(),
  requester_name: z.lazy(() => SortOrderSchema).optional(),
  requester_num: z.lazy(() => SortOrderSchema).optional(),
  requester_black_consumer: z.lazy(() => SortOrderSchema).optional(),
  device_id: z.lazy(() => SortOrderSchema).optional(),
  detail: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  received_at: z.lazy(() => SortOrderSchema).optional(),
  receiver_id: z.lazy(() => SortOrderSchema).optional(),
  transferred_at: z.lazy(() => SortOrderSchema).optional(),
  transferred_dept_id: z.lazy(() => SortOrderSchema).optional(),
  assigner_id: z.lazy(() => SortOrderSchema).optional(),
  completed_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default callCountOrderByAggregateInputSchema;
