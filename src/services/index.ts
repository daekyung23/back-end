
import { prisma } from '@lib/prisma'
import { ClientBranchService } from './client-branch'
import { ClientService } from './client'
import { ConsumableModelService } from './consumable-model'
import { DeptService } from './dept'
import { DeviceDriverService } from './device-driver'
import { WarehouseService } from './warehouse'
import { SigunguService } from './sigungu'
import { UserService } from './user'
import { UserPositionService } from './user-position'
import { DeviceModelService } from './device-model'
import { DeviceService } from './device'
export const services = {
  clientBranch: new ClientBranchService(prisma.client_branch, prisma.v_client_branch),
  client: new ClientService(prisma.client, prisma.v_client),
  consumableModel: new ConsumableModelService(prisma.consumable_model, prisma.v_consumable_model),
  dept: new DeptService(prisma.dept, prisma.v_dept),
  deviceDriver: new DeviceDriverService(prisma.device_driver, prisma.v_device_driver),
  warehouse: new WarehouseService(prisma.warehouse, prisma.v_warehouse),
  sigungu: new SigunguService(prisma.sigungu, undefined),
  user: new UserService(prisma.user, prisma.v_user),
  userPosition: new UserPositionService(prisma.user_position, undefined),
  deviceModel: new DeviceModelService(prisma.device_model, undefined),
  device: new DeviceService(prisma.device, prisma.v_device),
} as const

export type Services = typeof services