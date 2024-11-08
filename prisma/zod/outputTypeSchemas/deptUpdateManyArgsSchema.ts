import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { deptUpdateManyMutationInputSchema } from '../inputTypeSchemas/deptUpdateManyMutationInputSchema'
import { deptUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/deptUncheckedUpdateManyInputSchema'
import { deptWhereInputSchema } from '../inputTypeSchemas/deptWhereInputSchema'

export const deptUpdateManyArgsSchema: z.ZodType<Prisma.deptUpdateManyArgs> = z.object({
  data: z.union([ deptUpdateManyMutationInputSchema,deptUncheckedUpdateManyInputSchema ]),
  where: deptWhereInputSchema.optional(),
}).strict() ;

export default deptUpdateManyArgsSchema;
