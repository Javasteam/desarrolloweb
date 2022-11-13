const getProductos = async () => {

    return await fetch("http://localhost:3000/productos")

        .then(res => res.json())       

}

export {getProductos}

const getCarrito = async () => {

    //return await fetch("http://localhost:3000/carrito")
    return await fetch("http://localhost:5000/api/carrito")

        .then(res => res.json())       

}

export {getCarrito}
