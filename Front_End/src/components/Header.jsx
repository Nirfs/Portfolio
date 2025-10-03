//Librairie
import { NavLink } from "react-router-dom"
import { HashLink } from 'react-router-hash-link';
//composant
import { Button } from "./Button"
//assets
import logo from '../assets/logo_animation.gif'
//styles
import '../styles/header.scss'

export function Header(){
    return(
        <header>
            <img src={logo} alt='logo animée'/>
            <nav>
                <NavLink to={'/'}>Acceuil</NavLink>
                <HashLink smooth to="/#travaux">Travaux</HashLink>
                <NavLink to={'/'}>Connexion</NavLink>
            </nav>
        </header>
    )
}