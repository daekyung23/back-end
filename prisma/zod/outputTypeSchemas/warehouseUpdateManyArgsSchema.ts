import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { warehouseUpdateManyMutationInputSchema } from '../inputTypeSchemas/warehouseUpdateManyMutationInputSchema'
import { warehouseUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/warehouseUncheckedUpdateManyInputSchema'
import { warehouseWhereInputSchema } from '../inputTypeSchemas/warehouseWhereInputSchema'

export const warehouseUpdateManyArgsSchema: z.ZodType<Prisma.warehouseUpdateManyArgs> = z.object({
  data: z.union([ warehouseUpdateManyMutationInputSchema,warehouseUncheckedUpdateManyInputSchema ]),
  where: warehouseWhereInputSchema.optional(),
}).strict() ;

export default warehouseUpdateManyArgsSchema;
