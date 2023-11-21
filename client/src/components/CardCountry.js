import React from 'react';
import { NavLink } from "react-router-dom";

import "../css/Countries.css";

function CardCountry({ id, imagen, nombre, continente, poblacion }) {
  return (
    <div className='container_card_country'>
      <NavLink to={`/detalle/${id}`} className={"nav_link"}>
        <div className='content_bandera'>
          <img src={imagen} alt='Imagen not found' className='img_bandera' />
        </div>
        <div className='content_title'>
          <h3 className='title'>{nombre}</h3>
        </div>
      </NavLink>
      <div className='content_subtitle'>
        <div className='content_label'>
          <div className='lbl_subtitle'>
            <label>Continente:</label>
          </div>
          <div className='h5_subtitle'>
            <h5>{continente.replace(/[^a-zA-Z0-9 ]/g, '')}</h5>
          </div>
        </div>
        <div className='content_label'>
          <div className='lbl_subtitle'>
            <label className='lbl_subtitle'>Población:</label>
          </div>
          <div className='h5_subtitle'>
            <h5>{new Intl.NumberFormat('es-PE').format(poblacion)}</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardCountry;