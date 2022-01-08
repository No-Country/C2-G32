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
        </>
    )

}

export default Navbar;