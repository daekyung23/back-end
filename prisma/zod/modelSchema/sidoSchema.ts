import { z } from 'zod';

/////////////////////////////////////////
// SIDO SCHEMA
/////////////////////////////////////////

export const sidoSchema = z.object({
  sido_id: z.number().int(),
  sido_name: z.string().nullable(),
})

export type sido = z.infer<typeof sidoSchema>

export default sidoSchema;
