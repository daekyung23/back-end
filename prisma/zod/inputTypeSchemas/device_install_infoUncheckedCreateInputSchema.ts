import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const device_install_infoUncheckedCreateInputSchema: z.ZodType<Prisma.device_install_infoUncheckedCreateInput> = z.object({
  device_id: z.number().int(),
  installer_id: z.number().int(),
  mgmt_num: z.string(),
  ip_address: z.string().optional().nullable(),
  subnet_mask: z.string().optional().nullable(),
  gateway: z.string().optional().nullable(),
  dns1: z.string().optional().nullable(),
  dns2: z.string().optional().nullable()
}).strict();

export default device_install_infoUncheckedCreateInputSchema;
