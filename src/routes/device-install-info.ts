import { Router } from 'express'
import { controllers } from '@controllers'
import { validateInput } from '@middlewares/validators'
import { schemas, searchSchema } from '@schemas'
import { z } from 'zod'

const router = Router()
const controller = controllers.deviceInstallInfo
const schema = schemas.deviceInstallInfo

// CRUD ----------------------------------------------------------------------
router.post('/create', 
  validateInput({ body: schema.createData}), 
  controller.create
)

router.patch('/update', 
  validateInput({ body: schema.updateByPrimaryKey }), 
  controller.update//<'device_id'>
)

router.delete('/delete', 
  validateInput({ query: schema.primaryKey }), 
  controller.delete//<'device_id'>
)

export const deviceInstallInfoRouter = router
