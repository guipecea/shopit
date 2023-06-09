import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"

const Cart = () => {

    const {cart , clearCart, totalQuantity, total} = useContext(CartContext)

    if (totalQuantity() === 0){
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/'>
                    <Button style={{marginTop: '0.5vw'}} variant="secondary">Productos</Button>
                </Link>
            </div>
        )
    }

    return (
        <div>
            {/* { cart.map (p => <CartItem key={p.id} {...p}/>) } */}
            <h3>Total: ${ total() }</h3>
            <ButtonGroup vertical>
                <Button variant="secondary" onClick={() => clearCart()}>Limpiar Carrito</Button>
                <Link to='/checkout'>
                    <Button style={{marginTop: '0.5vw'}} variant="secondary">Checkout</Button>
                </Link>
            </ButtonGroup>
        </div>
    )


}

export default Cart