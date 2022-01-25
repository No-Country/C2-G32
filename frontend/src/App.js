import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import RecipeScreen from "./components/RecipeScreen";
import "./App.css";
import Form from "./components/Form";
import RankScreen from "./components/RankScreen";
import NewRecipe from "./components/NewRecipe";


function App() {
  return (
    < >     
        <BrowserRouter><div>
        <Routes>
          <Route  path="/form" element={<Form />} />
          <Route  path="/Vegana" element={<RecipeScreen type="vegana"/>} />
          <Route  path="/Pasta" element={<RecipeScreen type="pasta"/>} />
          <Route  path="/Carnes" element={<RecipeScreen type="carnes"/>} />
          <Route  path="/Gourmet" element={<RecipeScreen type="gourmet"/>} />
          <Route  path="/Rank" element={<RankScreen type="rank"/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/addrecipe" element={<NewRecipe/>}/>
        </Routes>
        </div>
        </BrowserRouter>
        

    </>
  )
    
}

export default App;
