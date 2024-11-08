import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_option_compatibilityCreateInputSchema } from '../inputTypeSchemas/device_option_compatibilityCreateInputSchema'
import { device_option_compatibilityUncheckedCreateInputSchema } from '../inputTypeSchemas/device_option_compatibilityUncheckedCreateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const device_option_compatibilitySelectSchema: z.ZodType<Prisma.device_option_compatibilitySelect> = z.object({
  device_model_id: z.boolean().optional(),
  option_model_id: z.boolean().optional(),
}).strict()

export const device_option_compatibilityCreateArgsSchema: z.ZodType<Prisma.device_option_compatibilityCreateArgs> = z.object({
  select: device_option_compatibilitySelectSchema.optional(),
  data: z.union([ device_option_compatibilityCreateInputSchema,device_option_compatibilityUncheckedCreateInputSchema ]),
}).strict() ;

export default device_option_compatibilityCreateArgsSchema;
