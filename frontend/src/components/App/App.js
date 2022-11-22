import React, { useEffect, useState, Fragment } from "react";
import './App.css';
import Navbar from '../navbar/navbar.js';
import { getProductos } from "../../api/apiProductos.js";



export function App() {
	const [productos, setProductos] = useState([])
	useEffect(() => {

		const getdata = async () => {

			const data = await getProductos();
      console.log(data)
			setProductos(data)
			

		}

		getdata()


	}, [])

  

  return (
    <Fragment>
    <div className="navbar p-5">
      <Navbar />
    </div>
    <h4 class="font-main-title mx-4 my-3 ">Productos</h4>
   
    <div class="text-center mx-4 my-3">
   
    <div className="row row-cols-1 row-cols-md-3 g-4" width={150} height={300}>
      
    {productos.map((item, index) => {

    return (

      <div className="col">
      <div className='card'>
      <img class="card-img-top" width={150} height={210} src={item.urlImagen} alt={item.nombre} />
      <div class="card-body font-lnk">
      <h5>{item.nombre}</h5>
      <p class="card-description">{item.descripcion}</p>
      <p>{item.precio}</p>
      <p class="badge bg-primary text-center">Stock: {item.stock}</p>
      <div className="contenedor">
      <button class="btn btn-outline-dark mx-3">More Info</button>
      <a  href="/modificar?id=${item.id}" class="btn btn-outline-dark"> Modificar </a>
      </div> 
    </div>
    </div>
    </div>
     
  )
    })}
  
  </div>

  </div>
  </Fragment>
  
   
  );
}

export default App;
