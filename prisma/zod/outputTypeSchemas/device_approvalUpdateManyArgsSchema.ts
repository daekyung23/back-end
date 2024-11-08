import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_approvalUpdateManyMutationInputSchema } from '../inputTypeSchemas/device_approvalUpdateManyMutationInputSchema'
import { device_approvalUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/device_approvalUncheckedUpdateManyInputSchema'
import { device_approvalWhereInputSchema } from '../inputTypeSchemas/device_approvalWhereInputSchema'

export const device_approvalUpdateManyArgsSchema: z.ZodType<Prisma.device_approvalUpdateManyArgs> = z.object({
  data: z.union([ device_approvalUpdateManyMutationInputSchema,device_approvalUncheckedUpdateManyInputSchema ]),
  where: device_approvalWhereInputSchema.optional(),
}).strict() ;

export default device_approvalUpdateManyArgsSchema;
