import { Router } from 'express'
import { controllers } from '@controllers'
import { schemas } from '@schemas'
import { validateInput } from '@middlewares/validators'

const router = Router()
const controller = controllers.sido
const schema = schemas.sido

// Defined At Controller & Service ------------------------------------------
router.get('/by-sigungu-id/:sigungu_id', 
  validateInput({ params: schema.base.pick({ sigungu_id: true }) }),
  controller.getSidoBySigunguId
)

// Base CRUD ----------------------------------------------------------------
router.get('/', controller.getAll)

export const sidoRouter = router