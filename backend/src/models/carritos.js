const mongoose = require("mongoose");

const carritoSchema = mongoose.Schema({

    
    codigo : {
        type:String,
        required : true
    },
    urlImagen : {
        type:String,
        required : true
    },
    nombre : {
        type:String,
        required : true
    },
    cantidad : {
        type:Number,
        required : true
    },
    valor : {
        type:Number,
        required : true
    }

})

module.exports = mongoose.model('Carrito',carritoSchema);