import { Router } from 'express'
import { controllers } from '@controllers'
import { validateInput } from '@middlewares/validators'

import { 
  deviceUncheckedCreateInputSchema as createSchema,
  deviceUncheckedUpdateInputSchema as updateSchema,
  deviceWhereUniqueInputSchema as uniqueKeySchema,
  searchSchema,
} from '@lib/zod'

const router = Router()
const controller = controllers.device
// Override At Service ------------------------------------------------------
router.get('/search', 
  validateInput({ query: searchSchema }), 
  controller.search
)

// Base CRUD ----------------------------------------------------------------
router.post('/create', 
  validateInput({ body: createSchema }), 
  controller.create
)

router.patch('/update', 
  validateInput({ body: updateSchema }), 
  controller.update<'device_id'>
)

router.delete('/delete', 
  validateInput({ query: uniqueKeySchema }), 
  controller.delete<'device_id'>
)

export const deviceRouter = router
