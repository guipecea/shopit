import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({id, name, img, price, stock, description}) => {

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
                <ItemCount initial={1} stock={5} onAdd={(quantity) => console.log("Cantidad agregada: ", quantity)}></ItemCount>
            </Card.Footer>
        </Card>
    )
}

export default ItemDetail;