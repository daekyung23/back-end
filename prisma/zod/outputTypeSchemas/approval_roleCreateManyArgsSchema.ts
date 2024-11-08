import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { approval_roleCreateManyInputSchema } from '../inputTypeSchemas/approval_roleCreateManyInputSchema'

export const approval_roleCreateManyArgsSchema: z.ZodType<Prisma.approval_roleCreateManyArgs> = z.object({
  data: z.union([ approval_roleCreateManyInputSchema,approval_roleCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default approval_roleCreateManyArgsSchema;
