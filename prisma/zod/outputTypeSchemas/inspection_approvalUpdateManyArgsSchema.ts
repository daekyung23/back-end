import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { inspection_approvalUpdateManyMutationInputSchema } from '../inputTypeSchemas/inspection_approvalUpdateManyMutationInputSchema'
import { inspection_approvalUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/inspection_approvalUncheckedUpdateManyInputSchema'
import { inspection_approvalWhereInputSchema } from '../inputTypeSchemas/inspection_approvalWhereInputSchema'

export const inspection_approvalUpdateManyArgsSchema: z.ZodType<Prisma.inspection_approvalUpdateManyArgs> = z.object({
  data: z.union([ inspection_approvalUpdateManyMutationInputSchema,inspection_approvalUncheckedUpdateManyInputSchema ]),
  where: inspection_approvalWhereInputSchema.optional(),
}).strict() ;

export default inspection_approvalUpdateManyArgsSchema;
