import React from 'react';
import { NavLink } from "react-router-dom";

function CardDetalleCountrie({ country }) {

    const { id, name, continente, capital, subregion, area, poblacion, imagen, Activities } = country;

    return country && (
        <React.Fragment>
            <div className='detalle_countrie'>
                <div className='card_detalle_countrie'>
                    <div className='content_encabezado'>
                        <div className='contenedor_imagen'>
                            <div className='content_img'>
                                <img src={imagen} alt='Imagen not found' className='img_pais' />
                            </div>
                        </div>
                        <h2>{name}</h2>
                        <h4>Código: {id}</h4>
                        <h4>Continente: {continente && continente.replace(/[^a-zA-Z0-9 ]/g, '')}</h4>
                        <h4>Capital: {capital && capital.replace(/[^a-zA-Z0-9 ]/g, '')}</h4>
                        <h4>Sub-Región: {subregion}</h4>
                        <h4>Área: {new Intl.NumberFormat('es-PE').format(area)} Km2</h4>
                        <h4>Población: {new Intl.NumberFormat('es-PE').format(poblacion)} Habitantes</h4>
                    </div>

                    <div className='content_activities' id='top'>
                        <h3 className='t_activities'>Actividades</h3>
                        {
                            Activities && Activities.map((a) => {
                                return <React.Fragment key={a.id}>
                                    <div className='description_activities'>
                                        <h4>{a.name}</h4>
                                        <h5>Dificultad: {a.dificultad}</h5>
                                        <div className='rango'>
                                            <span>1</span><input type='range' min={1} max={5} value={a.dificultad} disabled={true} step={1} /><span>5</span>
                                        </div>
                                        <h5>Duracion: {a.duracion} h</h5>
                                        <h5>Temporada: {a.temporada}</h5>
                                    </div>
                                </React.Fragment>
                            })
                        }

                    </div>
                </div>
                <div className='content_botones'>
                    <NavLink to={"/home"}>
                    <button className='btn_detalle'>Regresar</button>
                    </NavLink>
                    <NavLink to={`/formulario/${id}`}>
                    <button className='btn_detalle'>Agregar Actividad</button>
                    </NavLink>
                </div>
            </div>
        </React.Fragment>
    )

}

export default CardDetalleCountrie;