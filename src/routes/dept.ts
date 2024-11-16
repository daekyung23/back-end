import { Router } from 'express'
import { controllers } from '@controllers'
import { validateInput } from '@middlewares/validators'
import { z } from 'zod'

import { 
  deptUncheckedCreateInputSchema as createSchema,
  deptUncheckedUpdateInputSchema as updateSchema,
  deptWhereUniqueInputSchema as uniqueKeySchema,
  deptSchema
} from '@prisma/zod-schemas'
import { searchSchema } from '@lib/zod-prisma-types'

const router = Router()
const controller = controllers.dept

// Defined At Controller & Service ------------------------------------------
// 이거 unique 아닌데?
router.get('/id-by-name', 
  validateInput({ query: deptSchema.pick({ dept_name: true }) }), 
  controller.getDeptIdByName
)

router.get('/name-by-id', 
  validateInput({ query: uniqueKeySchema }), 
  controller.getDeptNameById
)

router.get('/children', 
  validateInput({ query: uniqueKeySchema }), 
  controller.getChildDeptById
)

// Override At Service ------------------------------------------------------
router.get('/search', 
  validateInput({ query: searchSchema }), 
  controller.search
)

// CRUD ----------------------------------------------------------------------
router.post('/create', 
  validateInput({ body: createSchema }), 
  controller.create
)

router.get('/all',
  controller.getAll
)

router.patch('/update', 
  validateInput({ body: z.intersection( uniqueKeySchema, updateSchema ) }), 
  controller.update<'dept_id'>
)

router.delete('/delete', 
  validateInput({ query: uniqueKeySchema }), 
  controller.delete<'dept_id'>
)

export const deptRouter = router