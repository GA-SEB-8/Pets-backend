const express = require('express')
const router = express.Router()
const petController = require('../controllers/pets')

router.post('/new', petController.createPet)
router.get('/', petController.petIndex)
router.get('/:id', petController.showPet)
module.exports = router