// Import the model that we exported in the Todo.js model file
import res from 'express/lib/response.js'
import { Devskill } from '../models/devskill.js'

function index(req, res) {
  Devskill.find({})
  .then(devskills => { // devskills represents the result of the query, in this case ALL devskills
    res.render('devskills/index', {
      devskills: devskills,
      date: req.date
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

function create(req, res) {
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

function deleteDevSkill(req, res) {
  Devskill.findByIdAndDelete(req.params.devskillId)
  .then(devskill => {
    res.redirect('devskills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/devskills')
  })
} 

function edit(req, res) {
  //find the devskill and pass it to render
  Devskill.findById(req.params.devskillId)
  .then(devskill => {
    //render a view with a form (edit.ejs)
    res.render('devskills/edit', {
      devskill: devskill
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/devskills')
  })
}

function update(req, res) {
  Devskill.findByIdAndUpdate(req.params.devskillId, req.body, {new: true})
  .then(devskill => {
    res.redirect(`/devskills/${req.params.devskillId}`)
    })
  .catch(error => {
    console.log(error)
    res.redirect('/devskills')
  })
}

export {
  index,
  newDevSkill as new, 
  create,
  show,
  deleteDevSkill as delete,
  edit,
  update
}