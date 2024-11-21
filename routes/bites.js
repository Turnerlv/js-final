const express = require('express')
const router = express.Router()
const bitesCtrl = require('../controllers/bites')

// Paths prefixed with /bites
router.get('/', bitesCtrl.index)
router.post('/', bitesCtrl.create)

module.exports = router