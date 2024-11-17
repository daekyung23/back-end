import { Router } from 'express'
import { controllers } from '@controllers'
import { validateInput } from '@middlewares/validators'
import {
  z,
  device_modelUncheckedCreateInputSchema as createSchema,
  device_modelUncheckedUpdateInputSchema as updateSchema,
  device_modelWhereUniqueInputSchema as uniqueKeySchema,
  device_modelSchema,
  searchSchema,
} from '@lib/zod'

const router = Router()
const controller = controllers.deviceModel

// Defined At Controller & Service ------------------------------------------
router.get('/manufacturers', 
  controller.getAllManufacturers
)

router.get('/models', 
  validateInput({ query: device_modelSchema.pick({ manufacturer: true }) }), 
  controller.getModelsByManufacturer
)

// Override At Service ------------------------------------------------------
router.get('/search', 
  validateInput({ query: searchSchema }), 
  controller.search
)

router.get('/check', 
  validateInput({ query: device_modelSchema.pick({ model_name: true }) }), 
  controller.exists
)

// Base CRUD ----------------------------------------------------------------
router.post('/create', 
  validateInput({ body: createSchema }), 
  controller.create
)

router.patch('/update', 
  validateInput({ body: updateSchema }), 
  controller.update<'device_model_id'>
)

router.delete('/delete', 
  validateInput({ query: uniqueKeySchema }), 
  controller.delete<'device_model_id'>
) 

export const deviceModelRouter = router