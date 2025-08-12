const Pet = require('../models/pet')
async function createPet(req, res){
    console.log('You are in the create pet controller')
    try {
        console.log('Req.body is: ', req.body)
        const createdPet = await Pet.create(req.body)
        res.status(201).json(createdPet)
    } catch (err) {
        console.log(err)
        res.status(500).json({error: err.message})
    }
}

async function petIndex(req, res){
    try {
        const allPets = await Pet.find()
        if (allPets.length){
            res.status(200).json(allPets)
        } else {
            res.sendStatus(204)
        }
        
    } catch (err){
        console.log(err)
    }
}

async function showPet(req, res){
    try {
        const pet = await Pet.findById(req.params.id)
        if (pet){
            res.status(200).json(pet)
        } else {
            res.sendStatus(404)
        }
        
    } catch (err) {
        res.status(500).json({error: err.message})
    }
}

async function deletePet(req, res){
    try {
        const pet = await Pet.findByIdAndDelete(req.params.id)
        if (pet){
            res.status(200).json(pet)
        } else {
            res.sendStatus(404)
        }
        

    } catch (err){
        res.status(500).json({error: err.message})
    }
}

async function updatePet(req, res){
    try {
        const pet = await Pet.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        )
        res.status(200).json(pet)
    } catch (err){
        res.status(500).json({error: err.message})
    }
}

module.exports = {
    createPet,
    petIndex,
    showPet,
    deletePet,
    updatePet
}