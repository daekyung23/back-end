import { z } from 'zod';

/////////////////////////////////////////
// USER POSITION SCHEMA
/////////////////////////////////////////

export const user_positionSchema = z.object({
  user_position_id: z.number().int(),
  position_name: z.string(),
})

export type user_position = z.infer<typeof user_positionSchema>

export default user_positionSchema;
