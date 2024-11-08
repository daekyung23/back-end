import { z } from 'zod';

/////////////////////////////////////////
// SIGUNGU SCHEMA
/////////////////////////////////////////

export const sigunguSchema = z.object({
  sigungu_id: z.number().int(),
  sigungu_name: z.string(),
  sido_id: z.number().int(),
})

export type sigungu = z.infer<typeof sigunguSchema>

export default sigunguSchema;
