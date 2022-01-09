// import { Container, Nav } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    return (
        <>

            <h1>Navbar</h1>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink activeClassName="active" className="navbar-brand" exact to="/">Inicio</NavLink>
                <NavLink activeClassName="active" className="navbar-brand" exact to="/">Recetas 1</NavLink>
                <NavLink activeClassName="active" className="navbar-brand" exact to="/">Recetas 2</NavLink>
                <NavLink activeClassName="active" className="navbar-brand" exact to="/">Recetas 3</NavLink>
            </nav>

            {/* <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">No country</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">Recetas 1</Nav.Link>
                    <Nav.Link href="#">Recetas 2</Nav.Link>
                    <Nav.Link href="#">Recetas 3</Nav.Link>
                   
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar> */}
        </>
    )
            
}

export default Navbar;