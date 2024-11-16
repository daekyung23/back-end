import { Router } from 'express'
import { controllers } from '@controllers'

const router = Router()
const controller = controllers.sido

router.get('/', controller.getAll)

export const sidoRouter = router