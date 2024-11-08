import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { user_positionUpdateInputSchema } from '../inputTypeSchemas/user_positionUpdateInputSchema'
import { user_positionUncheckedUpdateInputSchema } from '../inputTypeSchemas/user_positionUncheckedUpdateInputSchema'
import { user_positionWhereUniqueInputSchema } from '../inputTypeSchemas/user_positionWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const user_positionSelectSchema: z.ZodType<Prisma.user_positionSelect> = z.object({
  user_position_id: z.boolean().optional(),
  position_name: z.boolean().optional(),
}).strict()

export const user_positionUpdateArgsSchema: z.ZodType<Prisma.user_positionUpdateArgs> = z.object({
  select: user_positionSelectSchema.optional(),
  data: z.union([ user_positionUpdateInputSchema,user_positionUncheckedUpdateInputSchema ]),
  where: user_positionWhereUniqueInputSchema,
}).strict() ;

export default user_positionUpdateArgsSchema;
