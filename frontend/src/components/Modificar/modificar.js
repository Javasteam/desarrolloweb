import React, { Fragment, useEffect, useState } from 'react';
import Navbar from '../navbar/navbar.js';
import { getProductos } from "../../api/apiProductos.js";


export function Modificar() {
    const [productos, setProductos] = useState([]);
    // const [product, setProduct] = useState({});   
    useEffect(() => {

        const getdata = async () => {

            const data = await getProductos();
            console.log("Esta es la data", data)
            setProductos(data)


        }

        getdata()

    }, [])


const modificarProducto = async (id,producto) => {
    const someData = { 
    }
    console.log(id);
    console.log(producto);
    console.log(JSON.stringify({producto}))
    
    const response =await fetch(`http://localhost:5000/api/producto/${id}`, {
        method: "PUT",
        body: JSON.stringify({
            producto
        }),
        // headers:{
        //     'Content-Type': 'application/json'
        //   }
    });

    console.log(response);
    return response.json();

        
}


    // function AlertaMod() {
    //     alert("El producto ha sido actualizado correctamente")
    // }

    // function Seleccionar() {



    //     return (

    //         <div className="col-6 my-8"> 
    //             <h3>Productos</h3>
    //             <select name="Producto">
    //                 {productos.map((item, i) => (
    //                     <>
    //                         <option value={i}>{item.nombre}</option>
    //                         {setProductos(item)}
    //                     </>
    //                 ))
    //                 }
    //             </select>
    //         </div>

    //     )

    // }


    return (

        <Fragment>
            <div className="navbar p-5">
                <Navbar />
            </div>
            <h4 class="font-main-title mx-4 my-3 ">Modificar Productos</h4>
            {productos.map((item, index) => {
                return (
                    <div class="text-center">
                        <div class="card mx-4  mb-1">

                            <form class="row" >
                                <div className='md-4 g-8 '>
                                    <div className="container col-md-3 my-4">
                                        <h5>{item.nombre}</h5>
                                    </div>
                                </div>
                                <div className='container col-md-3 my-4'>
                                    <img id="imagenBici" className="Logo-Bici-Select" class="card-img-top" />
                                    <img
                                        src={item.urlImagen}
                                        class="img-fluid img-thumbnail"
                                        alt={item.nombre}
                                        width="300"
                                        height="300">
                                    </img>
                                </div>
                                <div className="container col-md-6 my-4">
                                    <div class="form-group">
                                        <label for="productos1">Referencia</label>
                                        <input class="form-control" name="id" placeholder={item.id} />
                                    </div>
                                    <div class="form-group">
                                        <label for="">Nombre</label>
                                        <input src={item.name} class="form-control" name="name" placeholder={item.nombre} />
                                    </div>

                                    <div class="form-group">
                                        <label for="productos1">Descripcion</label>
                                        <input class="form-control" name="Descripcion" placeholder={item.descripcion} />
                                    </div>
                                    <div class="form-group">
                                        <label for="productos1">Caracteristicas</label>
                                        <input class="form-control" name="Caracteristicas" placeholder={item.caracteristicas} />
                                    </div>
                                    <div class="form-group">
                                        <label for="productos1">Precio</label>
                                        <input type="number" class="form-control" name="stock" placeholder={item.precio} />
                                    </div>
                                    <div class="form-group">
                                        <label for="productos1"> Categoria</label>
                                        <input class="form-control" name="additional" placeholder={item.categoriaId} />
                                    </div>
                                    <div>
                                    <br></br>
                                    <button type="button" class="btn btn-primary btn-sm px-3" onClick={() => modificarProducto(item._id)}>Modificar</button>
                                </div>
                                </div>
                            </form>

                        </div>
                    </div>
                )
            })}

        </Fragment>
    );
}