const mongoose = require("mongoose");

const productoSchema = mongoose.Schema({

    
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
    descripcion : {
        type:String,
        required : true
    },
    características : {
        type:String,
        required : true
    },
    precio : {
        type:Number,
        required : true
    },
    stock : {
        type:Number,
        required : true
    },
    categoriaId : {
        type:Number,
        required : true
    }

})

module.exports = mongoose.model('Producto',productoSchema);