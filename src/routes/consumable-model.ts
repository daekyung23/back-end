import { Router } from 'express'
import { controllers } from '@controllers'
import { validateInput } from '@middlewares/validators'
import { z } from 'zod'
import {
  consumable_modelUncheckedCreateInputSchema as createSchema,
  consumable_modelUncheckedUpdateInputSchema as updateSchema,
  consumable_modelWhereUniqueInputSchema as uniqueKeySchema,
  consumable_modelSchema
} from '@prisma/zod-schemas'
import { 
  searchSchema,
} from '@lib/zod-prisma-types'

const router = Router()
const controller = controllers.consumableModel

// Override At Service -------------------------------------------------------
router.get('/search', 
  validateInput({ query: searchSchema.extend({
    consumable_type: consumable_modelSchema.shape.consumable_type
  }) }), 
  controller.search
)

// CRUD ----------------------------------------------------------------------
router.post('/create', 
  validateInput({ body: createSchema }), 
  controller.create
)

router.get('/check', 
  validateInput({ query: consumable_modelSchema.pick({ consumable_name: true }) }), 
  controller.exists
)

// //unique key가 없음.
// router.patch('/update', 
//   validateInput({ body: z.intersection( uniqueKeySchema, updateSchema ) }), 
//   controller.update<'consumable_model_id'>
// )

// //unique key가 없음.
// router.delete('/delete', 
//   validateInput({ query: uniqueKeySchema }), 
//   controller.delete<'consumable_model_id'>
// )



export const consumableModelRouter = router
