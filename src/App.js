import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import Form from "./components/Form";
import Category from "./components/Category";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/veganas" element={<Category />} />
          <Route path="/pasta" element={<Category />} />
          <Route path="/carne" element={<Category />} />
          <Route path="/gourmet" element={<Category />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
