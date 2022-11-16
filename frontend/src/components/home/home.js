import React, { useEffect, useState, Fragment } from "react";
import { getProductos } from "../../api/apiProductos.js";
import "./home.css";

export function Home(){

  const [productos, setProductos] = useState([])
	useEffect(() => {

		const getdata = async () => {

			const data = await getProductos();

			setProductos(data)
			console.log(data)

		}

		getdata()


	}, [])

    return(
        <Fragment>
        <div class="text-center font-link mt-4">
        <h2 class="font-main-title-home">Rápido y Seguro</h2>
        <p class="font-main-text-home">Ven ya por tu nueva bicicleta y mucho más</p>
        </div>

        <div class="text-center mt-3 justify-content-around ">
    
    
    <div className="row row-cols-1 row-cols-md-3 g-4 m-3" width={150} height={300}>
    
    {productos.map((item, index) => {

return (

  <div className="col ">
  <div className='card'>
  <img class="card-img-top" width={150} height={210} src={item.urlImagen} alt={item.nombre} />
  <div class="card-body font-lnk">
  <h5>{item.nombre}</h5>
  <p class="card-description">{item.descripcion}</p>
  <p>{item.precio}</p>
  <p class="badge bg-primary text-center">Stock: {item.stock}</p>
  <div>
  <button class="btn btn-outline-dark">
    More Info
  </button>
  </div>
  </div> 
</div>
</div>
 
)
})}
      
    </div>
    </div>

        </Fragment>
    )
}