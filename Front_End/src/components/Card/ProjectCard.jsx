// Librairies
import { Link } from 'react-router-dom'
// Styles
import '../../styles/projectCard.scss'


export function ProjectCard({ token, navLink, src, alt, name, handleDelete }) {
  return (
    <div className="project-card-wrapper">
      {token && <button className='delete_button' type='button' onClick={handleDelete}>🗑️</button>}
      <Link to={navLink} className="project-card">
        <article className="project-card__content"> 
          <img src={src} alt={alt} className="project-card__image" />
          <h3 className="project-card__title">{name}</h3>
        </article>
      </Link>
    </div>
  )
}