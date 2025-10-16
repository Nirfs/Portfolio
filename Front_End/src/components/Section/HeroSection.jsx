// Librairies
import { motion, useAnimation } from "motion/react"
import { useEffect } from "react"

// Assets
import portrait from "../../assets/characterAnime.svg"

// Composants
import { ContactModal } from "./ContactModal"

// Styles
import "../../styles/heroSection.scss"

/**
 * Section d'accueil du site avec animation.
 * Contient le nom, la description et un portrait animé.
 *
 * @component
 * @returns {JSX.Element} Composant HeroSection.
 */

export function HeroSection() {
  const containerControls = useAnimation()
  const imageControls = useAnimation()
  const textControls = useAnimation()
  const buttonControls = useAnimation()

  useEffect(() => {
    async function runSequence() {
      await containerControls.start({ x: 0, opacity: 1 })
      await Promise.all([
        imageControls.start({ y: 0 }),
        textControls.start({ x: 0, opacity: 1 }),
        buttonControls.start({ y: 0, opacity: 1 }),
      ])
    }
    runSequence()
  }, [])

  return (
    <>
      <motion.div
        className="hero-section"
        initial={{ x: -250, opacity: 0 }}
        animate={containerControls}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="hero-section__text">
          <motion.h1
            initial={{ x: -250, opacity: 0 }}
            animate={textControls}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            KEVIN PIEPLU
          </motion.h1>

          <motion.h2
            initial={{ x: -250, opacity: 0 }}
            animate={textControls}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            Développeur front-end
          </motion.h2>

          <motion.p
            initial={{ x: -250, opacity: 0 }}
            animate={textControls}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
Hello ! Je m’appelle Kevin Pieplu et je suis développeur front-end avec une vraie sensibilité pour le design graphique. 
J’aime relier l’esthétique et la logique : créer des interfaces à la fois belles et efficaces, où le code sert vraiment l’utilisateur. 
Explorer, tester, trouver des solutions élégantes à des problèmes concrets et donner vie aux idées, c’est ce qui me motive chaque jour. 
Aujourd’hui, je continue à me perfectionner sur React et j’aspire progressivement à élargir mes compétences vers le full-stack, pour mieux comprendre et maîtriser toute la chaîne d’un produit numérique. 

          </motion.p>
        </div>

        <object
          role="img"
          aria-label='auto-portrait animé'
          className="hero-section__portrait"
          data={portrait}
          type="image/svg+xml"
          style={{ width: "clamp(250px, 30vw, 550px)" }}
        ></object>
      </motion.div>

      <ContactModal />
    </>
  )
}
