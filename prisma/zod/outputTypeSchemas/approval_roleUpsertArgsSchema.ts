import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { approval_roleWhereUniqueInputSchema } from '../inputTypeSchemas/approval_roleWhereUniqueInputSchema'
import { approval_roleCreateInputSchema } from '../inputTypeSchemas/approval_roleCreateInputSchema'
import { approval_roleUncheckedCreateInputSchema } from '../inputTypeSchemas/approval_roleUncheckedCreateInputSchema'
import { approval_roleUpdateInputSchema } from '../inputTypeSchemas/approval_roleUpdateInputSchema'
import { approval_roleUncheckedUpdateInputSchema } from '../inputTypeSchemas/approval_roleUncheckedUpdateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const approval_roleSelectSchema: z.ZodType<Prisma.approval_roleSelect> = z.object({
  role_id: z.boolean().optional(),
  role_name: z.boolean().optional(),
  upper_role_id: z.boolean().optional(),
}).strict()

export const approval_roleUpsertArgsSchema: z.ZodType<Prisma.approval_roleUpsertArgs> = z.object({
  select: approval_roleSelectSchema.optional(),
  where: approval_roleWhereUniqueInputSchema,
  create: z.union([ approval_roleCreateInputSchema,approval_roleUncheckedCreateInputSchema ]),
  update: z.union([ approval_roleUpdateInputSchema,approval_roleUncheckedUpdateInputSchema ]),
}).strict() ;

export default approval_roleUpsertArgsSchema;
