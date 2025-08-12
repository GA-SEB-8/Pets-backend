const { Schema, model } = require('mongoose')

const petSchema = new Schema({
    name: {type: String, required: true},
    age: {type: Number, min: 0}, 
    breed: {type: String}
})

const Pet = model('Pet', petSchema)

module.exports = Pet