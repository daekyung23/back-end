import type { ModelName, Fields } from '@lib/prisma'
import type { Search } from '@lib/zod-prisma-types'
import type { Simplify } from 'type-fest'

// service input
export type SearchQuery<M extends ModelName> = 
  Search & 
  Partial<Fields<M>>

  
// service output
export type SearchResult<M extends ModelName, V extends ModelName> = {
  [P in M]: V[]
} & {
  totalPages: number
}

export type { Search } from '@lib/zod-prisma-types'

