const getVentas = async () => {

    return await fetch("http://localhost:5000/api/ventas")

        .then(res => res.json())       

}

export {getVentas}

