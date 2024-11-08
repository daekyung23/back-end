import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_inspection_logCreateManyInputSchema } from '../inputTypeSchemas/device_inspection_logCreateManyInputSchema'

export const device_inspection_logCreateManyArgsSchema: z.ZodType<Prisma.device_inspection_logCreateManyArgs> = z.object({
  data: z.union([ device_inspection_logCreateManyInputSchema,device_inspection_logCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default device_inspection_logCreateManyArgsSchema;
