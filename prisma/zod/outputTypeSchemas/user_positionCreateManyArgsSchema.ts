import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { user_positionCreateManyInputSchema } from '../inputTypeSchemas/user_positionCreateManyInputSchema'

export const user_positionCreateManyArgsSchema: z.ZodType<Prisma.user_positionCreateManyArgs> = z.object({
  data: z.union([ user_positionCreateManyInputSchema,user_positionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default user_positionCreateManyArgsSchema;
