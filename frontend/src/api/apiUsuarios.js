const getAllUsuarios = async () => {

    return await fetch("http://localhost:5000/api/usuario")

        .then(res => res.json())       

}

export {getAllUsuarios}