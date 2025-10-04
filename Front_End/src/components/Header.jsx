//Librairie
import { NavLink } from "react-router-dom"
import { HashLink } from 'react-router-hash-link';
//composant
import { ConnectModal } from "./ConnectModal";
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
                <HashLink smooth to="#travaux">Travaux</HashLink>
                <HashLink smooth to="#competences">Compétences</HashLink>
                <ConnectModal/>
            </nav>
        </header>
    )
}