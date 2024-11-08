import { z } from 'zod';

/////////////////////////////////////////
// USER ROLE ASSIGNMENT SCHEMA
/////////////////////////////////////////

export const user_role_assignmentSchema = z.object({
  role_id: z.number().int(),
  approver_id: z.number().int(),
})

export type user_role_assignment = z.infer<typeof user_role_assignmentSchema>

export default user_role_assignmentSchema;
