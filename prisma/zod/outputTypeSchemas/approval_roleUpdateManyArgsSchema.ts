import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { approval_roleUpdateManyMutationInputSchema } from '../inputTypeSchemas/approval_roleUpdateManyMutationInputSchema'
import { approval_roleUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/approval_roleUncheckedUpdateManyInputSchema'
import { approval_roleWhereInputSchema } from '../inputTypeSchemas/approval_roleWhereInputSchema'

export const approval_roleUpdateManyArgsSchema: z.ZodType<Prisma.approval_roleUpdateManyArgs> = z.object({
  data: z.union([ approval_roleUpdateManyMutationInputSchema,approval_roleUncheckedUpdateManyInputSchema ]),
  where: approval_roleWhereInputSchema.optional(),
}).strict() ;

export default approval_roleUpdateManyArgsSchema;
