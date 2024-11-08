import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { sigunguCreateInputSchema } from '../inputTypeSchemas/sigunguCreateInputSchema'
import { sigunguUncheckedCreateInputSchema } from '../inputTypeSchemas/sigunguUncheckedCreateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const sigunguSelectSchema: z.ZodType<Prisma.sigunguSelect> = z.object({
  sigungu_id: z.boolean().optional(),
  sigungu_name: z.boolean().optional(),
  sido_id: z.boolean().optional(),
}).strict()

export const sigunguCreateArgsSchema: z.ZodType<Prisma.sigunguCreateArgs> = z.object({
  select: sigunguSelectSchema.optional(),
  data: z.union([ sigunguCreateInputSchema,sigunguUncheckedCreateInputSchema ]),
}).strict() ;

export default sigunguCreateArgsSchema;
