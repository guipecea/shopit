import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useState } from "react"

//Item Count recive un stock, un valor inicial y una funcion a ejecutar de callback onAdd
const ItemCount = ({stock, initial, onAdd}) => {
    
    //definimos un estado y seteamos el valor inicial del estado como initial
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity < stock) {
            //utilizamos la functional version of setState pues el valor nuevo dependera del anterior.
                //NOT SO GOOD --> setQuantity(quantity+1);
            setQuantity(quantity => quantity +1);
        }
    }

    const decrement = () => {
        if (quantity > initial){
            setQuantity(quantity => quantity -1);
        }
    }

    return (
        <div>
            <ButtonGroup aria-label="Basic example">
                <Button variant="secondary" onClick={() => decrement()}>-</Button>
                    <h4>{quantity}</h4>
                <Button variant="secondary" onClick={() => increment()}>+</Button>
            </ButtonGroup>
            <ButtonGroup aria-label="Basic example">
                <Button variant="secondary" disabled={!stock} onClick={() => onAdd(quantity)}>Agregar al carrito</Button>
            </ButtonGroup>
        </div>                
    )
}
export default ItemCount