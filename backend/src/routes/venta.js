const express = require("express");
const router = express.Router();
const {createVentas, getAllVentas} = require("../controllers/ventasController")


router.post('/ventas', createVentas);

//get
router.get('/ventas',getAllVentas);

module.exports = router;