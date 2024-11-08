import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_approval_typeUpdateManyMutationInputSchema } from '../inputTypeSchemas/device_approval_typeUpdateManyMutationInputSchema'
import { device_approval_typeUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/device_approval_typeUncheckedUpdateManyInputSchema'
import { device_approval_typeWhereInputSchema } from '../inputTypeSchemas/device_approval_typeWhereInputSchema'

export const device_approval_typeUpdateManyArgsSchema: z.ZodType<Prisma.device_approval_typeUpdateManyArgs> = z.object({
  data: z.union([ device_approval_typeUpdateManyMutationInputSchema,device_approval_typeUncheckedUpdateManyInputSchema ]),
  where: device_approval_typeWhereInputSchema.optional(),
}).strict() ;

export default device_approval_typeUpdateManyArgsSchema;
