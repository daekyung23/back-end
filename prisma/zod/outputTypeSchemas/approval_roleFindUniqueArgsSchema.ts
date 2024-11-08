import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { approval_roleWhereUniqueInputSchema } from '../inputTypeSchemas/approval_roleWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const approval_roleSelectSchema: z.ZodType<Prisma.approval_roleSelect> = z.object({
  role_id: z.boolean().optional(),
  role_name: z.boolean().optional(),
  upper_role_id: z.boolean().optional(),
}).strict()

export const approval_roleFindUniqueArgsSchema: z.ZodType<Prisma.approval_roleFindUniqueArgs> = z.object({
  select: approval_roleSelectSchema.optional(),
  where: approval_roleWhereUniqueInputSchema,
}).strict() ;

export default approval_roleFindUniqueArgsSchema;
