import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const device_driverUncheckedCreateInputSchema: z.ZodType<Prisma.device_driverUncheckedCreateInput> = z.object({
  device_driver_id: z.number().int().optional(),
  device_model_id: z.number().int(),
  manufacturer: z.string().optional().nullable(),
  printer_language: z.string().optional().nullable(),
  install_file_address: z.string().optional().nullable()
}).strict();

export default device_driverUncheckedCreateInputSchema;
