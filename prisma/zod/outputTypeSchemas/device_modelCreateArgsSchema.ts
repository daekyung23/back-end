import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_modelCreateInputSchema } from '../inputTypeSchemas/device_modelCreateInputSchema'
import { device_modelUncheckedCreateInputSchema } from '../inputTypeSchemas/device_modelUncheckedCreateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const device_modelSelectSchema: z.ZodType<Prisma.device_modelSelect> = z.object({
  device_model_id: z.boolean().optional(),
  model_name: z.boolean().optional(),
  manufacturer: z.boolean().optional(),
  color_support: z.boolean().optional(),
}).strict()

export const device_modelCreateArgsSchema: z.ZodType<Prisma.device_modelCreateArgs> = z.object({
  select: device_modelSelectSchema.optional(),
  data: z.union([ device_modelCreateInputSchema,device_modelUncheckedCreateInputSchema ]),
}).strict() ;

export default device_modelCreateArgsSchema;
