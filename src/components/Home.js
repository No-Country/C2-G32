import Form from './Form';
import  NavbarComponent  from "./Navbar"
import CardRecipe from "./CardRecipe"
import Footer from "./Footer"

function Home () {
  return (
    <>
        
        
        <NavbarComponent className="navbar"/>
        <div className="container mb-5">
        <h3>Formulario de Registro</h3>
        <Form/>
        </div>
        <CardRecipe />
        <Footer/>
        
        
    </>
  )
}

export default Home;