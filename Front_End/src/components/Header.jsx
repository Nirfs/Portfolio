//Librairie
import { NavLink } from "react-router-dom"
import { HashLink } from 'react-router-hash-link';
//composant
import { Button } from "./Button"
//styles
import '../styles/header.scss'
export function Header(){
    return(
        <header>
            <h1>logo</h1>
            <nav>
                <NavLink to={'/'}>Acceuil</NavLink>
                <HashLink smooth to="/#travaux">Travaux</HashLink>
                <NavLink to={'/'}>Connexion</NavLink>
            </nav>
        </header>
    )
}