import { useEffect, useState } from "react";
import { getProductById } from "../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    
    //estado encargado de almacenar el producto actual seleccionado
    const [product, setProduct] = useState([]);

    let id = '1';

    //agregamos un control de efecto para cargar el producto seleccionado una unica vez, cada vez que se monta nuevamente el component, y no por cualquier efecto secundario.
    useEffect( () => {
        //invocamos ejecucion de async promise para obtener el product by id seleccionado
        getProductById(id)
            .then(response => {
                //no es necesario mantener el valor del estado anterior de momento, se pisa con el nuevo get.
                setProduct(response);
            })
            .catch(error => {
                console.error(error);
            })
    }, []) //se especifica para ejecutar solo en el estado de montaje del componente

    return(
        <ItemDetail {...product}/>
    )
}

export default ItemDetailContainer;