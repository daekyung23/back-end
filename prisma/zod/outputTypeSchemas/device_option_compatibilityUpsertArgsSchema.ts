import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_option_compatibilityWhereUniqueInputSchema } from '../inputTypeSchemas/device_option_compatibilityWhereUniqueInputSchema'
import { device_option_compatibilityCreateInputSchema } from '../inputTypeSchemas/device_option_compatibilityCreateInputSchema'
import { device_option_compatibilityUncheckedCreateInputSchema } from '../inputTypeSchemas/device_option_compatibilityUncheckedCreateInputSchema'
import { device_option_compatibilityUpdateInputSchema } from '../inputTypeSchemas/device_option_compatibilityUpdateInputSchema'
import { device_option_compatibilityUncheckedUpdateInputSchema } from '../inputTypeSchemas/device_option_compatibilityUncheckedUpdateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const device_option_compatibilitySelectSchema: z.ZodType<Prisma.device_option_compatibilitySelect> = z.object({
  device_model_id: z.boolean().optional(),
  option_model_id: z.boolean().optional(),
}).strict()

export const device_option_compatibilityUpsertArgsSchema: z.ZodType<Prisma.device_option_compatibilityUpsertArgs> = z.object({
  select: device_option_compatibilitySelectSchema.optional(),
  where: device_option_compatibilityWhereUniqueInputSchema,
  create: z.union([ device_option_compatibilityCreateInputSchema,device_option_compatibilityUncheckedCreateInputSchema ]),
  update: z.union([ device_option_compatibilityUpdateInputSchema,device_option_compatibilityUncheckedUpdateInputSchema ]),
}).strict() ;

export default device_option_compatibilityUpsertArgsSchema;
