import { z } from 'zod';

/////////////////////////////////////////
// CALL SCHEMA
/////////////////////////////////////////

export const callSchema = z.object({
  call_id: z.number().int(),
  call_type_id: z.number().int(),
  client_branch_id: z.number().int(),
  requester_name: z.string(),
  requester_num: z.string(),
  requester_black_consumer: z.number().int(),
  device_id: z.number().int().nullable(),
  detail: z.string(),
  state: z.string(),
  received_at: z.coerce.date(),
  receiver_id: z.number().int(),
  transferred_at: z.coerce.date().nullable(),
  transferred_dept_id: z.number().int().nullable(),
  assigner_id: z.number().int().nullable(),
  completed_at: z.coerce.date().nullable(),
})

export type call = z.infer<typeof callSchema>

export default callSchema;
