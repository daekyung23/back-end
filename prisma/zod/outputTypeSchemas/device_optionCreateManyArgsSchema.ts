import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_optionCreateManyInputSchema } from '../inputTypeSchemas/device_optionCreateManyInputSchema'

export const device_optionCreateManyArgsSchema: z.ZodType<Prisma.device_optionCreateManyArgs> = z.object({
  data: z.union([ device_optionCreateManyInputSchema,device_optionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default device_optionCreateManyArgsSchema;
