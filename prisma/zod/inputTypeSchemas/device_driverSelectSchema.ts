import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const device_driverSelectSchema: z.ZodType<Prisma.device_driverSelect> = z.object({
  device_driver_id: z.boolean().optional(),
  device_model_id: z.boolean().optional(),
  manufacturer: z.boolean().optional(),
  printer_language: z.boolean().optional(),
  install_file_address: z.boolean().optional(),
}).strict()

export default device_driverSelectSchema;
