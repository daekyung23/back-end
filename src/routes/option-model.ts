import { Router } from 'express'
import { controllers } from '@controllers'
import { validateInput } from '@middlewares/validators'
import { schemas, searchSchema } from '@schemas'
import { z } from 'zod'
const router = Router()
const controller = controllers.optionModel
const schema = schemas.optionModel
const v_schema = schemas.v_option_model

// Defined At Controller & Service -------------------------------------------
router.post('/create', 
  validateInput({ body: 
    schema.createData.extend({
      device_model_ids: z.array(v_schema.base.shape.device_model_id)
  }) }), 
  controller.createWithDeviceModelIds
)

router.get('/compatibility/:option_model_id', 
  validateInput({ params: v_schema.base.pick({ option_model_id: true }) }), 
  controller.getCompatibilityByOptionModelId
)

// Override At Service -------------------------------------------------------
router.get('/search', 
  validateInput({ query: searchSchema.extend({
    option_type: schema.base.shape.option_type.optional()
  }) }), 
  controller.search
)

router.delete('/delete', 
  validateInput({ query: schema.primaryKey }), 
  controller.delete<'option_model_id'>
)

// CRUD ----------------------------------------------------------------------
//unique key가 없음.
router.patch('/update', 
  validateInput({ body: schema.updateByPrimaryKey }), 
  controller.update<'option_model_id'>
)

export const optionModelRouter = router
