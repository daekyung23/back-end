import { z } from 'zod';
import type { Prisma } from '@prisma/client';
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

export const device_optionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.device_optionFindUniqueOrThrowArgs> = z.object({
  select: device_optionSelectSchema.optional(),
  where: device_optionWhereUniqueInputSchema,
}).strict() ;

export default device_optionFindUniqueOrThrowArgsSchema;
