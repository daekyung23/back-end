import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { clientWhereInputSchema } from '../inputTypeSchemas/clientWhereInputSchema'

export const clientDeleteManyArgsSchema: z.ZodType<Prisma.clientDeleteManyArgs> = z.object({
  where: clientWhereInputSchema.optional(),
}).strict() ;

export default clientDeleteManyArgsSchema;
