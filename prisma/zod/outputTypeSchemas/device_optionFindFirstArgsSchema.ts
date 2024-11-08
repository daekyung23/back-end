import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_optionWhereInputSchema } from '../inputTypeSchemas/device_optionWhereInputSchema'
import { device_optionOrderByWithRelationInputSchema } from '../inputTypeSchemas/device_optionOrderByWithRelationInputSchema'
import { device_optionWhereUniqueInputSchema } from '../inputTypeSchemas/device_optionWhereUniqueInputSchema'
import { Device_optionScalarFieldEnumSchema } from '../inputTypeSchemas/Device_optionScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const device_optionSelectSchema: z.ZodType<Prisma.device_optionSelect> = z.object({
  device_option_id: z.boolean().optional(),
  option_model_id: z.boolean().optional(),
  serial: z.boolean().optional(),
  is_active: z.boolean().optional(),
  location_type: z.boolean().optional(),
  location_warehouse_id: z.boolean().optional(),
  location_device_id: z.boolean().optional(),
}).strict()

export const device_optionFindFirstArgsSchema: z.ZodType<Prisma.device_optionFindFirstArgs> = z.object({
  select: device_optionSelectSchema.optional(),
  where: device_optionWhereInputSchema.optional(),
  orderBy: z.union([ device_optionOrderByWithRelationInputSchema.array(),device_optionOrderByWithRelationInputSchema ]).optional(),
  cursor: device_optionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Device_optionScalarFieldEnumSchema,Device_optionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default device_optionFindFirstArgsSchema;
