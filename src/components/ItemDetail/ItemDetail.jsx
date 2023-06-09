import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import Button from 'react-bootstrap/Button';

const ItemDetail = ({id, name, img, price, stock, description}) => {

    const [quantityAdded, setQuantityAdded] = useState(0);

    const { addItem } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        
        setQuantityAdded(quantity)

        const item = {id , name, price}

        addItem(item, quantity);
    }

    return(
        <Card style={{ width: '30rem' }} id={id}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                {/* Esto funciona pues Card asumo que acepta childrens, que serian los 2 elementos de abajo */}
                <p> Precio: {price}</p>
                <p> Disponibilidad: {stock}</p>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                { quantityAdded > 0 ? (
                        <Link to='/cart'>
                            <Button variant="secondary">Terminar Compra</Button>
                        </Link>
                    ) : (
                        <ItemCount initial={1} stock={5} onAdd={handleOnAdd}></ItemCount>
                    )
                }
            </Card.Footer>
        </Card>
    )
}

export default ItemDetail;