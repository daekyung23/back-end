import { Router } from 'express'
import { controllers } from '@controllers'

const router = Router()
const controller = controllers.sigungu

router.get('/', 
  
  controller.getSigunguBySidoId)

export const sigunguRouter = router