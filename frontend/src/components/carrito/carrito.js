import { Fragment } from "react";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../navbar/navbar.js";
import "./carrito.css";
//import {Table,Buttom, Modal, Input, Form} from 'antd';
import { getCarrito } from "../../api/apiCarrito/apiCarrito.js";
//componente

var total = 0

function totalCarrito(){

	total = 1000000
	console.log(total);
	//total.innerHTML=total;

}

totalCarrito();

export function Carrito() {
	const [carrito, setCarrito] = useState([])
	useEffect(() => {

		const getdata = async () => {

			const data = await getCarrito();
			console.log(data, "Ejemplo data")
			setCarrito(data)
			

		}

		getdata()

	}, [])

	const actualizarCarrito = async (id,carrito) => {
		const someData = { 
			//codigo: document.querySelector(typeNumber).value,
			//urlImagen: document.querySelector(imagen).value,
			//nombre: document.querySelector(nombre).value,
			//cantidad: document.querySelector(typeNumber).value
			//valor: document.querySelector(valor).value

			
		}
		console.log(id);
		console.log(carrito);
		console.log(JSON.stringify({carrito}))
		
        const response =await fetch(`http://localhost:5000/api/carrito/${id}`, {
			method: "PUT",
			body: JSON.stringify({
				carrito
			}),
			headers:{
				'Content-Type': 'application/json'
			  }
		});
	
		console.log(response);
		return response.json();

			
	}

	const eliminarCarrito = async (id) => {
       // await fetch(`http://localhost:3000/carrito/${id}`, { method: 'DELETE' });
	   console.log(id);
		await fetch(`http://localhost:5000/api/carrito/${id}`, { method: 'DELETE' });
		
		//await axios.delete(`http://localhost:3000/carrito/${id}`)
            //setStatus('Delete successful');
			window.location.href = window.location.href;
			
	}

	
	return (

		<Fragment>
			{/*<Fragment>*/}
			<div>
				<Navbar />
			</div>
			<div class="p-3 mb-2">
				<h4 class="font-main-title mx-2">Carrito</h4>
			</div>
			{carrito.map((item, index) => {
				return (
					<div class="card mx-4 my-4 ">
						<div class="table-responsive card-body shadow p-3 mb-5 bg-body rounded">

							<table class="table table-hover data-show-footer=true data-searchable=tru text-center" width="100%">
								<thead class="font-title ">
									<tr align="center ">
										<th width="10%"scope="col">#</th>
										<th width="20%"scope="col">Imagen</th>
										<th width="20%"scope="col">Producto</th>
										<th width="10%"scope="col">Cantidad</th>
										<th width="20%"scope="col">Valor</th>
										<th width="20%"scope="col">Eliminar</th>
									</tr>
								</thead>
								<tbody class="font-text text-center" id="Productos">
									<tr>
										<th scope="row text-center">{item.id}</th>
										<td >
											<img
											    id="imagen"
												src={item.urlImagen}
												className="img-thumbnail"
												alt="Sheep"
												width={140} height={150}
											/>
										</td>
										<td id="nombre"
										>{item.nombre}</td>
										<td>
											<div class="form-outline">
											
												<input
													type="number"
													id="typeNumber"
													class="form-control"
													placeholder={item.cantidad}
													width={10} height={10}
													//onChange={()=>{item.cantidad= document.getElementById("typeNumber").value;actualizarCarrito(item._id,item)}}
													onChange={()=>{item.cantidad= 5}}
													onBlur={()=>actualizarCarrito(item._id,item)}

												/>
											</div>

										</td>
										<td id="valor">{item.valor}

										</td>
										<td>
											<button type="button" class="btn btn-danger btn-sm px-3" onClick={()=>eliminarCarrito(item._id)}>
												<i class="fas fa-times"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
													<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
													<path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
												</svg></i>
											</button>
										</td>
									</tr>
								</tbody>


							</table>
						</div>
			
					</div>
              
				
				)
			})}

<tfoot>
					<tr className="text-center mx-3">
					<td colSpan={7} className="text mx-4">
						<strong>TOTAL</strong>
					</td>
					<td className="text" id="total">
						<strong>${total}</strong>
					</td>
				</tr>
				<br/>
				<tr id="footer"></tr>
				<button type="button" className="btn btn-primary mx-4" onClick={()=>totalCarrito()}>
					Finalizar Comprar
				</button>
				<button type="button" className="btn btn-danger">
					Cancelar
				</button>
				

			</tfoot>

		</Fragment>
	);
}
