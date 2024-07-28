import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { AuthContext } from '../../context/auth-context'

import './NavLinks.css'
import Button from '../FormElements/Button'

const NavLinks = (props) => {

    const { isLoggedIn, logout } = useContext(AuthContext);

    return (
        <ul className="nav-links">
            <li>
                <NavLink to='/' >All Users</NavLink>
            </li>
            {isLoggedIn && <li>
                <NavLink to='/u1/places' >My Places</NavLink>
            </li>}
            {isLoggedIn && <li>
                <NavLink to='/places/new' >Add Place</NavLink>
            </li>}
            {!isLoggedIn && <li>
                <NavLink to='/auth' >Authenticate</NavLink>
            </li>}
            {isLoggedIn && <li>
                <Button onClick={logout} >
                    LOGOUT
                </Button>
            </li>}
        </ul>
    )
}

export default NavLinks