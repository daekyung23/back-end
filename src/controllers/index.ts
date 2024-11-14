import { Controller } from '@base/controller'
import { prisma } from '@lib/prisma'
import { ClientBranchController } from './client-branch'
import { ClientController } from './client'

export const customControllers = {
  clientBranch: new ClientBranchController(prisma.client_branch, prisma.v_client_branch),
  client: new ClientController(prisma.client, prisma.v_client)
}

export const baseControllers = {

}

export const controllers = {
  ...baseControllers,
  ...customControllers
}

