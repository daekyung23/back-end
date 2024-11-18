import { Router } from 'express'
import { controllers } from '@controllers'
import { validateInput } from '@middlewares/validators'
import { schemas, searchSchema, activationSchema } from '@schemas'

const router = Router()
const controller = controllers.user
const schema = schemas.user

// Override At Service ------------------------------------------------------
router.get('/search', 
  validateInput({ query: searchSchema.merge(activationSchema) }), 
  controller.search
)

router.get('/check', 
  validateInput({ query: schema.primaryKey }), 
  controller.exists
)

router.patch('/change-activation', 
  validateInput({ body: schema.primaryKey.merge(activationSchema) }), 
  controller.changeActivation
)

// Base CRUD ----------------------------------------------------------------
router.post('/create', 
  validateInput({ body: schema.createData }), 
  controller.create
)

router.patch('/update', 
  validateInput({ body: schema.updateBy('login_id') }), 
  controller.update<'login_id'>
)

router.delete('/delete', 
  validateInput({ query: schema.unique('login_id') }), 
  controller.delete<'login_id'>
)

export const userRouter = router
