import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { approval_roleWhereInputSchema } from '../inputTypeSchemas/approval_roleWhereInputSchema'
import { approval_roleOrderByWithRelationInputSchema } from '../inputTypeSchemas/approval_roleOrderByWithRelationInputSchema'
import { approval_roleWhereUniqueInputSchema } from '../inputTypeSchemas/approval_roleWhereUniqueInputSchema'
import { Approval_roleScalarFieldEnumSchema } from '../inputTypeSchemas/Approval_roleScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const approval_roleSelectSchema: z.ZodType<Prisma.approval_roleSelect> = z.object({
  role_id: z.boolean().optional(),
  role_name: z.boolean().optional(),
  upper_role_id: z.boolean().optional(),
}).strict()

export const approval_roleFindManyArgsSchema: z.ZodType<Prisma.approval_roleFindManyArgs> = z.object({
  select: approval_roleSelectSchema.optional(),
  where: approval_roleWhereInputSchema.optional(),
  orderBy: z.union([ approval_roleOrderByWithRelationInputSchema.array(),approval_roleOrderByWithRelationInputSchema ]).optional(),
  cursor: approval_roleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Approval_roleScalarFieldEnumSchema,Approval_roleScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default approval_roleFindManyArgsSchema;
