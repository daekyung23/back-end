import { Router } from 'express'
import { controllers } from '@controllers'
import { validateInput } from '@middlewares/validators'
import { 
  z,
  client_branchUncheckedCreateInputSchema as createSchema,
  client_branchUncheckedUpdateInputSchema as updateSchema,
  client_branchWhereUniqueInputSchema as uniqueKeySchema,
  clientWhereUniqueInputSchema as clientUniqueKeySchema,
  searchSchema,
  activationSchema
} from '@lib/zod'

const router = Router()
const controller = controllers.clientBranch

// Defined At Controller & Service ------------------------------------------
router.get('/by-client', 
  validateInput({ query: clientUniqueKeySchema }), 
  controller.findManyByClientId
)

// Override At Service ------------------------------------------------------
router.get('/search', 
  validateInput({ query: z.intersection(searchSchema, activationSchema) }), 
  controller.search
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

router.get('/by-branch-id', 
  validateInput({ query: uniqueKeySchema }), 
  controller.findOneByUnique<'client_branch_id'>
)

router.patch('/update', 
  validateInput({ body: updateSchema }), 
  controller.update<'client_branch_id'>
)

router.delete('/delete', 
  validateInput({ query: uniqueKeySchema }), 
  controller.delete<'client_branch_id'>
)

export const clientBranchRouter = router