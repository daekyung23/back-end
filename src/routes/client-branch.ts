import { Router } from 'express'
import { controllers } from '@controllers'
import { validateInput } from '@middlewares/validators'
import { schemas, searchSchema, activationSchema } from '@schemas'

const router = Router()
const controller = controllers.clientBranch
const schema = schemas.clientBranch

// Defined At Controller & Service ------------------------------------------
router.get('/by-client', 
  validateInput({ query: schema.unique('client_id') }), 
  controller.findManyByClientId,
)

// Override At Service ------------------------------------------------------
router.get('/search', 
  validateInput({ query: searchSchema.merge(activationSchema) }), 
  controller.search
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

router.get('/by-branch-id', 
  validateInput({ query: schema.primaryKey }), 
  controller.findOneByUnique<'client_branch_id'>
)

router.patch('/update', 
  validateInput({ body: schema.updateByPrimaryKey }), 
  controller.update<'client_branch_id'>
)

router.delete('/delete', 
  validateInput({ query: schema.primaryKey }), 
  controller.delete<'client_branch_id'>
)

export const clientBranchRouter = router