// Import the model that we exported in the Todo.js model file
import res from 'express/lib/response.js'
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

function show(req, res) {
  //find the devskill in the DB by its _id
  Devskill.findById(req.params.devskillId)
  .then(devskill => {
    res.render('devskills/show', {
      devskill: devskill
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/devskills')
  })
}

function create(req, res) {
  console.log(req.body)
  //set done property to false
  req.body.proficiency = false
  //create skill
  Devskill.create(req.body)
  .then(devskill => {
    res.redirect('/devskills')
  })
//redirect to devskills index
  .catch(error => {
    console.log(error)
    res.redirect('/devskills')
  })
}

export {
  index,
  newDevSkill as new, 
  show,
  create
}