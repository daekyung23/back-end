import { z } from 'zod';

export const Device_approvalScalarFieldEnumSchema = z.enum(['approval_id','approval_type_id','sub_approval_id','requester_id','request_at','approver_role_id','origin_location_id','destination_location_id','approver_id','approve_at','is_approved']);

export default Device_approvalScalarFieldEnumSchema;