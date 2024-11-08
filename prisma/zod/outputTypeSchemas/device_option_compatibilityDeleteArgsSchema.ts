import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_option_compatibilityWhereUniqueInputSchema } from '../inputTypeSchemas/device_option_compatibilityWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const device_option_compatibilitySelectSchema: z.ZodType<Prisma.device_option_compatibilitySelect> = z.object({
  device_model_id: z.boolean().optional(),
  option_model_id: z.boolean().optional(),
}).strict()

export const device_option_compatibilityDeleteArgsSchema: z.ZodType<Prisma.device_option_compatibilityDeleteArgs> = z.object({
  select: device_option_compatibilitySelectSchema.optional(),
  where: device_option_compatibilityWhereUniqueInputSchema,
}).strict() ;

export default device_option_compatibilityDeleteArgsSchema;
