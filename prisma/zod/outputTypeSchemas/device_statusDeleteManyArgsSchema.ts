import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_statusWhereInputSchema } from '../inputTypeSchemas/device_statusWhereInputSchema'

export const device_statusDeleteManyArgsSchema: z.ZodType<Prisma.device_statusDeleteManyArgs> = z.object({
  where: device_statusWhereInputSchema.optional(),
}).strict() ;

export default device_statusDeleteManyArgsSchema;
