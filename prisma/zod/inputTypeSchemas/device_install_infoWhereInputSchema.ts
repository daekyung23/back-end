import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const device_install_infoWhereInputSchema: z.ZodType<Prisma.device_install_infoWhereInput> = z.object({
  AND: z.union([ z.lazy(() => device_install_infoWhereInputSchema),z.lazy(() => device_install_infoWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_install_infoWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_install_infoWhereInputSchema),z.lazy(() => device_install_infoWhereInputSchema).array() ]).optional(),
  device_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  installer_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  mgmt_num: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  ip_address: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  subnet_mask: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  gateway: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  dns1: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  dns2: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default device_install_infoWhereInputSchema;
