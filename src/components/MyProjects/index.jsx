import React from 'react'
import "./MyProjects.css"
import { Fade } from 'react-awesome-reveal'

import { ProjectCard } from '../ProjectCard'

const infoArray = [
    {
        src: "https://i.ibb.co/MDRDrww/SPA-react.png",
        description: "SPA desarrollada con React para el Frontend, NodeJS y Express para el Backend y Firebase para la persistencia de datos",
        link: "https://github.com/Alejandro-TrejoG/venta-audifonos-react"
    },
    {
        src: "https://i.ibb.co/sw0mR0v/exchange-vue.png",
        description: "SPA desarrollada con Vue y Vue Router, tomando los datos de una API publica de Criptomonedas. Desplegada en Netlify.",
        link: "https://github.com/Alejandro-TrejoG/platzi-exchange",
        page: "https://61fae611fa3051154498c0ab--exchange-coin-atg.netlify.app/"
    },
    {
        src: "https://i.ibb.co/804brYd/portafolio.png",
        description: "Construido con React, implementando dependencias para ciertas finalidades (swiper, react-awesome-reveal, etc.), desplegado en AWS Amplify.",
        link: "https://github.com/Alejandro-TrejoG/portafolio"
    }
]

const MyProjects = () => {
    return (
        <div className='projects-content' id='projects'>
            <h2 className='projects-content__header'>
                Mis Proyectos
            </h2>
            <div
                className='projects-content__cards'
            >
                {
                    infoArray.map((info) =>
                        <Fade direction='left' duration={1000} fraction={0} triggerOnce={true} cascade={true}>
                            <ProjectCard infoCard={info} />
                        </Fade>
                    )
                }
            </div>
            <p className='projects-content__github'>
                Para más proyectos y codigos fuentes de estos mismos, <a href='https://github.com/Alejandro-TrejoG'>mira mi perfil de github</a>.
            </p>
        </div>
    )
}

export { MyProjects }