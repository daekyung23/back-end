import { z } from 'zod';

/////////////////////////////////////////
// CLIENT RATE SCHEMA
/////////////////////////////////////////

export const client_rateSchema = z.object({
  client_rate_id: z.number().int(),
  rate_type: z.string(),
  rate_detail: z.string().nullable(),
})

export type client_rate = z.infer<typeof client_rateSchema>

export default client_rateSchema;
