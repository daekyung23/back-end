import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_approval_typeCreateManyInputSchema } from '../inputTypeSchemas/device_approval_typeCreateManyInputSchema'

export const device_approval_typeCreateManyArgsSchema: z.ZodType<Prisma.device_approval_typeCreateManyArgs> = z.object({
  data: z.union([ device_approval_typeCreateManyInputSchema,device_approval_typeCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default device_approval_typeCreateManyArgsSchema;
