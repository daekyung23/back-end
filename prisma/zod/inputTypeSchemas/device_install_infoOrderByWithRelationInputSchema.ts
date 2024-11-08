import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';

export const device_install_infoOrderByWithRelationInputSchema: z.ZodType<Prisma.device_install_infoOrderByWithRelationInput> = z.object({
  device_id: z.lazy(() => SortOrderSchema).optional(),
  installer_id: z.lazy(() => SortOrderSchema).optional(),
  mgmt_num: z.lazy(() => SortOrderSchema).optional(),
  ip_address: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  subnet_mask: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  gateway: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  dns1: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  dns2: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
}).strict();

export default device_install_infoOrderByWithRelationInputSchema;
