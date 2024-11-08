import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { warehouseCreateManyInputSchema } from '../inputTypeSchemas/warehouseCreateManyInputSchema'

export const warehouseCreateManyArgsSchema: z.ZodType<Prisma.warehouseCreateManyArgs> = z.object({
  data: z.union([ warehouseCreateManyInputSchema,warehouseCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default warehouseCreateManyArgsSchema;
