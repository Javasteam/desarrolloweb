const mongoose = require("mongoose");

const usuarioSchema = mongoose.Schema({

    
    codigo : {
        type:String,
        required : true
    },
    correo : {
        type:String,
        required : true
    },
    nombre : {
        type:String,
        required : true
    },
    direccion : {
        type:String,
        required : true
    },
    password : {
        type:String,
        required : true
    },
    carrito : [{
        type:mongoose.Schema.Types.ObjectId,
        ref : 'Carrito',
        autopopulate : true
    }]

})

usuarioSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model('Usuario',usuarioSchema);