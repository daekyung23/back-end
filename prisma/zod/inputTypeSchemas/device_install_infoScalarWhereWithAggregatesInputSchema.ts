import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';

export const device_install_infoScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.device_install_infoScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => device_install_infoScalarWhereWithAggregatesInputSchema),z.lazy(() => device_install_infoScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_install_infoScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_install_infoScalarWhereWithAggregatesInputSchema),z.lazy(() => device_install_infoScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  device_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  installer_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  mgmt_num: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  ip_address: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  subnet_mask: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  gateway: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  dns1: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  dns2: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default device_install_infoScalarWhereWithAggregatesInputSchema;
