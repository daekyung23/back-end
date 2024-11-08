import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { user_positionWhereUniqueInputSchema } from '../inputTypeSchemas/user_positionWhereUniqueInputSchema'
import { user_positionCreateInputSchema } from '../inputTypeSchemas/user_positionCreateInputSchema'
import { user_positionUncheckedCreateInputSchema } from '../inputTypeSchemas/user_positionUncheckedCreateInputSchema'
import { user_positionUpdateInputSchema } from '../inputTypeSchemas/user_positionUpdateInputSchema'
import { user_positionUncheckedUpdateInputSchema } from '../inputTypeSchemas/user_positionUncheckedUpdateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const user_positionSelectSchema: z.ZodType<Prisma.user_positionSelect> = z.object({
  user_position_id: z.boolean().optional(),
  position_name: z.boolean().optional(),
}).strict()

export const user_positionUpsertArgsSchema: z.ZodType<Prisma.user_positionUpsertArgs> = z.object({
  select: user_positionSelectSchema.optional(),
  where: user_positionWhereUniqueInputSchema,
  create: z.union([ user_positionCreateInputSchema,user_positionUncheckedCreateInputSchema ]),
  update: z.union([ user_positionUpdateInputSchema,user_positionUncheckedUpdateInputSchema ]),
}).strict() ;

export default user_positionUpsertArgsSchema;
