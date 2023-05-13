import { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount"
import { getProducts } from "../asyncMock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({greeting}) => {

    //estado encargado de almacenar los productos a mostrar en el container list
    const [products, setProducts] = useState([]);

    //agregamos un control de efecto para cargar los productos una unica vez, cada vez que se monta nuevamente el component, y no por cualquier efecto secundario.
    useEffect( () => {
        //invocamos ejecucion de async promise
        getProducts()
            .then(response => {
                //no es necesario mantener el valor del estado anterior de momento, se pisa con el nuevo get.
                setProducts(response);
            })
            .catch(error => {
                console.error(error);
            })
    }, []) //se especifica para ejecutar solo en el estado de montaje del componente

    return (
        <>
            <h3>{greeting}</h3>
            <ItemList products={products}></ItemList>
            <ItemCount initial={1} stock={0} onAdd={(quantity) => console.log("Cantidad agregada: ", quantity)}></ItemCount>
        </>
    )
}
export default ItemListContainer