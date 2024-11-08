import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { call_typeWhereInputSchema } from '../inputTypeSchemas/call_typeWhereInputSchema'

export const call_typeDeleteManyArgsSchema: z.ZodType<Prisma.call_typeDeleteManyArgs> = z.object({
  where: call_typeWhereInputSchema.optional(),
}).strict() ;

export default call_typeDeleteManyArgsSchema;
