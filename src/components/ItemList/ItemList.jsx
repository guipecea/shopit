import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Item from "../Item/Item";

const ItemList = ({products}) => {

    return(
        <div>        
            <Row xs={1} md={3} className="g-4">
                {/* Aca hacemos uso de la funcion map, para que por cada producto se devuelva un objeto del component Item en el tag Col */}
                {products.map((prod) => (
                    <Col key={prod.id}>
                        <Item key={prod.id} {...prod}/>
                    </Col>
                ))}
            </Row>
        </div>
    )

}

export default ItemList