import { Router } from 'express'
import { controllers } from '@controllers'
import { validateInput } from '@middlewares/validators'
import { schemas, searchSchema } from '@schemas'

const router = Router()
const controller = controllers.deviceOption
const schema = schemas.deviceOption
const v_schema = schemas.v_device_option

// Override At Service ------------------------------------------------------
router.get('/search', 
  validateInput({ query: searchSchema.merge(
    v_schema.base.pick({ 
      option_model_name: true,
      manufacturer: true,
      option_model_type: true,
    }).partial()
  ) }), 
  controller.search
)

router.get('/check', 
  validateInput({ query: schema.base.pick({ serial: true }) }), 
  controller.exists
)

// Base CRUD ----------------------------------------------------------------
router.get('/by-id', 
  validateInput({ query: schema.primaryKey }), 
  controller.findOneByUnique<'device_option_id'>
)

router.post('/create', 
  validateInput({ body: schema.createData }), 
  controller.create
)

router.patch('/update', 
  validateInput({ body: schema.updateByPrimaryKey }), 
  controller.update<'option_model_id'>
)

router.delete('/delete', 
  validateInput({ query: schema.primaryKey }), 
  controller.delete<'option_model_id'>
) 

export const deviceOptionRouter = router