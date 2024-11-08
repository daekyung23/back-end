import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const device_install_infoMinOrderByAggregateInputSchema: z.ZodType<Prisma.device_install_infoMinOrderByAggregateInput> = z.object({
  device_id: z.lazy(() => SortOrderSchema).optional(),
  installer_id: z.lazy(() => SortOrderSchema).optional(),
  mgmt_num: z.lazy(() => SortOrderSchema).optional(),
  ip_address: z.lazy(() => SortOrderSchema).optional(),
  subnet_mask: z.lazy(() => SortOrderSchema).optional(),
  gateway: z.lazy(() => SortOrderSchema).optional(),
  dns1: z.lazy(() => SortOrderSchema).optional(),
  dns2: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default device_install_infoMinOrderByAggregateInputSchema;
