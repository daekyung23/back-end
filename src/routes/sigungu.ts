import { Router } from 'express'
import { controllers } from '@controllers'
import { schemas } from '@schemas'
import { validateInput } from '@middlewares/validators'

const router = Router()
const controller = controllers.sigungu
const schema = schemas.sigungu

// Defined At Controller & Service ------------------------------------------
router.get('/by-sido-id/:sido_id', 
  validateInput({ params: schema.base.pick({ sido_id: true }) }),
  controller.getSigunguBySidoId
)

export const sigunguRouter = router