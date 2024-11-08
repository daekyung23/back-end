import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const device_install_infoAvgOrderByAggregateInputSchema: z.ZodType<Prisma.device_install_infoAvgOrderByAggregateInput> = z.object({
  device_id: z.lazy(() => SortOrderSchema).optional(),
  installer_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default device_install_infoAvgOrderByAggregateInputSchema;
