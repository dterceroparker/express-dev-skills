import { devskills } from '../data/devskill-data.js'

function index(req, res) {
  res.render('devskills/index', {
    devskills: devskills
  })
}

export {
  index,
}