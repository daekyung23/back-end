import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { sigunguWhereUniqueInputSchema } from '../inputTypeSchemas/sigunguWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const sigunguSelectSchema: z.ZodType<Prisma.sigunguSelect> = z.object({
  sigungu_id: z.boolean().optional(),
  sigungu_name: z.boolean().optional(),
  sido_id: z.boolean().optional(),
}).strict()

export const sigunguFindUniqueArgsSchema: z.ZodType<Prisma.sigunguFindUniqueArgs> = z.object({
  select: sigunguSelectSchema.optional(),
  where: sigunguWhereUniqueInputSchema,
}).strict() ;

export default sigunguFindUniqueArgsSchema;
