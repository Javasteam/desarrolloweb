const getProductos = async () => {

    return await fetch("http://localhost:3000/productos")

        .then(res => res.json())       

}

export {getProductos}

const getCarrito = async () => {

    return await fetch("http://localhost:3000/carrito")

        .then(res => res.json())       

}

export {getCarrito}

//guardar Carrito

const saveCarrito = async () => {

    const options = {

        method: 'POST',

        headers: {

            "Content-Type": "application/json",

        },

        body: JSON.stringify({

            
                "id": 1,
                "imagen": "https://http2.mlstatic.com/D_NQ_NP_905295-MCO48918988539_012022-O.webp",
                "producto": "Bicicleta todo terreno 1",
                "cantidad": 1,
                "valor": 1500000
                
              

        })

    };



    await fetch("http://localhost:3000/carrito", options)

        .then(res => res.json())

        .then(res => {

            console.log(res);

        })



        .catch(error => { console.error(error) })

}

/*const eliminarCarrito = async () => {

    return  await fetch('https://jsonplaceholder.typicode.com/posts/1', { method: 'DELETE' });
    setStatus('Delete successful');     

}

export {eliminarCarrito}*/