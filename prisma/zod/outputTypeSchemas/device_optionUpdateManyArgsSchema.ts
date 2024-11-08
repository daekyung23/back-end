import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_optionUpdateManyMutationInputSchema } from '../inputTypeSchemas/device_optionUpdateManyMutationInputSchema'
import { device_optionUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/device_optionUncheckedUpdateManyInputSchema'
import { device_optionWhereInputSchema } from '../inputTypeSchemas/device_optionWhereInputSchema'

export const device_optionUpdateManyArgsSchema: z.ZodType<Prisma.device_optionUpdateManyArgs> = z.object({
  data: z.union([ device_optionUpdateManyMutationInputSchema,device_optionUncheckedUpdateManyInputSchema ]),
  where: device_optionWhereInputSchema.optional(),
}).strict() ;

export default device_optionUpdateManyArgsSchema;
