import { Router } from 'express'
import * as devskillsCtrl from '../controllers/devskills.js'


const router = Router()

// GET localhost:3000/todos
router.get('/', devskillsCtrl.index)

export { router }
