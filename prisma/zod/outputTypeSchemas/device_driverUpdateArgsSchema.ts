import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_driverUpdateInputSchema } from '../inputTypeSchemas/device_driverUpdateInputSchema'
import { device_driverUncheckedUpdateInputSchema } from '../inputTypeSchemas/device_driverUncheckedUpdateInputSchema'
import { device_driverWhereUniqueInputSchema } from '../inputTypeSchemas/device_driverWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const device_driverSelectSchema: z.ZodType<Prisma.device_driverSelect> = z.object({
  device_driver_id: z.boolean().optional(),
  device_model_id: z.boolean().optional(),
  manufacturer: z.boolean().optional(),
  printer_language: z.boolean().optional(),
  install_file_address: z.boolean().optional(),
}).strict()

export const device_driverUpdateArgsSchema: z.ZodType<Prisma.device_driverUpdateArgs> = z.object({
  select: device_driverSelectSchema.optional(),
  data: z.union([ device_driverUpdateInputSchema,device_driverUncheckedUpdateInputSchema ]),
  where: device_driverWhereUniqueInputSchema,
}).strict() ;

export default device_driverUpdateArgsSchema;
