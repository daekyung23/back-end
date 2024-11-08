import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { v_deptWhereInputSchema } from '../inputTypeSchemas/v_deptWhereInputSchema'

export const v_deptDeleteManyArgsSchema: z.ZodType<Prisma.v_deptDeleteManyArgs> = z.object({
  where: v_deptWhereInputSchema.optional(),
}).strict() ;

export default v_deptDeleteManyArgsSchema;
