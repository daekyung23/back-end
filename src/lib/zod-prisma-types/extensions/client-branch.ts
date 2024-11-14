import { z } from 'zod'
import { searchSchema, activationSchema } from './common'

export const clientBranchSearchSchema = z.intersection(
  searchSchema,
  activationSchema,
)

export type ClientBranchSearch = z.infer<typeof clientBranchSearchSchema>