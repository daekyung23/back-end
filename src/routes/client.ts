import { Router } from 'express'
import { controllers } from '@controllers'
import { validateInput } from '@middlewares/validators'
import { searchSchema, activationSchema } from '@schemas'
import { schemas } from '@schemas'

const router = Router()
const controller = controllers.client
const schema = schemas.client

// Defined At Controller & Service ------------------------------------------
router.get('/subclients/:client_id', 
  validateInput({ params: schema.unique('client_id') }), 
  controller.getSubClientsById
)

// Override At Service ------------------------------------------------------
router.get('/search', 
  validateInput({ query: 
    searchSchema.extend({
      is_active: activationSchema.shape.is_active,
      client_rate: schemas.v_client.base.shape.client_rate.optional()
    })
  }), 
  controller.search
)

router.patch('/change-activation', 
  validateInput({ body: activationSchema }), 
  controller.changeActivation
)

router.get('/check', 
  validateInput({ query: schema.base.pick({ client_name: true }) }), 
  controller.exists
)

// Base CRUD ----------------------------------------------------------------
router.post('/create', 
  validateInput({ body: schema.createData }), 
  controller.create
)

router.patch('/update', 
  validateInput({ body: schema.updateByPrimaryKey }), 
  controller.update<'client_id'>
)

router.delete('/delete', 
  validateInput({ query: schema.primaryKey }), 
  controller.delete<'client_id'>
)


export const clientRouter = router