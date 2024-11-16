import { Router } from 'express'
import { controllers } from '@controllers'
import { validateInput } from '@middlewares/validators'
import { z } from 'zod'

import { 
  warehouseUncheckedCreateInputSchema as createSchema,
  warehouseUncheckedUpdateInputSchema as updateSchema,
  warehouseWhereUniqueInputSchema as uniqueKeySchema,
} from '@prisma/zod-schemas'
import { searchSchema } from '@lib/zod-prisma-types'

const router = Router()
const controller = controllers.warehouse

// Override At Service ------------------------------------------------------
router.get('/search', 
  validateInput({ query: searchSchema }), 
  controller.search,
)

router.get('/check-duplicate', 
  validateInput({ query: uniqueKeySchema }), 
  controller.exists
)

// CRUD ----------------------------------------------------------------------
router.post('/create', 
  validateInput({ body: createSchema }), 
  controller.create
)

router.patch('/update', 
  validateInput({ body: z.intersection( uniqueKeySchema, updateSchema ) }), 
  controller.update<'warehouse_id'>
)

router.delete('/delete', 
  validateInput({ query: uniqueKeySchema }), 
  controller.delete<'warehouse_id'>
)


export const warehouseRouter = router
