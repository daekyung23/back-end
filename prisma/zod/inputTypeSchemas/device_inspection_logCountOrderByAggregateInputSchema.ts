import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const device_inspection_logCountOrderByAggregateInputSchema: z.ZodType<Prisma.device_inspection_logCountOrderByAggregateInput> = z.object({
  device_inspection_log_id: z.lazy(() => SortOrderSchema).optional(),
  device_id: z.lazy(() => SortOrderSchema).optional(),
  inspector_id: z.lazy(() => SortOrderSchema).optional(),
  inspection_date: z.lazy(() => SortOrderSchema).optional(),
  visit_type: z.lazy(() => SortOrderSchema).optional(),
  call_id: z.lazy(() => SortOrderSchema).optional(),
  FL: z.lazy(() => SortOrderSchema).optional(),
  FS: z.lazy(() => SortOrderSchema).optional(),
  BL: z.lazy(() => SortOrderSchema).optional(),
  BS: z.lazy(() => SortOrderSchema).optional(),
  toner_count_YE: z.lazy(() => SortOrderSchema).optional(),
  toner_count_MA: z.lazy(() => SortOrderSchema).optional(),
  toner_count_CY: z.lazy(() => SortOrderSchema).optional(),
  toner_count_BK: z.lazy(() => SortOrderSchema).optional(),
  toner_stock_YE: z.lazy(() => SortOrderSchema).optional(),
  toner_stock_MA: z.lazy(() => SortOrderSchema).optional(),
  toner_stock_CY: z.lazy(() => SortOrderSchema).optional(),
  toner_stock_BK: z.lazy(() => SortOrderSchema).optional(),
  toner_deliver_YE: z.lazy(() => SortOrderSchema).optional(),
  toner_deliver_CY: z.lazy(() => SortOrderSchema).optional(),
  toner_deliver_MA: z.lazy(() => SortOrderSchema).optional(),
  toner_deliver_BK: z.lazy(() => SortOrderSchema).optional(),
  drum_count_YE: z.lazy(() => SortOrderSchema).optional(),
  drum_count_MA: z.lazy(() => SortOrderSchema).optional(),
  drum_count_CY: z.lazy(() => SortOrderSchema).optional(),
  drum_count_BK: z.lazy(() => SortOrderSchema).optional(),
  drum_replacement_detail: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default device_inspection_logCountOrderByAggregateInputSchema;
