import { Router } from 'express'
import { controllers } from '@controllers'
import { validateInput } from '@middlewares/validators'
import { schemas } from '@schemas'
import { Schema } from '@lib/zod'

const router = Router()
const controller = controllers.deviceInstallInfo
const schema = schemas.deviceInstallInfo as Schema

// Custom Routes ------------------------------------------------------------
router.post('/create', 
  validateInput({ 
    body: schema.createData.extend({
      device_id: schemas.device.base.shape.device_id,
      client_branch_id: schemas.clientBranch.base.shape.client_branch_id,
    })
  }), 
  controller.createWithClientBranchId
)

router.delete('/delete', 
  validateInput({ 
    query: schema.deleteByPrimaryKey.extend({
      warehouse_id: schemas.warehouse.base.shape.warehouse_id,
    })
  }), 
  controller.deleteWithWarehouseId
)

// CRUD Routes ------------------------------------------------------------
router.get('/by-device-id', 
  validateInput({ 
    query: schema.primaryKey 
  }), 
  controller.findOneByUnique<'device_id'>
)

router.patch('/update', 
  validateInput({ 
    body: schema.updateData 
  }), 
  controller.update
)

export const deviceInstallInfoRouter = router