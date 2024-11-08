import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { v_deptCreateManyInputSchema } from '../inputTypeSchemas/v_deptCreateManyInputSchema'

export const v_deptCreateManyArgsSchema: z.ZodType<Prisma.v_deptCreateManyArgs> = z.object({
  data: z.union([ v_deptCreateManyInputSchema,v_deptCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default v_deptCreateManyArgsSchema;
