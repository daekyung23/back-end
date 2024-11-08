import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_location_logWhereInputSchema } from '../inputTypeSchemas/device_location_logWhereInputSchema'

export const device_location_logDeleteManyArgsSchema: z.ZodType<Prisma.device_location_logDeleteManyArgs> = z.object({
  where: device_location_logWhereInputSchema.optional(),
}).strict() ;

export default device_location_logDeleteManyArgsSchema;
