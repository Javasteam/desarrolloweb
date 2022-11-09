const express= require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const app = express();
const port = process.env.PORT || 9000;
const productRoutes = require("./routes/producto"); 

//middleware
app.use(express.json());
app.use('/api', productRoutes);


//routes

app.get('/', (req, res) => {
    res.send('Bienvenidos a mi API');
});

// mongodb connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('Conectado a BD Mongo Atlas'))
    .catch((error) =>console.log(error));

app.listen(port, 'localhost', () => {
     console.log(`Servidor corriendo en puerto ${port}`)
});