import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { warehouseWhereInputSchema } from '../inputTypeSchemas/warehouseWhereInputSchema'

export const warehouseDeleteManyArgsSchema: z.ZodType<Prisma.warehouseDeleteManyArgs> = z.object({
  where: warehouseWhereInputSchema.optional(),
}).strict() ;

export default warehouseDeleteManyArgsSchema;
