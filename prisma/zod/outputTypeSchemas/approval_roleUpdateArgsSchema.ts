import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { approval_roleUpdateInputSchema } from '../inputTypeSchemas/approval_roleUpdateInputSchema'
import { approval_roleUncheckedUpdateInputSchema } from '../inputTypeSchemas/approval_roleUncheckedUpdateInputSchema'
import { approval_roleWhereUniqueInputSchema } from '../inputTypeSchemas/approval_roleWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const approval_roleSelectSchema: z.ZodType<Prisma.approval_roleSelect> = z.object({
  role_id: z.boolean().optional(),
  role_name: z.boolean().optional(),
  upper_role_id: z.boolean().optional(),
}).strict()

export const approval_roleUpdateArgsSchema: z.ZodType<Prisma.approval_roleUpdateArgs> = z.object({
  select: approval_roleSelectSchema.optional(),
  data: z.union([ approval_roleUpdateInputSchema,approval_roleUncheckedUpdateInputSchema ]),
  where: approval_roleWhereUniqueInputSchema,
}).strict() ;

export default approval_roleUpdateArgsSchema;
