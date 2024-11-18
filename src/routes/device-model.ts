import { Router } from 'express'
import { controllers } from '@controllers'
import { validateInput } from '@middlewares/validators'
import { schemas, searchSchema } from '@schemas'

const router = Router()
const controller = controllers.deviceModel
const schema = schemas.deviceModel

// Defined At Controller & Service ------------------------------------------
router.get('/manufacturers', 
  controller.getAllManufacturers
)

router.get('/models', 
  validateInput({ query: schema.base.pick({ manufacturer: true }) }), 
  controller.getModelsByManufacturer
)

// Override At Service ------------------------------------------------------
router.get('/search', 
  validateInput({ query: searchSchema }), 
  controller.search
)

router.get('/check', 
  validateInput({ query: schema.base.pick({ model_name: true }) }), 
  controller.exists
)

// Base CRUD ----------------------------------------------------------------
router.post('/create', 
  validateInput({ body: schema.createData }), 
  controller.create
)

router.patch('/update', 
  validateInput({ body: schema.updateByPrimaryKey }), 
  controller.update<'device_model_id'>
)

router.delete('/delete', 
  validateInput({ query: schema.primaryKey }), 
  controller.delete<'device_model_id'>
) 

export const deviceModelRouter = router