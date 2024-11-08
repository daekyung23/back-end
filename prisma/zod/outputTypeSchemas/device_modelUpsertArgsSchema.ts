import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_modelWhereUniqueInputSchema } from '../inputTypeSchemas/device_modelWhereUniqueInputSchema'
import { device_modelCreateInputSchema } from '../inputTypeSchemas/device_modelCreateInputSchema'
import { device_modelUncheckedCreateInputSchema } from '../inputTypeSchemas/device_modelUncheckedCreateInputSchema'
import { device_modelUpdateInputSchema } from '../inputTypeSchemas/device_modelUpdateInputSchema'
import { device_modelUncheckedUpdateInputSchema } from '../inputTypeSchemas/device_modelUncheckedUpdateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const device_modelSelectSchema: z.ZodType<Prisma.device_modelSelect> = z.object({
  device_model_id: z.boolean().optional(),
  model_name: z.boolean().optional(),
  manufacturer: z.boolean().optional(),
  color_support: z.boolean().optional(),
}).strict()

export const device_modelUpsertArgsSchema: z.ZodType<Prisma.device_modelUpsertArgs> = z.object({
  select: device_modelSelectSchema.optional(),
  where: device_modelWhereUniqueInputSchema,
  create: z.union([ device_modelCreateInputSchema,device_modelUncheckedCreateInputSchema ]),
  update: z.union([ device_modelUpdateInputSchema,device_modelUncheckedUpdateInputSchema ]),
}).strict() ;

export default device_modelUpsertArgsSchema;
