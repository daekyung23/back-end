import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const inspection_approvalCreateManyInputSchema: z.ZodType<Prisma.inspection_approvalCreateManyInput> = z.object({
  approval_id: z.number().int().optional(),
  requester_id: z.number().int(),
  request_at: z.coerce.date(),
  approver_role_id: z.number().int().optional().nullable(),
  device_inspection_log_id: z.number().int(),
  approver_id: z.number().int().optional().nullable(),
  approved_at: z.coerce.date().optional().nullable(),
  is_approved: z.number().int().optional().nullable()
}).strict();

export default inspection_approvalCreateManyInputSchema;
