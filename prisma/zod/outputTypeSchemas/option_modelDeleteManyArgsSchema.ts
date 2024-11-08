import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { option_modelWhereInputSchema } from '../inputTypeSchemas/option_modelWhereInputSchema'

export const option_modelDeleteManyArgsSchema: z.ZodType<Prisma.option_modelDeleteManyArgs> = z.object({
  where: option_modelWhereInputSchema.optional(),
}).strict() ;

export default option_modelDeleteManyArgsSchema;
