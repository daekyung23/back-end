import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { user_positionCreateInputSchema } from '../inputTypeSchemas/user_positionCreateInputSchema'
import { user_positionUncheckedCreateInputSchema } from '../inputTypeSchemas/user_positionUncheckedCreateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const user_positionSelectSchema: z.ZodType<Prisma.user_positionSelect> = z.object({
  user_position_id: z.boolean().optional(),
  position_name: z.boolean().optional(),
}).strict()

export const user_positionCreateArgsSchema: z.ZodType<Prisma.user_positionCreateArgs> = z.object({
  select: user_positionSelectSchema.optional(),
  data: z.union([ user_positionCreateInputSchema,user_positionUncheckedCreateInputSchema ]),
}).strict() ;

export default user_positionCreateArgsSchema;
