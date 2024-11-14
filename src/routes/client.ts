import { Router } from 'express'
import { controllers } from '@controllers'
import { validateInput } from '@middlewares/validators'
import { z } from 'zod'

import {
  clientUncheckedCreateInputSchema as createSchema,
  clientUncheckedUpdateInputSchema as updateSchema,
  clientWhereUniqueInputSchema as primaryKeySchema,
  clientSchema
} from '@prisma/zod-schemas'
import { 
  clientSearchSchema,
  activationSchema 
} from '@lib/zod-prisma-types'

const router = Router()
const controller = controllers.client

router.get('/search', 
  validateInput({ query: clientSearchSchema }), 
  controller.search
)

router.get('/check', 
  validateInput({ query: clientSchema.pick({ client_name: true }) }), 
  controller.checkDuplicateByName
)

router.get('/subclients/:client_id', 
  validateInput({ params: primaryKeySchema }), 
  controller.getSubClientsById
)


router.patch('/change-activation', 
  validateInput({ body: activationSchema }), 
  controller.changeActivation
)

// CRUD ----------------------------------------------------------------------
router.post('/create', 
  validateInput({ body: createSchema }), 
  controller.create
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