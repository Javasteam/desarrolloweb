const mongoose = require("mongoose");

let rolesSistema = {
    values:["admin", "cliente"],
    message: '{VALUE} no es un rol válido'
}

let Schema = mongoose.Schema;

const usuarioSchema = mongoose.Schema({

    codigo : {
        type:String,
        required : false
    },
    
    correo : {
        type: String,
        unique: [true, "El correo se encuentra registrado en la base de datos!"],
        lowercase: true,
        trim: true,
        required: [true, "Correo no ingresado"],
        validate: {
        validator: function (v) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        },
        message: '{VALUE} no es un correo válido!'
      }

    },

    role: {
        type: String,
        default:'cliente',
        enum: rolesSistema,
        required: [false, "Por favor especifica tu rol"]
      },

    nombre : {
        type:String,
        required : false
    },

    direccion : {
        type:String,
        required : false
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

usuarioSchema.methods.toJSON = function(){
    let user = this;
    let userObject = user.toObject();
    //delete userObject.password;
    return userObject;
}




module.exports = mongoose.model('Usuario',usuarioSchema);