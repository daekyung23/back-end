import { z } from 'zod'

export const searchSchema = z.object({
  query: z.object({
    searchTerm: z.string().optional().default(''),
    page: z.coerce.number().int().min(1).optional().default(1),
    isActive: z.coerce.number().int().min(0).max(1).optional()
  })
})

export const paginationSchema = z.object({
  query: z.object({
    page: z.coerce.number().int().min(1).optional().default(1),
    pageSize: z.coerce.number().int().min(1).optional().default(10)
  })
})

export const activationSchema = z.object({
  body: z.object({
    is_active: z.number().min(0).max(1)
  })
})