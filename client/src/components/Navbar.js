import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { get_name_countries } from "../redux/action";

import "../css/Navbar.css";

import logo_rc from "../img/logo.jpg";

function Navbar() {

  const find_countries = useSelector((state) => state.find_countries);
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const onclickFindCountries = () => {
    dispatch(get_name_countries(name))
  }

  const onchangeInput = (e) => {
    setName(e.target.value)
  }

  return (
    <div className='container_navbar'>
      <NavLink to={"/"}>
        <div className='content_logo'>
          <img src={logo_rc} className='img_logo' alt='Imagen not found' />
        </div>
      </NavLink>
      <div className='content_input'>
        <input name='name' value={name} type='text' className='input_buscar' placeholder='nombre país' onChange={onchangeInput} />
        <button className='btn_buscar' onClick={onclickFindCountries}>Buscar</button>
      </div>
      <div className='content_btn_form'>
        <button className='btn_crear_actividad'>Crear Actividad Turística</button>
      </div>
    </div>
  )
}

export default Navbar;