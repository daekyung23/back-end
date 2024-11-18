import { Router } from 'express'
import { controllers } from '@controllers'
import { validateInput } from '@middlewares/validators'
import { schemas, searchSchema } from '@schemas'

const router = Router()
const controller = controllers.deviceDriver
const schema = schemas.deviceDriver


// Override At Service ------------------------------------------------------
router.get('/search', 
  validateInput({ query: searchSchema }), 
  controller.search
)

router.get('/check', 
  validateInput({ query: schema.base.pick({ device_model_id: true, printer_language: true }) }), 
  controller.exists,
)

// CRUD ----------------------------------------------------------------------
router.post('/create', 
  validateInput({ body: schema.createData }), 
  controller.create
)

router.patch('/update', 
  validateInput({ body: schema.updateByPrimaryKey }), 
  controller.update<'device_driver_id'>
)


router.delete('/delete', 
  validateInput({ query: schema.primaryKey }), 
  controller.delete<'device_driver_id'>
)

export const deviceDriverRouter = router
