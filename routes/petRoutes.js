const express = require('express')
const router = express.Router()
const petController = require('../controllers/pets')
const secureRoute = require('../middleware/secureRoute')

router.post('/new', petController.createPet)
router.get('/', secureRoute, petController.petIndex)
router.get('/:id', petController.showPet)
router.delete('/:id', petController.deletePet)
router.put('/:id', petController.updatePet)
module.exports = router