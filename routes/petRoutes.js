const express = require('express')
const router = express.Router()
const petController = require('../controllers/pets')

router.post('/new', petController.createPet)
router.get('/', petController.petIndex)
router.get('/:id', petController.showPet)
router.delete('/:id', petController.deletePet)
router.put('/:id', petController.updatePet)
module.exports = router