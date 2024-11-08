import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_optionWhereUniqueInputSchema } from '../inputTypeSchemas/device_optionWhereUniqueInputSchema'
import { device_optionCreateInputSchema } from '../inputTypeSchemas/device_optionCreateInputSchema'
import { device_optionUncheckedCreateInputSchema } from '../inputTypeSchemas/device_optionUncheckedCreateInputSchema'
import { device_optionUpdateInputSchema } from '../inputTypeSchemas/device_optionUpdateInputSchema'
import { device_optionUncheckedUpdateInputSchema } from '../inputTypeSchemas/device_optionUncheckedUpdateInputSchema'
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

export const device_optionUpsertArgsSchema: z.ZodType<Prisma.device_optionUpsertArgs> = z.object({
  select: device_optionSelectSchema.optional(),
  where: device_optionWhereUniqueInputSchema,
  create: z.union([ device_optionCreateInputSchema,device_optionUncheckedCreateInputSchema ]),
  update: z.union([ device_optionUpdateInputSchema,device_optionUncheckedUpdateInputSchema ]),
}).strict() ;

export default device_optionUpsertArgsSchema;
