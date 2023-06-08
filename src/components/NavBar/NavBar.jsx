import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <NavLink className="navbar-brand" to="/">ShopIt</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" aria-current="page" to="/news">News</NavLink>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavLink className="dropdown-item" to="/category/cellphones">Celulares</NavLink>
              <NavLink className="dropdown-item" to="/category/notebooks">Notebooks</NavLink>
            </NavDropdown>
            <NavLink className="nav-link" aria-current="page" to="/about">About Us</NavLink>
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