import { Router } from 'express'
import { controllers } from '@controllers'
import { validateInput } from '@middlewares/validators'
import { schemas, searchSchema } from '@schemas'
import { z } from 'zod'
const router = Router()
const controller = controllers.consumableModel
const schema = schemas.consumableModel
const v_schema = schemas.v_consumable_model

// Defined At Controller & Service -------------------------------------------
router.post('/create', 
  validateInput({ body: 
    schema.createData.extend({
      device_model_ids: z.array(schema.base.shape.device_model_id)
  }) }), 
  controller.createWithDeviceModelIds
)

router.get('/compatibility/:consumable_model_id', 
  validateInput({ params: v_schema.base.pick({ consumable_model_id: true }) }), 
  controller.getCompatibilityByConsumableModelId
)

// Override At Service -------------------------------------------------------
router.get('/search', 
  validateInput({ query: searchSchema.extend({
    consumable_type: schema.base.shape.consumable_type.optional()
  }) }), 
  controller.search
)

router.delete('/delete', 
  validateInput({ query: schema.primaryKey }), 
  controller.delete<'consumable_model_id'>
)

// CRUD ----------------------------------------------------------------------
router.get('/check', 
  validateInput({ query: schema.base.pick({ consumable_name: true }) }), 
  controller.exists
)

//unique key가 없음.
router.patch('/update', 
  validateInput({ body: schema.updateByPrimaryKey }), 
  controller.update<'consumable_model_id'>
)

export const consumableModelRouter = router
