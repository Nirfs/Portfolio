//Librairie
import { NavLink, useLocation  } from "react-router-dom"
import { useEffect, useState } from "react";
import { HashLink } from 'react-router-hash-link';
//composant
import { ConnectModal } from "../Login_signup/ConnectModal";
import { useScreenWidth } from '../../context/ScreenWidthProvider'
//assets
import logo from '../../assets/logo_animation.gif'
import logoStatick from '../../assets/logo.webp'
//styles
import '../../styles/header.scss'




export function Header(){
    const screenWidth = useScreenWidth()
    const isMobile = screenWidth < 1025

    const location = useLocation()
    const [gifEnd, setGifEnd] = useState(false)

    console.log(screenWidth)

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
                {!isMobile && location.pathname === "/" && (
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