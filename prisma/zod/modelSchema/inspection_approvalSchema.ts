import { z } from 'zod';

/////////////////////////////////////////
// INSPECTION APPROVAL SCHEMA
/////////////////////////////////////////

export const inspection_approvalSchema = z.object({
  approval_id: z.number().int(),
  requester_id: z.number().int(),
  request_at: z.coerce.date(),
  approver_role_id: z.number().int().nullable(),
  device_inspection_log_id: z.number().int(),
  approver_id: z.number().int().nullable(),
  approved_at: z.coerce.date().nullable(),
  is_approved: z.number().int().nullable(),
})

export type inspection_approval = z.infer<typeof inspection_approvalSchema>

export default inspection_approvalSchema;
