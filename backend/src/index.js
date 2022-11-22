require('./config/config');
const express = require("express");
const moongose = require("mongoose");
require("dotenv").config();
const productoRoute = require("./routes/producto")
const carritoRoute = require("./routes/carrito")
const usuarioRoute = require("./routes/usuario")
const loginRoute = require("./routes/login")
const registerRoute = require("./routes/register")
const ventaRoute = require("./routes/venta")
const cors = require("cors")
const bodyParser = require('body-parser');
const dotenv = require('dotenv')


//settings
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use("/api",productoRoute);
app.use("/api",carritoRoute);
app.use("/", loginRoute);
app.use("/", registerRoute);
app.use("/api",ventaRoute);
app.use("/api",usuarioRoute);


//routes
app.get("/",(req, res)=>{
    res.send("Conexion exitosa")
})

//conexion BD mongo
moongose
//conexion usuario admin clave Abcd*1234
.connect("mongodb+srv://admin:Abcd*1234@cluster0.yomc5he.mongodb.net/Tienda?retryWrites=true&w=majority")
.then(()=>console.log("Conectado a Mongo ATLAS"))
.catch((error)=>console.error(error))

//server listening
app.listen(port,()=> console.log("Servidor listo y escuchando", port))