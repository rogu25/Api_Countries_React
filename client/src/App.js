import { Routes, Route } from "react-router";
import './App.css';

import Principal from "./page/Principal.js";
import Home from "./page/Home.js";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Principal/>} />
        <Route exact path='/home' element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
