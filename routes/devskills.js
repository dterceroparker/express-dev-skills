import { Router } from 'express'
import { devskills } from '../data/devskill-data.js'

const router = Router()

// GET localhost:3000/todos
app.get('/', function(req, res) {
  res.render('devskills/index', {
    devskills: devskills
  })
})

export { router }
