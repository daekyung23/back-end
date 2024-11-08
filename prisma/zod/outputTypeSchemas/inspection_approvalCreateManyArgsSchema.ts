import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { inspection_approvalCreateManyInputSchema } from '../inputTypeSchemas/inspection_approvalCreateManyInputSchema'

export const inspection_approvalCreateManyArgsSchema: z.ZodType<Prisma.inspection_approvalCreateManyArgs> = z.object({
  data: z.union([ inspection_approvalCreateManyInputSchema,inspection_approvalCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default inspection_approvalCreateManyArgsSchema;
