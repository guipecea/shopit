import { Link, NavLink } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import Image from 'react-bootstrap/Image'
import cartSvg from "bootstrap-icons/icons/cart.svg"

const CartWidget = () => {
    
    const { totalQuantity } = useContext(CartContext)

    return (
        <NavLink className="navbar-brand" to='/cart' style={{ display: totalQuantity() > 0 ? 'block' : 'none' }}>
            <Image src={cartSvg} alt="cart-widget" roundedCircle={true}></Image>
            { totalQuantity() }
        </NavLink>
    )
}

export default CartWidget