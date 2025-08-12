const express = require('express')
const router = express.Router()
const petController = require('../controllers/pets')

router.post('/new', petController.createPet)

module.exports = router