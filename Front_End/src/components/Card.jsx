import { Link } from 'react-router-dom'
import '../styles/card.scss'

export function Card({ navLink, src, alt, name }) {
    return (
        <Link to={navLink}>
            <article className="work_card_container">  
                <img loading="eager" src={src} alt={alt}></img>
                <h3>{name}</h3> 
            </article>
        </Link>
    )
}