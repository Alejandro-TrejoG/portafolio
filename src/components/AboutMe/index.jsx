import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import "./AboutMe.css"


const AboutMe = () => {

    const [darkmode, setDarkmode] = React.useState(false)

    const darkmodeFunction = ()=>{

        const body = document.querySelector(".App")
        const aboutMe = document.querySelector(".aboutMe-content")
        const swiper = document.querySelector(".swiper-container")
        const headerContact = document.querySelector(".contact-container__header")
        const btnDarkmode = document.querySelector(".aboutMe-content__darkmodeBtn")
        if (!darkmode) {
            body.classList.add("body-darkmode")
            aboutMe.classList.add("aboutMe-darkmode")
            swiper.classList.add("swiper-darkmode")
            headerContact.classList.add("contact-container__header-darkmode")
            btnDarkmode.classList.add("darkmodeBtn-dark")
        }else{
            body.classList.remove("body-darkmode")
            aboutMe.classList.remove("aboutMe-darkmode")
            swiper.classList.remove("swiper-darkmode")
            headerContact.classList.remove("contact-container__header-darkmode")
            btnDarkmode.classList.remove("darkmodeBtn-dark")
        }
        setDarkmode(!darkmode)

    }

    return (
        <div
            className='aboutMe-content'
            id='about'
        >
            <div
            className='aboutMe-content__darkmodeBtn'
            onClick={darkmodeFunction}
            >
                {
                    darkmode?
                    <FontAwesomeIcon icon={faSun}/>
                    :
                    <FontAwesomeIcon icon={faMoon}/>
                }
            </div>
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