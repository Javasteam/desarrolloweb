const ventasSchema = require("../models/ventas")


module.exports = {
    createVentas : async (req,res)=>{
        const venta = await ventasSchema(req.body);
        venta
        .save()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}))
    },
    getAllVentas: async(req,res) =>{
        await ventasSchema
        .find()
        .exec((error,venta)=>{
            res.json(venta)
        })
    }
}