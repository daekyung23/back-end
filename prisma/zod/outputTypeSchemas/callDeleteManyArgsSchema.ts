import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { callWhereInputSchema } from '../inputTypeSchemas/callWhereInputSchema'

export const callDeleteManyArgsSchema: z.ZodType<Prisma.callDeleteManyArgs> = z.object({
  where: callWhereInputSchema.optional(),
}).strict() ;

export default callDeleteManyArgsSchema;
