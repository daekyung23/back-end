import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_approvalCreateManyInputSchema } from '../inputTypeSchemas/device_approvalCreateManyInputSchema'

export const device_approvalCreateManyArgsSchema: z.ZodType<Prisma.device_approvalCreateManyArgs> = z.object({
  data: z.union([ device_approvalCreateManyInputSchema,device_approvalCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default device_approvalCreateManyArgsSchema;
