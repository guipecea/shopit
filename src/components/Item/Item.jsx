import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({id, name, img, price, stock}) => {

    return(
        <Card id={id}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                {/* Esto funciona pues Card asumo que acepta childrens, que serian los 2 elementos de abajo */}
                <p> Precio: {price}</p>
                <p> Disponibilidad: {stock}</p>
                {/* <Button variant="primary">Ver detalle</Button> */}
            </Card.Body>
            <Card.Footer>
                <Link to={`/item/${id}`}>Ver detalle</Link>
            </Card.Footer>
        </Card>
    )
}

export default Item;