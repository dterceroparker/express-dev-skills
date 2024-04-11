import { Router } from 'express'
import * as devskillsCtrl from '../controllers/devskills.js'


const router = Router()

// GET localhost:3000/devskills
router.get('/', devskillsCtrl.index)
// GET localhost:3000/devskills/new
router.get('/new', devskills.new)


export { router }
