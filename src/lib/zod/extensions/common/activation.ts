import { z } from 'zod'

export const activationSchema = z.object({
  is_active: z.coerce.number().min(0).max(1).optional()
})
export type Activation = z.infer<typeof activationSchema>
