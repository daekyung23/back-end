import { Router } from 'express'
import { controllers } from '@controllers'
import { validateInput } from '@middlewares/validators'
import {
  z,
  device_driverUncheckedCreateInputSchema as createSchema,
  device_driverUncheckedUpdateInputSchema as updateSchema,
  device_driverWhereUniqueInputSchema as uniqueKeySchema,
  device_driverSchema,
  searchSchema,
} from '@lib/zod'

const router = Router()
const controller = controllers.deviceDriver

// Override At Service ------------------------------------------------------
router.get('/search', 
  validateInput({ query: searchSchema }), 
  controller.search
)

router.get('/check', 
  validateInput({ query: device_driverSchema.pick({ device_model_id: true, printer_language: true }) }), 
  controller.exists,
)

// CRUD ----------------------------------------------------------------------
router.post('/create', 
  validateInput({ body: createSchema }), 
  controller.create
)

router.patch('/update', 
  validateInput({ body: z.intersection( uniqueKeySchema, updateSchema ) }), 
  controller.update<'device_driver_id'>
)


router.delete('/delete', 
  validateInput({ query: uniqueKeySchema }), 
  controller.delete<'device_driver_id'>
)

export const deviceDriverRouter = router
