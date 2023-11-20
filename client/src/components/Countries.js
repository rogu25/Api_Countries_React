import React from 'react';
import { useSelector } from "react-redux";

import CardCountry from './CardCountry';

import "../css/Countries.css";

function Countries() {

    const countries = useSelector((state) => state.countries)


  return (
    <div  className='content_countries'>
        {
          countries.length && countries.map((c) => {
            return <CardCountry key={c.id} id={c.id} imagen={c.imagen} nombre={c.name} continente={c.continente} poblacion={c.poblacion}/>
          })
        }
    </div>
  )
}

export default Countries;