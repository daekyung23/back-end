import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_option_compatibilityUpdateInputSchema } from '../inputTypeSchemas/device_option_compatibilityUpdateInputSchema'
import { device_option_compatibilityUncheckedUpdateInputSchema } from '../inputTypeSchemas/device_option_compatibilityUncheckedUpdateInputSchema'
import { device_option_compatibilityWhereUniqueInputSchema } from '../inputTypeSchemas/device_option_compatibilityWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const device_option_compatibilitySelectSchema: z.ZodType<Prisma.device_option_compatibilitySelect> = z.object({
  device_model_id: z.boolean().optional(),
  option_model_id: z.boolean().optional(),
}).strict()

export const device_option_compatibilityUpdateArgsSchema: z.ZodType<Prisma.device_option_compatibilityUpdateArgs> = z.object({
  select: device_option_compatibilitySelectSchema.optional(),
  data: z.union([ device_option_compatibilityUpdateInputSchema,device_option_compatibilityUncheckedUpdateInputSchema ]),
  where: device_option_compatibilityWhereUniqueInputSchema,
}).strict() ;

export default device_option_compatibilityUpdateArgsSchema;
