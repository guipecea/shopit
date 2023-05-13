import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Item from "../Item/Item";

const ItemList = ({products}) => {

    return(
        <div>        
            <Row xs={1} md={2} className="g-4">
                {/* Aca hacemos uso de la funcion map, para que por cada producto se devuelva un objeto del component card */}
                {/* TODO Iterar sobre el objeto map devuelto y agregar una seccion debajo col para cada elemento */}
                {products.map(prod => <Item key={prod.id} {...prod}/>)}
                <Col>
                </Col>
                
            </Row>            
        </div>
    )

}

export default ItemList