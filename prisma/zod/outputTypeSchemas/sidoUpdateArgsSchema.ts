import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { sidoUpdateInputSchema } from '../inputTypeSchemas/sidoUpdateInputSchema'
import { sidoUncheckedUpdateInputSchema } from '../inputTypeSchemas/sidoUncheckedUpdateInputSchema'
import { sidoWhereUniqueInputSchema } from '../inputTypeSchemas/sidoWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const sidoSelectSchema: z.ZodType<Prisma.sidoSelect> = z.object({
  sido_id: z.boolean().optional(),
  sido_name: z.boolean().optional(),
}).strict()

export const sidoUpdateArgsSchema: z.ZodType<Prisma.sidoUpdateArgs> = z.object({
  select: sidoSelectSchema.optional(),
  data: z.union([ sidoUpdateInputSchema,sidoUncheckedUpdateInputSchema ]),
  where: sidoWhereUniqueInputSchema,
}).strict() ;

export default sidoUpdateArgsSchema;
