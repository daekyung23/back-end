import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_inspection_logWhereInputSchema } from '../inputTypeSchemas/device_inspection_logWhereInputSchema'

export const device_inspection_logDeleteManyArgsSchema: z.ZodType<Prisma.device_inspection_logDeleteManyArgs> = z.object({
  where: device_inspection_logWhereInputSchema.optional(),
}).strict() ;

export default device_inspection_logDeleteManyArgsSchema;
