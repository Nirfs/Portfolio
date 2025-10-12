// Librairies
import { NavLink, useLocation } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import { motion } from "motion/react"

// Composants
import { ConnectModal } from "../Login_signup/ConnectModal"
import { useScreenWidth } from "../../context/ScreenWidthProvider"

// Assets
import logoStatic from "../../assets/logo.svg"

// Styles
import "../../styles/header.scss"

/**
 * Wrapper Motion pour les animations hover avec scaling.
 *
 * @param {Object} props
 * @param {JSX.Element} props.children - Contenu à animer.
 * @returns {JSX.Element}
 */
const MotionWrapper = ({ children }) => (
  <motion.div
    whileHover={{ scale: 1.2 }}
    transition={{
      duration: 0.4,
      scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
    }}
  >
    {children}
  </motion.div>
)

/**
 * Composant Header affichant le logo, la navigation et le modal de connexion.
 *
 * @component
 * @returns {JSX.Element} Composant Header.
 */

export function Header() {
  const screenWidth = useScreenWidth()
  const isMobile = screenWidth < 1025
  const location = useLocation()

  return (
    <header className="site-header">
      <MotionWrapper>
        <img className="site-header__logo" src={logoStatic} alt="Logo animée" />
      </MotionWrapper>

      <nav className="site-header__nav">
        <MotionWrapper>
          <NavLink to="/" className="site-header__link">
            Accueil
          </NavLink>
        </MotionWrapper>

        {!isMobile && location.pathname === "/" && (
          <>
            <MotionWrapper>
              <HashLink smooth to="#travaux" className="site-header__link">
                Travaux
              </HashLink>
            </MotionWrapper>
            <MotionWrapper>
              <HashLink smooth to="#competences" className="site-header__link">
                Compétences
              </HashLink>
            </MotionWrapper>
          </>
        )}

        <MotionWrapper>
          <ConnectModal />
        </MotionWrapper>
      </nav>
    </header>
  )
}
