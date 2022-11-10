import { Fragment } from "react";
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../navbar/navbar.js";
import "./ventas.css";
import { getVentas } from "../../api/apiVentas/apiVentas.js";
import React, { useEffect, useState } from "react";
//componente


export function Ventas() {
  const [ventas, setVentas] = useState([])
  useEffect(() => {

    const getdata = async () => {

      const data = await getVentas();

      setVentas(data)
      console.log(data)

    }

    getdata()



  }, [])


  return (
    <Fragment>
      <div>
        <Navbar />
      </div>
      <div class="p-3 mb-2">
        <h4 class="font-main-title mx-2">Reporte Ventas</h4>
      </div>
      <div class="card mx-4 my-4">
            <div class="table-responsive card-body shadow p-3 mb-5 bg-body rounded">
      {ventas.map((item, index) => {
        return (
         


              <table width="100%" class= "table table-hover table-responsive  text-center">
                <thead class="thead-primary text-primary">
                  <tr>
                    <th width='35%' scope="col">Fecha</th>
                    <th  width='35%' scope="col">IdVenta</th>
                    <th  width='35%' scope="col">Valor</th>
                  </tr>
                </thead>
                <tbody class="font-text text-center" id="Productos">
                  <tr>
                    <td className="text-dark">{item.fecha}</td>
                    <td className="text-dark">{item.id}</td>
                    <td className="text-dark">{item.valor}</td>

                  </tr>
                </tbody>
              </table>
           
         
        )
      })}
       </div>
       </div>

      <tfoot>
        <tr id="footer"></tr>
        <button type="button" class="btn btn-primary mx-4">
          Total  4100000
        </button>
      </tfoot>

    </Fragment>
  );
}

