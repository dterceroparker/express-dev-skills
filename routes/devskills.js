import { Router } from 'express'
import * as devskillsCtrl from '../controllers/devskills.js'


const router = Router()

// GET localhost:3000/devskills
router.get('/', devskillsCtrl.index)
// GET localhost:3000/devskills/new
router.get('/new', devskillsCtrl.new)
//GET localhost:3000/devskills/:devskillId
router.get('/:devskillId', devskillsCtrl.show)
//POST localhost:3000/devskills
router.post('/', devskillsCtrl.create)


export { router }
