import { Fragment } from "react";
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "../navbar/navbar.js";
import "./ventas.css";
import { getVentas } from "../../api/apiVentas/apiVentas.js";
import React, { useEffect, useState } from "react";
//componente

var suma = 0;

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
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Ventas</h4>
          <div class="table-responsive">
            <table class="table">
              <thead class="thead-primary text-primary">
                <tr>
                  <th width='35%' scope="col">Fecha</th>
                  <th width='35%' scope="col">ID</th>
                  <th width='35%' scope="col">Valor</th>
                </tr>
              </thead>
            </table>
          </div>

          {ventas.map((item, index) => {
            return (
              <div class="table-responsive">
                <table class="table">

                  <tbody>
                    <tr>
                      <td className="text-dark" width='35%' scope="col">{item.fecha}</td>
                      <td className="text-dark" width='35%' scope="col">{item.codigo}</td>
                      <td className="text-dark" width='35%' scope="col">{item.valorVenta}</td>
                      <script>{suma=suma+item.valorVenta}</script>

                    </tr>
                    
                  </tbody>
                  
                </table>
                
              </div>


      

      )
      
      })}
      </div>
      </div>


      <tfoot>
        <tr id="footer"></tr>
        <button type="button" class="btn btn-primary mx-4">
          ${suma}
        </button>
      </tfoot>

    </Fragment >
  );
}
