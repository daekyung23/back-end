import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_approvalWhereUniqueInputSchema } from '../inputTypeSchemas/device_approvalWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const device_approvalSelectSchema: z.ZodType<Prisma.device_approvalSelect> = z.object({
  approval_id: z.boolean().optional(),
  approval_type_id: z.boolean().optional(),
  sub_approval_id: z.boolean().optional(),
  requester_id: z.boolean().optional(),
  request_at: z.boolean().optional(),
  approver_role_id: z.boolean().optional(),
  origin_location_id: z.boolean().optional(),
  destination_location_id: z.boolean().optional(),
  approver_id: z.boolean().optional(),
  approve_at: z.boolean().optional(),
  is_approved: z.boolean().optional(),
}).strict()

export const device_approvalFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.device_approvalFindUniqueOrThrowArgs> = z.object({
  select: device_approvalSelectSchema.optional(),
  where: device_approvalWhereUniqueInputSchema,
}).strict() ;

export default device_approvalFindUniqueOrThrowArgsSchema;
