import { Router } from 'express'
import { controllers } from '@controllers'
import { validateInput } from '@middlewares/validators'
import { schemas, searchSchema } from '@schemas'
import { z } from '@lib/zod'

const router = Router()
const controller = controllers.deviceOption
const schema = schemas.deviceOption
const v_schema = schemas.v_device_option

// Defined at Controller & Service ------------------------------------------
router.get('/select/manufacturer', 
  controller.getManufacturerOptions
)

router.get('/select/option-type', 
  validateInput({ query: v_schema.base.pick({ manufacturer: true}) }),
  controller.getOptionTypeOptions
)

router.get('/select/option-model', 
  validateInput({ query: v_schema.base.pick({ manufacturer: true, option_type: true }) }),
  controller.getOptionModelNameOptions
)

router.get('/by-option-model-id', 
  validateInput({ query: v_schema.base.pick({ 
    option_model_id: true 
  }) }),
  controller.getByOptionModelId
)

router.patch('/change-location', 
  validateInput({ body: 
    z.union([
      schema.base.pick({ 
        device_option_id: true,
        location_type: true,
        location_warehouse_id: true,
      }),
      schema.base.pick({ 
        device_option_id: true,
        location_type: true,
        location_device_id: true,
      }),
    ])
  }), 
  controller.changeLocation
)

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