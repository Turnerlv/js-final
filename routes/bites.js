const express = require('express')
const router = express.Router()
const bitesCtrl = require('../controllers/bites')

// Paths prefixed with /bites
router.get('/', bitesCtrl.index)
router.get('/:id', bitesCtrl.show)
router.post('/', bitesCtrl.create)
router.delete('/:id', bitesCtrl.remove)

module.exports = router