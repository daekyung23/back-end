import { z } from 'zod';

export const location_location_typeSchema = z.enum(['warehouse','client_branch']);

export type location_location_typeType = `${z.infer<typeof location_location_typeSchema>}`

export default location_location_typeSchema;
