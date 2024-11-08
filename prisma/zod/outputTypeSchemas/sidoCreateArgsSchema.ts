import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { sidoCreateInputSchema } from '../inputTypeSchemas/sidoCreateInputSchema'
import { sidoUncheckedCreateInputSchema } from '../inputTypeSchemas/sidoUncheckedCreateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const sidoSelectSchema: z.ZodType<Prisma.sidoSelect> = z.object({
  sido_id: z.boolean().optional(),
  sido_name: z.boolean().optional(),
}).strict()

export const sidoCreateArgsSchema: z.ZodType<Prisma.sidoCreateArgs> = z.object({
  select: sidoSelectSchema.optional(),
  data: z.union([ sidoCreateInputSchema,sidoUncheckedCreateInputSchema ]).optional(),
}).strict() ;

export default sidoCreateArgsSchema;
