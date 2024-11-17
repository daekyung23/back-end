import { Router } from 'express'
import { controllers } from '@controllers'
import { validateInput } from '@middlewares/validators'
import { z } from 'zod'

import { 
  userUncheckedCreateInputSchema as createSchema,
  userUncheckedUpdateInputSchema as updateSchema,
  userWhereUniqueInputSchema as uniqueKeySchema,
  searchSchema,
  activationSchema,
} from '@lib/zod'

const router = Router()
const controller = controllers.user

// Override At Service ------------------------------------------------------
router.get('/search', 
  validateInput({ query: z.intersection(searchSchema, activationSchema) }), 
  controller.search
)

router.get('/check', 
  validateInput({ query: uniqueKeySchema }), 
  controller.exists
)

router.patch('/change-activation', 
  validateInput({ body: z.intersection(uniqueKeySchema, activationSchema) }), 
  controller.changeActivation
)

// Base CRUD ----------------------------------------------------------------
router.post('/create', 
  validateInput({ body: createSchema }), 
  controller.create
)

router.patch('/update', 
  validateInput({ body: updateSchema }), 
  controller.update<'login_id'>
)

router.delete('/delete', 
  validateInput({ query: uniqueKeySchema }), 
  controller.delete<'login_id'>
)

export const userRouter = router
