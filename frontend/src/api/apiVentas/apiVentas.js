const getVentas = async () => {

    return await fetch("http://localhost:3000/ventas")

        .then(res => res.json())       

}

export {getVentas}

