import { CartContext } from "../../context/CartContext"
import { useContext } from "react"
import { Button, Table } from "react-bootstrap";

const CartItem = () => {

    const { cart, removeItem } = useContext(CartContext)

    return (
        <>
            <Table responsive>
                <thead>
                    <tr>
                        <th>#</th>                    
                        <th key='1'>Nombre</th>
                        <th key='2'>Cantidad</th>
                        <th key='3'>Precio p/u</th>
                        <th key='4'>Subtotal</th>
                        <th key='5'>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((prod, index) => (
                        <tr key={prod.name}>
                            <td>{index}</td>
                            <td>{prod.name}</td>
                            <td>{prod.quantity}</td>
                            <td>{prod.price}</td>
                            <td>{prod.price*prod.quantity}</td>
                            <td>
                                <Button variant="secondary" onClick={() => removeItem(prod.id)}>X</Button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </Table>        
        </>
    )
}
export default CartItem;