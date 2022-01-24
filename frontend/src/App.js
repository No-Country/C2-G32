import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from  'react-router-dom';
import  Home  from "./components/Home";
import './App.css';
import Form from './components/Form';


function App() {
  return (
    < >
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/form" element={<Form/>} />
           
          </Routes>
        </BrowserRouter>
      
    </>
  )
    
}

export default App;
