import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { v_deptUpdateManyMutationInputSchema } from '../inputTypeSchemas/v_deptUpdateManyMutationInputSchema'
import { v_deptUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/v_deptUncheckedUpdateManyInputSchema'
import { v_deptWhereInputSchema } from '../inputTypeSchemas/v_deptWhereInputSchema'

export const v_deptUpdateManyArgsSchema: z.ZodType<Prisma.v_deptUpdateManyArgs> = z.object({
  data: z.union([ v_deptUpdateManyMutationInputSchema,v_deptUncheckedUpdateManyInputSchema ]),
  where: v_deptWhereInputSchema.optional(),
}).strict() ;

export default v_deptUpdateManyArgsSchema;
