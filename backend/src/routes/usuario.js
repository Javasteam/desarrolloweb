const express = require("express");
const router = express.Router();
const {createUsuario, getAllUsuarios, deleteUsuario, updateUsuario} = require("../controllers/usuarioController")

//create
//enviamos ruta y controlador
router.post('/usuario', createUsuario);

//get
router.get('/usuario',getAllUsuarios);

//delete
router.delete('/usuario/:id', deleteUsuario);

//update
router.put('/usuario/:id',updateUsuario);


module.exports = router;