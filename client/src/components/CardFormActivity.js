import React, { useEffect, useState } from 'react';

import "../css/FormActivity.css";
import { NavLink, useParams } from 'react-router-dom';

// import { FaSearch } from "react-icons/fa";

function CardFormActivity({ paises }) {

  const { idPais } = useParams();

  const [pais, setPais] = useState([]);
  const [listaPaises, setListaPaises] = useState([]);
  const [inputs, setInputs] = useState({
    name: "",
    dificultad:5,
    duracion:"",
    temporada:"",
    countries:[]
  })

  const onChangeInput = (e) => {
    if (!e.target.value.length) return setPais([])
    const result = paises.filter((p) => {
      if (p.name.toLowerCase().includes(e.target.value)) {
        return {
          id: p.id,
          name: p.name
        }
      }
      return null
    });
    setPais(result)
  };

  const onClickListaPaises = (e) => {

    const repetido = listaPaises.find((f) => f.name === e.target.value);

    const agregarPais = paises.filter((p) => p.name === e.target.value);

    const codigoCountries = agregarPais.map((c) => c.id);
    
    if (repetido) return

    setListaPaises([...listaPaises, ...agregarPais]);
    setInputs((prev) => ({...prev, countries: [...prev.countries, ...codigoCountries] }));

  };

  const onchangeInputs = (ev) => {
    setInputs((prev) => ({...prev, [ev.target.name] : ev.target.value}));
  };

  const onchangeSelect = (ev) => {
    setInputs((prev) => ({...prev, [ev.target.options[ev.target.selectedIndex].id] : ev.target.value}));
  };

  const onclik_new_activity = (ev) => {

    ev.preventDefault();
    console.log("para enviar inputs: ", inputs)
  }

  useEffect(() => {
    if(idPais !== 'false') setInputs((prev) => ({...prev, countries: [idPais]}));
  }, [idPais]);

  return (
    <div className='content_form'>
      <h2>Formulario de creación de Actividades</h2>
      <div className='formulario'>
        <div className='descripcion'>
          <form className='form_description' method='post' onSubmit={onclik_new_activity}>
            <label>Nombre: </label>
            <input name='name' type='text' onChange={onchangeInputs}/>
            <label>Dificultad: <span>{inputs.dificultad}</span></label>
            <input name='dificultad' type='range' min={1} max={5} step={1} onChange={onchangeInputs}/>
            <label>Duracion: </label>
            <input name='duracion' type='number' className='numero' onChange={onchangeInputs}/>
            <label>Temporada: </label>
            <select onChange={onchangeSelect}>
              <option >Elija una estación del año</option>
              <option id='temporada' value={'primavera'}>Primavera</option>
              <option id='temporada' value={'verano'}>Verano</option>
              <option id='temporada' value={'otono'}>Otoño</option>
              <option id='temporada' value={'invierno'}>Invierno</option>
            </select>
            <div className='content_btn_form'>
              <NavLink to={"/home"}>
                <button type='button'>Regresar</button>
              </NavLink>
              <button type='submit'>Grabar</button>
              <button type='button'>Limpiar</button>
            </div>
          </form>

        </div>
        <div className='content_lista_paises'>
          <div className='content_buscar'>
            <input type='text' onChange={onChangeInput} />
          </div>
          <div className='content_select'>

            <select className='select_pais' onChange={onClickListaPaises}>
              <option>seleccionar paises</option>
              {
                pais.length && pais.map((p) => {
                  return (
                    <option key={p.id}>{p.name}</option>
                  )
                })
              }
            </select>

          </div>
          <div className={listaPaises.length ? 'list_pais' : 'visible'}>
            <ul>
              {
                listaPaises.length && listaPaises.map((l, i) => {
                  return (
                    <li key={i}>{l.name}</li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CardFormActivity;