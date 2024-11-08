import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_modelCreateManyInputSchema } from '../inputTypeSchemas/device_modelCreateManyInputSchema'

export const device_modelCreateManyArgsSchema: z.ZodType<Prisma.device_modelCreateManyArgs> = z.object({
  data: z.union([ device_modelCreateManyInputSchema,device_modelCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default device_modelCreateManyArgsSchema;
