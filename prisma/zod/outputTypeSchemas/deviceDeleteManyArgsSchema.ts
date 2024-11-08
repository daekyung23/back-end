import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { deviceWhereInputSchema } from '../inputTypeSchemas/deviceWhereInputSchema'

export const deviceDeleteManyArgsSchema: z.ZodType<Prisma.deviceDeleteManyArgs> = z.object({
  where: deviceWhereInputSchema.optional(),
}).strict() ;

export default deviceDeleteManyArgsSchema;
