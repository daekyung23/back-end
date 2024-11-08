import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_install_infoCreateManyInputSchema } from '../inputTypeSchemas/device_install_infoCreateManyInputSchema'

export const device_install_infoCreateManyArgsSchema: z.ZodType<Prisma.device_install_infoCreateManyArgs> = z.object({
  data: z.union([ device_install_infoCreateManyInputSchema,device_install_infoCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default device_install_infoCreateManyArgsSchema;
