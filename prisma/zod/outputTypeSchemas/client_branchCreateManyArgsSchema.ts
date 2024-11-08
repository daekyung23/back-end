import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { client_branchCreateManyInputSchema } from '../inputTypeSchemas/client_branchCreateManyInputSchema'

export const client_branchCreateManyArgsSchema: z.ZodType<Prisma.client_branchCreateManyArgs> = z.object({
  data: z.union([ client_branchCreateManyInputSchema,client_branchCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default client_branchCreateManyArgsSchema;
