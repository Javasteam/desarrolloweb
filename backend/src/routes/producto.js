const express = require("express");
const productSchema = require("../models/producto");
const router = express.Router();


// Crear producto
router.post('/crearproducto', (req, res) => {
    const product = productSchema(req.body);
    product
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error }));
});

// Obtener todos los productos
router.get('/productos', (req, res) => {
    productSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error }));
});

// Consultar un producto
router.get('/producto/:id', (req, res) => {
    const { id } = req.params;
    productSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error }));
});

// Actualizar un producto
router.put('/actualizar-producto/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion, precio, stock } = req.body;
    productSchema
        .updateOne({ _id: id }, { $set: {nombre, descripcion, precio, stock} })
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error }));
});


// Eliminar un producto
router.delete('/eliminar-producto/:id', (req, res) => {
    const { id } = req.params;
    productSchema
        .findOneAndDelete({ _id: id }, (err, deletedObj) =>{
            if(err){
                res.status(404).json({status:false, error:"Producto no encontrado"});
            }

            else {
                res.status(200).json({status: true, message: "Producto eliminado exitosamente"})
            }

        })
       
});


module.exports = router;