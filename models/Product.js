const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    nombre: { type: String, required: true},
    precio_base: { type: Number, required: true},
    existencia: { type: Number, required: true}
})

const Product = mongoose.model('products', productSchema)

module.exports = Product