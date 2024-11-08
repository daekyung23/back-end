import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { approval_roleWhereInputSchema } from '../inputTypeSchemas/approval_roleWhereInputSchema'

export const approval_roleDeleteManyArgsSchema: z.ZodType<Prisma.approval_roleDeleteManyArgs> = z.object({
  where: approval_roleWhereInputSchema.optional(),
}).strict() ;

export default approval_roleDeleteManyArgsSchema;
