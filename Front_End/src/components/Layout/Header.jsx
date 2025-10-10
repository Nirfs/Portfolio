// Librairies
import { NavLink, useLocation } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
// Composants
import { ConnectModal } from "../Login_signup/ConnectModal";
import { useScreenWidth } from '../../context/ScreenWidthProvider';
// Assets
import logoStatic from '../../assets/logo.webp';

// Styles
import '../../styles/header.scss';

export function Header() {
  const screenWidth = useScreenWidth();
  const isMobile = screenWidth < 1025;
  const location = useLocation();

  return (
    <header className="site-header">
      <img 
        className="site-header__logo" 
        src={logoStatic} 
        alt="Logo animée" 
      />
      <nav className="site-header__nav">
        <NavLink to="/" className="site-header__link">Accueil</NavLink>
        {!isMobile && location.pathname === "/" && (
          <>
            <HashLink smooth to="#travaux" className="site-header__link">Travaux</HashLink>
            <HashLink smooth to="#competences" className="site-header__link">Compétences</HashLink>
          </>
        )}
        <ConnectModal />
      </nav>
    </header>
  );
}
