import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { inspection_approvalWhereUniqueInputSchema } from '../inputTypeSchemas/inspection_approvalWhereUniqueInputSchema'
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

export const inspection_approvalFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.inspection_approvalFindUniqueOrThrowArgs> = z.object({
  select: inspection_approvalSelectSchema.optional(),
  where: inspection_approvalWhereUniqueInputSchema,
}).strict() ;

export default inspection_approvalFindUniqueOrThrowArgsSchema;
