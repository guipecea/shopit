import Image from 'react-bootstrap/Image'
import cartSvg from "bootstrap-icons/icons/cart.svg"

const CartWidget = () => {
    return (
        <div>
            <Image src={cartSvg} alt="cart-widget" roundedCircle={true}></Image>
            0
        </div>
    )
}

export default CartWidget