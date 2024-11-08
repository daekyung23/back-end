import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_optionUpdateInputSchema } from '../inputTypeSchemas/device_optionUpdateInputSchema'
import { device_optionUncheckedUpdateInputSchema } from '../inputTypeSchemas/device_optionUncheckedUpdateInputSchema'
import { device_optionWhereUniqueInputSchema } from '../inputTypeSchemas/device_optionWhereUniqueInputSchema'
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

export const device_optionUpdateArgsSchema: z.ZodType<Prisma.device_optionUpdateArgs> = z.object({
  select: device_optionSelectSchema.optional(),
  data: z.union([ device_optionUpdateInputSchema,device_optionUncheckedUpdateInputSchema ]),
  where: device_optionWhereUniqueInputSchema,
}).strict() ;

export default device_optionUpdateArgsSchema;
