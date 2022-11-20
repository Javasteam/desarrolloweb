const { db } = require("../models/carritos");
const carritoSchema = require("../models/carritos")

module.exports = {
    createCarrito : async (req,res)=>{
        const carrito = await carritoSchema(req.body);
        carrito
        .save()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}))
    },

    getAllCarritos: async(req,res) =>{
        await carritoSchema
        .find()
        .exec((error,carrito)=>{
            res.json(carrito)
        })
    },

    deleteCarrito: async(req,res)=>{
        const {id} = req.params;
        await carritoSchema
        .remove({_id : id})
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message : error}))
    },
    updateCarrito: async (req,res)=>{
        const  {id} =req.params;
        const {codigo,urlImagen,nombre,cantidad,valor} = req.body
        await carritoSchema
        .updateOne({_id:id},{$set:{codigo,urlImagen,nombre,cantidad,valor}})
        .then((data) => res.json(data))
        .catch((error)=>res.json({message : error}))
        
    },
    getSumaCarrito: async(req,res) =>{
        await carritoSchema
        //.find({ cantidad: { $gt : 0 } })
        .select({ $sum: cantidad} )
        //.aggregate({ $group: { _id: null, cantidad: { $sum: cantidad } } })
        //.aggregate({ $group: { _id: null, cantidad: { $sum: cantidad } } }  )
      
        //.limit(3)
        //sort({ occupation: -1 }).
        //.select({ stock: 10})
       // exec(callback);
        .exec((error,carrito)=>{
            res.json(carrito)
        })
      
        //return sum;
    }
}