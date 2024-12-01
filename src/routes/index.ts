import { clientRouter } from './client'
import { clientBranchRouter } from './client-branch'
import { consumableModelRouter } from './consumable-model'
import { deptRouter } from './dept'
import { deviceRouter } from './device'
import { deviceDriverRouter } from './device-driver'
import { deviceModelRouter } from './device-model'
import { sidoRouter } from './sido'
import { sigunguRouter } from './sigungu'
import { userRouter } from './user'
import { userPositionRouter } from './user-position'
import { warehouseRouter } from './warehouse'
import { deviceLocationLogRouter } from './device-location-log'

export default {
  client: clientRouter,
  clientBranch: clientBranchRouter,
  consumableModel: consumableModelRouter,
  dept: deptRouter,
  device: deviceRouter,
  deviceDriver: deviceDriverRouter,
  deviceModel: deviceModelRouter,
  sido: sidoRouter,
  sigungu: sigunguRouter,
  user: userRouter,
  userPosition: userPositionRouter,
  warehouse: warehouseRouter,
  deviceLocationLog: deviceLocationLogRouter
}
