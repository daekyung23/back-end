import { Router } from 'express'
import { controllers } from '@controllers'
import { validateInput } from '@middlewares/validators'
import { schemas, searchSchema } from '@schemas'

const router = Router()
const controller = controllers.device
const schema = schemas.device
const v_schema = schemas.v_device

// Override At Service ------------------------------------------------------
router.get('/search', 
  validateInput({ query: searchSchema.merge(
    v_schema.base.pick({ 
      manufacturer: true,
      device_model_id: true,
      root_client_id: true,
      status_id: true,
      warehouse_id: true,
      has_fax: true,
      has_desk: true,
      has_shelf: true,
    }).partial()
  ) }), 
  controller.search
)

// Base CRUD ----------------------------------------------------------------
router.post('/create', 
  validateInput({ body: schema.createData }), 
  controller.create
)

router.patch('/update', 
  validateInput({ body: schema.updateByPrimaryKey }), 
  controller.update<'device_id'>
)

router.delete('/delete', 
  validateInput({ query: schema.primaryKey }), 
  controller.delete<'device_id'>
)

export const deviceRouter = router
