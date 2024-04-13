import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema
	
const devskillSchema = new Schema({
  text: String,
  proficiency: String,
})

// Compile the schema into a model and export it
const Devskill = mongoose.model('Devskill', devskillSchema)

export {
  Devskill
}