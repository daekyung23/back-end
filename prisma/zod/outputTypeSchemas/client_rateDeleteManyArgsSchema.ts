import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { client_rateWhereInputSchema } from '../inputTypeSchemas/client_rateWhereInputSchema'

export const client_rateDeleteManyArgsSchema: z.ZodType<Prisma.client_rateDeleteManyArgs> = z.object({
  where: client_rateWhereInputSchema.optional(),
}).strict() ;

export default client_rateDeleteManyArgsSchema;
