import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const device_approvalCreateInputSchema: z.ZodType<Prisma.device_approvalCreateInput> = z.object({
  approval_type_id: z.number().int(),
  sub_approval_id: z.number().int().optional().nullable(),
  requester_id: z.number().int(),
  request_at: z.coerce.date(),
  approver_role_id: z.number().int(),
  origin_location_id: z.number().int().optional().nullable(),
  destination_location_id: z.number().int().optional().nullable(),
  approver_id: z.number().int().optional().nullable(),
  approve_at: z.coerce.date().optional().nullable(),
  is_approved: z.number().int().optional().nullable()
}).strict();

export default device_approvalCreateInputSchema;
