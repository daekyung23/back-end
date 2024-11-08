import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { user_positionUpdateManyMutationInputSchema } from '../inputTypeSchemas/user_positionUpdateManyMutationInputSchema'
import { user_positionUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/user_positionUncheckedUpdateManyInputSchema'
import { user_positionWhereInputSchema } from '../inputTypeSchemas/user_positionWhereInputSchema'

export const user_positionUpdateManyArgsSchema: z.ZodType<Prisma.user_positionUpdateManyArgs> = z.object({
  data: z.union([ user_positionUpdateManyMutationInputSchema,user_positionUncheckedUpdateManyInputSchema ]),
  where: user_positionWhereInputSchema.optional(),
}).strict() ;

export default user_positionUpdateManyArgsSchema;
