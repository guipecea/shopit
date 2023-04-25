import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">ShopIt</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">News</Nav.Link>
            <Nav.Link href="#link">Products</Nav.Link>
            <Nav.Link href="#link">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
            Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
            Separated link
            </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">About us</Nav.Link>            
          </Nav>
        </Navbar.Collapse>

        <Nav className="justify-content-end">
        <Nav.Item>
          <CartWidget/>
        </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  )
}
export default NavBar