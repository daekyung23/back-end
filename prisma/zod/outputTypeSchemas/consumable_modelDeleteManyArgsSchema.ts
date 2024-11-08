import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { consumable_modelWhereInputSchema } from '../inputTypeSchemas/consumable_modelWhereInputSchema'

export const consumable_modelDeleteManyArgsSchema: z.ZodType<Prisma.consumable_modelDeleteManyArgs> = z.object({
  where: consumable_modelWhereInputSchema.optional(),
}).strict() ;

export default consumable_modelDeleteManyArgsSchema;
