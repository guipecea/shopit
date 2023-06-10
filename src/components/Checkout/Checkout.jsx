import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { getDocs , collection, query, where, writeBatch, Timestamp, documentId, addDoc } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"
import CheckoutForm from "../CheckoutForm/CheckoutForm"

const Checkout = () => {
    const [ orderId, setOrderId ] = useState('')

    const { cart, total, clearCart } = useContext(CartContext)

    const createOrder = async ({name, phone, email}) => {
    
        try{
            const orderObject = {
                buyer: {
                    name , phone , email
                },
                items: cart,
                total: total(),
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            const prodsRef = collection(db, 'product')
        
            const productsStatusToCheckoutInFireBase = await getDocs (query(prodsRef, where (documentId(), 'in', ids)))

            const { docs } = productsStatusToCheckoutInFireBase

            docs.forEach( doc => {
                const docData = doc.data()
                const dbDocStock = docData.stock

                const productInCart = cart.find (prod => prod.id === doc.id)
                const prodQuantity = productInCart?.quantity

                if (dbDocStock >= prodQuantity) {
                    batch.update(doc.ref, { stock: dbDocStock - prodQuantity })
                } else {
                    outOfStock.push( {id: doc.id, ...docData} )
                }
            })

            if ( outOfStock.length === 0 ) {
                await batch.commit()

                const orderRef = collection (db, 'order')

                const orderAdded = await addDoc (orderRef, orderObject)

                setOrderId(orderAdded.id)

                clearCart()
            } else {
                console.log("Hay al menos un producto fuera de stock")
            }

        }
        catch (error) {
            console.log(error)
        }
    }

    if (orderId) {
        return <h1>El id de su orden generada es: { orderId }</h1>
    }

    return (
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder}/>
        </div>
    )

}

export default Checkout