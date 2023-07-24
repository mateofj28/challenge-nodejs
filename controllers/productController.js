const Product = require('../models/Product')
const User = require('../models/User')

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({ existencia : { $gt: 0 } })
        res.json(products)
    } catch (err) {
        res.status(500).json({message: 'failed get all products', error: err})
    }
} 

exports.getProductPrice = async (req, res) => {
    try {
        var response = {}
        const { user_id, nombre_producto } = req.params
        // obtengo el usuario y busco el nombre del producto (si lo tiene)
        const user = await User.findById(user_id)
        

        if (user.metadata.precios_especiales.length > 0){
            
            const products = user.metadata.precios_especiales.find( u => u.nombre_producto === nombre_producto)

            if (products){

                response = {
                    nombre_producto: nombre_producto,
                    precio_especial: products.precio_especial_personal
                }

            } else {
                console.log(`No found product with name ${nombre_producto}`);
            }

        } else {
            
            const product = await Product.find({ nombre: nombre_producto})

            if (!product){
                return res.status(404).json({ message: 'Product not found'})
            }
            console.log(product);
            response = {
                precio_base: product[0].precio_base
            }
            console.log(response);

        }

        res.status(200).json(response)

        
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}