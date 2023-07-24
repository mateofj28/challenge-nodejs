const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')


router.get('/products', productController.getAllProducts)

router.get('/price/:user_id/:nombre_producto', productController.getProductPrice)


module.exports = router