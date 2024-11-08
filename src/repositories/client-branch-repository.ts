import { prisma } from '@lib/prisma'
import type { Prisma } from '@prisma/client'

const ClientBranchRepository = {
  searchClientBranch: async (condition: { searchTerm: string, isActive: number }, pagination: { offset: number, pageSize: number }) => {
    const { searchTerm, isActive } = condition
    return await prisma.v_client_branch.findMany({
      where: {
        OR: [
          { client_branch_name: { contains: searchTerm } },
          { branch_mgr_name: { contains: searchTerm } },
          { branch_mgr_mobile_num: { contains: searchTerm } },
          { branch_mgr_office_num: { contains: searchTerm } },
          { branch_mgr_email: { contains: searchTerm } }
        ],
        is_active: isActive
      },
      skip: pagination.offset,
      take: pagination.pageSize
    })
  },

  searchClientBranchCount: async (condition: { searchTerm: string, isActive: number }) => {
    const { searchTerm, isActive } = condition
    return await prisma.v_client_branch.count({
      where: {
        OR: [
          { client_branch_name: { contains: searchTerm } },
          { branch_mgr_name: { contains: searchTerm } },
          { branch_mgr_mobile_num: { contains: searchTerm } },
          { branch_mgr_office_num: { contains: searchTerm } },
          { branch_mgr_email: { contains: searchTerm } }
        ],
        is_active: isActive
      }
    })
  },

  getAllBranchesByClientIds: async (client_ids: number[]) => {
    return await prisma.v_client_branch.findMany({
      where: {
        client_id: { in: client_ids }
      }
    })
  },

  createClientBranch: async (clientBranch: Prisma.client_branchCreateInput) => {
    return await prisma.client_branch.create({
      data: clientBranch
    })
  },

  patchClientBranch: async (client_branch_id: number, clientBranch: Prisma.client_branchUpdateInput) => {
    return await prisma.client_branch.update({
      where: { client_branch_id },
      data: clientBranch
    })
  },

  changeMultipleClientBranchActivations: async (clientBranchIds: number[], { is_active }: { is_active: number }) => {
    if (clientBranchIds.length === 0) return
    return await prisma.client_branch.updateMany({
      where: { client_branch_id: { in: clientBranchIds } },
      data: { is_active }
    })
  },

  deleteClientBranch: async (client_branch_id: number) => {
    return await prisma.client_branch.delete({
      where: { client_branch_id }
    })
  },

  getBranchesByClientId: async (client_id: number) => {
    return await prisma.v_client_branch.findMany({
      where: { client_id }
    })
  },

  getClientIdByBranchId: async (client_branch_id: number) => {
    return await prisma.v_client_branch.findUnique({
      where: { client_branch_id }
    })
  }
}

export default ClientBranchRepository 