import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_option_compatibilityCreateManyInputSchema } from '../inputTypeSchemas/device_option_compatibilityCreateManyInputSchema'

export const device_option_compatibilityCreateManyArgsSchema: z.ZodType<Prisma.device_option_compatibilityCreateManyArgs> = z.object({
  data: z.union([ device_option_compatibilityCreateManyInputSchema,device_option_compatibilityCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default device_option_compatibilityCreateManyArgsSchema;
