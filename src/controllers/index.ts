import { Controller } from '@base/controller'
import { prisma } from '@lib/prisma'
import { ClientBranchController } from './client-branch'
import { ClientController } from './client'
import { DeptController } from './dept'
import { SigunguController } from './sigungu'
import { services } from '@services'
import { UserPositionController } from './user-position'
import { DeviceModelController } from './device-model'

export const DefinedAtControllerAndService = {
  clientBranch: new ClientBranchController(prisma.client_branch, prisma.v_client_branch),
  client: new ClientController(prisma.client, prisma.v_client),
  dept: new DeptController(prisma.dept, prisma.v_dept),
  sigungu: new SigunguController(prisma.sigungu, undefined),
  userPosition: new UserPositionController(prisma.user_position, undefined),
  deviceModel: new DeviceModelController(prisma.device_model),
}

export const OverrideAtService = {
  deviceDriver: new Controller<'device_driver', 'v_device_driver'>(prisma.device_driver, prisma.v_device_driver).setService(services.deviceDriver),
  warehouse: new Controller<'warehouse', 'v_warehouse'>(prisma.warehouse, prisma.v_warehouse).setService(services.warehouse),
  user: new Controller<'user', 'v_user'>(prisma.user, prisma.v_user).setService(services.user),
  device: new Controller<'device', 'v_device'>(prisma.device, prisma.v_device).setService(services.device),
  consumableModel: new Controller<'consumable_model', 'v_consumable_model'>(prisma.consumable_model, prisma.v_consumable_model).setService(services.consumableModel),
}

export const OnlyCRUD = {
  sido: new Controller(prisma.sido, undefined),
}

export const controllers = {
  ...DefinedAtControllerAndService,
  ...OverrideAtService,
  ...OnlyCRUD,
}

