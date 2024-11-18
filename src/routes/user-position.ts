import { Router } from 'express'
import { controllers } from '@controllers'
import { validateInput } from '@middlewares/validators'
import { schemas } from '@schemas'

const router = Router()
const controller = controllers.userPosition
const schema = schemas.userPosition

// Defined At Controller & Service ------------------------------------------
// not unique
router.get('/byName', 
  validateInput({ query: schema.base.pick({ position_name: true }) }), 
  controller.findOneByPositionName
)

// CRUD ----------------------------------------------------------------------
router.get('/all', 
  // no validation
  controller.getAll
)

router.get('/byId', 
  validateInput({ query: schema.primaryKey }), 
  controller.findOneByUnique<'user_position_id'>
)

router.delete('/delete', 
  validateInput({ query: schema.primaryKey }), 
  controller.delete<'user_position_id'>
)

export const userPositionRouter = router
