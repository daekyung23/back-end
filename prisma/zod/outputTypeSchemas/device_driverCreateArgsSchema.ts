import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_driverCreateInputSchema } from '../inputTypeSchemas/device_driverCreateInputSchema'
import { device_driverUncheckedCreateInputSchema } from '../inputTypeSchemas/device_driverUncheckedCreateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const device_driverSelectSchema: z.ZodType<Prisma.device_driverSelect> = z.object({
  device_driver_id: z.boolean().optional(),
  device_model_id: z.boolean().optional(),
  manufacturer: z.boolean().optional(),
  printer_language: z.boolean().optional(),
  install_file_address: z.boolean().optional(),
}).strict()

export const device_driverCreateArgsSchema: z.ZodType<Prisma.device_driverCreateArgs> = z.object({
  select: device_driverSelectSchema.optional(),
  data: z.union([ device_driverCreateInputSchema,device_driverUncheckedCreateInputSchema ]),
}).strict() ;

export default device_driverCreateArgsSchema;
