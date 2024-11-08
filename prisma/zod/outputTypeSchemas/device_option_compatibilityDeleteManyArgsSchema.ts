import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_option_compatibilityWhereInputSchema } from '../inputTypeSchemas/device_option_compatibilityWhereInputSchema'

export const device_option_compatibilityDeleteManyArgsSchema: z.ZodType<Prisma.device_option_compatibilityDeleteManyArgs> = z.object({
  where: device_option_compatibilityWhereInputSchema.optional(),
}).strict() ;

export default device_option_compatibilityDeleteManyArgsSchema;
