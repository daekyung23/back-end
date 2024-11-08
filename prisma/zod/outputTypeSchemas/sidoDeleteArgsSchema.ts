import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { sidoWhereUniqueInputSchema } from '../inputTypeSchemas/sidoWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const sidoSelectSchema: z.ZodType<Prisma.sidoSelect> = z.object({
  sido_id: z.boolean().optional(),
  sido_name: z.boolean().optional(),
}).strict()

export const sidoDeleteArgsSchema: z.ZodType<Prisma.sidoDeleteArgs> = z.object({
  select: sidoSelectSchema.optional(),
  where: sidoWhereUniqueInputSchema,
}).strict() ;

export default sidoDeleteArgsSchema;
