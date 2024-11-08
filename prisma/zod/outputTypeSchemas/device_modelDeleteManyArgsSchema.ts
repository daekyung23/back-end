import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_modelWhereInputSchema } from '../inputTypeSchemas/device_modelWhereInputSchema'

export const device_modelDeleteManyArgsSchema: z.ZodType<Prisma.device_modelDeleteManyArgs> = z.object({
  where: device_modelWhereInputSchema.optional(),
}).strict() ;

export default device_modelDeleteManyArgsSchema;
