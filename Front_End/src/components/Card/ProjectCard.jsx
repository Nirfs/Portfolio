// Librairies
import { Link } from 'react-router-dom'

// Styles
import '../../styles/projectCard.scss'

/**
 * Carte de projet affichant une image, un titre et un lien de navigation.
 * Affiche un bouton de suppression si un token est présent.
 *
 * @component
 * @param {Object} props
 * @param {string} [props.token] - Jeton d'authentification.
 * @param {string} props.navLink - Lien de navigation vers la page du projet.
 * @param {string} props.src - Source de l'image du projet.
 * @param {string} props.alt - Texte alternatif de l'image.
 * @param {string} props.name - Nom ou titre du projet.
 * @param {Function} props.handleDelete - Fonction appelée lors du clic sur le bouton de suppression.
 * @returns {JSX.Element} Composant ProjectCard.
 */

export function ProjectCard({ token, navLink, src, alt, name, handleDelete }) {
  return (
    <div className="project-card-wrapper">
      {token && <button className='delete_button input' type='button' onClick={handleDelete}>🗑️</button>}
      <Link to={navLink} className="project-card">
        <article className="project-card__content"> 
          <img src={src} alt={alt} className="project-card__image" />
          <h3 className="project-card__title">{name}</h3>
        </article>
      </Link>
    </div>
  )
}