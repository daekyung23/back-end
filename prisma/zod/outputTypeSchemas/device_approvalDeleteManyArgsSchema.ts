import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_approvalWhereInputSchema } from '../inputTypeSchemas/device_approvalWhereInputSchema'

export const device_approvalDeleteManyArgsSchema: z.ZodType<Prisma.device_approvalDeleteManyArgs> = z.object({
  where: device_approvalWhereInputSchema.optional(),
}).strict() ;

export default device_approvalDeleteManyArgsSchema;
