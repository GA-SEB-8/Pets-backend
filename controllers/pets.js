const Pet = require('../models/pet')
async function createPet(req, res){
    console.log('You are in the create pet controller')
    try {
        console.log('Req.body is: ', req.body)
        const createdPet = await Pet.create(req.body)
        res.status(201).json(createdPet)
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    createPet
}