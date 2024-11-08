import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { user_positionWhereUniqueInputSchema } from '../inputTypeSchemas/user_positionWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const user_positionSelectSchema: z.ZodType<Prisma.user_positionSelect> = z.object({
  user_position_id: z.boolean().optional(),
  position_name: z.boolean().optional(),
}).strict()

export const user_positionDeleteArgsSchema: z.ZodType<Prisma.user_positionDeleteArgs> = z.object({
  select: user_positionSelectSchema.optional(),
  where: user_positionWhereUniqueInputSchema,
}).strict() ;

export default user_positionDeleteArgsSchema;
