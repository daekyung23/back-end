import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_statusCreateManyInputSchema } from '../inputTypeSchemas/device_statusCreateManyInputSchema'

export const device_statusCreateManyArgsSchema: z.ZodType<Prisma.device_statusCreateManyArgs> = z.object({
  data: z.union([ device_statusCreateManyInputSchema,device_statusCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default device_statusCreateManyArgsSchema;
