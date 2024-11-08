import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_inspection_logUpdateManyMutationInputSchema } from '../inputTypeSchemas/device_inspection_logUpdateManyMutationInputSchema'
import { device_inspection_logUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/device_inspection_logUncheckedUpdateManyInputSchema'
import { device_inspection_logWhereInputSchema } from '../inputTypeSchemas/device_inspection_logWhereInputSchema'

export const device_inspection_logUpdateManyArgsSchema: z.ZodType<Prisma.device_inspection_logUpdateManyArgs> = z.object({
  data: z.union([ device_inspection_logUpdateManyMutationInputSchema,device_inspection_logUncheckedUpdateManyInputSchema ]),
  where: device_inspection_logWhereInputSchema.optional(),
}).strict() ;

export default device_inspection_logUpdateManyArgsSchema;
