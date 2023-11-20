import React from 'react';

import "../css/Countries.css";

function CardCountry({ id, imagen, nombre, continente, poblacion }) {
  return (
    <div className='content_card_country'>
      <div className='content_bandera'>
        <img src={imagen} alt='Imagen not found' className='img_bandera' />
      </div>
      <div className='content_title'>
        <h3>{nombre}</h3>
        <h4>{continente.replace(/[^a-zA-Z0-9 ]/g, '')}</h4>
      </div>
      <div className='content_subtitle'>
        <h6>{`Poblacion: ${new Intl.NumberFormat('es-PE').format(poblacion)}`}</h6>
      </div>
    </div>
  )
}

export default CardCountry;