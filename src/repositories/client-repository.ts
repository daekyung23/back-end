import { prisma } from '@lib/prisma'
import type { Prisma } from '@prisma/client'

const ClientRepository = {
  searchClient: async (searchTerms: string, is_active: number, client_rate: string, offset: number, pageSize: number) => {
    const select = 'SELECT *'
    const selectFromJoin = select + ClientRepository.fromJoin
    const where = ClientRepository.searchCondition(searchTerms, is_active, client_rate)
    const limit = { offset, pageSize }
    return await DBHelper.search(selectFromJoin, where, null, limit)
  },

  searchClientCount: async (searchTerms: string, is_active: number, client_rate: string) => {
    const select = 'SELECT COUNT(*) as total'
    const selectFromJoin = select + ClientRepository.fromJoin
    const where = ClientRepository.searchCondition(searchTerms, is_active, client_rate)
    const rows = await DBHelper.search(selectFromJoin, where)
    return rows[0].total
  }
} 