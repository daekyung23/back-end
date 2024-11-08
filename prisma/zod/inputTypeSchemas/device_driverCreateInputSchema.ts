import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const device_driverCreateInputSchema: z.ZodType<Prisma.device_driverCreateInput> = z.object({
  device_model_id: z.number().int(),
  manufacturer: z.string().optional().nullable(),
  printer_language: z.string().optional().nullable(),
  install_file_address: z.string().optional().nullable()
}).strict();

export default device_driverCreateInputSchema;
