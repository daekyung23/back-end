import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_driverWhereInputSchema } from '../inputTypeSchemas/device_driverWhereInputSchema'

export const device_driverDeleteManyArgsSchema: z.ZodType<Prisma.device_driverDeleteManyArgs> = z.object({
  where: device_driverWhereInputSchema.optional(),
}).strict() ;

export default device_driverDeleteManyArgsSchema;
