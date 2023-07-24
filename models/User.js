const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    id: { type: String, required: true},
    nombre: { type: Number, required: true},
    metadata: { 
        precios_especiales: []
    }
})

const User = mongoose.model('users', userSchema)

module.exports = User