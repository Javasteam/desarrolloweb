const usuarioSchema = require("../models/usuarios")

module.exports = {
    createUsuario : async (req,res)=>{
        const usuario = await usuarioSchema(req.body);
        usuario
        .save()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}))
    },

    getAllUsuarios: async(req,res) =>{
        await usuarioSchema
        .find()
        .exec((error,usuario)=>{
            res.json(usuario)
        })
    },

    deleteUsuario: async(req,res)=>{
        const {id} = req.params;
        await usuarioSchema
        .remove({_id : id})
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message : error}))
    },
    updateUsuario: async (req,res)=>{
        const  {id} =req.params;
        const {codigo,correo,nombre,direccion,password,carrito} = req.body
        await usuarioSchema
        .updateOne({_id:id},{$set:{codigo,correo,nombre,direccion,password,carrito}})
        .then((data) => res.json(data))
        .catch((error)=>res.json({message : error}))
        
    }
}