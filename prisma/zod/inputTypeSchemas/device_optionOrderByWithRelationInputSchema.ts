import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';

export const device_optionOrderByWithRelationInputSchema: z.ZodType<Prisma.device_optionOrderByWithRelationInput> = z.object({
  device_option_id: z.lazy(() => SortOrderSchema).optional(),
  option_model_id: z.lazy(() => SortOrderSchema).optional(),
  serial: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  location_type: z.lazy(() => SortOrderSchema).optional(),
  location_warehouse_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  location_device_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
}).strict();

export default device_optionOrderByWithRelationInputSchema;
