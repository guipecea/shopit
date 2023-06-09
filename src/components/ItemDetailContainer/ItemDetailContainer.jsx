import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getDoc, doc } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"

import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    
    //estado encargado de almacenar el producto actual seleccionado
    const [product, setProduct] = useState([]);

    const { id } = useParams();

    //agregamos un control de efecto para cargar el producto seleccionado una unica vez, cada vez que se monta nuevamente el component, y no por cualquier efecto secundario.
    useEffect( () => {
        const docRef = doc(db, 'product', id)

        getDoc(docRef)
        .then(response => {
            const data = response.data()
            const prod = { id: response.id, ...data }
            setProduct(prod)
        })
        .catch(error => {
            console.log(error)
        })        
    }, [id])

    return(
        <ItemDetail {...product}/>
    )
}

export default ItemDetailContainer;