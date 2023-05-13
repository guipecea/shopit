import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({id, name, img, price, stock, description}) => {

    return(
        <Card style={{ width: '18rem' }} id={id}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                {/* Esto funciona pues Card asumo que acepta childrens, que serian los 2 elementos de abajo */}
                <p> Precio: {price}</p>
                <p> Disponibilidad: {stock}</p>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button variant="primary">Ver detalle</Button>
            </Card.Body>
        </Card>
    )


}

export default Item;