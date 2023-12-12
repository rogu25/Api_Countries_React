import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { get_name_countries } from "../redux/action";

import "../css/Navbar.css";

import logo_rc from "../img/logo.jpg";
import validation from "./Validador.js";

function Navbar() {

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [error, setError] = useState({name:''});
  const [activo, setActivo] = useState(true);

  const onclickFindCountries = () => {
    if(!error.name){
      dispatch(get_name_countries(name));
      setName('');
    } 
  }

  const onchangeInput = (e) => {
    setActivo(false)
    setName(e.target.value);
    setError(validation({ ...error, name: e.target.value }));
  }

  return (
    <div className='container_navbar'>
      <NavLink to={"/"}>
        <div className='content_logo'>
          <img src={logo_rc} className='img_logo' alt='Imagen not found' />
        </div>
      </NavLink>
      <div className='content_input'>
        <div className='content_input_buscar'>
          <input name='name' value={name} type='text' className='input_buscar' placeholder='nombre país' onChange={onchangeInput} />
          <span className={error.name?'error':"error_a"}>{error.name}</span>
        </div>
        <button className='btn_buscar' onClick={onclickFindCountries} disabled={activo}>Buscar</button>
      </div>
      <div className='content_btn_form'>
        <button className='btn_crear_actividad'>Crear Actividad Turística</button>
      </div>
    </div>
  )
}

export default Navbar;