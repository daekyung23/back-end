import { z } from 'zod'

export const searchSchema = z.object({
  search_term: z.string().optional().default(''),
  page: z.coerce.number().int().min(1).optional().default(1),
})

export type Search = z.infer<typeof searchSchema>
