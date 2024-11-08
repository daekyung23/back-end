import { z } from 'zod';

export const device_option_location_typeSchema = z.enum(['warehouse','device']);

export type device_option_location_typeType = `${z.infer<typeof device_option_location_typeSchema>}`

export default device_option_location_typeSchema;
