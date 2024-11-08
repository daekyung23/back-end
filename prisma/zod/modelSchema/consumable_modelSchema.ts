import { z } from 'zod';

/////////////////////////////////////////
// CONSUMABLE MODEL SCHEMA
/////////////////////////////////////////

export const consumable_modelSchema = z.object({
  consumable_model_id: z.number().int(),
  manufacturer: z.string(),
  consumable_name: z.string(),
  consumable_type: z.string(),
})

export type consumable_model = z.infer<typeof consumable_modelSchema>

export default consumable_modelSchema;
