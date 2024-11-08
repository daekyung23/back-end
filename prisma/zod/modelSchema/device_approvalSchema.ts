import { z } from 'zod';

/////////////////////////////////////////
// DEVICE APPROVAL SCHEMA
/////////////////////////////////////////

export const device_approvalSchema = z.object({
  approval_id: z.number().int(),
  approval_type_id: z.number().int(),
  sub_approval_id: z.number().int().nullable(),
  requester_id: z.number().int(),
  request_at: z.coerce.date(),
  approver_role_id: z.number().int(),
  origin_location_id: z.number().int().nullable(),
  destination_location_id: z.number().int().nullable(),
  approver_id: z.number().int().nullable(),
  approve_at: z.coerce.date().nullable(),
  is_approved: z.number().int().nullable(),
})

export type device_approval = z.infer<typeof device_approvalSchema>

export default device_approvalSchema;
