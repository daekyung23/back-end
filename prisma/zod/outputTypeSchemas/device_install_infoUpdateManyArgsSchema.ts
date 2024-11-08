import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_install_infoUpdateManyMutationInputSchema } from '../inputTypeSchemas/device_install_infoUpdateManyMutationInputSchema'
import { device_install_infoUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/device_install_infoUncheckedUpdateManyInputSchema'
import { device_install_infoWhereInputSchema } from '../inputTypeSchemas/device_install_infoWhereInputSchema'

export const device_install_infoUpdateManyArgsSchema: z.ZodType<Prisma.device_install_infoUpdateManyArgs> = z.object({
  data: z.union([ device_install_infoUpdateManyMutationInputSchema,device_install_infoUncheckedUpdateManyInputSchema ]),
  where: device_install_infoWhereInputSchema.optional(),
}).strict() ;

export default device_install_infoUpdateManyArgsSchema;
