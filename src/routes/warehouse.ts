import { Router } from 'express'
import { controllers } from '@controllers'
import { validateInput } from '@middlewares/validators'
import { schemas, searchSchema } from '@schemas'
import { Schema } from '@lib/zod'

const router = Router()
const controller = controllers.warehouse
const schema = schemas.warehouse as Schema

// Override At Service ------------------------------------------------------
router.get('/search', 
  validateInput({ query: searchSchema }), 
  controller.search,
)

router.get('/check-duplicate', 
  validateInput({ query: schema.primaryKey }), 
  controller.exists
)

// CRUD ----------------------------------------------------------------------
router.get('/all',
  controller.getAll
)

router.post('/create', 
  validateInput({ body: schema.createData }), 
  controller.create
)

router.patch('/update', 
  validateInput({ body: schema.updateByPrimaryKey }), 
  controller.update<'warehouse_id'>
)

router.delete('/delete', 
  validateInput({ query: schema.primaryKey }), 
  controller.delete<'warehouse_id'>
)

export const warehouseRouter = router
