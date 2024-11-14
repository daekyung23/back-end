import { Router } from 'express'
import { controllers } from '@controllers'
import { validateInput } from '@middlewares/validators'
import { z } from 'zod'

import { 
  client_branchUncheckedCreateInputSchema as createSchema,
  client_branchUncheckedUpdateInputSchema as updateSchema,
  client_branchWhereUniqueInputSchema as primaryKeySchema,
  clientWhereUniqueInputSchema as clientPrimaryKeySchema
} from '@prisma/zod-schemas'
import { clientBranchSearchSchema, activationSchema } from '@lib/zod-prisma-types'

const router = Router()
const controller = controllers.clientBranch

router.get('/search', 
  validateInput({ query: clientBranchSearchSchema }), 
  controller.search,
)

//이건 나중에 client router로 옮기기
router.get('/by-client', 
  validateInput({ query: clientPrimaryKeySchema }), 
  controllers.client.findMany
)

router.patch('/change-activation', 
  validateInput({ body: z.intersection(primaryKeySchema, activationSchema) }), 
  controller.changeActivation
)

// CRUD ----------------------------------------------------------------------
router.post('/create', 
  validateInput({ body: createSchema }), 
  controller.create
)

router.get('/by-branch-id', 
  validateInput({ query: primaryKeySchema }), 
  controller.findOne
)

router.patch('/update', 
  validateInput({ body: z.intersection( primaryKeySchema, updateSchema ) }), 
  controller.update
)

router.delete('/delete', 
  validateInput({ query: primaryKeySchema }), 
  controller.delete
)


export default router