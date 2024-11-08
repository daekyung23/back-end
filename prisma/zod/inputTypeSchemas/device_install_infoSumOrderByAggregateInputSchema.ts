import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const device_install_infoSumOrderByAggregateInputSchema: z.ZodType<Prisma.device_install_infoSumOrderByAggregateInput> = z.object({
  device_id: z.lazy(() => SortOrderSchema).optional(),
  installer_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default device_install_infoSumOrderByAggregateInputSchema;
