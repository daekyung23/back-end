import { Router } from 'express'
import { controllers } from '@controllers'
import { validateInput } from '@middlewares/validators'
import { schemas, searchSchema } from '@schemas'

const router = Router()
const controller = controllers.dept
const schema = schemas.dept

// Defined At Controller & Service ------------------------------------------
// 이거 unique 아닌데?
router.get('/id-by-name', 
  validateInput({ query: schema.base.pick({ dept_name: true }) }), 
  controller.getDeptIdByName
)

router.get('/name-by-id', 
  validateInput({ query: schema.primaryKey }), 
  controller.getDeptNameById
)

router.get('/children', 
  validateInput({ query: schema.primaryKey }), 
  controller.getChildDeptById
)

// Override At Service ------------------------------------------------------
router.get('/search', 
  validateInput({ query: searchSchema }), 
  controller.search
)

// CRUD ----------------------------------------------------------------------
router.post('/create', 
  validateInput({ body: schema.createData }), 
  controller.create
)

router.get('/all',
  controller.getAll
)

router.patch('/update', 
  validateInput({ body: schema.updateByPrimaryKey }), 
  controller.update<'dept_id'>
)

router.delete('/delete', 
  validateInput({ query: schema.primaryKey }), 
  controller.delete<'dept_id'>
)

export const deptRouter = router