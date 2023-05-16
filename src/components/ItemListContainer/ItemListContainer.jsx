import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getProducts, getProductsByCategory } from "../asyncMock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({greeting}) => {

    //hook estado encargado de almacenar los productos a mostrar en el container list
    const [products, setProducts] = useState([]);

    //hook params
    const { id } = useParams();

    useEffect( () => {   
        const asyncFunc = id ? getProductsByCategory : getProducts
        
        asyncFunc(id)
            .then(response => {
                setProducts(response);
            })
            .catch(error => {
                console.error(error);
            })
    }, [id])

    return (
        <>
            <h3>{greeting}</h3>
            <ItemList products={products}></ItemList>
        </>
    )
}
export default ItemListContainer