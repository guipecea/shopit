import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">ShopIt</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/news">News</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="/category/cellphones">Celulares</NavDropdown.Item>
              <NavDropdown.Item href="/category/notebooks">Notebooks</NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
            </NavDropdown>
            <Nav.Link href="/about">About us</Nav.Link>            
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