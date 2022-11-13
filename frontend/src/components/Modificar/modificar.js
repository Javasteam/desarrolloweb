import { OmitProps } from 'antd/lib/transfer/ListBody.js';
import React, { Fragment, useEffect, useState } from 'react';
import Navbar from '../navbar/navbar.js';
import { getProductos } from "../../api/apiProductos.js";


export function Modificar() {
    const [productos, setProductos] = useState([]);
    useEffect(() => {

        const getdata = async () => {

            const data = await getProductos();

            setProductos(data)
            console.log(data)

        }

        getdata()

    }, [])




    function AlertaMod() {
        alert("El producto ha sido actualizado correctamente")
    }

    // function Seleccionar() {



    //     return (

    //         <div className="col-6 my-8">
    //             <h3>Productos</h3>
    //             <select name="Producto">
    //                 {productos.map((item, i) => (
    //                     <>
    //                         <option value={i}>{productos.nombre}</option>
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
            <div>
                <Navbar />
            </div>
            <div class="p-3 mb-2">
				<h4 class="font-main-title mx-2">Modificar Productos</h4>
			</div>
            {productos.map((item, index) => {
				return (
            <div class="text-center">
                <>
                    <div class="card mx-4 p-3 mb-5">

                        <div className="row row-cols-1 row-cols-md-4 g-8 ">

                            <div className='container my-4 '>
                                {/* <Seleccionar /> */}
                                <table class="table table-hover table-responsive table-striped text-center mx-10">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Nombre Producto</th>
                                        </tr>
                                    </thead>
                                    <tbody class="font-text text-center" id="Productos">
                                        <tr>
                                        <th scope="row">1</th>
                                        <td>{item.nombre}</td>
                                        </tr>
                                        <tr>
                                        <th scope="row">2</th>
                                        <td>{item.nombre}</td>
                                        </tr>
                                        
                                        
                                    </tbody>
                                </table>



                            </div>

                            <div className='container my-4'>
                            
                                <img id="imagenBici" className="Logo-Bici-Select" class="card-img-top"  />
                                <img
                                    src={item.urlImagen}
                                    class="img-fluid img-thumbnail"
                                    alt={item.nombre}
                                    width="300"
                                    height="300"
                                />
                            </div>

                            <div className='container my-4'>
                                <form >
                                    <   div class="form-group">
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
                                        <input type="number" class="form-control" name="stock"placeholder={item.precio}  />
                                    </div>
                                    <div class="form-group">
                                        <label for="productos1"> Categoria</label>
                                        <input class="form-control" name="additional" placeholder={item.categoriaId} />
                                    </div>
                                    <div>
                                        <br></br>
                                        <button id="btn" onClick={AlertaMod} class="btn btn-primary">Modificar</button>

                                    </div>

                                </form>
                            </div>
                        </div>

                    </div>
                </>
            </div>
            	)
			})}
        </Fragment>

    );

}