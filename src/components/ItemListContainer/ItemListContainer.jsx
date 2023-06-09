import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getDocs , collection, query, where } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"

import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({greeting}) => {

    //hook estado encargado de almacenar los productos a mostrar en el container list
    const [products, setProducts] = useState([]);

    //hook params
    const { id } = useParams();

    useEffect( () => {   
        const asyncFunc = id ? query(collection(db,'product'), where ('category', '==', id)) : collection(db, 'product')

        getDocs(asyncFunc)
            .then(response => {
                const prods = response.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProducts(prods)
            })
            .catch(error => {
                console.log("Ocurrio un error al obtener los productos " + error)
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