const Bite = require('../models/bite')

module.exports = {
    index,
    show,
    create,
    remove
}

async function index(req, res) {
    const bites = await Bite.find({})
    res.json(bites)
}

async function show(req, res) {
    const biteId = await Bite.findOne()
}

async function create(req, res) {
    const bites = await Bite.create(req.body)
    res.json({bites})
}

async function remove(req, res)  {
    const deletedBite = await Bite.deleteOne()
    res.json([deletedBite])
    
}