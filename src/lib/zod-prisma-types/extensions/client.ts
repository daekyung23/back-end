import { z } from 'zod'
import { v_clientSchema } from '@prisma/zod-schemas'
import { searchSchema, activationSchema } from './common'

export const clientSearchSchema = 
  searchSchema
  .merge(activationSchema)
  .merge(
    z.object({
      client_rate: v_clientSchema.shape.rate_type.optional()
    })
  )

export type ClientSearch = z.infer<typeof clientSearchSchema>