import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_location_logCreateManyInputSchema } from '../inputTypeSchemas/device_location_logCreateManyInputSchema'

export const device_location_logCreateManyArgsSchema: z.ZodType<Prisma.device_location_logCreateManyArgs> = z.object({
  data: z.union([ device_location_logCreateManyInputSchema,device_location_logCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default device_location_logCreateManyArgsSchema;
