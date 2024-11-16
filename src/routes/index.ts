import { clientRouter } from './client'
import { clientBranchRouter } from './client-branch'
import { consumableModelRouter } from './consumable-model'
import { deviceRouter } from './device'
import { deviceDriverRouter } from './device-driver'
import { deviceModelRouter } from './device-model'
import { sidoRouter } from './sido'
import { sigunguRouter } from './sigungu'
import { userRouter } from './user'
import { userPositionRouter } from './user-position'
import { warehouseRouter } from './warehouse'

export default {
  client: clientRouter,
  clientBranch: clientBranchRouter,
  consumableModel: consumableModelRouter,
  device: deviceRouter,
  deviceDriver: deviceDriverRouter,
  deviceModel: deviceModelRouter,
  sido: sidoRouter,
  sigungu: sigunguRouter,
  user: userRouter,
  userPosition: userPositionRouter,
  warehouse: warehouseRouter
}
