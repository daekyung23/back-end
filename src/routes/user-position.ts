import { Router } from 'express'
import { controllers } from '@controllers'
import { validateInput } from '@middlewares/validators'

import { 
  user_positionWhereUniqueInputSchema as uniqueKeySchema,
  user_positionSchema,
} from '@lib/zod'

const router = Router()
const controller = controllers.userPosition

// Defined At Controller & Service ------------------------------------------
// not unique
router.get('/byName', 
  validateInput({ query: user_positionSchema.pick({ position_name: true }) }), 
  controller.findOneByPositionName
)

// CRUD ----------------------------------------------------------------------
router.get('/all', 
  // no validation
  controller.getAll
)

router.get('/byId', 
  validateInput({ query: uniqueKeySchema }), 
  controller.findOneByUnique<'user_position_id'>
)

router.delete('/delete', 
  validateInput({ query: uniqueKeySchema }), 
  controller.delete<'user_position_id'>
)

export const userPositionRouter = router
