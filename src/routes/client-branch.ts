import { Router } from 'express'
import { validateInput } from '@middlewares/validators'
import { 
  searchClientBranch,
  createClientBranch,
  updateClientBranch,
  changeClientBranchActivation,
  deleteClientBranch
} from '@controllers/client-branch-controller'
import * as schemas from '@prisma/zod'

const router = Router()

router.get('/search', validateInput({ query: schemas.v_clientBranchWhereInputSchema }), searchClientBranch)
router.post('/', validateInput({ body: schemas.createSchema }), createClientBranch)
router.patch('/', validateInput({ body: schemas.updateSchema }), updateClientBranch)
router.patch('/activation', validateInput({ body: schemas.activationSchema }), changeClientBranchActivation)
router.delete('/', validateInput({ query: schemas.idSchema }), deleteClientBranch)

export default router