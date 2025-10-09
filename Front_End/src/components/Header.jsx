//Librairie
import { NavLink, useLocation  } from "react-router-dom"
import { useEffect, useState } from "react";
import { HashLink } from 'react-router-hash-link';
//composant
import { ConnectModal } from "./ConnectModal";
//assets
import logo from '../assets/logo_animation.gif'
import logoStatick from '../assets/logo.webp'
//styles
import '../styles/header.scss'



export function Header(){
    const location = useLocation()
    const [gifEnd, setGifEnd] = useState(false)

    useEffect(() => {
        const img = new Image();
        img.src = logoStatick;
        
        const timer = setTimeout(() => {
            setGifEnd(true)
        }, 1800);
        return() => clearTimeout(timer)
    },[])

    return(
        <header>
            <img src={!gifEnd ? logo : logoStatick} alt='logo animée'/>
            <nav>
                <NavLink to={'/'}>Acceuil</NavLink>
                {location.pathname === "/" && (
                    <>
                        <HashLink smooth to="#travaux">Travaux</HashLink>
                        <HashLink smooth to="#competences">Compétences</HashLink> 
                    </>
                )}
                <ConnectModal/>
            </nav>
        </header>
    )
}