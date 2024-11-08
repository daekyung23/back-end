import { z } from 'zod';
import { location_location_typeSchema } from '../inputTypeSchemas/location_location_typeSchema'

/////////////////////////////////////////
// LOCATION SCHEMA
/////////////////////////////////////////

export const locationSchema = z.object({
  location_type: location_location_typeSchema,
  location_id: z.number().int(),
  warehouse_id: z.number().int().nullable(),
  client_branch_id: z.number().int().nullable(),
})

export type location = z.infer<typeof locationSchema>

export default locationSchema;
