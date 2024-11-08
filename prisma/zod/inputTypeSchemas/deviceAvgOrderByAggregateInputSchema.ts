import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const deviceAvgOrderByAggregateInputSchema: z.ZodType<Prisma.deviceAvgOrderByAggregateInput> = z.object({
  device_id: z.lazy(() => SortOrderSchema).optional(),
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  owner_dept_id: z.lazy(() => SortOrderSchema).optional(),
  mgmt_dept_id: z.lazy(() => SortOrderSchema).optional(),
  last_inspection_log_id: z.lazy(() => SortOrderSchema).optional(),
  last_location_log_id: z.lazy(() => SortOrderSchema).optional(),
  status_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default deviceAvgOrderByAggregateInputSchema;
