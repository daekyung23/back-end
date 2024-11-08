import { z } from 'zod';

/////////////////////////////////////////
// OPTION MODEL SCHEMA
/////////////////////////////////////////

export const option_modelSchema = z.object({
  option_model_id: z.number().int(),
  option_model_name: z.string(),
  option_type: z.string(),
  manufacturer: z.string(),
})

export type option_model = z.infer<typeof option_modelSchema>

export default option_modelSchema;
