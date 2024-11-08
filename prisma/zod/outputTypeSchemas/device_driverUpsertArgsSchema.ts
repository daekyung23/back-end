import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_driverWhereUniqueInputSchema } from '../inputTypeSchemas/device_driverWhereUniqueInputSchema'
import { device_driverCreateInputSchema } from '../inputTypeSchemas/device_driverCreateInputSchema'
import { device_driverUncheckedCreateInputSchema } from '../inputTypeSchemas/device_driverUncheckedCreateInputSchema'
import { device_driverUpdateInputSchema } from '../inputTypeSchemas/device_driverUpdateInputSchema'
import { device_driverUncheckedUpdateInputSchema } from '../inputTypeSchemas/device_driverUncheckedUpdateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const device_driverSelectSchema: z.ZodType<Prisma.device_driverSelect> = z.object({
  device_driver_id: z.boolean().optional(),
  device_model_id: z.boolean().optional(),
  manufacturer: z.boolean().optional(),
  printer_language: z.boolean().optional(),
  install_file_address: z.boolean().optional(),
}).strict()

export const device_driverUpsertArgsSchema: z.ZodType<Prisma.device_driverUpsertArgs> = z.object({
  select: device_driverSelectSchema.optional(),
  where: device_driverWhereUniqueInputSchema,
  create: z.union([ device_driverCreateInputSchema,device_driverUncheckedCreateInputSchema ]),
  update: z.union([ device_driverUpdateInputSchema,device_driverUncheckedUpdateInputSchema ]),
}).strict() ;

export default device_driverUpsertArgsSchema;
