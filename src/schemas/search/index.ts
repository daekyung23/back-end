import { z } from 'zod'

// 기본 검색 스키마
export const baseSearchSchema = z.object({
  searchTerm: z.string().optional().default(''),
  page: z.coerce.number().int().min(1).optional().default(1)
})

// 활성 상태 검색 스키마
export const activeSearchSchema = baseSearchSchema.extend({
  isActive: z.coerce.number().int().min(0).max(1).optional()
})

// 고객사 지점 검색 스키마
export const clientBranchSearchSchema = activeSearchSchema.extend({
  clientRate: z.string().optional()
}) 