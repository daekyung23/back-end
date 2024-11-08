import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_modelUpdateInputSchema } from '../inputTypeSchemas/device_modelUpdateInputSchema'
import { device_modelUncheckedUpdateInputSchema } from '../inputTypeSchemas/device_modelUncheckedUpdateInputSchema'
import { device_modelWhereUniqueInputSchema } from '../inputTypeSchemas/device_modelWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const device_modelSelectSchema: z.ZodType<Prisma.device_modelSelect> = z.object({
  device_model_id: z.boolean().optional(),
  model_name: z.boolean().optional(),
  manufacturer: z.boolean().optional(),
  color_support: z.boolean().optional(),
}).strict()

export const device_modelUpdateArgsSchema: z.ZodType<Prisma.device_modelUpdateArgs> = z.object({
  select: device_modelSelectSchema.optional(),
  data: z.union([ device_modelUpdateInputSchema,device_modelUncheckedUpdateInputSchema ]),
  where: device_modelWhereUniqueInputSchema,
}).strict() ;

export default device_modelUpdateArgsSchema;
