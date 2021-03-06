import { NavLink, useNavigate } from "react-router-dom";
import { Navbar, Container, NavDropdown, Nav, Button } from "react-bootstrap";

const NavbarComponent = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top" className="mb-3">
        <Container>
          <Navbar.Brand className="logo" href="#home">
            Recetas faciles!
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={handleClick}>Home</Nav.Link>
              <NavDropdown title="Recetas" id="basic-nav-dropdown">
                <NavDropdown.Item href="/veganas">
                  Recetas Veganas
                </NavDropdown.Item>
                <NavDropdown.Item href="/pasta">Recetas Pasta</NavDropdown.Item>
                <NavDropdown.Item href="/carne">
                  Recetas con Carne
                </NavDropdown.Item>
                <NavDropdown.Item href="/gourmet">
                  Recetas Gourmet
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Contacto" id="basic-nav-dropdown">
                <NavDropdown.Item href="https://github.com/julianperna">
                  GitHub Julian Perna
                </NavDropdown.Item>
                <NavDropdown.Item href="https://github.com/MairaBerdun">
                  GitHub Maira Berdun
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  GitHub Robert Linares
                </NavDropdown.Item>
                <NavDropdown.Item href="https://github.com/SandovalErika">
                  GitHub Erika Sandoval
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#home">Recetas mas votadas</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Button variant="primary" size="sm" active className="mr-1">
              Iniciar sesion
            </Button>{" "}
            <Button variant="secondary" size="sm" active>
              <NavLink to="/form" className="link">
                Registrarse
              </NavLink>
            </Button>
            {/* <Navbar.Text>
                    Signed in as: <a href="#login">Mark Otto</a>
                </Navbar.Text> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
