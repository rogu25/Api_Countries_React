import { Routes, Route } from "react-router";
import './App.css';

import Principal from "./page/Principal.js";
import Home from "./page/Home.js";
import DetalleCountrie from "./page/DetalleCountrie.js";
import FormActividad from "./page/FormActividad.js";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Principal />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/detalle/:idCountrie' element={<DetalleCountrie />} />
        <Route exact path='/formulario/:id' element={<FormActividad />} />
      </Routes>
    </div>
  );
}

export default App;
