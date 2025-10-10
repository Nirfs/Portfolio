// Librairies
import { Link } from 'react-router-dom'

// Styles
import '../../styles/projectCard.scss'

export function ProjectCard({ navLink, src, alt, name }) {
    return (
        <Link to={navLink} className="project-card">
            <article className="project-card__content">  
                <img 
                    loading="eager"
                    src={src}
                    alt={alt}
                    className="project-card__image"
                />
                <h3 className="project-card__title">{name}</h3> 
            </article>
        </Link>
    )
}
