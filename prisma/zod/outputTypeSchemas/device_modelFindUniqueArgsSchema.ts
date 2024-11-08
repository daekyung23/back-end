import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_modelWhereUniqueInputSchema } from '../inputTypeSchemas/device_modelWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const device_modelSelectSchema: z.ZodType<Prisma.device_modelSelect> = z.object({
  device_model_id: z.boolean().optional(),
  model_name: z.boolean().optional(),
  manufacturer: z.boolean().optional(),
  color_support: z.boolean().optional(),
}).strict()

export const device_modelFindUniqueArgsSchema: z.ZodType<Prisma.device_modelFindUniqueArgs> = z.object({
  select: device_modelSelectSchema.optional(),
  where: device_modelWhereUniqueInputSchema,
}).strict() ;

export default device_modelFindUniqueArgsSchema;
