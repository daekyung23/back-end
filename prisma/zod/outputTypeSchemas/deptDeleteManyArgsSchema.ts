import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { deptWhereInputSchema } from '../inputTypeSchemas/deptWhereInputSchema'

export const deptDeleteManyArgsSchema: z.ZodType<Prisma.deptDeleteManyArgs> = z.object({
  where: deptWhereInputSchema.optional(),
}).strict() ;

export default deptDeleteManyArgsSchema;
