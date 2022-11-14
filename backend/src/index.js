const express = require("express");
const moongose = require("mongoose");
const productoRoute = require("./routes/producto")
//const productoStockRoute = require("./routes/producto")
const carritoRoute = require("./routes/carrito")
const usuarioRoute = require("./routes/usuario")
const ventaRoute = require("./routes/venta")


//settings
const app = express();
const port = process.env.PORT || 5000;

//middlewares

app.use(express.json());
app.use("/api",productoRoute);
//app.use("/api",productoStockRoute);
app.use("/api",carritoRoute);
app.use("/api",usuarioRoute);
app.use("/api",ventaRoute);


//routes
app.get("/",(req, res)=>{
    res.send("Conexion exitosa")
})

//conexion BD mongo

moongose
//conexion usuario admin clave Abcd*1234
//.connect("mongodb+srv://admin:Abcd*1234@cluster0.yomc5he.mongodb.net/Tienda?retryWrites=true&w=majority")
.connect("mongodb+srv://admin:Abcd*1234@cluster0.apzd7hh.mongodb.net/Tienda")
.then(()=>console.log("Conectado a Mongo ATLAS"))
.catch((error)=>console.error(error))
//server listening

app.listen(port,()=> console.log("Servidor listo y escuchando", port))