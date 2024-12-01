import { Router } from 'express'
import { controllers } from '@controllers'
import { validateInput } from '@middlewares/validators'
import { schemas } from '@schemas'
import { z } from '@lib/zod'

const router = Router()
const controller = controllers.deviceLocationLog
const schema = schemas.deviceLocationLog


// Override At Service ------------------------------------------------------
router.get('/search-by-date-range', 
  validateInput({ query: 
    z.object({
      start_date: z.string().datetime(),
      end_date: z.string().datetime(),
      device_id: schema.base.shape.device_id,
    })
  }), 
  controller.searchByDateRange
)
// CRUD ----------------------------------------------------------------------
router.post('/create', 
  validateInput({ body: schema.createData }), 
  controller.create
)

// router.patch('/update', 
//   validateInput({ body: schema.updateByPrimaryKey }), 
//   controller.update<'device_location_log_id'>
// )

// router.delete('/delete', 
//   validateInput({ query: schema.primaryKey }), 
//   controller.delete<'device_location_log_id'>
// )

export const deviceLocationLogRouter = router
