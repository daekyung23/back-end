import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { v_clientWhereInputSchema } from '../inputTypeSchemas/v_clientWhereInputSchema'

export const v_clientDeleteManyArgsSchema: z.ZodType<Prisma.v_clientDeleteManyArgs> = z.object({
  where: v_clientWhereInputSchema.optional(),
}).strict() ;

export default v_clientDeleteManyArgsSchema;
