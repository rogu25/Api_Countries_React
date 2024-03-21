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
  const [error, setError] = useState({ name: '' });

  const onclickFindCountries = () => {
    if (error.name !== '' && name.length) {
      dispatch(get_name_countries(name));
      setName('');
      return
    }
    setError(validation({ ...error, name:''}));
  }

  const onchangeInput = (e) => {
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
          <span className={error.name ? 'error' : "error_a"}>{error.name}</span>
        </div>
        <button className='btn_buscar' onClick={onclickFindCountries}>Buscar</button>
      </div>
      <div className='content_btn_form'>
        <NavLink to={`/formulario/${false}`}>
          <button className='btn_crear_actividad'>Crear Actividad Turística</button>
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar;