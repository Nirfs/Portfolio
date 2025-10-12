// Librairies
import { easeIn, motion } from "motion/react"

// Assets
import mail from '../../assets/plane.svg'
import linkedin from '../../assets/linkedin.svg'
import gitHub from '../../assets/github.svg'

// Styles
import '../../styles/socialMedia.scss'

/**
 * Composant affichant les icônes de réseaux sociaux
 * avec animation au survol.
 *
 * @component
 * @returns {JSX.Element} Composant SocialMedia.
 */

export function SocialMedia() {
  const socialLinks = [
    { src: mail, alt: 'Envoyer un email', link: 'mailto:pieplu.kevin@gmail.com' },
    { src: linkedin, alt: 'Profil LinkedIn', link: 'https://www.linkedin.com/in/kevin-pieplu/' },
    { src: gitHub, alt: 'Profil GitHub', link: 'https://github.com/Nirfs?tab=repositories' }
  ]

  return (
    <div className="social-media">
      {socialLinks.map(({ src, alt, link }, i) => (
        <motion.div
          key={i}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{
            duration: 0.5,
            ease: easeIn,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
        >
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="social-media__icon"
          >
            <img src={src} alt={alt} loading="lazy" />
          </a>
        </motion.div>
      ))}
    </div>
  )
}
