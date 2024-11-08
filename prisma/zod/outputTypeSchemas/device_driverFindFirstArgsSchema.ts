import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_driverWhereInputSchema } from '../inputTypeSchemas/device_driverWhereInputSchema'
import { device_driverOrderByWithRelationInputSchema } from '../inputTypeSchemas/device_driverOrderByWithRelationInputSchema'
import { device_driverWhereUniqueInputSchema } from '../inputTypeSchemas/device_driverWhereUniqueInputSchema'
import { Device_driverScalarFieldEnumSchema } from '../inputTypeSchemas/Device_driverScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const device_driverSelectSchema: z.ZodType<Prisma.device_driverSelect> = z.object({
  device_driver_id: z.boolean().optional(),
  device_model_id: z.boolean().optional(),
  manufacturer: z.boolean().optional(),
  printer_language: z.boolean().optional(),
  install_file_address: z.boolean().optional(),
}).strict()

export const device_driverFindFirstArgsSchema: z.ZodType<Prisma.device_driverFindFirstArgs> = z.object({
  select: device_driverSelectSchema.optional(),
  where: device_driverWhereInputSchema.optional(),
  orderBy: z.union([ device_driverOrderByWithRelationInputSchema.array(),device_driverOrderByWithRelationInputSchema ]).optional(),
  cursor: device_driverWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Device_driverScalarFieldEnumSchema,Device_driverScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default device_driverFindFirstArgsSchema;
