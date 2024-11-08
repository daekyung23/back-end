import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { locationWhereInputSchema } from '../inputTypeSchemas/locationWhereInputSchema'

export const locationDeleteManyArgsSchema: z.ZodType<Prisma.locationDeleteManyArgs> = z.object({
  where: locationWhereInputSchema.optional(),
}).strict() ;

export default locationDeleteManyArgsSchema;
