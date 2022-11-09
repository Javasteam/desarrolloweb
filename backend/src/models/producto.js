const mongoose = require("mongoose");

const productSchema = mongoose.Schema((
    {
        
    nombre: {
        type: String,
        required: true

    },

    descripcion: {
        type: String,
        required: true

    },

    precio: {
        type:Number,
        required: true

    },

    stock: {
        type:Number,
        required: true

    }

}));

module.exports = mongoose.model('Producto', productSchema);