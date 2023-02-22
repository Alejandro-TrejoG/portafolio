import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faPhone } from '@fortawesome/free-solid-svg-icons'

import personalEmail from "../../images/personal_email.svg"

import "./Contact.css"

const Contact = () => {
    return (
        <div className='contact-container' id='contact'>
            <h2 className='contact-container__header'>
                ¡Contactame!
            </h2>

            {/* <form className='contact-container__form'>
                <input
                    type="text"
                    name="name"
                    id="form-name"
                    placeholder='Nombre'
                />
                <input
                    type="email"
                    name="name"
                    id="form-email"
                    placeholder='Correo electronico'
                />
                <textarea
                    className='form-message'
                    placeholder='Escribe aqui tu mensaje'
                >

                </textarea>

                <button type='button' className='form-btn'>Enviar mensaje</button>
            </form> */}
            <div className='contact-container__content'>
                <p>Si te interesa puedes contactarme  a traves de los siguientes medios:
                </p>
                <ul className='content__list'>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faEnvelope} className='list__icon' />
                        </span>
                        <span>
                            <a href="mailto:alejandro.trejog.15h@gmail.com">alejandro.trejog.15h@gmail.com</a>
                        </span>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faPhone} className='list__icon' />
                        </span>
                        <span>+52 7731853217</span>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/alejandro-trejo-godinez-bb6702219/">
                            <span>Ir a perfil de Linkedin</span>
                        </a>
                    </li>
                </ul>
            </div>
            <img src={personalEmail} alt="img email" className='contact-img__email' />
        </div>
    )
}

export { Contact }