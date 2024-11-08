import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_install_infoWhereInputSchema } from '../inputTypeSchemas/device_install_infoWhereInputSchema'

export const device_install_infoDeleteManyArgsSchema: z.ZodType<Prisma.device_install_infoDeleteManyArgs> = z.object({
  where: device_install_infoWhereInputSchema.optional(),
}).strict() ;

export default device_install_infoDeleteManyArgsSchema;
