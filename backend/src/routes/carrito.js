
const express = require("express");
const router = express.Router();
const {createCarrito, getAllCarritos, deleteCarrito, updateCarrito, getSumaCarrito} = require("../controllers/carritoController")

//create
//enviamos ruta y controlador
router.post('/carrito', createCarrito);

//get
router.get('/carrito', getAllCarritos);


//delete
router.delete('/carrito/:id', deleteCarrito);

//update
router.put('/carrito/:id',updateCarrito);

//sumacarrito
router.get('/sumaCarrito', getSumaCarrito);

module.exports = router;