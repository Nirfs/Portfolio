
// Librairies
import { motion } from "framer-motion"

// Styles
import "../../styles/buttonShake.scss"

/**
 * Bouton animé avec un effet de "shake" périodique.
 *
 * @component
 * @param {Object} props
 * @param {string} [props.text] - Texte affiché dans le bouton.
 * @param {Function} props.onClick - Fonction appelée au clic.
 * @param {string} [props.ariaLabel] - Label d’accessibilité (par défaut = texte du bouton).
 * @returns {JSX.Element} Bouton animé Framer Motion.
 */

export function ButtonShake({ text, onClick, ariaLabel }) {
  return (
    <motion.div
        animate={{
          rotate: [0, -2, 2, -2, 0],
        }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 3,
        }}
    >

        <button
          type="button"
          onClick={onClick}
          className="btn-shake input"
          aria-label={ariaLabel ?? text}      
        >
          {text}
        </button>
    </motion.div>
  )
}
