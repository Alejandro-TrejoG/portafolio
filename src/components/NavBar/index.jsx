import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faFolder, faAddressBook } from "@fortawesome/free-regular-svg-icons"
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
import "./NavBar.css"

const NavBar = () => {
    return (
        <nav className='nav'>
            <a
                className='nav__link'
                href='#about'>
                <FontAwesomeIcon icon={faUser} />
            </a>
            <a
                className='nav__link'
                href='#projects'>
                <FontAwesomeIcon icon={faFolder} />
            </a>
            <a
                className='nav__link'
                href='#technologies'>
                <FontAwesomeIcon icon={faScrewdriverWrench} />
            </a>
            <a
                className='nav__link'
                href='#contact'>
                <FontAwesomeIcon icon={faAddressBook} />
            </a>
        </nav>
    )
}

export { NavBar }