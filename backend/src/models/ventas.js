const mongoose = require("mongoose");

const ventasSchema = mongoose.Schema({
    
    codigo : {
        type:String,
        required : true
    },
    fecha : {
        type:String,
        required : true
    },
    valorVenta : {
        type:String,
        required : true
    }

   
   
})

module.exports = mongoose.model('Ventas',ventasSchema);