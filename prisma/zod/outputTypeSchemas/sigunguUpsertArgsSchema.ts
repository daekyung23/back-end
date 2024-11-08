import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { sigunguWhereUniqueInputSchema } from '../inputTypeSchemas/sigunguWhereUniqueInputSchema'
import { sigunguCreateInputSchema } from '../inputTypeSchemas/sigunguCreateInputSchema'
import { sigunguUncheckedCreateInputSchema } from '../inputTypeSchemas/sigunguUncheckedCreateInputSchema'
import { sigunguUpdateInputSchema } from '../inputTypeSchemas/sigunguUpdateInputSchema'
import { sigunguUncheckedUpdateInputSchema } from '../inputTypeSchemas/sigunguUncheckedUpdateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const sigunguSelectSchema: z.ZodType<Prisma.sigunguSelect> = z.object({
  sigungu_id: z.boolean().optional(),
  sigungu_name: z.boolean().optional(),
  sido_id: z.boolean().optional(),
}).strict()

export const sigunguUpsertArgsSchema: z.ZodType<Prisma.sigunguUpsertArgs> = z.object({
  select: sigunguSelectSchema.optional(),
  where: sigunguWhereUniqueInputSchema,
  create: z.union([ sigunguCreateInputSchema,sigunguUncheckedCreateInputSchema ]),
  update: z.union([ sigunguUpdateInputSchema,sigunguUncheckedUpdateInputSchema ]),
}).strict() ;

export default sigunguUpsertArgsSchema;
