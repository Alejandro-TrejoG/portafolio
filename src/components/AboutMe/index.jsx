import React from 'react'
import "./AboutMe.css"


const AboutMe = () => {

    return (
        <div
            className='aboutMe-content'
            id='about'
        >
            <div className='aboutMe-content__header'>
                <h1
                    className='aboutMe-content__name'
                >
                    Alejandro Trejo Godinez
                </h1>
                <h2
                    className='aboutMe-content__grade'
                >
                    Ing. en Sistemas Computacionales
                </h2>
            </div>
            <p
                className='aboutMe-content__description'
            >
                ¡Hola! Espero que lo que veas sea de tu agrado. Desarrollo y codifico soluciones para solventar las problematicas, con gusto hacia el trabajo en equipo. Siempre comprometido y responsable.
            </p>
        </div>
    )
}

export { AboutMe }