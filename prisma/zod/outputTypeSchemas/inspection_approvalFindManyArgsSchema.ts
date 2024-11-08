import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { inspection_approvalWhereInputSchema } from '../inputTypeSchemas/inspection_approvalWhereInputSchema'
import { inspection_approvalOrderByWithRelationInputSchema } from '../inputTypeSchemas/inspection_approvalOrderByWithRelationInputSchema'
import { inspection_approvalWhereUniqueInputSchema } from '../inputTypeSchemas/inspection_approvalWhereUniqueInputSchema'
import { Inspection_approvalScalarFieldEnumSchema } from '../inputTypeSchemas/Inspection_approvalScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const inspection_approvalSelectSchema: z.ZodType<Prisma.inspection_approvalSelect> = z.object({
  approval_id: z.boolean().optional(),
  requester_id: z.boolean().optional(),
  request_at: z.boolean().optional(),
  approver_role_id: z.boolean().optional(),
  device_inspection_log_id: z.boolean().optional(),
  approver_id: z.boolean().optional(),
  approved_at: z.boolean().optional(),
  is_approved: z.boolean().optional(),
}).strict()

export const inspection_approvalFindManyArgsSchema: z.ZodType<Prisma.inspection_approvalFindManyArgs> = z.object({
  select: inspection_approvalSelectSchema.optional(),
  where: inspection_approvalWhereInputSchema.optional(),
  orderBy: z.union([ inspection_approvalOrderByWithRelationInputSchema.array(),inspection_approvalOrderByWithRelationInputSchema ]).optional(),
  cursor: inspection_approvalWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Inspection_approvalScalarFieldEnumSchema,Inspection_approvalScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default inspection_approvalFindManyArgsSchema;
