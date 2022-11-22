import React, { useState } from "react";
import { Fragment } from "react";
import "./login.css";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();



export function Login() {
  //
  const [correo, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();

    // set configurations
    const configuration = {
      method: "post",
      url: "http://localhost:5000/login",
      data: {
        correo,
        password,
      },
    };

    // make the API call
    axios(configuration)
      .then((result) => {
        // set the cookie
        cookies.set("TOKEN", result.data.token, {
          path: "/",
        });
        // redirect user to the auth page
        window.location.href = "/carrito";

        setLogin(true);
      })
      .catch((error) => {
        error = new Error();
      });
  };

    return (
    <Fragment>
      <div class="col-12 position-relative pt-5" id="intro">
        <div class="card mx-auto my-auto shadow p-3 mb-5 bg-body rounded card-width">
          <div class="card-body p-3 fonty">
            <h4 class="text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-people"
                viewBox="0 0 16 16"
              >
                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
              </svg>{" "}
              Iniciar Sesión
            </h4>
            <form onSubmit={(e)=>handleSubmit(e)}>
              <div class="pt-3 mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Correo
                </label>
                <input
                  type="email"
                  name="correo"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={correo}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ingresa tu correo"
                />
                
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Contraseña
                </label>
                <input
                  type="password"
                  name="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Ingresa tu contraseña"
                />
                
                <div class="mt-3">
                  <button class="btn btn-secondary" 
                  type="submit" onClick={(e) => handleSubmit(e)}>
                    Ingresar
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-arrow-right-square"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                      />
                    </svg>
                  </button>
                   {/* display success message */}
                      {login ? (
                        <p className="text-success">Has iniciado sesión exitosamente!</p>
                      ) : (
                        <p className="text-danger">No has iniciado sesión</p>
                      )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
