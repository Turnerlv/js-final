const Bite = require('../models/bite')

module.exports = {
    index,
    create
}

async function index(req, res) {
    const bites = await Bite.find({})
    res.json(bites)
}

async function create(req, res) {
    const bites = await Bite.create(req.body)
    res.json({bites})
}