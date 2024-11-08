import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { approval_roleCreateInputSchema } from '../inputTypeSchemas/approval_roleCreateInputSchema'
import { approval_roleUncheckedCreateInputSchema } from '../inputTypeSchemas/approval_roleUncheckedCreateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const approval_roleSelectSchema: z.ZodType<Prisma.approval_roleSelect> = z.object({
  role_id: z.boolean().optional(),
  role_name: z.boolean().optional(),
  upper_role_id: z.boolean().optional(),
}).strict()

export const approval_roleCreateArgsSchema: z.ZodType<Prisma.approval_roleCreateArgs> = z.object({
  select: approval_roleSelectSchema.optional(),
  data: z.union([ approval_roleCreateInputSchema,approval_roleUncheckedCreateInputSchema ]),
}).strict() ;

export default approval_roleCreateArgsSchema;
