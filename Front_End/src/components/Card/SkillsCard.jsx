// Styles
import "../../styles/skillCard.scss"

/**
 * Carte de compétence affichant un titre, une description, des technologies associées et une image.
 *
 * @component
 * @param {Object} props
 * @param {string} [props.className] - Classe CSS supplémentaire pour la carte.
 * @param {string} props.title - Titre de la compétence.
 * @param {string} props.text - Description de la compétence.
 * @param {Array<{src: string, alt: string}>} [props.sources] - Liste des sources/technologies associées avec leur image et alt.
 * @param {string} props.image_src - URL de l'image principale de la carte.
 * @param {string} props.alt - Texte alternatif de l'image principale.
 * @returns {JSX.Element} Composant SkillCard.
 */

export function SkillCard({ className, title, text, sources, image_src, alt }) {
  return (
    <div className={`skill-card ${className ?? ""}`}>
      <div className="skill-card__content">
        <h3 className="skill-card__title">{title}</h3>
        <p className="skill-card__desc">{text}</p>

        <div className="skill-card__techs">
          {Array.isArray(sources) &&
            sources.map((item, i) => (
              <div key={i} className="skill-card__tech">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="skill-card__tech-img"
                />
              </div>
            ))}
        </div>
      </div>

      <img
        className="skill-card__picto"
        src={image_src}
        alt={alt}
        loading="lazy"
      />
    </div>
  )
}
