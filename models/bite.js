const mongoose = require('mongoose')

const biteSchema = new mongoose.Schema({
    name: String,
    biteURL: {
        type: String,
        required: true
    },
    // framework:  {
    //     type: String,
    //     required: true
    // },
    // designsystem: {
    //     type: String,
    //     required: false
    // },
    // description: {
    //     type: String,
    //     required: true
    // },
    // tags: {
    //     type: [String],
    //     required: true
    // }
    }, {
        timestamp: true  
})

module.exports = mongoose.model('Bite', biteSchema)