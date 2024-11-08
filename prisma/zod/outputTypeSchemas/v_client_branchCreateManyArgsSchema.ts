import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { v_client_branchCreateManyInputSchema } from '../inputTypeSchemas/v_client_branchCreateManyInputSchema'

export const v_client_branchCreateManyArgsSchema: z.ZodType<Prisma.v_client_branchCreateManyArgs> = z.object({
  data: z.union([ v_client_branchCreateManyInputSchema,v_client_branchCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default v_client_branchCreateManyArgsSchema;
