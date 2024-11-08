import { z } from 'zod';

export const Inspection_approvalScalarFieldEnumSchema = z.enum(['approval_id','requester_id','request_at','approver_role_id','device_inspection_log_id','approver_id','approved_at','is_approved']);

export default Inspection_approvalScalarFieldEnumSchema;
