const productoSchema = require("../models/productos")

module.exports = {
    createProducto : async (req,res)=>{
        const producto = await productoSchema(req.body);
        producto
        .save()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}))
    },

    getAllProductos: async(req,res) =>{
        await productoSchema
        .find()
        .exec((error,producto)=>{
            res.json(producto)
        })
    },
    
    getAllProductoStock: async(req,res) =>{
        await productoSchema
        .find({ stock: { $gt : 0 } })
        //.limit(3)
        //sort({ occupation: -1 }).
        //.select({ stock: 10})
       // exec(callback);
        .exec((error,producto)=>{
            res.json(producto)
        })
    },

    deleteProducto: async(req,res)=>{
        const {id} = req.params;
        await productoSchema
        .remove({_id : id})
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message : error}))
    },
    updateProducto: async (req,res)=>{
        const  {id} =req.params;
        const {codigo,urlImagen,nombre,descripcion,características,precio,stock,categoriaId} = req.body
        await productoSchema
        .updateOne({_id:id},{$set:{codigo,urlImagen,nombre,descripcion,características,precio,stock,categoriaId}})
        .then((data) => res.json(data))
        .catch((error)=>res.json({message : error}))
        
    }
}