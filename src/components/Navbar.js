// import { NavLink } from 'react-router-dom';
import {Navbar, Container, NavDropdown, Nav, Button} from 'react-bootstrap';


const NavbarComponent = () => {

    return (
        <>

            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand className="logo" href="#home">Recetas faciles!</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <NavDropdown title="Recetas" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Recetas Veganas</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Recetas Pasta</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Recetas con Carne</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Recetas Gourmet</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Contacto" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">GitHub Julian Perna</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">GitHub Maira Berdun</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">GitHub Robert Linares</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">GitHub Erika Sandoval</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#home">Recetas mas votadas</Nav.Link>
                </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                
                <Button variant="primary" size="sm" active>
                    Iniciar sesion
                </Button>{' '}
                <Button variant="secondary" size="sm" active>
                    Registrarse
                </Button>
                {/* <Navbar.Text>
                    Signed in as: <a href="#login">Mark Otto</a>
                </Navbar.Text> */}
                </Navbar.Collapse>
            </Container>
            </Navbar>
            
            
        </>
    )
            
}

export default NavbarComponent;