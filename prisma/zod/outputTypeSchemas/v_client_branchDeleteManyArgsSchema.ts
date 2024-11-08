import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { v_client_branchWhereInputSchema } from '../inputTypeSchemas/v_client_branchWhereInputSchema'

export const v_client_branchDeleteManyArgsSchema: z.ZodType<Prisma.v_client_branchDeleteManyArgs> = z.object({
  where: v_client_branchWhereInputSchema.optional(),
}).strict() ;

export default v_client_branchDeleteManyArgsSchema;
