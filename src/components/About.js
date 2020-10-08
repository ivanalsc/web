import React from 'react'
import { Link } from 'react-router-dom'

export const About = () => {
    return (
        <div className='about'>
            <h1>Sobre Nosotros</h1>
            <p>Somos una empresa nativa digital por lo que entendemos a la perfección como
                funcionan los canales de comunicación digitales. Creemos en la importancia de generar 
                contenido de calidad y unir empresas, emprendimientos, profesionales con un público a su medida.
            </p>
            <Link className='contact' to='/contact'>
                ¡Contactanos!
            </Link>

            <img src='./img/about.svg' alt='' />
            
        </div>
    )
}
