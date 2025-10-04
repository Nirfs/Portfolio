import { Link } from 'react-router-dom'
import '../styles/card.scss'

export function Card({ navLink, src, alt, name }) {
    return (
        <Link to={navLink}>
            <article 
                className="work_card_container" 
                style={{ backgroundImage: `url(${src})` }}
                title={alt}
            >
                <h3>{name}</h3> 
            </article>
        </Link>
    )
}