import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { client_branchWhereInputSchema } from '../inputTypeSchemas/client_branchWhereInputSchema'

export const client_branchDeleteManyArgsSchema: z.ZodType<Prisma.client_branchDeleteManyArgs> = z.object({
  where: client_branchWhereInputSchema.optional(),
}).strict() ;

export default client_branchDeleteManyArgsSchema;
