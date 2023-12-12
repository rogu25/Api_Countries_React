import React from 'react';

function CardDetalleCountrie({ country }) {
    console.log("estoy en el card detalle: ", country)
    return (
        <div className='card_detalle_countrie'>
            <div className='encabezado'>
                <div className='content_img'>
                <img src={country.imagen} alt='Imagen not found' className='img_pais'/>
                </div>
                <h2>{country.name}</h2>
            </div>
            
            <div className='content_description'>
                <h4>Capital: {country.capital}</h4>    
            </div>
        </div>
    )
}

export default CardDetalleCountrie;