
const express = require("express");
const router = express.Router();
const {createProducto, getAllProductos, deleteProducto, updateProducto, getAllProductoStock} = require("../controllers/productoController")

//create
//enviamos ruta y controlador
router.post('/producto', createProducto);

//get
router.get('/producto',getAllProductos);

//get stock >0
router.get('/producto', getAllProductoStock);

//delete
router.delete('/producto/:id', deleteProducto);

//update
router.put('/producto/:id',updateProducto);


module.exports = router;