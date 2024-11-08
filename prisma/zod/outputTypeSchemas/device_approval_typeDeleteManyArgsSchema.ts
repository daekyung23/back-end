import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_approval_typeWhereInputSchema } from '../inputTypeSchemas/device_approval_typeWhereInputSchema'

export const device_approval_typeDeleteManyArgsSchema: z.ZodType<Prisma.device_approval_typeDeleteManyArgs> = z.object({
  where: device_approval_typeWhereInputSchema.optional(),
}).strict() ;

export default device_approval_typeDeleteManyArgsSchema;
