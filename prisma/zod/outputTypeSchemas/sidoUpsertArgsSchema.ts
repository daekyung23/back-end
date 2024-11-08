import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { sidoWhereUniqueInputSchema } from '../inputTypeSchemas/sidoWhereUniqueInputSchema'
import { sidoCreateInputSchema } from '../inputTypeSchemas/sidoCreateInputSchema'
import { sidoUncheckedCreateInputSchema } from '../inputTypeSchemas/sidoUncheckedCreateInputSchema'
import { sidoUpdateInputSchema } from '../inputTypeSchemas/sidoUpdateInputSchema'
import { sidoUncheckedUpdateInputSchema } from '../inputTypeSchemas/sidoUncheckedUpdateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const sidoSelectSchema: z.ZodType<Prisma.sidoSelect> = z.object({
  sido_id: z.boolean().optional(),
  sido_name: z.boolean().optional(),
}).strict()

export const sidoUpsertArgsSchema: z.ZodType<Prisma.sidoUpsertArgs> = z.object({
  select: sidoSelectSchema.optional(),
  where: sidoWhereUniqueInputSchema,
  create: z.union([ sidoCreateInputSchema,sidoUncheckedCreateInputSchema ]),
  update: z.union([ sidoUpdateInputSchema,sidoUncheckedUpdateInputSchema ]),
}).strict() ;

export default sidoUpsertArgsSchema;
