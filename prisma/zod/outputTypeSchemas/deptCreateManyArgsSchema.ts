import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { deptCreateManyInputSchema } from '../inputTypeSchemas/deptCreateManyInputSchema'

export const deptCreateManyArgsSchema: z.ZodType<Prisma.deptCreateManyArgs> = z.object({
  data: z.union([ deptCreateManyInputSchema,deptCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default deptCreateManyArgsSchema;
