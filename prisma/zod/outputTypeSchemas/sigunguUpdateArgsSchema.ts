import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { sigunguUpdateInputSchema } from '../inputTypeSchemas/sigunguUpdateInputSchema'
import { sigunguUncheckedUpdateInputSchema } from '../inputTypeSchemas/sigunguUncheckedUpdateInputSchema'
import { sigunguWhereUniqueInputSchema } from '../inputTypeSchemas/sigunguWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const sigunguSelectSchema: z.ZodType<Prisma.sigunguSelect> = z.object({
  sigungu_id: z.boolean().optional(),
  sigungu_name: z.boolean().optional(),
  sido_id: z.boolean().optional(),
}).strict()

export const sigunguUpdateArgsSchema: z.ZodType<Prisma.sigunguUpdateArgs> = z.object({
  select: sigunguSelectSchema.optional(),
  data: z.union([ sigunguUpdateInputSchema,sigunguUncheckedUpdateInputSchema ]),
  where: sigunguWhereUniqueInputSchema,
}).strict() ;

export default sigunguUpdateArgsSchema;
