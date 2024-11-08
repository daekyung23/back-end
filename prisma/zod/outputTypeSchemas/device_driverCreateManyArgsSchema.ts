import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_driverCreateManyInputSchema } from '../inputTypeSchemas/device_driverCreateManyInputSchema'

export const device_driverCreateManyArgsSchema: z.ZodType<Prisma.device_driverCreateManyArgs> = z.object({
  data: z.union([ device_driverCreateManyInputSchema,device_driverCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default device_driverCreateManyArgsSchema;
