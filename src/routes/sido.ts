import { Router } from 'express'
import { controllers } from '@controllers'
import { schemas } from '@schemas'
import { validateInput } from '@middlewares/validators'

const router = Router()
const controller = controllers.sido
const v_schema = schemas.v_sido

// Defined At Controller & Service ------------------------------------------
router.get('/by-sigungu-id/:sigungu_id', 
  validateInput({ params: v_schema.base.pick({ sigungu_id: true }) }),
  controller.getSidoBySigunguId
)

// Base CRUD ----------------------------------------------------------------
router.get('/', controller.getAll)

export const sidoRouter = router