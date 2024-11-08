import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { inspection_approvalWhereInputSchema } from '../inputTypeSchemas/inspection_approvalWhereInputSchema'

export const inspection_approvalDeleteManyArgsSchema: z.ZodType<Prisma.inspection_approvalDeleteManyArgs> = z.object({
  where: inspection_approvalWhereInputSchema.optional(),
}).strict() ;

export default inspection_approvalDeleteManyArgsSchema;
