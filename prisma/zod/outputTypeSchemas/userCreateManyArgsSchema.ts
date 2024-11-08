import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { userCreateManyInputSchema } from '../inputTypeSchemas/userCreateManyInputSchema'

export const userCreateManyArgsSchema: z.ZodType<Prisma.userCreateManyArgs> = z.object({
  data: z.union([ userCreateManyInputSchema,userCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default userCreateManyArgsSchema;
