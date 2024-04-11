// Import the model that we exported in the Todo.js model file
import { Devskill } from '../models/devskill.js'

function index(req, res) {
  Devskill.find({})
  .then(devskills => { // devskills represents the result of the query, in this case ALL devskills
    res.render('devskills/index', {
      devskills: devskills,
    })
  })
  .catch(error => { // If there's an error, console.log it and redirect back home!
    console.log(error)
    res.redirect('/')
  })
}

function newDevSkill(req, res) {
  res.render('devskills/new')
}

export {
  index,
  newDevSkill as new 
}