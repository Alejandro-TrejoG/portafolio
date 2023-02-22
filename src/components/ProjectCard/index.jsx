import React from 'react'
import "./ProjectCard.css"

const ProjectCard = ({ infoCard }) => {
    return (
        <div
            className='card'
        >
            <img src={infoCard.src} alt="card__image" className='card__image' />
            <div className='card__text'>
                <p className='card__description'>
                    {infoCard.description}
                </p>
                {
                    infoCard.page ?
                        <div className='card__links'>
                            <a href={infoCard.page} className='card__page'>Ir a la pagina</a>
                            <a href={infoCard.link} className='card__link'>Ir al codigo</a>
                        </div>
                        :
                        <a href={infoCard.link} className='card__link'>Ir al codigo</a>

                }
            </div>
        </div>
    )
}

export { ProjectCard }