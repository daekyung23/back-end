import { z } from 'zod';

export const CallScalarFieldEnumSchema = z.enum(['call_id','call_type_id','client_branch_id','requester_name','requester_num','requester_black_consumer','device_id','detail','state','received_at','receiver_id','transferred_at','transferred_dept_id','assigner_id','completed_at']);

export default CallScalarFieldEnumSchema;
