import "./signup.css";
import { useState } from "react";
import axios from "axios";

export function Signup() {
  //initial state

  const [correo, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signup, setSignup] = useState(false);

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
  

  // set configurations
  const configuration = {
    method: "post",
    url: "http://localhost:5000/signup",
    data: {
      correo,
      password,
    },
  };

  // make the API call
  axios(configuration)
    .then((result) => {
      window.location.href = "/login";
      setSignup(true);
    })

    .catch((error) => {
      error = new Error();
    });
};

  return (
    <div class="col-12 pt-5" id="intro">
      <div class="card mx-5 my-5 shadow p-4 ">
        <div class="mb-3">
          <form onSubmit={(e) => handleSubmit(e)}>
            <h3 class="fontytle">Crear Cuenta</h3>

            <input
              type="email"
              placeholder="Correo Electrónico"
              name="correo"
              value={correo}
              onChange={(e) => setEmail(e.target.value)}
              class="form-control mt-3"
            />
            <input
              type="password"
              placeholder="Contraseña"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              class="form-control mt-3"
            />

            <div class="mt-3">
              <button
                variant="primary"
                type="submit"
                class="mt-3 btn btn-outline-secondary"
                onClick={(e) => handleSubmit(e)}
              >
                Registrar
              </button>

              {/* display success message */}
              {signup ? (
                <p className="text-success">Te has registrado exitosamente!</p>
              ) : (
                <p className="text-danger">No estás registrado</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

