import { Router } from 'express'
import { controllers } from '@controllers'
import { validateInput } from '@middlewares/validators'
import { z } from 'zod'

import {
  clientUncheckedCreateInputSchema as createSchema,
  clientUncheckedUpdateInputSchema as updateSchema,
  clientWhereUniqueInputSchema as uniqueKeySchema,
  clientSchema,
  v_clientSchema
} from '@prisma/zod-schemas'
import { 
  searchSchema,
  activationSchema 
} from '@lib/zod-prisma-types'

const router = Router()
const controller = controllers.client

// Defined At Controller & Service ------------------------------------------
router.get('/subclients/:client_id', 
  validateInput({ params: uniqueKeySchema }), 
  controller.getSubClientsById
)

// Override At Service ------------------------------------------------------
router.get('/search', 
  validateInput({ query: 
    searchSchema.extend({
      is_active: activationSchema.shape.is_active,
      client_rate: v_clientSchema.shape.client_rate.optional()
    })
  }), 
  controller.search
)

router.patch('/change-activation', 
  validateInput({ body: activationSchema }), 
  controller.changeActivation
)

router.get('/check', 
  validateInput({ query: clientSchema.pick({ client_name: true }) }), 
  controller.exists
)

// Base CRUD ----------------------------------------------------------------
router.post('/create', 
  validateInput({ body: createSchema }), 
  controller.create
)

router.patch('/update', 
  validateInput({ body: z.intersection( uniqueKeySchema, updateSchema ) }), 
  controller.update<'client_id'>
)

router.delete('/delete', 
  validateInput({ query: uniqueKeySchema }), 
  controller.delete<'client_id'>
)


export const clientRouter = router